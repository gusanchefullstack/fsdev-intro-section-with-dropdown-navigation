const menuToggle = document.querySelector(".header__menu-toggle");
const nav = document.querySelector(".nav");
const overlay = document.querySelector(".nav__overlay");
const dropdownButtons = document.querySelectorAll(".nav__link--dropdown");

function openMenu() {
  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close menu");
  nav.classList.add("is-open");
  document.body.classList.add("menu-open");
}

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open menu");
  nav.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  if (isOpen) {
    closeMenu();
  } else {
    openMenu();
  }
});

overlay.addEventListener("click", closeMenu);

dropdownButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";

    // Close other dropdowns
    dropdownButtons.forEach((otherButton) => {
      if (otherButton !== button) {
        otherButton.setAttribute("aria-expanded", "false");
      }
    });

    button.setAttribute("aria-expanded", isExpanded ? "false" : "true");
  });
});

// Close dropdowns when clicking outside
document.addEventListener("click", (e) => {
  if (!e.target.closest(".nav__item--dropdown")) {
    dropdownButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
  }
});

// Close menu on Escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
    dropdownButtons.forEach((button) => {
      button.setAttribute("aria-expanded", "false");
    });
  }
});
