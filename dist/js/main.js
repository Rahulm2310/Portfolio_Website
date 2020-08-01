// import projects from './projectData';
const menuBtn = $('.menu-btn');
const menu = $('.menu');
const menuNav = $('.menu-nav');
const menuBranding = $('.menu-branding');

const navItems = document.querySelectorAll('.nav-item');

let showMenu = false;

menuBtn.on('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.addClass('close');
    menu.addClass('show');
    menuNav.addClass('show');
    menuBranding.addClass('show');

    navItems.forEach(function (item) {
      $(item).addClass('show');
    });

    showMenu = true;
  } else {
    menuBtn.removeClass('close');
    menu.removeClass('show');
    menuNav.removeClass('show');
    menuBranding.removeClass('show');

    navItems.forEach(function (item) {
      $(item).removeClass('show');
    });

    showMenu = false;
  }
}

const projects = {
  YourMAIT: {
    title: 'YourMAIT',
    description:
      "YourMAIT is a one stop solution for MAIT (my college) students.It's a web app where students can notes,notices,placement details,upcoming events.There is a feed page where students can create,like,comment posts.Students can also create/join chat rooms",
    image: 'img/projects/yourMait.JPG',
    url: 'https://yourmait.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'NodeJs',
      'ReactJs',
      'ExpressJs',
      'MongoDB',
      'Redux',
      'PassportJs',
      'JWT',
      'JQuery',
      'Axios',
      'Sass',
    ],
  },
  Estylish: {
    title: 'Estylish',
    description:
      "Estylish is a full stack e-commerce platform based on apparels and accessories for men & women. Users can register/login, add products to their cart, process a fake payment using Stripe's payment gateway.",
    image: 'img/projects/estylish.JPG',
    url: 'https://estylish.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'NodeJs',
      'ReactJs',
      'ExpressJs',
      'Firebase',
      'Redux',
      'Reselect',
      'JQuery',
      'Styled Components',
    ],
  },
  LinkedUp: {
    title: 'LinkedUp',
    description:
      'LinkedUp is a social networking platform designed for developers around the world to connect with each other. Users can register/login, create, like, comment, delete posts, setup their own profile as well as view other developer profiles.',
    image: 'img/projects/linkedup.JPG',
    url: 'https://linked-up-net.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'NodeJs',
      'MongoDB',
      'ExpressJs',
      'ReactJs',
      'Redux',
      'Axios',
      'Sass',
      'JWT',
    ],
  },
  'India fights Corona': {
    title: 'India fights Corona',
    description:
      'India fights Corona is a Covid-19 tracker application to track current situation of novel coronavirus in India. It shows state wise as well as district wise data.It also has a news section and a helplines section with covid-19 helplines for all states.',
    image: 'img/projects/corona.JPG',
    url: 'https://india-fights-corona.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'JS',
      'NodeJs',
      'ExpressJs',
      'Bootstrap',
      'Axios',
      'JQuery',
      'API',
    ],
  },
  Swizzle: {
    title: 'Swizzle',
    description:
      "Swizzle is a men's shirt manufacturing company based in New Delhi, India. They are a best quality shirt manufacturer providing one stop solution for all bulk needs.",
    image: 'img/projects/swizzle.JPG',
    url: 'https://swizzleshirts.herokuapp.com',
    technologies: [
      'HTML',
      'CSS',
      'JS',
      'NodeJs',
      'ExpressJs',
      'MongoDB',
      'EJS',
      'JQuery',
      'Axios',
    ],
  },
};

//show Project Details Modal
$('.item .btn-light').on('click', function () {
  const name = $(this).text();
  // console.log(name);
  const project = projects[name];
  // console.log(project);
  //setting up modal
  $('body .modal-title').text(project.title);
  $('.modal-body').html(`
    <div class='project-info'>
    <div class='project-head'>
      <div class='project-image'>
      <img src=${project.image} alt=${project.title}/>
      </div>
      <p class='project-desc'>${project.description}</p>
      </div>
      <h6 class="text-secondary">
            Technologies Used
          </h6>
<div class='skills'>${project.technologies
    .map((tech) => `<p>${tech}</p>`)
    .join('')}</div>
    </div>
  `);
  $('.modal-footer').html(`
    <a href=${project.url} class='btn-light'>Go to project website</a>
  `);
});

//progress bar
var totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function () {
  console.log(totalHeight);
  let progress = (window.pageYOffset / totalHeight) * 100;
  $('#progress-bar').css('height', progress + '%');
};
