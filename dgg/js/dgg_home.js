$(document).ready(function () {
  swiperInit();
  videoSwiperInit();
});

function swiperInit() {
  var mySwiper = new Swiper("#bannerSwiper", {
    slidesPerView: 3,
    spaceBetween: 55,
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".banner-next",
      prevEl: ".banner-prev",
    },
  });
}

function videoSwiperInit() {
  var viedoSwiper = new Swiper("#videoSwiper", {
    loop: true,
    navigation: {
      nextEl: ".video-next",
      prevEl: ".video-prev",
    },
  });
}
