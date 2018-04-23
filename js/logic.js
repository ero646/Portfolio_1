

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("mobileNav");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

//Google Map API
function myMap() {
    myCenter = new google.maps.LatLng(41.8781, -87.6298);
    var mapOptions = {
      center: myCenter,
      zoom: 11,
      scrollwheel: false,
      draggable: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(
      document.getElementById("googleMap"),
      mapOptions
    );
  
    var marker = new google.maps.Marker({
      position: myCenter
    });
    marker.setMap(map);
  }