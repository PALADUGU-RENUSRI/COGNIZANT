// Original events array
const events = [
  { name: "Jazz Night", date: "2025-06-20", category: "Music", seats: 10 },
  { name: "Baking Workshop", date: "2025-07-05", category: "Workshop", seats: 5 },
  { name: "Tech Talk", date: "2025-08-12", category: "Tech", seats: 15 },
  { name: "Community Cleanup", date: "2025-06-10", category: "Environment", seats: 8 },
];

// Function to render event cards
const renderEvents = (eventList = events) => {
  const container = document.getElementById("eventsContainer");
  container.innerHTML = "";

  eventList.forEach(({ name, date, category, seats }) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Date:</strong> ${date}</p>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Seats:</strong> ${seats}</p>
    `;

    container.appendChild(card);
  });
};

// Filter events by category, with default to "All"
const filterEventsByCategory = (category = "All") => {
  // Use spread operator to clone events before filtering
  const clonedEvents = [...events];

  return category === "All"
    ? clonedEvents
    : clonedEvents.filter(event => event.category === category);
};

// Event listeners for buttons
document.getElementById("showAllBtn").onclick = () => {
  renderEvents(filterEventsByCategory());
};

document.getElementById("showMusicBtn").onclick = () => {
  renderEvents(filterEventsByCategory("Music"));
};

// Initial render with all events
renderEvents();
