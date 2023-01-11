const header = document.querySelector(".header");
const gnb = document.querySelector(".gnb");
const maincheker = document.querySelector(".gnb__main-menu");
gnb.addEventListener("mouseenter", function () {
  header.classList.add("on");
});
gnb.addEventListener("mouseleave", function () {
  header.classList.remove("on");
});

let lastScrollY = 0;

addEventListener("scroll", (e) => {
  const scrollY = window.scrollY;

  const direction = scrollY > lastScrollY ? "Scroll Down" : "Scroll Up";

  lastScrollY = scrollY;

  if (scrollY > 100) {
    header.classList.add("light");
    if (direction == "Scroll Down") {
      header.classList.add("scroll-on");
      header.classList.remove("on");
    } else {
      header.classList.remove("scroll-on");
    }
  } else {
    header.classList.remove("light");
  }
});
