var APIHelper = {
    getDirections: null
};
function initService() {
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