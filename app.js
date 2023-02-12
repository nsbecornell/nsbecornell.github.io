document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');

  fetch('https://www.googleapis.com/calendar/v3/calendars/cornellnsbe@gmail.com/events?key=AIzaSyDRy49_Op-crr6Zpu4bUA5m0zj-wSTz_-s')
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
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,dayGridWeek,dayGridDay'
        },
        displayEventTime: true,
        events: events
      });

      calendar.render();
    })
    .catch(error => console.error(error));
});
