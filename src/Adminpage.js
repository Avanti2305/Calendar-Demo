import { useEffect, useState } from "react";
import { db } from "./firebase";
import { getAuth } from "firebase/auth";
import {
  collection,
  getDoc,
  getDocs,
  deleteDoc,
  addDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Adminpage = () => {
  const [candidates, setCandidates] = useState([]);
  const [newCandidateName, setNewCandidateName] = useState("");
  const [newCandidateMobile, setNewCandidateMobile] = useState("");
  const [newCandidatePassword, setNewCandidatePassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingCandidateId, setEditingCandidateId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [editingMobile, setEditingMobile] = useState("");
  const [editingPassword, setEditingPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [viewCandidate, setViewCandidate] = useState(null);
  const [feedbackList, setFeedbackList] = useState([]);
  const [events, setEvents] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const verifyAdminStatus = async () => {
      const auth = getAuth();
      await auth.currentUser?.getIdToken(true);
      return auth.currentUser?.getIdTokenResult();
    };
    verifyAdminStatus();
  }, [navigate]);

  const fetchData = async () => {
    try {
      const candidateSnapshot = await getDocs(collection(db, "candidates"));
      const fetchedCandidates = candidateSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setCandidates(fetchedCandidates);

      const feedbackSnapshot = await getDocs(collection(db, "feedback"));
      const fetchedFeedback = feedbackSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFeedbackList(fetchedFeedback);
    } catch (error) {
      console.error("Error fetching data:", error);
      // alert("Failed to fetch data. Please try again.");
    }
  };

  const handleAddCandidate = async (e) => {
    e.preventDefault();

    if (!newCandidateName || !newCandidateMobile || !newCandidatePassword) {
      alert("Please fill all fields before adding a candidate.");
      return;
    }

    try {
      const candidateRef = await addDoc(collection(db, "candidates"), {
        name: newCandidateName,
        mobile: newCandidateMobile,
        password: newCandidatePassword,
      });

      const newCandidate = {
        id: candidateRef.id,
        name: newCandidateName,
        mobile: newCandidateMobile,
        password: newCandidatePassword,
      };
      setCandidates((prevCandidates) => [...prevCandidates, newCandidate]);

      setNewCandidateName("");
      setNewCandidateMobile("");
      setNewCandidatePassword("");
      setShowForm(false);

      alert("Candidate added successfully!");
    } catch (error) {
      console.error("Error adding candidate:", error);
      alert("Failed to add candidate: " + error.message);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "candidates", id));
      await fetchData(); // Changed from fetchCandidates to fetchData
    } catch (error) {
      console.error("Error deleting candidate:", error);
      alert("Failed to delete candidate. Please try again.");
    }
  };

  const handleEdit = async (id) => {
    const candidateToEdit = candidates.find((candidate) => candidate.id === id);
    setEditingCandidateId(id);
    setEditingName(candidateToEdit.name);
    setEditingMobile(candidateToEdit.mobile);
    setEditingPassword(candidateToEdit.password);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (editingName && editingMobile && editingPassword) {
      try {
        const docRef = doc(db, "candidates", editingCandidateId);
        await updateDoc(docRef, {
          name: editingName,
          mobile: editingMobile,
          password: editingPassword,
        });
        setEditingCandidateId(null);
        setEditingName("");
        setEditingMobile("");
        setEditingPassword("");
        await fetchData(); // Changed from fetchCandidates to fetchData
      } catch (error) {
        console.error("Error updating candidate:", error);
        alert("Failed to update candidate. Please try again.");
      }
    }
  };

  const handleView = (id) => {
    try {
      navigate(`/ViewCandidates/${id}`);
    } catch (error) {
      console.error("Error navigating to ViewCandidates:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setViewCandidate(null);
  };

  const handleLogout = () => {
    try {
      localStorage.clear();
      navigate("/SignIn");
    } catch (error) {
      console.error("Logout error:", error);
      localStorage.clear();
      window.location.href = "/SignIn";
    }
  };

  const fetchEvents = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "events"));

      const eventsList = await Promise.all(
        querySnapshot.docs.map(async (docSnap) => {
          const data = docSnap.data();
          let candidateName = "";

          if (data.candidateId) {
            try {
              const candidateRef = doc(db, "candidates", data.candidateId);
              const candidateSnap = await getDoc(candidateRef);
              if (candidateSnap.exists()) {
                candidateName = candidateSnap.data().name || "";
              }
            } catch (error) {
              console.error("Error fetching candidate:", error);
            }
          }

          // Parse the start and end times
          const startDateTime = data.start ? new Date(data.start) : null;
          const endDateTime = data.end ? new Date(data.end) : null;

          return {
            id: docSnap.id,
            candidateName,
            title: data.title || "No Title",
            date: data.date || new Date().toISOString(),
            start: startDateTime,
            end: endDateTime,
            status: data.status || "Pending",
            isApproved: data.isApproved || false,
          };
        })
      );

      setEvents(eventsList);
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleEventAction = async (eventId, action) => {
    try {
      const userStr = localStorage.getItem("user");
      if (!userStr) {
        throw new Error("Admin session not found");
      }

      const userData = JSON.parse(userStr);
      const eventRef = doc(db, "events", eventId);

      const updateData = {
        status: action === "approved" ? "Approved" : "Rejected",
        isApproved: action === "approved",
        updatedAt: new Date().toISOString(),
        updatedBy: userData.id,
        adminName: userData.name,
      };

      await updateDoc(eventRef, updateData);
      console.log(`Event ${action} successfully`);
      await fetchEvents();
      alert(
        `Event ${action === "approved" ? "approved" : "rejected"} successfully`
      );
    } catch (error) {
      console.error(`Error ${action} event:`, error);
      if (error.message.includes("permission-denied")) {
        alert("You don't have permission to perform this action");
        navigate("/SignIn");
      } else {
        alert(`Failed to ${action} event: ${error.message}`);
      }
    }
  };

  useEffect(() => {
    const initializeAdmin = async () => {
      try {
        await fetchData();
        await fetchEvents();
      } catch (error) {
        console.error("Initialization error:", error);
      }
    };

    initializeAdmin();
  }, []);

  return (
    <div className="container my-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary m-0">Candidate Management</h2>
        <button
          className="btn btn-danger"
          onClick={() => {
            handleLogout();
            navigate("/SignIn");
          }}
        >
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>
      </div>

      <div className="card shadow-sm">
        <div className="card-header bg-white py-3 d-flex justify-content-between align-items-center">
          <h5 className="m-0 font-weight-bold text-primary">Candidate List</h5>
          <button
            className="btn btn-success"
            onClick={() => setShowForm(!showForm)}
          >
            {showForm ? "Cancel" : "Add Candidate"}
          </button>
        </div>
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate) => {
                  const { name, mobile, password } = candidate;
                  return (
                    <tr key={candidate.id}>
                      <td>{name}</td>
                      <td>{mobile}</td>
                      <td className="text-center">
                        <button
                          className="btn btn-primary btn-sm me-2"
                          onClick={() => navigate(`/Viewpage/${candidate.id}`)}
                        >
                          <i className="bi bi-eye me-1"></i>View
                        </button>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => handleEdit(candidate.id)}
                        >
                          <i className="bi bi-pencil me-1"></i>Edit
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(candidate.id)}
                        >
                          <i className="bi bi-trash me-1"></i>Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {showForm && (
        <form onSubmit={handleAddCandidate} className="mb-4">
          <div className="form-group mb-3">
            <label htmlFor="name" className="form-label">
              Candidate Name
            </label>
            <input
              type="text"
              id="name"
              className="form-control"
              value={newCandidateName}
              onChange={(e) => setNewCandidateName(e.target.value)}
              placeholder="Enter candidate name"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="mobile" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              id="mobile"
              className="form-control"
              value={newCandidateMobile}
              onChange={(e) => setNewCandidateMobile(e.target.value)}
              placeholder="Enter mobile number"
              maxLength={10}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={newCandidatePassword}
              onChange={(e) => setNewCandidatePassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Add Candidate
          </button>
        </form>
      )}

      {editingCandidateId && (
        <form onSubmit={handleUpdate} className="mb-4">
          <h4>Edit Candidate</h4>
          <div className="form-group mb-3">
            <label htmlFor="editName" className="form-label">
              Candidate Name
            </label>
            <input
              type="text"
              id="editName"
              className="form-control"
              value={editingName}
              onChange={(e) => setEditingName(e.target.value)}
              placeholder="Enter candidate name"
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="editMobile" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              id="editMobile"
              className="form-control"
              value={editingMobile}
              onChange={(e) => setEditingMobile(e.target.value)}
              placeholder="Enter mobile number"
              maxLength={10}
            />
          </div>
          <div className="form-group mb-3">
            <label htmlFor="editPassword" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="editPassword"
              className="form-control"
              value={editingPassword}
              onChange={(e) => setEditingPassword(e.target.value)}
              placeholder="Enter password"
            />
          </div>
          <button className="btn btn-primary w-100" type="submit">
            Update Candidate
          </button>
        </form>
      )}

      <div className="card shadow-sm mt-4">
        <div className="card-header bg-light border-bottom">
          <h5 className="card-title mb-0 text-primary">Event Requests</h5>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover table-striped mb-0">
              <thead>
                <tr className="bg-light">
                  <th className="px-4">Candidate Name</th>
                  <th className="px-4">Event Title</th>
                  <th className="px-4">Date</th>
                  <th className="px-4">Time</th>
                  <th
                    className="px-4 text-center"
                    style={{ minWidth: "200px" }}
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {events.length === 0 ? (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      No events found
                    </td>
                  </tr>
                ) : (
                  events.map((event) => (
                    <tr key={event.id}>
                      <td className="px-4 align-middle">
                        {event.candidateName}
                      </td>
                      <td className="px-4 align-middle">{event.title}</td>
                      <td className="px-4 align-middle">
                        {event.date
                          ? new Date(event.date).toLocaleDateString()
                          : ""}
                      </td>
                      <td className="px-4 align-middle">
                        {event.start && event.end ? (
                          <>
                            {event.start.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                            {" - "}
                            {event.end.toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </>
                        ) : (
                          ""
                        )}
                      </td>
                      <td className="px-4 text-center">
                        <div className="btn-group">
                          <button
                            className="btn btn-success btn-sm px-3"
                            onClick={() =>
                              handleEventAction(event.id, "approved")
                            }
                          >
                            <i className="bi bi-check-circle me-2"></i>
                            Approve
                          </button>
                          <button
                            className="btn btn-danger btn-sm px-3 ms-2"
                            onClick={() =>
                              handleEventAction(event.id, "rejected")
                            }
                          >
                            <i className="bi bi-x-circle me-2"></i>
                            Reject
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
