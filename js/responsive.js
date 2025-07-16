document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mobile-menu-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) {
    console.error("Mobile menu toggle failed: Element not found.");
    return;
  }

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");

    const icon = btn.querySelector("i");
    if (icon) {
      icon.classList.toggle("fa-bars");
      icon.classList.toggle("fa-xmark");
    }
  });
});
