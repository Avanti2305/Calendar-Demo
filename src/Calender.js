import React, { useEffect, useState  , useRef} from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Month View
import timeGridPlugin from "@fullcalendar/timegrid"; // Week & Day Views
import interactionPlugin from "@fullcalendar/interaction"; // Enables Event Click
import { db, collection, addDoc, getDocs } from "./firebase";


const  CalendarComponent = () => {

  const calendarRef = useRef(null);
  
  const [events, setEvents] = useState([
    // {
    //   id: "1",
    //   title: "Team Meeting",
    //   start: new Date(),
    //   end: new Date(new Date().getTime() + 60 * 60 * 1000),
    //    // Custom event color
    //     },
    //     {
    //       id: "2",
    //       title: "Conference",
    //       start: new Date("2025-02-15T10:00:00"),
    //       end: new Date("2025-02-15T12:00:00"),
    // },
  ]);
  const [headerToolbar, setHeaderToolbar] = useState({
    left: "prev,next today",
    center: "title",
    center: "techology",
    right: "timeGridWeek",

  });

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "events"));
        const fetchedEvents = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
          start: new Date(doc.data().start),
          end: new Date(doc.data().end),
        }));
  
        setEvents(fetchedEvents);
      } catch (error) {
        console.error("Error fetching events: ", error);
      }
    };
  
    fetchEvents();
  }, []);
 

  // Handle event click
  const handleEventClick = (info) => {
    alert(`Event: ${info.event.title}`);
  };

  // Handle date selection for adding new events
  const handleDateSelect = async (selectInfo) => {
    let title = prompt("Enter event title:");
    let technology = prompt("Enter event technology:");
    let startTime = prompt("Enter start time (HH:MM AM/PM):");
    let endTime = prompt("Enter end time (HH:MM AM/PM):");
  
    if (title && startTime && endTime) {
      let startDate = new Date(selectInfo.start);
      let endDate = new Date(selectInfo.start);
  
      // Parse time input
      const parseTime = (timeStr, date) => {
        const [time, period] = timeStr.split(" ");
        let [hours, minutes] = time.split(":");
        hours = parseInt(hours);
        minutes = parseInt(minutes);
  
        if (period.toUpperCase() === "PM" && hours !== 12) {
          hours += 12;
        }
        if (period.toUpperCase() === "AM" && hours === 12) {
          hours = 0;
        }
  
        date.setHours(hours, minutes, 0, 0);
      };
  
      parseTime(startTime, startDate);
      parseTime(endTime, endDate);
  
      let newEvent = {
        title,
        technology,
        start: startDate.toISOString(),
        end: endDate.toISOString(),
      };
  
      try {
        const docRef = await addDoc(collection(db, "events"), newEvent);
        newEvent.id = docRef.id; // Assign Firestore document ID
  
        setEvents([...events, newEvent]); // Update state with new event
        alert("Event added successfully!");
      } catch (error) {
        console.error("Error adding event: ", error);
      }
    }
  };
  
  

  return (
    <div className="calendar-container">
      <FullCalendar
      ref={calendarRef} 
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        headerToolbar={headerToolbar}
        selectable={true}
        select={handleDateSelect}
        events={events}
        eventClick={handleEventClick}
        eventColor="#3788d8"
      />
    </div>
  );
};

export default CalendarComponent;