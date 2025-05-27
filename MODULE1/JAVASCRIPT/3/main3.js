// Sample list of events
const events = [
  { name: "Farmers Market", date: "2025-06-15", seats: 10 },
  { name: "Book Fair", date: "2024-12-01", seats: 0 },
  { name: "Music Festival", date: "2025-07-20", seats: 5 },
  { name: "Tech Meetup", date: "2023-08-10", seats: 25 },
];

// Utility function to check if date is in the future
function isFutureDate(dateStr) {
  const today = new Date();
  const eventDate = new Date(dateStr);
  return eventDate >= today;
}

// Display valid events
const container = document.getElementById("eventsContainer");
events.forEach((event, index) => {
  if (isFutureDate(event.date) && event.seats > 0) {
    const eventDiv = document.createElement("div");
    eventDiv.innerHTML = `
      <p><strong>${event.name}</strong> - ${event.date} | Seats: <span id="seats-${index}">${event.seats}</span></p>
      <button onclick="register(${index})">Register</button>
    `;
    container.appendChild(eventDiv);
  }
});

// Registration function with error handling
function register(index) {
  try {
    const event = events[index];
    if (event.seats > 0) {
      event.seats--;
      document.getElementById(`seats-${index}`).textContent = event.seats;
      alert(`You have registered for ${event.name}`);
    } else {
      throw new Error("No seats available");
    }
  } catch (error) {
    alert(`Registration failed: ${error.message}`);
  }
}
