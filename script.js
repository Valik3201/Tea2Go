document.addEventListener("DOMContentLoaded", function () {
  const hiddenSections = document.querySelectorAll(".hidden-section");

  function checkVisibility() {
    for (let section of hiddenSections) {
      const sectionTop = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.8) {
        section.style.opacity = "1";
      }
    }
  }

  checkVisibility();

  window.addEventListener("scroll", checkVisibility);
});
