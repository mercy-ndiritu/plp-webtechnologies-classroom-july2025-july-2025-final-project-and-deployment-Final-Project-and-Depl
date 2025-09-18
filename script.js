// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

mobileMenuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Section switching
const navLinkElements = document.querySelectorAll(".nav-link, .cta-button");
const sections = document.querySelectorAll(".content-section");

navLinkElements.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const page = link.getAttribute("data-page");

    // Hide all sections
    sections.forEach((s) => s.classList.remove("active"));

    // Show target section
    const target = document.getElementById(page);
    target.classList.add("active");

    // Special case: home needs flex, not block
    if (page === "home") {
      target.style.display = "flex";
    } else {
      document.getElementById("home").style.display = "none";
    }

    // Update active link
    navLinkElements.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");

    // Close mobile menu after click
    navLinks.classList.remove("active");
  });
});

// Contact form submission (demo)
const contactForm = document.getElementById("contactForm");
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for your message! We'll get back to you soon.");
  contactForm.reset();
});
