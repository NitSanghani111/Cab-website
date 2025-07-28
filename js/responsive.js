document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      menu.classList.toggle("hidden");

      const icon = btn.querySelector("i");
      if (icon) {
        icon.classList.toggle("fa-bars");
        icon.classList.toggle("fa-xmark");
      }
    });
  }

  const navbar = document.getElementById("navbar");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      // Scrolling down → hide navbar
      navbar.classList.add("-translate-y-full");
    } else {
      // Scrolling up → show navbar
      navbar.classList.remove("-translate-y-full");
    }

    lastScrollY = currentScrollY;
  });
});
