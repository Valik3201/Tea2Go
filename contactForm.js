document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  contactForm.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        successMessage.style.display = "block";
        contactForm.reset();
      } else {
        console.error("Failed to send message.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  });
});
