var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
  });



  // Swiper
  var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 55000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      568: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 4,
      },
      968: {
        slidesPerView: 5,
      },
    },
  });

