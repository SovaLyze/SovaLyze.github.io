const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }
};

showMenu('nav-toggle', 'nav-menu');

const navLink = document.querySelectorAll('.nav_link');

function linkAction() {
  navLink.forEach((n) => n.classList.remove('active'));
  this.classList.add('active');

  const navMenu = document.getElementById('nav-menu');
  navMenu.classList.remove('show');

  $('.menu-btn i').toggleClass('active');
}

navLink.forEach((n) => n.addEventListener('click', linkAction));

$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
    if (this.scrollY > 300) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  $('.menu-btn').click(function () {
    $('.menu-btn i').toggleClass('active');
  });

  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });

  var typed = new Typed('.typing', {
    strings: ['a Junior Java Developer.', 'a Gamer.', 'an Engineer.'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed('.typing-2', {
    strings: ['a Developer.', 'a Gamer.', 'an Introvert.'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
});
