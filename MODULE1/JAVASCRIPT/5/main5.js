// Event class constructor
function Event(name, date, seats, category) {
  this.name = name;
  this.date = date;
  this.seats = seats;
  this.category = category;
}

// Method added to Event prototype
Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

// Create event instances
const event1 = new Event("Tech Conference", "2025-08-12", 50, "Tech");
const event2 = new Event("Jazz Night", "2025-06-18", 0, "Music");
const event3 = new Event("Organic Market", "2025-07-01", 25, "Market");

const events = [event1, event2, event3];

// Render events
const container = document.getElementById("eventList");

events.forEach(event => {
  const div = document.createElement("div");

  // Use Object.entries() to list keys and values
  const details = Object.entries(event)
    .map(([key, value]) => `<strong>${key}</strong>: ${value}`)
    .join("<br>");

  const availability = event.checkAvailability()
    ? `<span style="color: green;">Seats Available</span>`
    : `<span style="color: red;">Sold Out</span>`;

  div.innerHTML = `
    <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px;">
      ${details}<br>
      ${availability}
    </div>
  `;

  container.appendChild(div);
});
