const siteContent = {
  nav: {
    'nav-item-1': 'Services',
    'nav-item-2': 'Product',
    'nav-item-3': 'Vision',
    'nav-item-4': 'Features',
    'nav-item-5': 'About',
    'nav-item-6': 'Contact',
    'img-src': 'img/logo.png'
  },
  cta: {
    h1: 'DOM Is Awesome',
    button: 'Get Started',
    'img-src': 'img/header-img.png'
  },
  'main-content': {
    'features-h4': 'Features',
    'features-content':
      'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'about-h4': 'About',
    'about-content':
      'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'middle-img-src': 'img/mid-page-accent.jpg',
    'services-h4': 'Services',
    'services-content':
      'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'product-h4': 'Product',
    'product-content':
      'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.',
    'vision-h4': 'Vision',
    'vision-content':
      'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.'
  },
  contact: {
    'contact-h4': 'Contact',
    address: '123 Way 456 Street Somewhere, USA',
    phone: '1 (888) 888-8888',
    email: 'sales@greatidea.io'
  },
  footer: {
    copyright: 'Copyright Great Idea! 2018'
  }
};

// Example: Update the img src for the logo
let logo = document.getElementById('logo-img');
logo.setAttribute('src', siteContent['nav']['img-src']);

let roundImg = document.querySelector('#cta-img');
roundImg.setAttribute('src', siteContent['cta']['img-src']);

let middleImg = document.querySelector('#middle-img');
middleImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

// nav
let navLinks = document.querySelectorAll('nav a');
navLinks.forEach(element => {
  element.style.color = 'green';
});

navLinks[0].textContent = 'Services';
navLinks[1].textContent = 'Product';
navLinks[2].textContent = 'Vision';
navLinks[3].textContent = 'Features';
navLinks[4].textContent = 'About';
navLinks[5].textContent = 'Contact';

let navChild = document.querySelector('nav > a');
let navParent = navChild.parentNode;

let link1 = document.createElement('a');
link1.textContent = 'Last';
navParent.appendChild(link1);

let link2 = document.createElement('a');
link2.textContent = 'First';
navParent.prepend(link2);

// cta
let ctaH1 = document.querySelector('h1');
let linebreak = document.createElement('br');

ctaH1.textContent = 'DOM Is Awesome';

let ctaButton = document.querySelector('button');
ctaButton.textContent = 'Get Started';

// top-content
let topH4s = document.querySelectorAll('.top-content h4');
topH4s[0].textContent = 'Features';
topH4s[1].textContent = 'About';

let topPs = document.querySelectorAll('.top-content p');
topPs[0].textContent =
  'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

topPs[1].textContent =
  'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//bottom-content
let bottomH4s = document.querySelectorAll('.bottom-content h4');
bottomH4s[0].textContent = 'Services';
bottomH4s[1].textContent = 'Product';
bottomH4s[2].textContent = 'Vision';

let bottomPs = document.querySelectorAll('.bottom-content p');
bottomPs[0].textContent =
  'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomPs[1].textContent =
  'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
bottomPs[2].textContent =
  'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

let contactH4 = document.querySelector('.contact h4');
contactH4.textContent = 'Contact';

let contactPs = document.querySelectorAll('.contact p');
contactPs[0].textContent = '123 Way 456 Street Somewhere, USA';
contactPs[1].textContent = '1 (888) 888-8888';
contactPs[2].textContent = 'sales@greatidea.io';

let footerP = document.querySelector('footer p');
footerP.textContent = 'Copyright Great Idea! 2018';
