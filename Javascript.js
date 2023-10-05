// Srocll reveal
ScrollReveal({
  reset: "true",
  distance: "80px",
  duration: 2000,
  delay: 200,
});

ScrollReveal().reveal(".main-row, .slide1, .chef1", {
  origin: "top",
});

ScrollReveal().reveal(".box, about, footer", {
  origin: "bottom",
});

ScrollReveal().reveal(".row, .slide2, .chef2 ", {
  origin: "left",
});

ScrollReveal().reveal(".slide3, .chef3", {
  origin: "right",
});

let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
};

var swiper = new Swiper(".home-slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 7500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show-items");
    } else {
      entry.target.classList.remove("show-items");
    }
  });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) => observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) => observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) => observer.observe(el));
