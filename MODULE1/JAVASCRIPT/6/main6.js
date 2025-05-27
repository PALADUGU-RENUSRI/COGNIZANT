// Array to store all events
const events = [];

// Add new events using .push()
events.push(
  { name: "Workshop on Baking", date: "2025-06-12", category: "Workshop", seats: 10 },
  { name: "Live Jazz Concert", date: "2025-07-04", category: "Music", seats: 30 },
  { name: "Tech Innovators 2025", date: "2025-08-15", category: "Tech", seats: 25 },
  { name: "Guitar Masterclass", date: "2025-06-25", category: "Music", seats: 20 }
);

// Function to render events
function renderEvents(eventArray) {
  const container = document.getElementById("eventList");
  container.innerHTML = "";

  // Format each event using .map()
  const cards = eventArray.map(event => {
    return `
      <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
        <h3>${event.name}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Category:</strong> ${event.category}</p>
        <p><strong>Seats:</strong> ${event.seats}</p>
      </div>
    `;
  });

  container.innerHTML = cards.join("");
}

// Show only music events using .filter()
function showMusicEvents() {
  const musicEvents = events.filter(event => event.category === "Music");
  renderEvents(musicEvents);
}

// Render all events on load
renderEvents(events);
