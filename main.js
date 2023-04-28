const btn = document.getElementById("nav-toggle");
const links = document.querySelector(".nav-links");
btn.addEventListener("click", () => {
  links.classList.toggle("show");
});
