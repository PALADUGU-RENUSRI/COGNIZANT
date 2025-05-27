const loading = document.getElementById("loading");
const container = document.getElementById("eventsContainer");

// Mock API endpoint (simulate using setTimeout with Promise)
function fetchMockEvents() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = [
        { name: "Jazz Night", date: "2025-06-20", category: "Music", seats: 3 },
        { name: "Baking Workshop", date: "2025-07-05", category: "Workshop", seats: 4 },
        { name: "Community Cleanup", date: "2025-06-10", category: "Environment", seats: 5 }
      ];
      // Simulate success or failure randomly (optional)
      Math.random() > 0.1 ? resolve(data) : reject("Failed to fetch events.");
    }, 1500);
  });
}

// Render events
function renderEvents(events) {
  container.innerHTML = "";
  events.forEach(event => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${event.name}</h3>
      <p><strong>Date:</strong> ${event.date}</p>
      <p><strong>Category:</strong> ${event.category}</p>
      <p><strong>Seats:</strong> ${event.seats}</p>
    `;
    container.appendChild(card);
  });
}

// --------- Version 1: .then()/.catch() ----------
/*
fetchMockEvents()
  .then(data => {
    loading.style.display = "none";
    renderEvents(data);
  })
  .catch(err => {
    loading.textContent = "Error loading events: " + err;
  });
*/

// --------- Version 2: async/await ----------
async function loadEvents() {
  try {
    const data = await fetchMockEvents();
    loading.style.display = "none";
    renderEvents(data);
  } catch (err) {
    loading.textContent = "Error loading events: " + err;
  }
}

// Call the async function
loadEvents();
