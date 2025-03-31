var swiper02 = new Swiper(".mySwiper-02", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,   
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".pagination-food",
    },
  });