var geocoder;
var map;
var labels = 1;
var directionsDisplay;
var directionsService;
var destination = [];

var APIHelper = {
    getDirections: null,
};
function initService() {
  //init maps
  geocoder = new google.maps.Geocoder();
  var latlng = new google.maps.LatLng(37.7749, -122.4194);
  var mapOptions = {
    zoom: 5,
    center: latlng
  };
  map = new google.maps.Map(document.getElementById("map"), mapOptions);
  directionsDisplay = new google.maps.DirectionsRenderer({suppressMarkers: true});
  directionsDisplay.setMap(map);

    function getDirections(start, end, onResponse) {
        var transport = 'DRIVING'
        service = new google.maps.DirectionsService;
        var args = {
            origin: start,
            destination: end,
            travelMode: transport
        };
        service.route(args, function (response, status) {
            if (status === 'OK') {
                var r = response.routes[0];
                var l = r.legs[0];
                ret = {
                    "start_addr": l.start_address,
                    "end_addr": l.end_address,
                    "distance": l.distance.text,
                    "transport_type": transport,
                    "duration": l.duration.text,
                };
                onResponse(ret);
            } else {
                window.alert('Oops! something wrong: ' + status);
            }
        });
    };
    APIHelper.getDirections = getDirections;
}

function GetDirections(start, end, onResponse) {
    if (APIHelper.getDirections != null) {
        APIHelper.getDirections(start, end, onResponse);
    } else {
        console.log("APIHelper is not inited!");
    }
}

// function SetMapZoom(zoom) {
//     if (APIHelper.getDirections != null) {
//         APIHelper.map.setZoom(zoom);
//     } else {
//         console.log("APIHelper is not inited!");
//     }
// }
