import React, { useState, useEffect } from "react";
import { db } from "./firebase"; // Ensure Firebase is configured
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore";
import { Table, Button, Form } from "react-bootstrap";

const UserDash = () => {
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [technology, setTechnology] = useState("");
  const [interviewRound, setInterviewRound] = useState("Technical");
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [events, setEvents] = useState([]);
  const [candidates, setCandidates] = useState([]);
  
  useEffect(() => {
    fetchCandidates();
    fetchEvents();
  }, []);

  const fetchCandidates = async () => {
    const candidatesSnapshot = await getDocs(collection(db, "candidates"));
    setCandidates(candidatesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const fetchEvents = async () => {
    const eventsSnapshot = await getDocs(collection(db, "events"));
    setEvents(eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  };

  const addEvent = async () => {
    if (!title || !company || !technology || !date || !startTime || !endTime) {
      alert("Please fill in all fields.");
      return;
    }

    const candidateId = candidates.length > 0 ? candidates[0].id : "";
    const newEvent = { title, company, technology, interviewRound, date, startTime, endTime, candidateId };
    await addDoc(collection(db, "events"), newEvent);
    fetchEvents();
  };

  const deleteEvent = async (id) => {
    await deleteDoc(doc(db, "events", id));
    fetchEvents();
  };

  return (
    <div className="container mt-4">
      <h2>Add Event</h2>
      <Form>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Technology</Form.Label>
          <Form.Control type="text" value={technology} onChange={(e) => setTechnology(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Interview Round</Form.Label>
          <Form.Select value={interviewRound} onChange={(e) => setInterviewRound(e.target.value)}>
            <option>Technical</option>
            <option>HR</option>
            <option>Managerial</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Start Time</Form.Label>
          <Form.Control type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Label>End Time</Form.Label>
          <Form.Control type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </Form.Group>
        <Button className="mt-3" onClick={addEvent}>Add Event</Button>
      </Form>
      
      <h3 className="mt-4">Event List</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Company</th>
            <th>Technology</th>
            <th>Interview Round</th>
            <th>Date</th>
            <th>Start Time</th>
            <th>End Time</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {events.map((event) => (
            <tr key={event.id}>
              <td>{event.title}</td>
              <td>{event.company}</td>
              <td>{event.technology}</td>
              <td>{event.interviewRound}</td>
              <td>{event.date}</td>
              <td>{event.startTime}</td>
              <td>{event.endTime}</td>
              <td>
                <Button variant="danger" onClick={() => deleteEvent(event.id)}>Delete</Button>{" "}
                <Button variant="info">Feedback</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserDash;
