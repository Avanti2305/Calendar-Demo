import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  updateDoc,
  doc,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";
import { db, auth } from "./firebase"; // Import Firebase auth
import { getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom"; // For navigation
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/addevent-responsive.css";

import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

const AddEventPage = () => {
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventCompanyName, setCompanyName] = useState("");
  const [eventInterviewRound, setInterviewRound] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [time, setSelectedTime] = useState("");
  const [eventTechnolgy, setTechnology] = useState("");
  const [selectedFeedbackEvent, setSelectedFeedbackEvent] = useState(null);
  const [feedback, setFeedback] = useState("");
  const navigate = useNavigate(); // Navigation hook
  const [errors, setErrors] = useState({});
  const [currentCandidate, setCurrentCandidate] = useState(null);
  const [candidateName, setCandidateName] = useState("");
  const [loading, setLoading] = useState(true);

  // Update the time validation functions
  const isValidTimeRange = (time) => {
    const [hours] = time.split(":").map(Number);
    return hours >= 9 && hours < 21; // 9 AM to 9 PM
  };

  // Update the isLunchTime function to be more precise
  const isLunchTime = (startTime, endTime) => {
    if (!startTime || !endTime) return false;

    const [startHour, startMinute] = startTime.split(":").map(Number);
    const [endHour, endMinute] = endTime.split(":").map(Number);

    const lunchStartHour = 13; // 1 PM
    const lunchStartMinute = 0;
    const lunchEndHour = 13; // 1:30 PM
    const lunchEndMinute = 30;

    const startTimeInMinutes = startHour * 60 + startMinute;
    const endTimeInMinutes = endHour * 60 + endMinute;
    const lunchStartInMinutes = lunchStartHour * 60 + lunchStartMinute;
    const lunchEndInMinutes = lunchEndHour * 60 + lunchEndMinute;

    return (
      (startTimeInMinutes <= lunchStartInMinutes &&
        endTimeInMinutes > lunchStartInMinutes) ||
      (startTimeInMinutes >= lunchStartInMinutes &&
        startTimeInMinutes < lunchEndInMinutes) ||
      (startTimeInMinutes <= lunchStartInMinutes &&
        endTimeInMinutes >= lunchEndInMinutes)
    );
  };

  // Add this function to check for time overlaps
  const checkTimeOverlap = (selectedDate, startTime, endTime) => {
    if (!selectedDate || !startTime || !endTime) return false;

    const newStart = new Date(`${selectedDate}T${startTime}`);
    const newEnd = new Date(`${selectedDate}T${endTime}`);

    return events.some((event) => {
      const eventStart = new Date(event.start);
      const eventEnd = new Date(event.end);

      // Skip if not the same date
      if (eventStart.toDateString() !== newStart.toDateString()) return false;

      return (
        (newStart >= eventStart && newStart < eventEnd) || // New event starts during existing event
        (newEnd > eventStart && newEnd <= eventEnd) || // New event ends during existing event
        (newStart <= eventStart && newEnd >= eventEnd) // New event encompasses existing event
      );
    });
  };
  // Fetch event from Firebase
  useEffect(() => {
    const fetchEvents = async () => {
      setIsLoading(true);
      setError(null);

      try {
        console.log("📢 Fetching all events...");

        const eventsRef = collection(db, "events");
        const eventsSnap = await getDocs(eventsRef);

        if (eventsSnap.empty) {
          console.log("ℹ️ No events found");
          setEvents([]);
          return;
        }

        const eventsData = eventsSnap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          status: doc.data().isApproved ? "Approved" : "Pending Approval",
        }));

        console.log("✅ All events fetched:", eventsData);
        setEvents(eventsData);
      } catch (error) {
        console.error("❌ Error fetching events:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch candidates from Firebase
  useEffect(() => {
    const fetchCandidateData = async () => {
      if (!currentCandidate?.phoneNumber) return;

      try {
        const candidatesRef = collection(db, "candidates");
        const q = query(
          candidatesRef,
          where("phone", "==", currentCandidate.phoneNumber)
        );
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const candidateData = querySnapshot.docs[0].data();
          setCandidateName(candidateData.name || "");
        }
      } catch (error) {
        console.error("Error fetching candidate data:", error);
      }
    };

    fetchCandidateData();
  }, [currentCandidate]);

  // First, add this state to track the candidate ID
  const [candidateId, setCandidateId] = useState(null);

  // Add this useEffect to fetch candidate ID when component mounts
  // Add this near your other useEffects
  useEffect(() => {
    const checkCandidateAuth = () => {
      const candidateData = JSON.parse(localStorage.getItem("candidates"));

      if (!candidateData?.id) {
        console.log("No authenticated candidate");
        navigate("/SignIn");
      } else {
        console.log("Candidate authenticated:", candidateData.id);
        // Set candidate data in state if needed
        setCandidateName(candidateData.name || "");
      }
    };

    // Initial check
    checkCandidateAuth();

    // Set up interval to periodically check authentication
    const authCheckInterval = setInterval(checkCandidateAuth, 5000);

    // Cleanup interval on unmount
    return () => clearInterval(authCheckInterval);
  }, [navigate]);
  // Add near the top of your component
  useEffect(() => {
    const checkAuth = () => {
      const candidatesData = JSON.parse(localStorage.getItem("candidates"));
      if (!candidatesData?.id) {
        console.log("No authenticated user found");
        navigate("/SignIn");
        return;
      }
      console.log("User authenticated:", candidatesData.id);
    };

    checkAuth();
  }, [navigate]);

  const handleAddEvent = async () => {
    console.log("Starting event submission...");

    setErrors({});
    if (!validateFields()) {
      alert("Please fill all required fields correctly");
      return;
    }

    try {
      // Get candidate data from localStorage
      const candidateData = JSON.parse(localStorage.getItem("candidates"));

      if (!candidateData || !candidateData.id) {
        console.log("⚠️ No candidate data found!");
        alert("Candidate data not found. Please select a candidate.");
        return;
      }

      console.log("📢 Adding event for candidate:", candidateData.id);

      // Format date and time
      const startDateTime = `${eventDate}T${startTime}:00`;
      const endDateTime = `${eventDate}T${endTime}:00`;

      // Structure event data
      const eventData = {
        title: eventTitle.trim(),
        company: eventCompanyName.trim(),
        technology: eventTechnolgy.trim(),
        interviewRound: eventInterviewRound,
        start: startDateTime,
        end: endDateTime,
        date: eventDate,
        status: "Pending Approval", // Change initial status
        feedback: "",
        createdAt: new Date().toISOString(),
        candidateId: candidateData.id, // Candidate ID from localStorage
        isApproved: false, // Add approval status
      };

      console.log("📤 Sending event data:", eventData);

      // Save to Firebase
      const eventsRef = collection(db, "events");
      const docRef = await addDoc(eventsRef, eventData);

      console.log("✅ Event saved with ID:", docRef.id);

      // Update local state
      setEvents((prevEvents) => [
        ...prevEvents,
        { id: docRef.id, ...eventData },
      ]);

      // Reset form
      setEventTitle("");
      setCompanyName("");
      setTechnology("");
      setInterviewRound("");
      setEventDate("");
      setStartTime("");
      setEndTime("");
      setErrors({});

      alert("Event added successfully!");
    } catch (error) {
      console.error("❌ Error adding event:", error);
      alert(`Failed to add event: ${error.message}`);
    }
  };

  // Update validateFields to be more strict
  const validateFields = () => {
    const newErrors = {};

    if (!eventTitle?.trim()) newErrors.title = "Title is required";
    if (!eventCompanyName?.trim())
      newErrors.company = "Company name is required";
    if (!eventTechnolgy?.trim())
      newErrors.technology = "Technology is required";
    if (!eventInterviewRound) newErrors.round = "Interview round is required";
    if (!eventDate) newErrors.date = "Date is required";
    if (!startTime) newErrors.startTime = "Start time is required";
    if (!endTime) newErrors.endTime = "End time is required";

    // Additional validations...
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return false;
    }

    return true;
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const event = events.find((e) => e.id === eventId);
      const candidateData = JSON.parse(localStorage.getItem("candidates"));

      // Check if event exists
      if (!event) {
        alert("Event not found!");
        return;
      }

      // Check if it's a past event
      if (isPastEvent(event.start)) {
        alert("Cannot delete past events!");
        return;
      }

      // Verify ownership
      if (event.candidateId !== candidateData?.id) {
        alert("You can only delete your own events!");
        return;
      }

      // Additional logging for debugging
      console.log("Deleting event:", {
        eventId,
        candidateId: event.candidateId,
        currentCandidateId: candidateData?.id,
      });

      // Delete the event
      await deleteDoc(doc(db, "events", eventId));

      // Update local state
      setEvents(events.filter((e) => e.id !== eventId));
      alert("Event deleted successfully!");
    } catch (error) {
      console.error("Error deleting event:", error);
      if (error.code === "permission-denied") {
        alert("You don't have permission to delete this event.");
      } else {
        alert(`Failed to delete event: ${error.message}`);
      }
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatTime = (timeString) => {
    const date = new Date(`2000-01-01T${timeString}`);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const isPastEvent = (start) => {
    return new Date(start) < new Date(); // Compare event date with current date
  };

  const getCurrentDateString = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getCurrentTimeString = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;
  };

  const isSunday = (dateString) => {
    const date = new Date(dateString);
    return date.getDay() === 0; // 0 represents Sunday
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate("/SignIn");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  const handleUpdateEvent = async () => {
    if (!selectedEvent) return;

    try {
      const eventRef = doc(db, "events", selectedEvent.id);
      await updateDoc(eventRef, selectedEvent);
      alert("Event updated successfully!");

      // Update local state
      setEvents(
        events.map((ev) => (ev.id === selectedEvent.id ? selectedEvent : ev))
      );

      handleCloseModal();
    } catch (error) {
      console.error("Error updating event:", error);
    }
  };

  // Handle feedback submission
  const handleOpenFeedbackModal = (event) => {
    setSelectedFeedbackEvent(event);
    setFeedback(event.feedback || ""); // Pre-fill if feedback exists
  };

  const handleCloseFeedbackModal = () => {
    setSelectedFeedbackEvent(null);
    setFeedback("");
  };

  const handleSubmitFeedback = async () => {
    if (!selectedFeedbackEvent || !feedback.trim()) {
      alert("Please enter feedback before submitting");
      return;
    }

    try {
      const candidateData = JSON.parse(localStorage.getItem("candidates"));

      if (!candidateData?.id) {
        alert("Please sign in again to submit feedback");
        navigate("/SignIn");
        return;
      }

      console.log("Submitting feedback as candidate:", candidateData.id);

      // Verify ownership
      if (selectedFeedbackEvent.candidateId !== candidateData.id) {
        alert("You can only provide feedback for your own events");
        return;
      }

      const eventRef = doc(db, "events", selectedFeedbackEvent.id);

      // Structure the update data to match security rules
      const updateData = {
        feedback: feedback.trim(),
        lastUpdatedAt: new Date().toISOString(),
        lastUpdatedBy: candidateData.id,
        // Important: Include candidateId in the update to match security rules
        candidateId: candidateData.id,
      };

      await updateDoc(eventRef, updateData);

      // Update local state
      setEvents((prevEvents) =>
        prevEvents.map((event) =>
          event.id === selectedFeedbackEvent.id
            ? { ...event, ...updateData }
            : event
        )
      );

      alert("Feedback submitted successfully!");
      handleCloseFeedbackModal();
    } catch (error) {
      console.error("Error updating feedback:", error);
      alert("Failed to submit feedback. Please try again.");
    }
  };

  //   if (!selectedCandidateId || !feedbackScheduleRound || !hrFeedback) {
  //     alert("Please fill all feedback fields");
  //     return;
  //   }

  //   const feedbackData = {
  //     candidateId: selectedCandidateId,
  //     feedbackScheduleRound,
  //     hrFeedback,
  //     timestamp: new Date().toISOString(),
  //   };

  //   try {
  //     await addDoc(collection(db, "feedback"), feedbackData);
  //     alert("Feedback submitted successfully");
  //     setSelectedCandidateId("");
  //     setFeedbackScheduleRound("");
  //     setHrFeedback("");
  //   } catch (error) {
  //     console.error("Error submitting feedback: ", error);
  //   }
  // };
  // const EventTable = ({ events, handleEditEvent, handleDeleteEvent, handleOpenFeedbackModal, isPastEvent }) => {

  // Format the date
  const formatDateColumn = (rowData) => {
    if (!rowData.start) return "No Date";

    const date = new Date(rowData.start.split("T")[0]);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part for accurate date comparison

    const style = {
      color: date < today ? "#dc3545" : "inherit", // dc3545 is Bootstrap's danger red color
    };

    return <span style={style}>{formatDate(rowData.start.split("T")[0])}</span>;
  };

  // Format the start time
  const formatStartTimeColumn = (rowData) =>
    rowData.start ? formatTime(rowData.start.split("T")[1]) : "No Time";

  // Format the end time
  const formatEndTimeColumn = (rowData) =>
    rowData.end ? formatTime(rowData.end.split("T")[1]) : "No Time";

  // First, add this new time range formatter function where your other formatter functions are:
  const formatTimeRangeColumn = (rowData) => {
    if (!rowData.start || !rowData.end) return "No Time";
    const startTime = formatTime(rowData.start.split("T")[1]);
    const endTime = formatTime(rowData.end.split("T")[1]);
    return `${startTime} - ${endTime}`;
  };

  // Update the actionBodyTemplate function
  const actionBodyTemplate = (rowData) => {
    const isPast = isPastEvent(rowData.start);
    const hasFeedback = rowData.feedback && rowData.feedback.trim().length > 0;

    return (
      <>
        {isPast && !hasFeedback && (
          <button
            className="btn btn-sm btn-info me-2"
            onClick={(e) => {
              e.stopPropagation();
              handleOpenFeedbackModal(rowData);
            }}
          >
            <i className="pi pi-pencil"></i> Feedback
          </button>
        )}
        {!isPast && (
          <button
            className="btn btn-sm btn-danger"
            onClick={(e) => {
              e.stopPropagation();
              handleDeleteEvent(rowData.id);
            }}
          >
            <i className="pi pi-trash"></i> Delete
          </button>
        )}
      </>
    );
  };

  // First, add this sorting function before the return statement:
  const sortedEvents = [...events].sort((a, b) => {
    // Handle cases where createdAt might be missing or in different formats
    const timeA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const timeB = b.createdAt ? new Date(b.createdAt).getTime() : 0;

    return timeB - timeA; // Sort in descending order (newest first)
  });

  return (
    <div className="container mt-4">
      {/* Welcome Header - Made Responsive */}
      <div className="welcome-header d-flex justify-content-between align-items-center mb-4 flex-wrap">
        <h2 className="mb-0">
          Welcome{" "}
          {candidateName || candidateName?.displayName || candidateName?.name}
        </h2>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout <i className="bi bi-box-arrow-right"></i>
        </button>
      </div>

      {/* Event Form Section - Made Responsive */}
      <div className="event-form-container">
        <div className="row">
          <div className="col-12">
            <h3 className="mb-3">Add Event</h3>
            <div className="card p-3">
              <div className="row g-3">
                {/* Event Title */}
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="form-group-responsive">
                    <label className="form-label">
                      Event Title <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={eventTitle}
                      onChange={(e) => setEventTitle(e.target.value)}
                      placeholder="Enter event title"
                    />
                  </div>
                </div>

                {/* Company Name */}
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="form-group-responsive">
                    <label className="form-label">
                      Company Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={eventCompanyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Enter company name"
                    />
                  </div>
                </div>

                {/* Technology */}
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="form-group-responsive">
                    <label className="form-label">
                      Technology <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      value={eventTechnolgy}
                      onChange={(e) => setTechnology(e.target.value)}
                      placeholder="Enter Technology"
                    />
                  </div>
                </div>

                {/* Interview Round */}
                <div className="col-12 col-md-6 col-lg-3">
                  <div className="form-group-responsive">
                    <label className="form-label">
                      Round <span className="text-danger">*</span>
                    </label>
                    <select
                      className="form-control"
                      value={eventInterviewRound}
                      onChange={(e) => setInterviewRound(e.target.value)}
                    >
                      <option value="">Select Round</option>
                      <option value="Round 1">Technical Assessment Test</option>
                      <option value="Round 2">
                        Technical Discussion Round
                      </option>
                      <option value="Round 3">Manager Round</option>
                      <option value="Final Round">HR Round</option>
                    </select>
                  </div>
                </div>

                {/* Date and Time Section */}
                <div className="col-12">
                  <div className="row g-3">
                    {/* Date */}
                    <div className="col-12 col-md-4">
                      <div className="form-group-responsive">
                        <label className="form-label">
                          Date <span className="text-danger">*</span>
                        </label>
                        <input
                          type="date"
                          className="form-control"
                          value={eventDate}
                          min={getCurrentDateString()}
                          onChange={(e) => {
                            const selectedDate = new Date(e.target.value);
                            if (selectedDate.getDay() === 0) {
                              alert(
                                "Sundays are not allowed. Please select another date."
                              );
                              setEventDate("");
                            } else {
                              setEventDate(e.target.value);
                            }
                          }}
                        />
                      </div>
                    </div>

                    {/* Start Time */}
                    <div className="col-12 col-md-4">
                      <div className="form-group-responsive">
                        <label className="form-label">
                          Start Time <span className="text-danger">*</span>
                        </label>
                        <input
                          type="time"
                          className="form-control"
                          value={startTime}
                          min="09:00"
                          max="20:59"
                          onChange={(e) => {
                            const selectedTime = e.target.value;
                            // Check valid time range
                            if (!isValidTimeRange(selectedTime)) {
                              setErrors((prev) => ({
                                ...prev,
                                startTime:
                                  "Please select a time between 9 AM and 9 PM",
                              }));
                              return;
                            }
                            // Check lunch time
                            if (isLunchTime(selectedTime, endTime)) {
                              setErrors((prev) => ({
                                ...prev,
                                startTime:
                                  "Cannot schedule during lunch time (1:00 PM - 1:30 PM)",
                              }));
                              return;
                            }
                            // Check time overlap
                            if (
                              checkTimeOverlap(eventDate, selectedTime, endTime)
                            ) {
                              setErrors((prev) => ({
                                ...prev,
                                startTime:
                                  "This time slot overlaps with an existing event",
                              }));
                              return;
                            }
                            setErrors((prev) => ({ ...prev, startTime: null }));
                            setStartTime(selectedTime);
                          }}
                        />
                        {errors.startTime && (
                          <small className="text-danger">
                            {errors.startTime}
                          </small>
                        )}
                      </div>
                    </div>

                    {/* End Time */}
                    <div className="col-12 col-md-4">
                      <div className="form-group-responsive">
                        <label className="form-label">
                          End Time <span className="text-danger">*</span>
                        </label>
                        <input
                          type="time"
                          className="form-control"
                          value={endTime}
                          min="09:00"
                          max="20:59"
                          onChange={(e) => {
                            const selectedTime = e.target.value;
                            // Check valid time range
                            if (!isValidTimeRange(selectedTime)) {
                              setErrors((prev) => ({
                                ...prev,
                                endTime:
                                  "Please select a time between 9 AM and 9 PM",
                              }));
                              return;
                            }
                            // Check lunch time
                            if (isLunchTime(startTime, selectedTime)) {
                              setErrors((prev) => ({
                                ...prev,
                                endTime:
                                  "Cannot schedule during lunch time (1:00 PM - 1:30 PM)",
                              }));
                              return;
                            }
                            // Check valid sequence
                            if (selectedTime <= startTime) {
                              setErrors((prev) => ({
                                ...prev,
                                endTime: "End time must be after start time",
                              }));
                              return;
                            }
                            // Check time overlap
                            if (
                              checkTimeOverlap(
                                eventDate,
                                startTime,
                                selectedTime
                              )
                            ) {
                              setErrors((prev) => ({
                                ...prev,
                                endTime:
                                  "This time slot overlaps with an existing event",
                              }));
                              return;
                            }
                            setErrors((prev) => ({ ...prev, endTime: null }));
                            setEndTime(selectedTime);
                          }}
                        />
                        {errors.endTime && (
                          <small className="text-danger">
                            {errors.endTime}
                          </small>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="d-flex justify-content-end mt-4">
                <button
                  className="btn btn-primary w-100 w-md-50 w-lg-25"
                  onClick={handleAddEvent}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Event List Section */}
      <div className="col-12 my-4">
        <h3>Event List</h3>
        <div className="table-responsive-custom card">
          <DataTable
            value={sortedEvents}
            paginator
            rows={5}
            stripedRows
            responsiveLayout="stack"
            breakpoint="960px"
            className="p-datatable-sm"
          >
            <Column
              field="title"
              header="Title"
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            />
            {/* <Column
              field="id"
              header="Candidate ID"
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            /> */}
            <Column
              field="company"
              header="Company Name"
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            />
            <Column
              field="technology"
              header="Technology"
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            />
            <Column
              field="Round"
              header="Round"
              body={(rowData) => rowData.interviewRound}
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            />
            <Column
              field="start"
              header="Date"
              body={formatDateColumn}
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            />
            <Column
              field="time"
              header="Time"
              body={formatTimeRangeColumn}
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            />
            <Column
              field="feedback"
              header="Feedback"
              body={(rowData) => rowData.feedback}
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            />
            <Column
              header="Actions"
              body={actionBodyTemplate}
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                textAlign: "center",
              }}
            />
          </DataTable>
        </div>
      </div>

      {/* Feedback Modal - Made Responsive */}
      {selectedFeedbackEvent && (
        <div className="modal fade show d-block" tabIndex="-1">
          <div className="modal-dialog modal-responsive">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">
                  HR Feedback for {selectedFeedbackEvent.title}
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={handleCloseFeedbackModal}
                ></button>
              </div>
              <div className="modal-body">
                <label>HR Feedback</label>
                <textarea
                  placeholder="Enter HR feedback here"
                  className="form-control"
                  value={feedback}
                  onChange={(e) => setFeedback(e.target.value)}
                  rows="4"
                ></textarea>
              </div>
              <div className="modal-footer d-flex justify-content-between">
                <button
                  className="btn btn-secondary"
                  onClick={handleCloseFeedbackModal}
                >
                  Cancel
                </button>
                <button
                  className="btn btn-primary"
                  onClick={handleSubmitFeedback}
                >
                  Submit Feedback
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddEventPage;
