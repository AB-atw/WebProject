var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    autoplay: {
      delay: 3000, // 每次切换间隔时间（单位：毫秒）
      disableOnInteraction: false, // 用户操作后是否停止自动播放（false 不停止）
  },
  loop: true, // 开启循环播放
  speed: 1000, // 切换速度（单位：毫秒）
    slidesPerView: 1,//Swiper容器中可见的幻灯片的数量
    spaceBetween: 0,//幻灯片之间的间距
    pagination: {
      el: ".pagination-banner",
      clickable: true,
    },
  });