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
      name: "Thomas",
      job: "Graphic Designer",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
      text: "I am extremely satisfied with the software services provided by this company. Their team is highly skilled, professional, and efficient. They delivered a top-notch solution that exceeded my expectations. I highly recommend their services to anyone looking for reliable and innovative software development",
    },
    {
      id: 2,
      name: "Jacob",
      job: "Web Designer",
      img: "https://randomuser.me/api/portraits/men/7.jpg",
      text: "I have been using the software developed by this company for a few months now, and I must say that it has been a game-changer for my business. Its user-friendly, robust and highly customizable, making it an ideal solution for my needs. The team has been responsive and supportive throughout the development process, and Im glad I chose them for this project",
    },
    {
      id: 3,
      name: "Annie",
      job: "Manager",
      img: "https://randomuser.me/api/portraits/women/66.jpg",
      text: "The software services offered by this company are exceptional. They have a deep understanding of the latest technologies and trends, and their solutions are designed to meet the specific needs of their clients. Their team is highly professional, responsive and collaborative, making it easy to work with them. I highly recommend their services to anyone looking for high-quality software solutions.",
    },
    {
      id: 4,
      name: "Daisy",
      job: "CEO",
      img: "https://randomuser.me/api/portraits/women/56.jpg",
      text: "Working with this company has been a great experience. Their software development process is well-organized, and they are always open to feedback and suggestions. They have a talented team of developers, designers and project managers who work together to deliver exceptional solutions. I would definitely recommend their services to anyone looking for reliable and innovative software development",
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
  
  setInterval(autoLoad, 5000);




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
  