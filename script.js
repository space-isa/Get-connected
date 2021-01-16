// This webpage shows sample locations in NYC, public libraries and parks,
// that have free Wi-Fi or Wi-Fi services freely available for public access. 
// A user can click on a geolocation marker to view a pop-up bubble containing
// site information (e.g., Extended Wi-Fi available 24/7) as well as to access
// directions using an embedded hyperlink.


function initMap() {
    // Each location has: 1) street address, 2) features, and 3) directions,
    // in addition to a latitude and longitude for mapping.

    // Queens Public Libraries
    var auburndale_qpl = {
        info:
            '<strong>Auburndale Library</strong><br>\
            25-55 Francis Lewis Boulevard<br>\
            Remote printing available<br>\
            <a href="https://goo.gl/maps/oNV17ka7UoJWhWaj7">Get Directions</a>',
        lat: 40.773680,
        long: -73.796430,
    }
    // Brooklyn Public Libraries 
    var crown_heights_bpl = {
        info:
            '<strong>Crown Heights Library</strong><br>\
            560 New York Ave<br>\
            Extended Wi-Fi available 24/7<br>\
            <a href="https://goo.gl/maps/m6UrJ2rxP86M2XgN6">Get Directions</a>',
        lat: 40.661000,
        long: -73.947750,
    }

    var bushwick_bpl = {
        info:
            '<strong>Bushwick Library</strong><br>\
            340 Bushwick Ave<br>\
            Extended Wi-Fi available 24/7<br>\
            <a href="https://goo.gl/maps/PbQHTHGr85ivumqw5">Get Directions</a>',
        lat: 40.714100,
        long: -73.984390,
    }

    var stone_ave_bpl = {
        info:
            '<strong>Stone Avenue Library</strong><br>\
            581 Mother Gaston Boulevard<br>\
            Extended Wi-Fi available 24/7<br>\
            <a href="https://goo.gl/maps/PbQHTHGr85ivumqw5">Get Directions</a>',
        lat: 40.664550,
        long: -73.905360,
    }

    // Public parks: Lower East Side
    var tompkins_square_park = {
      info:
        '<strong>Tompkins Square Park</strong><br>\r\
         E 10th St<br>\
         Free Wi-Fi (AT&T)<br>\
          <a href="https://goo.gl/maps/qA4bXLCpXxtmPKfq6">Get Directions</a>',
      lat: 40.714100,
      long: -73.984390,
    }

    var thomas_paine_park = {
        info:
            '<strong>Thomas Paine Park</strong><br>\
            Lafayette St & Worth St<br>\
            <span style="color: #BF213E">Extended Wi-Fi available 24/7</span><br>\
            <a href="https://goo.gl/maps/metUPH8dP3udtF7P9">Get Directions</a>',
        lat: 40.714370,
        long: -74.000480,
    } 
  
    var locations = [
        [auburndale_qpl.info, 
         auburndale_qpl.lat, 
         auburndale_qpl.long, 0],
  
        [crown_heights_bpl.info, 
         crown_heights_bpl.lat, 
         crown_heights_bpl.long, 1],
  
         [bushwick_bpl.info, 
          bushwick_bpl.lat, 
          bushwick_bpl.long, 2],

        [stone_ave_bpl.info, 
         stone_ave_bpl.lat, 
         stone_ave_bpl.long, 3],

        [tompkins_square_park.info, 
         tompkins_square_park.lat, 
         tompkins_square_park.long, 4],

        [thomas_paine_park.info, 
         thomas_paine_park.lat, 
         thomas_paine_park.long, 5],
      ]

    // The map is centered on the Henry Street Settlement
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: new google.maps.LatLng(40.714100, -73.984390),
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    })

    // Create markers
    var infowindow = new google.maps.InfoWindow({})
    var marker, i
    for (i = 0; i < locations.length; i++) {
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
      })
  
      google.maps.event.addListener(marker, 'click',
        (function (marker, i) {
          return function () {
            infowindow.setContent(locations[i][0])
            infowindow.open(map, marker)
          }
        })(marker, i)
      )
    }
  }