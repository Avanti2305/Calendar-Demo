import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Month View
import timeGridPlugin from "@fullcalendar/timegrid"; // Week & Day Views
import interactionPlugin from "@fullcalendar/interaction"; // Enables Event Click
//import "./Calendar.css"; // Import custom CSS

const  CalendarComponent = () => {
  const [events, setEvents] = useState([
    {
      id: "1",
      title: "Team Meeting",
      start: new Date(),
      end: new Date(new Date().getTime() + 60 * 60 * 1000),
       // Custom event color
        },
        {
          id: "2",
          title: "Conference",
          start: new Date("2025-02-15T10:00:00"),
          end: new Date("2025-02-15T12:00:00"),
          color:"Blue", // Custom event color
    },
  ]);

  // Handle event click
  const handleEventClick = (info) => {
    alert(`Event: ${info.event.title}`);
  };

  // Handle date selection for adding new events
  const handleDateSelect = (selectInfo) => {
    let title = prompt("Enter event title:");
    let startTime = prompt("Enter start time (HH:MM AM/PM):");
    let endTime = prompt("Enter end time (HH:MM AM/PM):");
  
    if (title && startTime && endTime) {
      let startDate = new Date(selectInfo.start); // Use selected date
      let endDate = new Date(selectInfo.start);   // Use same day for end time
  
      // Function to parse time and update date
      // Update the parseTime function
const parseTime = (timeStr, date) => {
  try {
    // Validate time string format
    if (!timeStr || !timeStr.includes(' ')) {
      throw new Error('Invalid time format. Please use "HH:MM AM/PM"');
    }

    const [time, period] = timeStr.trim().split(' ');
    
    // Validate period
    if (!period || !['AM', 'PM'].includes(period.toUpperCase())) {
      throw new Error('Please specify AM or PM');
    }

    // Validate time format
    if (!time || !time.includes(':')) {
      throw new Error('Invalid time format. Please use HH:MM');
    }

    let [hours, minutes] = time.split(':');
    hours = parseInt(hours);
    minutes = parseInt(minutes);

    // Validate hours and minutes
    if (isNaN(hours) || hours < 1 || hours > 12) {
      throw new Error('Hours must be between 1 and 12');
    }
    if (isNaN(minutes) || minutes < 0 || minutes > 59) {
      throw new Error('Minutes must be between 0 and 59');
    }

    if (period.toUpperCase() === "PM" && hours !== 12) {
      hours += 12;
    }
    if (period.toUpperCase() === "AM" && hours === 12) {
      hours = 0;
    }

    date.setHours(hours, minutes, 0, 0);
    return true;
  } catch (error) {
    alert(error.message);
    return false;
  }
};

// Update the handleDateSelect function to use the validation
const handleDateSelect = (selectInfo) => {
  let title = prompt("Enter event title:");
  if (!title) return;

  let startTime = prompt("Enter start time (HH:MM AM/PM):");
  let endTime = prompt("Enter end time (HH:MM AM/PM):");

  if (title && startTime && endTime) {
    let startDate = new Date(selectInfo.start);
    let endDate = new Date(selectInfo.start);

    // Only create event if both times are valid
    if (parseTime(startTime, startDate) && parseTime(endTime, endDate)) {
      let newEvent = {
        id: String(events.length + 1),
        title,
        start: startDate,
        end: endDate,
        backgroundColor: "#007bff",
      };

      setEvents([...events, newEvent]);
    }
  }
};
  
      parseTime(startTime, startDate);
      parseTime(endTime, endDate);
  
      let newEvent = {
        id: String(events.length + 1),
        title,
        start: startDate,
        end: endDate,
        backgroundColor: "#007bff", // Custom event color
      };
  
      setEvents([...events, newEvent]);
    }
  };
  

  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "timeGridWeek",
        }}
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