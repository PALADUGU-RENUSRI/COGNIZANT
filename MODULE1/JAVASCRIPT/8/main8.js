const events = [
  { name: "Jazz Night", date: "2025-06-20", category: "Music", seats: 3 },
  { name: "Baking Workshop", date: "2025-07-05", category: "Workshop", seats: 4 },
  { name: "Community Cleanup", date: "2025-06-10", category: "Environment", seats: 5 },
  { name: "Guitar Jam", date: "2025-08-15", category: "Music", seats: 2 },
];

const container = document.querySelector("#eventsContainer");
const categorySelect = document.querySelector("#categorySelect");
const searchInput = document.querySelector("#searchInput");

let filteredEvents = [...events]; // start with all events

// Render events
function renderEvents(eventList) {
  container.innerHTML = "";
  eventList.forEach((event, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const title = document.createElement("h3");
    title.textContent = event.name;

    const date = document.createElement("p");
    date.textContent = `Date: ${event.date}`;

    const category = document.createElement("p");
    category.textContent = `Category: ${event.category}`;

    const seats = document.createElement("p");
    seats.id = `seats-${index}`;
    seats.textContent = `Seats: ${event.seats}`;

    const registerBtn = document.createElement("button");
    registerBtn.textContent = "Register";
    registerBtn.onclick = () => register(index); // onclick handler

    card.append(title, date, category, seats, registerBtn);
    container.appendChild(card);
  });
}

// Register logic
function register(index) {
  const event = filteredEvents[index];
  if (event.seats > 0) {
    event.seats--;
    document.querySelector(`#seats-${index}`).textContent = `Seats: ${event.seats}`;
    alert(`Registered for ${event.name}`);
  } else {
    alert("No seats available!");
  }
}

// Filter by category using onchange
categorySelect.onchange = function () {
  const selectedCategory = categorySelect.value;
  if (selectedCategory === "All") {
    filteredEvents = [...events];
  } else {
    filteredEvents = events.filter(event => event.category === selectedCategory);
  }
  renderEvents(filteredEvents);
};

// Quick search by name using keydown
searchInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const keyword = searchInput.value.toLowerCase();
    filteredEvents = events.filter(event => event.name.toLowerCase().includes(keyword));
    renderEvents(filteredEvents);
  }
});

// Initial render
renderEvents(events);
