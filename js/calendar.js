$(document).ready(function() {
  var eventPopupPromise;
  var eventPopupElement;

  var clearPopups = function() {
    clearTimeout(eventPopupPromise);
    if (eventPopupElement) {
      eventPopupElement.popover('destroy');
    }
  };

  var genEventSummary = function(event) {
    if (event.allDay) {
      return 'All day event';
    } else {
      return event.start.format('h:mm a') + ' to ' + event.end.format('h:mm a [(]ZZ[)]');
    }
  };

  $('#calendar').fullCalendar({
    events: { googleCalendarId: 'publicrelations@supermileage.ca' },
    googleCalendarApiKey: 'AIzaSyBNx1fWwdceYo8m0Ngz8Mf_Fjhe4HtTmmc',
    header: {
      left:   'title',
      center: '',
      right:  'month,agendaWeek today prev,next'
    },
    eventMouseover: function(event, jsEvent, view) {
      clearPopups();
      if (view.type !== 'month') { return; }
      eventPopupElement = $(this);

      eventPopupPromise = setTimeout(function() {
        eventPopupElement.popover({
          container: 'body',
          content: genEventSummary(event),
          placement: 'bottom',
          title: event.title,
          trigger: 'manual'
        });
        eventPopupElement.popover('show');
      }, 200);
    },
    eventMouseout: clearPopups
  });
});
