function initMap() {
  const locations = [
    {
      lat: 40.748817,
      lng: -73.985428,
      name: "Midtown",
      address: "1234 Park Avenue, Suite 567, New York, NY 10001",
      contact: "Phone: 806-701-5264, Email: info@tea2go.com",
    }, // Location 1
    {
      lat: 40.702663,
      lng: -73.997419,
    }, // Location 2
    {
      lat: 40.733818,
      lng: -74.059205,
    }, // Location 3
  ];
  let currentLocationIndex = 0;
  let marker = null;
  let infoWindow = null;

  const map = new google.maps.Map(document.getElementById("map"), {
    center: locations[currentLocationIndex],
    zoom: 14, // Set moderate zoom for clearer marker visibility
  });

  // Function to create a marker with description
  function createMarkerWithInfo(location) {
    const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: location.name,
    });

    // Create an info window
    const infoWindow = new google.maps.InfoWindow({
      content: `
          <h3>${location.name}</h3>
          <p>${location.address}</p>
          <p>${location.contact}</p>
      `,
    });

    // Click event handler for the marker
    marker.addListener("click", function () {
      // Open the info window when marker is clicked
      infoWindow.open(map, marker);
    });

    return marker;
  }

  // Create the initial marker
  marker = createMarkerWithInfo(locations[currentLocationIndex]);

  // Function to switch location
  function changeLocation(e) {
    // Get coordinates from data-lat and data-lng attributes
    const lat = parseFloat(e.currentTarget.getAttribute("data-lat"));
    const lng = parseFloat(e.currentTarget.getAttribute("data-lng"));
    const location = {
      lat,
      lng,
      name: e.currentTarget.querySelector("h3").textContent,
      address: e.currentTarget.querySelector("p").textContent,
      contact: "Phone: 806-701-5264, Email: info@tea2go.com",
    };

    // Change the map's coordinates to the selected location
    map.setCenter({ lat, lng });

    // Remove the previous marker and create a new one with updated description
    marker.setMap(null);
    createMarkerWithInfo(location);
  }

  // Get references to the location buttons
  const locationLinks = document.querySelectorAll(".locationButton");

  // Click event handler for the buttons
  for (let i = 0; i < locationLinks.length; i++) {
    locationLinks[i].addEventListener("click", changeLocation);
  }
}
