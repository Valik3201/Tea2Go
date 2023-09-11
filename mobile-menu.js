// Добавляем обработчик события для кнопки "бургер"
const mobileMenuIcon = document.querySelector(".mobile-menu-icon");
const mobileNavMenu = document.querySelector(".mobile-nav-menu");

mobileMenuIcon.addEventListener("click", function () {
  mobileMenuIcon.classList.toggle("active");
  mobileNavMenu.classList.toggle("active");
});

// Добавляем обработчик события для изменения размера окна
window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    mobileNavMenu.classList.remove("active");
    mobileMenuIcon.classList.remove("active");
  }
});
