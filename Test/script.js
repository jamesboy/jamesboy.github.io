var totalDistance = 0;
var lastSeenAt = {x: null, y: null};

function calcDistance() {
  if (lastSeenAt.x) {
      totalDistance += Math.sqrt(Math.pow(lastSeenAt.y - event.clientY, 2) + Math.pow(lastSeenAt.x - event.clientX, 2));
      var pixelsCovered = Math.round(totalDistance);
      document.getElementById('distance').innerHTML = pixelsCovered;
      if (pixelsCovered >= 1000) {
          document.removeEventListener('mousemove', calcDistance);
          document.getElementById('distance').innerHTML = '1000 pixels covered';
        //   window.location = 'tv5extension10.php?gclid=' + gclid;
          window.location = "https://bing.com";
    }
  }
  lastSeenAt.x = event.clientX;
  lastSeenAt.y = event.clientY;
}

document.addEventListener('mousemove', calcDistance);