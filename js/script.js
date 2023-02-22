$('.center').slick({
    centerMode: true,
    centerPadding: '60px',
    // slidesToShow: 3,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
      // navber

      document.addEventListener('DOMContentLoaded', function() {

        const selector = '.nav__link';
        const elems = Array.from(document.querySelectorAll(selector));
        const navigation = document.querySelector('nav');
  
        function makeActive(evt) {
          const target = evt.target;
  
           if (!target || !target.matches(selector)) {
             return;
           }
  
          elems.forEach(elem => elem.classList.remove('active'));
          evt.target.classList.add('active');
        };
  
        navigation.addEventListener('mousedown', makeActive);
  
      });