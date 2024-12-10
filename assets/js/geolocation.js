// Check if Geolocation is available
if ("geolocation" in navigator) {
    // Ask for location access
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Successfully retrieved location
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
        // You can use the location here, e.g., send it to your server or display it
      },
      (error) => {
        // Error occurred while retrieving location
        switch (error.code) {
          case error.PERMISSION_DENIED:
            alert("Location access denied by the user.");
            break;
          case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
          case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
          default:
            alert("An unknown error occurred.");
            break;
        }
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }
  