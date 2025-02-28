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
import "./assets/css/calendar-responsive.css";

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
    <div className="container-fluid calendar-container mt-4">
      <header className="calendar-header d-flex justify-content-between align-items-center bg-primary text-white p-3 rounded">
        <h1 className="m-0">Event Calendar</h1>
        <button className="btn btn-light px-4" onClick={handleLogin}>
          Login
        </button>
      </header>

      <div className="mt-3 p-2 p-md-3 bg-white shadow rounded">
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
          displayEventTime={true}
          displayEventEnd={true}
          eventOverlap={false}
          selectOverlap={false}
          eventDisplay="block"
          eventColor="#3788d8"
          eventTextColor="#ffffff"
          eventDidMount={(info) => {
            const { company, technology, candidateName } =
              info.event.extendedProps;
            const eventEl = info.el;
            const titleEl = eventEl.querySelector(".fc-event-title");

            if (titleEl) {
              titleEl.innerHTML = `
                <div class="event-content">
                  <div class="event-details">
                    <div class="event-item">Candidate: ${
                      candidateName || ""
                    }</div>
                    <div class="event-item">Technology: ${
                      technology || ""
                    }</div>
                    <div class="event-item">Title: ${info.event.title}</div>
                    <div class="event-item">Company: ${company || ""}</div>
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
          dayCellClassNames={(arg) => {
            return arg.date.getDay() === 0 ? "sunday-cell" : "";
          }}
          dayHeaderClassNames={(arg) => {
            return arg.date.getDay() === 0 ? "sunday-header" : "";
          }}
          slotLabelClassNames={(arg) => {
            const day = arg.date.getDay();
            return day === 0 ? "sunday-slot" : "";
          }}
          views={{
            timeGridWeek: {
              titleFormat: { year: "numeric", month: "short", day: "numeric" },
              dayHeaderFormat: {
                weekday: window.innerWidth < 768 ? "short" : "long",
              },
              slotLabelFormat: {
                hour: "numeric",
                minute: "2-digit",
                meridiem: window.innerWidth < 768 ? "short" : "long",
              },
              dayHeaderContent: (args) => {
                const day = args.date.getDay();
                const element = document.createElement("span");
                element.innerHTML = args.date.toLocaleDateString("en-US", {
                  weekday: window.innerWidth < 768 ? "short" : "long",
                });
                if (day === 0) {
                  element.style.color = "#dc3545";
                  element.style.fontWeight = "bold";
                }
                return { domNodes: [element] };
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default CalendarComponent;
