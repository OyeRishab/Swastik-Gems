const btn = document.getElementById("toggle-btn");
const links = document.querySelector(".nav-links");
btn.addEventListener("click", () => {
  links.classList.toggle("show");
  btn.classList.toggle("fa-xmark");
});

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.classList.remove("show");
    btn.classList.remove("fa-xmark");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 130;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});

var splide = new Splide(".splide", {
  type: "fade",
  rewind: true,
});

splide.mount();
