// var geocoder;
// var map;
// var labels = 1;
// var directionsDisplay;
// var directionsService;
// var destination = [];



function codeAddress() {

  directionsService = new google.maps.DirectionsService();


  var address = document.getElementById("address").value;
  geocoder.geocode({ address: address }, function(results, status) {
    if (status == "OK") {
      map.setCenter(results[0].geometry.location);
      var marker = new google.maps.Marker({
        map: map,
        animation: google.maps.Animation.DROP,
        label: labels.toString(),
        position: results[0].geometry.location
      });

      if (labels === 1) {
        destination[0] = address;
      } else {
        destination[1] = address;
        var request = {
          origin: destination[0],
          destination: destination[1],
          travelMode: "DRIVING"
        };

        directionsService.route(request, function(result, status) {
          if (status == "OK") {
            var route = directionsDisplay.setDirections(result);
          }
        });
        destination[0] = address;
      }

      labels += 1;
    } else {
      alert("Geocode was not successful for the following reason: " + status);
    }
  });
}
