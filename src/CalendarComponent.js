import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
} from "firebase/firestore";
import { db } from "./firebase";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import styled from "styled-components";

// Update the CalendarWrapper styled component
const CalendarWrapper = styled.div`
  .fc-day-sun {
    background-color: rgba(255, 0, 0, 0.2) !important;
  }

  .fc-event {
    margin: 2px 0;
    padding: 2px;
    border-radius: 3px;
    min-height: 100px;
  }

  .event-content {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .event-time {
    color: #ffffff;
    font-size: 0.9em;
    font-weight: bold;
  }

  .event-title {
    font-weight: bold;
    margin: 2px 0;
    color: #ffffff;
  }

  .event-details {
    font-size: 0.85em;
    color: #ffffff;
    line-height: 1.3;
  }

  .fc-event-title-container {
    flex-grow: 1;
  }

  .fc-event-main {
    padding: 4px;
  }
`;

const CalendarComponent = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const eventsRef = collection(db, "events");
        const q = query(eventsRef, where("status", "==", "Approved"));
        const querySnapshot = await getDocs(q);

        // Update the event mapping section in the fetchEvents function
        const fetchedEvents = await Promise.all(
          querySnapshot.docs.map(async (docSnap) => {
            const eventData = docSnap.data();

            // Fetch candidate data
            let candidateName = "";
            if (eventData.candidateId) {
              try {
                const candidateRef = doc(
                  db,
                  "candidates",
                  eventData.candidateId
                );
                const candidateDoc = await getDoc(candidateRef);
                if (candidateDoc.exists()) {
                  candidateName = candidateDoc.data().name || "";
                }
              } catch (err) {
                console.error("Error fetching candidate:", err);
              }
            }

            // Parse the start and end times directly from the data
            const startDateTime = eventData.start
              ? new Date(eventData.start)
              : null;
            const endDateTime = eventData.end ? new Date(eventData.end) : null;

            // Debug logging
            console.log("Event Data:", {
              title: eventData.title,
              start: eventData.start,
              end: eventData.end,
              parsed: {
                start: startDateTime,
                end: endDateTime,
              },
            });

            return {
              id: docSnap.id,
              title: eventData.title || "",
              start: startDateTime?.toISOString(), // Convert to ISO string if date exists
              end: endDateTime?.toISOString(), // Convert to ISO string if date exists
              extendedProps: {
                company: eventData.company || "",
                technology: eventData.technology || "",
                candidateName: candidateName,
                status: eventData.status,
                interviewRound: eventData.interviewRound || "",
              },
            };
          })
        );

        // Filter out any events with invalid dates
        const validEvents = fetchedEvents.filter(
          (event) =>
            event.start &&
            event.end &&
            !isNaN(new Date(event.start)) &&
            !isNaN(new Date(event.end))
        );

        console.log("Valid events:", validEvents);
        setEvents(validEvents);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchEvents();
  }, []);

  const handleLogin = () => {
    navigate("/SignIn");
  };

  return (
    <CalendarWrapper className="container mt-4">
      <header className="d-flex justify-content-between align-items-center bg-primary text-white p-3 rounded">
        <h1 className="m-0">Event Calendar</h1>
        <button className="btn btn-light" onClick={handleLogin}>
          Login
        </button>
      </header>

      <div className="mt-3 p-3 bg-white shadow rounded">
        <FullCalendar
          plugins={[timeGridPlugin, interactionPlugin]}
          initialView="timeGridWeek"
          slotMinTime="09:00:00"
          slotMaxTime="22:00:00"
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "",
          }}
          events={events}
          height="auto"
          slotDuration="00:30:00"
          allDaySlot={false}
          slotLabelFormat={{
            hour: "numeric",
            minute: "2-digit",
            meridiem: "short",
          }}
          eventTimeFormat={{
            hour: "2-digit",
            minute: "2-digit",
            meridiem: "short",
          }}
          displayEventTime={true} // Changed to true
          displayEventEnd={true} // Changed to true
          eventOverlap={false}
          selectOverlap={false}
          eventDisplay="block" // Added for better visibility
          eventColor="#3788d8" // Added default color
          eventTextColor="#ffffff" // Added text color
          eventDidMount={(info) => {
            const { company, technology, candidateName } =
              info.event.extendedProps;
            const eventEl = info.el;
            const titleEl = eventEl.querySelector(".fc-event-title");
            const timeEl = eventEl.querySelector(".fc-event-time");

            // Format the time
            const startTime = info.event.start
              ? info.event.start.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "";
            const endTime = info.event.end
              ? info.event.end.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })
              : "";

            // Update time element if it exists
            // if (timeEl) {
            //   timeEl.innerHTML = `${startTime} - ${endTime}`;
            // }

            // Update title element with event details
            if (titleEl) {
              titleEl.innerHTML = `
                <div class="event-content" >
                 
                  
                  <div class="event-details" style="font-size: 0.85em;">
                    <div>Technology: ${technology || ""}</div>
                    <div>Candidate: ${candidateName || ""}</div>
                  <div >
                    ${info.event.title}
                  </div>
                    <div>Company: ${company || ""}</div>
                  </div>
                </div>
              `;
            }
          }}
          eventContent={(arg) => {
            return {
              html: `
                <div class="fc-event-main-frame">
                  <div class="fc-event-time"></div>
                  <div class="fc-event-title-container">
                    <div class="fc-event-title"></div>
                  </div>
                </div>
              `,
            };
          }}
        />
      </div>
    </CalendarWrapper>
  );
};

export default CalendarComponent;
