// var geocoder;
// var map;
// var labels = 1;
// var directionsDisplay;
// var directionsService;
// var destination = [];

function DummySpots(day) {
  var spots = [];
  var s1 = new Spot;
  s1.location = "Union Station MA";
  spots.push(s1);
  var s2 = new Spot;
  s2.location = "South Station MA";
  spots.push(s2);
  var s3 = new Spot;
  s3.location = "Tuft University MA";
  spots.push(s3);
  var s4 = new Spot;
  s4.location = "Harvard University MA";
  spots.push(s4);
  return spots;
} 

function markSpotsInDay(day) {
  if (DummySpots == null) return;
  directionsService = new google.maps.DirectionsService();
  // var spots = DummySpots(day);
  var spots = (day === 1)? day1: day2;
  console.log(spots);
  for (i = 0; i < spots.length; ++i) {
    var address = spots[i].location;
    geocoder.geocode({ address: address }, function (results, status) {
      if (status == "OK") {
        map.setCenter(results[0].geometry.location);
        var marker = new google.maps.Marker({
          map: map,
          animation: null,
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

          directionsService.route(request, function (result, status) {
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
    // if (i < spots.length-1) {
    //   console.log(i);
    //   spoti = spots[i];
    //   spoti1 = spots[i+1];
    //   GetDirections(spoti.location, spoti1.location, function(ret) {
    //     spoti.nextduration = ret.duration;
    //   }); 
    // }
    map.setZoom(5);
  }
  console.log("zoom: "+map.getZoom());
}
