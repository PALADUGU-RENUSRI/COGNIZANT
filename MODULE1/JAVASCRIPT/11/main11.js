const form = document.getElementById("registrationForm");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const eventError = document.getElementById("eventError");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Clear previous messages
  nameError.textContent = "";
  emailError.textContent = "";
  eventError.textContent = "";
  message.textContent = "";

  const { name, email, event } = form.elements;

  let valid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.textContent = "Invalid email format.";
    valid = false;
  }

  if (event.value === "") {
    eventError.textContent = "Please select an event.";
    valid = false;
  }

  if (valid) {
    message.textContent = `Thank you, ${name.value}! You are registered for ${event.value}.`;
    form.reset(); // Clear form after successful registration
  }
});
