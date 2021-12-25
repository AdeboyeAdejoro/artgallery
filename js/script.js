const slider = document.querySelector('.swiper');

let mySwiper = new Swiper(slider, {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  slidePrevClass: 'swiper-button-prev-up',
  slideNextClass: 'swiper-button-next-up',

  // If we need pagination
  pagination: {
    el: '.pag-1',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next-up',
    prevEl: '.swiper-button-prev-up',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

document.addEventListener('DOMContentLoaded', () => {

  const menuButtons = document.querySelectorAll('.header__menu-button');
  const drops = document.querySelectorAll('.dropdown');

  menuButtons.forEach(el => {
    el.addEventListener('click', (e) => {
      let currentButton = e.currentTarget;
      let drop = currentButton.closest('.header__menu-item').querySelector('.dropdown');

      menuButtons.forEach(el => {
        if (el !== currentButton) {
          el.classList.remove('header__menu-button--active');
        }
      });

      drops.forEach(el => {
        if (el !== drop) {
          el.classList.remove('dropdown--active');
        }
      });

      drop.classList.toggle('dropdown--active');
      currentButton.classList.toggle('header__menu-button--active');
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.header__menu')) {
      menuButtons.forEach(el => {
        el.classList.remove('header__menu-button--active');
      });

      drops.forEach(el => {
        el.classList.remove('dropdown--active');
      });
    }
  });
});


const slider1 = document.querySelector('.swiper1');

let mySwiper1 = new Swiper(slider1, {
  slidesPerView: 1,
  slidesPerGroup: 3,
  spaceBetween: 50,
  pagination: {
    el: '.pag-2',
    type: 'fraction',
  },
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});


const defaultSelect = () => {
  const element = document.querySelector('.gallery__select');
  const choices = new Choices(element, {
    searchEnabled: false,
    position: "bottom",
    duplicateItemsAllowed: false,
  });

  let ariaLabel = element.getAttribute('aria-label');
  element.closest('.choices').setAttribute('aria-label', ariaLabel);
};

defaultSelect();

document.addEventListener('DOMContentLoaded', () => {
  const accordions = document.querySelectorAll('.catalog__right-group');

  accordions.forEach(el => {
    el.addEventListener('click', (e) => {
      const self = e.currentTarget;
      const control = self.querySelector('.catalog__right-content');
      const content = self.querySelector('.accordion__content');

      self.classList.toggle('open');

      if (self.classList.contains('open')) {
        control.setAttribute('aria-expanded', true);
        content.setAttribute('aria-hidden', false);
      } else {
        control.setAttribute('aria-expanded', false);
        content.setAttribute('aria-hidden', true);
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.catalog__button').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(event){
      const path = event.currentTarget.dataset.path


      document.querySelectorAll('.catalog__content').forEach(function(tabContent) {
        tabContent.classList.remove('catalog__content--active')
      });
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__content--active');
    });
  });
});


window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('.events__see-all-button').addEventListener('click', function() {
    document.querySelector('.events__cards-hidden').classList.toggle('events__cards--active')
  });
});


const slider2 = document.querySelector('.swiper2');

let mySwiper2 = new Swiper(slider2, {
  slidesPerView: 1,
  slidesPerGroup: 3,
  spaceBetween: 50,
  pagination: {
    el: '.pag-3',
    type: 'fraction',
  },
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 49,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});


const slider3 = document.querySelector('.swiper3');

let mySwiper3 = new Swiper(slider3, {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 50,
  slidePrevClass: 'swiper-button-prev4',
  slideNextClass: 'swiper-button-next4',
  pagination: {
    el: '.pag-3',
    type: 'fraction',
  },
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next4',
    prevEl: '.swiper-button-prev4',
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 34,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    1920: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  }
});


var selector = document.querySelector("input[type='tel']");
  var im = new Inputmask("+7 (999)-999-99-99");

  im.mask(selector);

  new JustValidate('.contacts__form', {
    rules: {
      name: {
        required: true,
        minLength: 2,
        maxLength: 10
      },
      tel: {
        required: true,
        function: (name, value) => {
          const phone = selector.inputmask.unmaskedvalue()
          return Number(phone) && phone.length === 10
        }
      },
    },
  });


  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#burger').addEventListener('click', function() {
      document.querySelector('#header__nav').classList.toggle('header__nav_active')
    })
  })

  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#cancel').addEventListener('click', function() {
      document.querySelector('#header__nav').classList.toggle('header__nav_active')
    })
  })


  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search').addEventListener('click', function() {
      document.querySelector('#header__search-mobile').classList.toggle('header__search-mobile_active')
    })
  })

  window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#search-x').addEventListener('click', function() {
      document.querySelector('#header__search-mobile').classList.toggle('header__search-mobile_active')
    })
  })


  const slider5 = document.querySelector('.swiper5');
  let mySwiper5 = new Swiper(slider5, {
    slidesPerView: 1,
    slidesPerGroup: 3,
    spaceBetween: 50,
    slidePrevClass: 'swiper-button-prev5',
    slideNextClass: 'swiper-button-next5',
    pagination: {
      el: '.pag-5',
      type: 'fraction',
    },
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next5',
      prevEl: '.swiper-button-prev5',
    },
  });


  const slider6 = document.querySelector('.swiper6');
  let mySwiper6 = new Swiper(slider6, {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 5,
    pagination: {
      el: '.pag-6',
      type: 'bullets',
      clickable: true,
    },
    loop: false,
  });




