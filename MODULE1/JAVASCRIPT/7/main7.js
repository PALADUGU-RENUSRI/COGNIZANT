// Sample event data
const events = [
  { name: "Community Cleanup", date: "2025-06-10", category: "Environment", seats: 5 },
  { name: "Jazz Night", date: "2025-06-20", category: "Music", seats: 3 },
  { name: "Baking Workshop", date: "2025-07-05", category: "Workshop", seats: 4 },
];

// Get container using querySelector
const container = document.querySelector("#eventsContainer");

// Render events dynamically using createElement
function renderEvents() {
  container.innerHTML = ""; // Clear existing content

  events.forEach((event, index) => {
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
    registerBtn.onclick = () => register(index);

    const cancelBtn = document.createElement("button");
    cancelBtn.textContent = "Cancel";
    cancelBtn.style.marginLeft = "10px";
    cancelBtn.onclick = () => cancel(index);

    card.append(title, date, category, seats, registerBtn, cancelBtn);
    container.appendChild(card);
  });
}

// Register function
function register(index) {
  if (events[index].seats > 0) {
    events[index].seats--;
    updateSeatsDisplay(index);
    alert("Registration successful!");
  } else {
    alert("No seats available!");
  }
}

// Cancel registration function
function cancel(index) {
  events[index].seats++;
  updateSeatsDisplay(index);
  alert("Registration cancelled.");
}

// Update the seat count display
function updateSeatsDisplay(index) {
  const seatDisplay = document.querySelector(`#seats-${index}`);
  seatDisplay.textContent = `Seats: ${events[index].seats}`;
}

// Initial rendering
renderEvents();
