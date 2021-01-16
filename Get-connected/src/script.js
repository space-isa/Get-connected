// The goal is to show three locations in NYC (two libraries and one park)
// that are available for public Wi-Fi or resource access. The user can 
// click on a marker and view that information and a link to get directions 
// in a pop-up bubble.

function initMap() {

    // Each location has: 1) street address, 2) features, 3) Link to directions
    // in addition to a latitude and longitude

    // Auburndale Library, Queens Public Libraries
    var auburndale_qpl = {
      info:
        '<strong>Auburndale Library</strong><br>\
        25-55 Francis Lewis Boulevard<br>\
         Remote printing available<br>\ 
         <a href="https://www.google.com/maps/dir//25-55+Francis+Lewis+Boulevard%2C+Flushing%2C+NY+11358">Get Directions</a>',
      lat: 40.773680,
      long: -73.796430,
    }
  
   // Crown Heights Library, Brooklyn Public Library 
    var crown_heights_bpl = {
      info:
        '<strong>Crown Heights Library</strong><br>\
          560 New York Ave. at Maple St.<br>\
          Extended Wi-Fi available 24/7<br>\
          <a href="http://maps.google.com/maps?saddr=&daddr=560%20New%20York%20Ave.%20at%20Maple%20St.+Brooklyn+NY+11225">Get Directions</a>',
      lat: 40.661000,
      long: -73.947750,
    }
  
    // Tompkins Square Park, Lower East Side
    var tompkins_square_park = {
      info:
        '<strong>Tompkins Square Park</strong><br>\r\
         144 Avenue A<br>\
         Free Wi-Fi (AT&T)<br>\ 
         <a href="https://goo.gl/maps/8hCVN5aZe933woWn6">Get Directions</a>',
      lat: 42.002707,
      long: -87.661236,
    }
  
    var locations = [
      [auburndale_qpl.info, 
       auburndale_qpl.lat, 
       auburndale_qpl.long, 0],

      [crown_heights_bpl.info, 
       crown_heights_bpl.lat, 
       crown_heights_bpl.long, 1],

      [tompkins_square_park.info, 
       tompkins_square_park.lat, 
       tompkins_square_park.long, 2],
      ]
  
    // The map is centered on the Henry Street Settlement
    var map = new google.maps.Map(document.getElementById('map'), {
              zoom: 13,
              center: new google.maps.LatLng(40.714100, -73.984390),
              mapTypeId: google.maps.MapTypeId.ROADMAP,
              })
    // Create markers
    var infowindow = new google.maps.InfoWindow({})
    var marker, i
    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], 
                                             locations[i][2]),
            map: map,
            })
  
      google.maps.event.addListener(
        marker,
        'click',
        (function (marker, i) {
          return function () {
            infowindow.setContent(locations[i][0])
            infowindow.open(map, marker)}
        })(marker, i)
      )
    }
  }