import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs, doc, getDoc } from 'firebase/firestore';
import { db } from './firebase';
import { Table, Container, Spinner, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function ViewCandidates() {
  const { id } = useParams();
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [candidateDetails, setCandidateDetails] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Starting fetch with ID:", id);
      try {
        // First verify the candidate exists
        const candidateRef = doc(db, 'candidates', id);
        const candidateSnap = await getDoc(candidateRef);
        
        if (!candidateSnap.exists()) {
          console.error("Candidate not found");
          setError("Candidate not found");
          setLoading(false);
          return;
        }

        setCandidateDetails(candidateSnap.data());
        
        // Then fetch their events
        const eventsCollection = collection(db, 'events');
        const q = query(
          eventsCollection,
          where("candidateId", "==", id)
        );

        console.log("Executing query with params:", {
          candidateId: id,
          candidateName: candidateSnap.data().name
        });

        const eventSnapshot = await getDocs(q);
        
        if (eventSnapshot.empty) {
          console.log("No events found for candidate:", candidateSnap.data().name);
          setError("No scheduled interviews found for this candidate.");
          setEvents([]);
        } else {
          const eventsList = eventSnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          
          console.log("Found events:", eventsList);
          setEvents(eventsList);
          setError(null);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(`Error fetching data: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  if (loading) {
    return (
      <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h2 className="mb-4">Scheduled Interviews</h2>
      
      {error && (
        <Alert variant="warning" className="mb-3">
          {error}
        </Alert>
      )}

      {events.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Title</th>
              <th>Candidate Name</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.title}</td>
                <td>{event.candidateName}</td>
                <td>{event.start ? new Date(event.start).toLocaleDateString() : 'N/A'}</td>
                <td>{event.start ? new Date(event.start).toLocaleTimeString() : 'N/A'}</td>
                <td>{event.end ? new Date(event.end).toLocaleTimeString() : 'N/A'}</td>
                <td>
                  <span className={`badge ${event.status === 'Scheduled' ? 'bg-success' : 'bg-warning'}`}>
                    {event.status || 'Scheduled'}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <div className="text-center mt-4">
          <p>No interviews scheduled yet.</p>
        </div>
      )}
    </Container>
  );
}

export default ViewCandidates;