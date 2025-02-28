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
import "./assets/css/responsive.css";

const Adminpage = () => {
  const [candidates, setCandidates] = useState([]);
  const [newCandidateName, setNewCandidateName] = useState("");
  const [newCandidateMobile, setNewCandidateMobile] = useState("");
  const [newCandidatePassword, setNewCandidatePassword] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [editingCandidateId, setEditingCandidateId] = useState("");
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

  // Replace the existing handleEdit function
  const handleEdit = async (id) => {
    try {
      const candidateToEdit = candidates.find(
        (candidate) => candidate.id === id
      );
      if (candidateToEdit) {
        // Update form state
        setEditingCandidateId(id);
        setEditingName(candidateToEdit.name);
        setEditingMobile(candidateToEdit.mobile);
        setEditingPassword(candidateToEdit.password);

        // Hide add form if it's open
        setShowForm(true);

        // Scroll to edit form
        setTimeout(() => {
          document
            .querySelector(".edit-form")
            ?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        throw new Error("Candidate not found");
      }
    } catch (error) {
      console.error("Error setting up edit form:", error);
      alert("Failed to load candidate data for editing.");
    }
  };

  // Replace the existing handleUpdate function
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (!editingName || !editingMobile || !editingPassword) {
      alert("Please fill all fields before updating.");
      return;
    }

    try {
      const docRef = doc(db, "candidates", editingCandidateId);
      await updateDoc(docRef, {
        name: editingName,
        mobile: editingMobile,
        password: editingPassword,
      });

      // Reset form fields and fetch updated data
      setEditingCandidateId(null);
      setEditingName("");
      setEditingMobile("");
      setEditingPassword("");
      await fetchData();

      alert("Candidate updated successfully!");
    } catch (error) {
      console.error("Error updating candidate:", error);
      alert("Failed to update candidate. Please try again.");
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
    <div className="container-fluid">
      {/* Header Section */}
      <div className="row g-3 mb-4 align-items-center">
        <div className="col-12 col-lg-6">
          <h2 className="text-primary h3 mb-0">Candidate Management</h2>
        </div>
        <div className="col-12 col-lg-6 text-lg-end">
          <button className="btn btn-danger" onClick={handleLogout}>
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </button>
        </div>
      </div>

      {/* Candidate List Card */}
      <div className="card shadow-sm mb-4">
        <div className="card-header bg-white py-3">
          <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-2">
            <h5 className="m-0 text-primary">Candidate List</h5>
            <button
              className="btn btn-success"
              onClick={() => setShowForm(!showForm)}
            >
              <i
                className={`bi ${showForm ? "bi-x-lg" : "bi-plus-lg"} me-2`}
              ></i>
              {showForm ? "Cancel" : "Add Candidate"}
            </button>
          </div>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th className="d-none d-md-table-cell">#</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {candidates.map((candidate, index) => (
                  <tr key={candidate.id}>
                    <td className="d-none d-md-table-cell">{index + 1}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.mobile}</td>
                    <td className="action-column">
                      <div className="action-buttons-container">
                        <button
                          className="btn btn-primary action-btn"
                          onClick={() => navigate(`/Viewpage/${candidate.id}`)}
                        >
                          <i className="bi bi-eye me-1"></i>
                          <span className="action-btn-text">View</span>
                        </button>
                        <button
                          className="btn btn-warning action-btn"
                          onClick={() => handleEdit(candidate.id)}
                        >
                          <i className="bi bi-pencil me-1"></i>
                          <span className="action-btn-text">Edit</span>
                        </button>
                        <button
                          className="btn btn-danger action-btn"
                          onClick={() => handleDelete(candidate.id)}
                        >
                          <i className="bi bi-trash me-1"></i>
                          <span className="action-btn-text">Delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Add/Edit Form */}
      {showForm && (
        <div className="card shadow-sm mb-4">
          <div className="card-body">
            <form onSubmit={handleAddCandidate} className="row g-3">
              <div className="col-12 col-lg-4">
                <label className="form-label">Candidate Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newCandidateName}
                  onChange={(e) => setNewCandidateName(e.target.value)}
                  placeholder="Enter candidate name"
                />
              </div>
              <div className="col-12 col-lg-4">
                <label className="form-label">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={newCandidateMobile}
                  onChange={(e) => setNewCandidateMobile(e.target.value)}
                  placeholder="Enter mobile number"
                  maxLength={10}
                />
              </div>
              <div className="col-12 col-lg-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={newCandidatePassword}
                  onChange={(e) => setNewCandidatePassword(e.target.value)}
                  placeholder="Enter password"
                />
              </div>
              <div className="col-12">
                <button
                  type="submit"
                  className="btn btn-primary w-100 w-lg-auto"
                >
                  Add Candidate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Edit Candidate Form */}
      {editingCandidateId && (
        <div className="card shadow-sm mb-4 edit-form">
          <div className="card-header bg-white py-3">
            <h5 className="m-0 text-primary">Edit Candidate</h5>
          </div>
          <div className="card-body">
            <form onSubmit={handleUpdate} className="row g-3">
              <div className="col-12 col-lg-4">
                <label className="form-label">Candidate Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  placeholder="Enter candidate name"
                  required
                />
              </div>
              <div className="col-12 col-lg-4">
                <label className="form-label">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  value={editingMobile}
                  onChange={(e) => setEditingMobile(e.target.value)}
                  placeholder="Enter mobile number"
                  maxLength={10}
                  required
                />
              </div>
              <div className="col-12 col-lg-4">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={editingPassword}
                  onChange={(e) => setEditingPassword(e.target.value)}
                  placeholder="Enter password"
                  required
                />
              </div>
              <div className="col-12">
                <div className="d-flex flex-column flex-md-row gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary w-100 w-md-auto"
                  >
                    Update Candidate
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary w-100 w-md-auto"
                    onClick={() => {
                      setEditingCandidateId(null);
                      setEditingName("");
                      setEditingMobile("");
                      setEditingPassword("");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Event Requests Section */}
      <div className="card shadow-sm">
        <div className="card-header bg-white">
          <h5 className="card-title mb-0 text-primary">Event Requests</h5>
        </div>
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="table-light">
                <tr>
                  <th>Name</th>
                  <th>Event</th>
                  <th className="d-none d-lg-table-cell">Date</th>
                  <th className="d-none d-lg-table-cell">Time</th>
                  <th className="text-center">Actions</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event.id}>
                    <td>{event.candidateName}</td>
                    <td>{event.title}</td>
                    <td className="d-none d-lg-table-cell">
                      {new Date(event.date).toLocaleDateString()}
                    </td>
                    <td className="d-none d-lg-table-cell">
                      {event.start?.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </td>
                    <td className="action-column">
                      <div className="action-buttons-container">
                        <button
                          className="btn btn-success btn-sm action-btn"
                          onClick={() =>
                            handleEventAction(event.id, "approved")
                          }
                        >
                          <i className="bi bi-check-circle me-1"></i>
                          <span className="action-btn-text">Approve</span>
                        </button>
                        <button
                          className="btn btn-danger btn-sm action-btn"
                          onClick={() =>
                            handleEventAction(event.id, "rejected")
                          }
                        >
                          <i className="bi bi-x-circle me-1"></i>
                          <span className="action-btn-text">Reject</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adminpage;
