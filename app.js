import { API_KEY } from './config.js';

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  fetch('https://www.googleapis.com/calendar/v3/calendars/cornellnsbe@gmail.com/events?key=' + API_KEY)
    .then(response => response.json())
    .then(data => {

      var events = data.items.map(event => ({
        title: event.summary,
        start: event.start.dateTime || event.start.date,
        end: event.end.dateTime || event.end.date,
        resourceId: event.id,
      }));

      var calendar = new FullCalendar.Calendar(calendarEl, {
        plugins: ['interaction', 'dayGrid'],
        header: {
          left: 'prev',
          center: 'title',
          right: 'next'
        },
        displayEventTime: true,
        events: events
      });

      calendar.render();
    })
    .catch(error => console.error(error));
});