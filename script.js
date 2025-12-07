// hamburger menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

// scrolling nav
document.querySelectorAll(".nav-menu a").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetID = link.getAttribute("href");
    const section = document.querySelector(targetID);
    if(section){
      window.scrollTo({
        top: section.offsetTop - 60,
        behavior: "smooth"
      });
    }
    navMenu.classList.remove("open");
  });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

document.querySelector('a[href="#lessons"]').addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById("lessons").scrollIntoView({ behavior: "smooth" });
});
