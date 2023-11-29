// INITIALLIZING STRICT MODE 
'use strict';

// GETTING DOM STRINGS 

const hamburgerBtn = document.querySelector('.header__bottom--hamburger');
const nav = document.querySelector('.header__bottom--nav');
const modalShow = document.querySelector('.modal');
const navLinks = document.querySelectorAll('.header__bottom--link');

////////////////// SWIPPER DOM STRINGS //////////////////////

/////////////////////////////////////////////////////////////



//////FUNCTION FOR CODE REFACTORING/////////////

const toggleClass = () => {
    nav.classList.toggle('active__nav');
    hamburgerBtn.classList.toggle('active__bar');
    modalShow.classList.toggle('active__modal');
};

// ADDING CLICK EVENT TO HAMBURGER BUTTON 

hamburgerBtn.addEventListener('click', toggleClass);

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        nav.classList.remove('active__nav');
        hamburgerBtn.classList.remove('active__bar');
        modalShow.classList.remove('active__modal');
    });
});

modalShow.addEventListener('click', toggleClass);


////////////SWIPER FUNCTIONALITY //////////////////

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    spaceBetween: 32, 
    grabCursor: true,
    centeredSlides: true,
    slidesPerview: 'auto',
    
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });



  ////////////// CUSTOM API ///////////////////

  const data = [
    {
      id: 1,
      name: "Mikel K.",
      job: "Graphic Designer",
      img: "./assets/images/mikel.jpg",
      text: "As a former satellite internet customer, I am extremely pleased with my choice to switch to Lapariah. The staff is very responsive, the installation tech was prompt and very professional, explaining all as he set up my service. I can easily navigate the website which makes on-line payment simple. I highly recommend Lapariah! Great big city service in the country!",
    },
    {
      id: 2,
      name: "Jacob",
      job: "Web Designer",
      img: "./assets/images/jacob.jpg",
      text: "I have been using Lapariah for over 2 years. The service has been very reliable. They provide prompt responses to questions and have solved any service issues that occasionally arise. I will continue to use them.",
    },
    {
      id: 3,
      name: "Hassan",
      job: "Manager",
      img: "./assets/images/hassan.jpg",
      text: "I am very happy with my Lapariah. It is really fast and I have told my friends how I love it. So many people complain about their internet being slow. I refer them to Lapariah because I do not have any issues and service men are great too!",
    },
    {
      id: 4,
      name: "Dorcas A.",
      job: "CEO",
      img: "./assets/images/dorcas.jpg",
      text: "I was a little skeptical at first, but love it. Much faster than my old Sprint card and less expensive also. I have had a great experience so far.",
    },
  ];
  
  const img = document.querySelector("#pic");
  const btnNext = document.querySelector("#btn-right");
  const btnPrevious = document.querySelector("#btn-left");
  const name = document.querySelector("#name");
  const role = document.querySelector("#role");
  const text = document.querySelector("#text");
  let index = 0;
  
  //Function on window load
  window.addEventListener("DOMContentLoaded", function () {
    const testimonial = data[0];
    loadTestimonial(testimonial);
  });
  
  function loadTestimonial(data) {
    img.src = data.img;
    name.textContent = data.name;
    text.innerHTML = ` <i class="fa fa-quote-left"></i> ${data.text}
    <i class="fa fa-quote-right"></i>`;
  }
  
  btnNext.addEventListener("click", function () {
    index++;
    if (index > data.length - 1) {
      index = 0;
    }
    loadTestimonial(data[index]);
  });
  btnPrevious.addEventListener("click", function () {
    index--;
    if (index < 0) {
      index = data.length - 1;
    }
    loadTestimonial(data[index]);
  });
  
  function autoLoad() {
    index++;
    if (index > data.length - 1) {
      index = 0;
    }
    if (index < 0) {
      index = data.length - 1;
    }
    loadTestimonial(data[index]);
  }
  
  setInterval(autoLoad, 7000);




  ///////// SCROLLUP //////////////
  // function scrollUp() {
  //   const scrollUp = document.querySelector('#scroll-up');
  //   if(this.scrollY >= 350) scrollUp.classList.toggle('show-scroll');
  // }
  // window.addEventListener('scroll', scrollUp);


  /////////SCROLL REVEAL ////////////////////
  
  const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    delay: 2500,
    delay: 400, 
    reset: true,


  })


  sr.reveal(`.courasel, .cards, .about, .choose, .footer, .team, .testimonial`)
  sr.reavel(`.courasel__slider, .footer__content`, {delay: 500})
  sr.reveal(`.courasel__slider`, {delay: 600, origin: 'bottom'})
  sr.reveal(`.about__section`, {delay: 700, origin: 'left'})
  sr.reveal(`.choose__section`, {delay: 800, origin: 'right'})
  sr.reveal(`.team__content`, {delay: 900, origin: 'left'})
  sr.reveal(`.testimonial__content`, {delay: 1000, origin: 'bottom'})
  