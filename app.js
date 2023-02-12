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

// add the responsive classes after page initialization
window.onload = function () {
  $('.fc-toolbar.fc-header-toolbar').addClass('row col-lg-12');
};

// add the responsive classes when navigating with calendar buttons
$(document).on('click', '.fc-button', function (e) {
  $('.fc-toolbar.fc-header-toolbar').addClass('row col-lg-12');
});