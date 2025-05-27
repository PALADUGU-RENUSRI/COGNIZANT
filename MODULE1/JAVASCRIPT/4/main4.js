// Event storage
let events = [];

// Closure to track total registrations by category
function createCategoryRegistrationTracker() {
  const registrations = {};

  return function registerCategory(category) {
    if (!registrations[category]) {
      registrations[category] = 0;
    }
    registrations[category]++;
    console.log(`Registrations for ${category}: ${registrations[category]}`);
  };
}

const trackRegistration = createCategoryRegistrationTracker();

// Function to add a new event
function addEvent(name, date, seats, category) {
  events.push({ name, date, seats, category });
}

// Function to register a user for an event
function registerUser(index) {
  try {
    const event = events[index];
    if (event.seats > 0) {
      event.seats--;
      alert(`Registered for ${event.name}`);
      trackRegistration(event.category);
      renderEvents(events); // Re-render to update seats
    } else {
      throw new Error("No seats available");
    }
  } catch (err) {
    alert(`Registration failed: ${err.message}`);
  }
}

// Higher-order function to filter events
function filterEventsByCategory(events, category, callback) {
  let filtered = category === "All" ? events : events.filter(event => event.category === category);
  callback(filtered);
}

// Render events to the DOM
function renderEvents(eventArray) {
  const container = document.getElementById("eventList");
  container.innerHTML = "";

  eventArray.forEach((event, index) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p><strong>${event.name}</strong> (${event.category}) - ${event.date} | Seats: ${event.seats}</p>
      <button onclick="registerUser(${index})">Register</button>
    `;
    container.appendChild(div);
  });
}

// Function called when "Filter Events" button is clicked
function applyFilter() {
  const category = document.getElementById("category").value;
  filterEventsByCategory(events, category, renderEvents);
}

// Initial events
addEvent("Live Music Night", "2025-07-01", 10, "Music");
addEvent("Tech Innovators Meetup", "2025-08-15", 20, "Tech");
addEvent("Weekly Farmers Market", "2025-06-10", 15, "Market");
addEvent("AI Bootcamp", "2025-09-05", 25, "Tech");

// Render all events on page load
renderEvents(events);
