const form = document.getElementById("registrationForm");
const statusMessage = document.getElementById("statusMessage");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const eventError = document.getElementById("eventError");

// Simulated API with delay
function mockPostRequest(data) {
  console.log("Sending data to mock API:", data); // ✅ Check request payload
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() > 0.2
        ? resolve({ success: true, message: "Registration successful!" })
        : reject({ success: false, message: "Server error occurred." });
    }, 1500);
  });
}

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  console.log("Form submission started"); // ✅ Track start

  nameError.textContent = "";
  emailError.textContent = "";
  eventError.textContent = "";
  statusMessage.textContent = "";
  statusMessage.className = "status";

  const { name, email, event } = form.elements;
  console.log("Captured values:", name.value, email.value, event.value); // ✅ Inspect inputs

  let valid = true;

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    console.warn("Name validation failed"); // ✅ Debug warning
    valid = false;
  }

  if (email.value.trim() === "") {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!/\S+@\S+\.\S+/.test(email.value)) {
    emailError.textContent = "Invalid email format.";
    console.error("Invalid email format"); // ✅ Debug error
    valid = false;
  }

  if (event.value === "") {
    eventError.textContent = "Please select an event.";
    valid = false;
  }

  if (!valid) {
    console.log("Form is invalid. Exiting handler.");
    return;
  }

  const formData = {
    name: name.value,
    email: email.value,
    event: event.value,
  };

  statusMessage.textContent = "Submitting...";

  try {
    const response = await mockPostRequest(formData);
    console.log("Server response:", response); // ✅ View server response
    statusMessage.textContent = response.message;
    statusMessage.classList.add("success");
    form.reset();
  } catch (error) {
    console.error("Fetch error:", error); // ✅ Error from server
    statusMessage.textContent = error.message;
    statusMessage.classList.add("failure");
  }
});
