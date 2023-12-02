/*=============== ADD SHADOW HEADER ===============*/
const ShadowHeader = () => {
  const header = document.getElementById("header");

  this.scrollY >= 50 ? header.classList.add("shadow-header") : header.classList.remove("shadow-header");
};
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

/*==================== CAREER TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("career__active");
    });
    target.classList.add("career__active");

    tabs.forEach((tab) => {
      tab.classList.remove("career__active");
    });
    tab.classList.add("career__active");
  });
});

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

/*=============== STORE 1 SWIPER ===============*/
let swiperStore1 = new Swiper(".store1__swiper", {
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

/*=============== STORE 2 SWIPER ===============*/
let swiperStore2 = new Swiper(".store2__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",

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

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 3000,
  delay: 300,
  // reset:true,
});

//Home Page
sr.reveal(`.home__data, .socialmedia__container`);
sr.reveal(`.home__images`, { delay: 300 });

//About Page
sr.reveal(`.about__img`, { origin: "left" });
sr.reveal(`.about__description`, { delay: 300, origin: "right" });
sr.reveal(`.about__btn`, { delay: 500 });

//Store page
sr.reveal(`.store1__container, .store2__container`, { delay: 500, origin: "bottom" });
