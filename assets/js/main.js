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
    delay: 3000,
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
