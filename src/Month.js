import { Calendar } from '@fullcalendar/core'
import dayGridPlugin from '@fullcalendar/daygrid'

const Month = new Calendar(Calendar, {
  plugins: [dayGridPlugin],
  initialView: 'dayGridMonth'
});

export default Month;   