
const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const messageError = document.getElementById("messageError");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  nameError.textContent = "";
  emailError.textContent = "";
  messageError.textContent = "";

  if (name.value.trim() === "") {
    nameError.textContent = "Name is required.";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.value.match(emailPattern)) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (message.value.trim() === "") {
    messageError.textContent = "Message cannot be empty.";
    valid = false;
  }

  if (valid) {
    alert("Form submitted successfully!");
    form.reset();
    updateCharCount();
  }
});

// Character Counter
const charCount = document.getElementById("charCount");

message.addEventListener("input", updateCharCount);

function updateCharCount() {
  const remaining = 200 - message.value.length;
  charCount.textContent = `${remaining} characters remaining`;
}

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});
