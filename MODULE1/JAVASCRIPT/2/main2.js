// Event details
const eventName = "Local Farmers Market";
const eventDate = "2025-06-15";
let availableSeats = 20;

// Display event info using template literals
const eventInfo = `Event: ${eventName} | Date: ${eventDate}`;
document.getElementById("eventInfo").textContent = eventInfo;

// Initial seat display
document.getElementById("seatsInfo").textContent = `Available Seats: ${availableSeats}`;

// Function to register and decrement seats
function register() {
  if (availableSeats > 0) {
    availableSeats--; // Use decrement operator
    document.getElementById("seatsInfo").textContent = `Available Seats: ${availableSeats}`;
    alert("You have successfully registered!");
  } else {
    alert("Sorry, no seats available.");
  }
}
