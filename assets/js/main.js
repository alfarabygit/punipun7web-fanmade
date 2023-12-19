/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToogle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

//   menu show if exists
if (navToogle) {
  navToogle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

// menu hidden if exists
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD SHADOW HEADER ===============*/
const ShadowHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove("shadow-header");
};

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");

  this.scrollY >= 350 ? scrollUp.classList.add("show-scroll") : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*==================== PORTFOLIO MODAL ====================*/
const modalViews = document.querySelectorAll(".portfolio__modal"),
  modalButtons = document.querySelectorAll(".portfolio__button"),
  modalClose = document.querySelectorAll(".portfolio__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalButtons.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc, i) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv, i) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper(".home__swiper", {
  loop: true,
  spaceBetween: 24,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1200: {
      spaceBetween: 32,
    },
    // 768: {
    //   slidesPerView: 2,
    //   spaceBetween: 48,
    // },
  },
});

/*=============== MERCHANDISE SWIPER ===============*/
let swiperPoster = new Swiper(".poster__swiper", {
  loop: true,
  spaceBetween: 16,
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: "auto",

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1200: {
      slidesPerView: 4,
      centeredSlides: false,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

// sponsor swiper slider script
let swiperMerchandiseSlider = new Swiper(".slider__swiper", {
  loop: true,
  spaceBetween: 16,
  speed: 5000,
  slidesPerView: "auto",

  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },

  breakpoints: {
    1200: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== EVENT SWIPER ===============*/
let swiperCards = new Swiper(".events__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  speed: 5000,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link");
    } else {
      document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 300,
  // reset:true,
});

//Home Page
sr.reveal(`.home__data, .footer`);
sr.reveal(`.home__images`, { delay: 300 });

//About Page
sr.reveal(`.about__img`, { origin: "left" });
sr.reveal(`.about__description`, { delay: 300, origin: "right" });
sr.reveal(`.about__list`, { delay: 400, origin: "left" });
sr.reveal(`.about__btn`, { delay: 500 });

//Store page
sr.reveal(`.store__data`, { origin: "left" });
sr.reveal(`.store__images`, { origin: "right" });
sr.reveal(`.poster__container, .merchandise__container`, { origin: "bottom" });

//Event Page
sr.reveal(`.events__container`, { delay: 500, origin: "bottom" });

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

//previously selected theme(if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//obtain current theme that has interface by validating light theme class in html
const getCurrentTheme = () => (document.body.classList.contains(darkTheme) ? "dark" : "light");
const getCurrentIcon = () => (themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line");

//validate if user change theme light or dark theme
if (selectedTheme) {
  //if fullfilled, change theme mode
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme);
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](iconTheme);
}

//activate or deactivate manually with theme button
themeButton.addEventListener("click", () => {
  //add or remove icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);

  //save theme and current icon that user choose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
