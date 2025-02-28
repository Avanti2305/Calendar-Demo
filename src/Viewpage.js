import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { db } from "./firebase";
import {
  collection,
  doc,
  getDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import "bootstrap/dist/css/bootstrap.min.css";

const ViewPage = () => {
  const { candidateId } = useParams();
  const navigate = useNavigate();
  const [candidateData, setCandidateData] = useState(null);
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch candidate data and their events
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Ensure candidateId is available before fetching
        if (!candidateId) {
          console.error("No candidateId provided");
          setLoading(false);
          return;
        }
  
        // Fetch candidate details
        const candidateRef = doc(db, "candidates", candidateId);
        const candidateSnap = await getDoc(candidateRef);
  
        if (candidateSnap.exists()) {
          setCandidateData({ id: candidateSnap.id, ...candidateSnap.data() });
  
          // Fetch events related to the candidate using the candidateId
          const eventsRef = collection(db, "events");
          const q = query(eventsRef, where("candidateId", "==", candidateId));
          const eventsSnapshot = await getDocs(q);
  
          // Declare eventsData here and check if data exists
          let eventsData = [];
          if (!eventsSnapshot.empty) {
            eventsData = eventsSnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            
            // Sort events by start date (most recent first)
            eventsData.sort((a, b) => new Date(b.start) - new Date(a.start));
          }
  
          // Set events state
          setEvents(eventsData);
  
          // Log the fetched data for debugging
          console.log("Candidate Data:", candidateSnap.data());
          console.log("Events Data:", eventsData);
        } else {
          console.error("No candidate found with the given candidateId");
        }
  
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
  
    fetchData();
  }, [candidateId]); // Dependency array ensures this runs only when candidateId changes
  // Dependency array ensures this runs only when candidateId changes
  

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (!candidateData) {
    return (
      <div className="container mt-5">
        <div className="alert alert-danger">Candidate not found</div>
      </div>
    );
  }

  const formatDateTime = (dateTimeString) => {
    const date = new Date(dateTimeString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header d-flex justify-content-between align-items-center bg-primary text-white">
          <h3 className="m-0">Events Added by {candidateData.name}</h3>
          <button className="btn btn-light" onClick={() => navigate(-1)}>
            <i className="bi bi-arrow-left me-2"></i>Back
          </button>
        </div>
        <div className="card-body">
          {events.length > 0 ? (
            <div className="row">
              {events.map((event) => (
                <div key={event.id} className="col-12 mb-3">
                  <div className="card border-0 shadow-sm">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-6">
                          <h5 className="card-title text-primary">
                            {event.title}
                          </h5>
                          <p className="mb-1">
                            <strong>Company:</strong> {event.company}
                          </p>
                          <p className="mb-1">
                            <strong>Technology:</strong> {event.technology}
                          </p>
                          <p className="mb-1">
                            <strong>Round:</strong> {event.interviewRound}
                          </p>
                        </div>
                        <div className="col-md-6">
                          <p className="mb-1">
                            <strong>Start:</strong>{" "}
                            {formatDateTime(event.start)}
                          </p>
                          <p className="mb-1">
                            <strong>End:</strong> {formatDateTime(event.end)}
                          </p>
                          <p className="mb-1">
                            <strong>Status:</strong>
                            <span
                              className={`badge ms-2 ${
                                event.status === "Completed"
                                  ? "bg-success"
                                  : "bg-warning"
                              }`}
                            >
                              {event.status || "Pending"}
                            </span>
                          </p>
                          {event.feedback && (
                            <div className="mt-2 p-2 bg-light rounded">
                              <strong>Feedback:</strong> {event.feedback}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-info">
              No events have been added by this candidate yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ViewPage;
