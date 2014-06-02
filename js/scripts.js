// Foundation 5 Activate! 
$(document).foundation({
	orbit: {
		timer_speed: 10000,
		resume_on_mouseout: true,
		pause_on_hover: true,
		slide_number: false,
		timer_show_progress_bar: false,
		bullets: false,
		timer: true



	}
});


// On page load, do this
$(document).ready(function(){
  
  // Your Scripts
  //google maps
//	http://hpneo.github.io/gmaps/
//  http://www.paulund.co.uk/create-google-maps-with-gmaps-js
//  http://stackoverflow.com/questions/14836296/how-to-use-gmaps-js
var map = new GMaps({
  div: '#mouse_event_map',
  zoom: 14,
  lat: 47.6589,
  lng: -117.4250,
  click: function(e) {
    /*alert('click')*/;
  },
  dragend: function(e) {
    /*alert('dragend')*/;
  }
});

map.addMarker({
      lat: 47.65947,
      lng: -117.42385,
      title: 'Sushi Maru',
      infoWindow: {
        content: '<p>Best sushi in town!</p>' }
    });

});




