document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  fetch('https://www.googleapis.com/calendar/v3/calendars/fvh1d17oek2s9mg8mq0a6vepr0@group.calendar.google.com/events?key=AIzaSyBHd2s6Rw3i2FhDUNtfjBWWTi1e7M3femc')
    .then(response => response.json())
    .then(data => {
      // TODO: Descriptions, links, etc.
      var events = data.items.filter(event => event.status != "cancelled").map(event => ({
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
        displayEventTime: false,
        events: events
      });

      calendar.render();
    })
    .catch(error => console.error(error));
});