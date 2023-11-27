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
