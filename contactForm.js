const contactForm = document.getElementById("contactForm");
const messageSentDiv = document.getElementById("successMessage");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const subjectValue = subjectInput.value.trim();
  const messageValue = messageInput.value.trim();

  if (!nameValue || !emailValue || !subjectValue || !messageValue) {
    alert("Please fill in all required fields.");
  } else {
    messageSentDiv.style.display = "block";
    contactForm.reset();
  }
});
