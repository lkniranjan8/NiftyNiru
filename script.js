document.getElementById("year").textContent = new Date().getFullYear();

const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("navMenu");

toggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});
