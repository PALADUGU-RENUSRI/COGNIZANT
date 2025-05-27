const form = document.getElementById("registrationForm");
const statusMessage = document.getElementById("statusMessage");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const eventError = document.getElementById("eventError");

// Simulated API function with delay using setTimeout
function mockPostRequest(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Randomly succeed or fail
      Math.random() > 0.2
        ? resolve({ success: true, message: "Registration successful!" })
        : reject({ success: false, message: "Server error, try again." });
    }, 1500); // Simulate 1.5s delay
  });
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  // Reset messages
  nameError.textContent = "";
  emailError.textContent = "";
  eventError.textContent = "";
  statusMessage.textContent = "";
  statusMessage.className = "status";

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
    emailError.textContent = "Invalid email.";
    valid = false;
  }

  if (event.value === "") {
    eventError.textContent = "Select an event.";
    valid = false;
  }

  if (!valid) return;

  // Prepare data
  const formData = {
    name: name.value,
    email: email.value,
    event: event.value,
  };

  statusMessage.textContent = "Submitting...";
  
  try {
    const response = await mockPostRequest(formData);
    statusMessage.textContent = response.message;
    statusMessage.classList.add("success");
    form.reset();
  } catch (error) {
    statusMessage.textContent = error.message;
    statusMessage.classList.add("failure");
  }
});
