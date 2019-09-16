var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 49.838710, lng: 24.021184},
          zoom: 15,
          disableDefaultUI: true,
          
        });
      }