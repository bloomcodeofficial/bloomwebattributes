// Show the navbar if the user scrolls up
let lastScrollY = window.scrollY;
const bwNavbar = document.querySelector('[bw-navbar="component"]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    bwNavbar.classList.add('is-fixed');
  } else {
    bwNavbar.classList.remove('is-fixed');
  }

  if (window.scrollY < lastScrollY && window.scrollY > 200) {
    bwNavbar.classList.add('is-active');
  } else {
    bwNavbar.classList.remove('is-active');
  }

  lastScrollY = window.scrollY;
});

// Toggle Dropdown item
const dropdownToggle = document.querySelector('[bw-navbar="toggle-dropdown1"]');
const dropdown = document.querySelector('[bw-navbar="dropdown1"]');

dropdownToggle.addEventListener('click', () => {
  dropdown.classList.toggle('is-active');

  // Disable scrolling when the link is clicked
  if (dropdown.classList.contains('is-active')) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  } else if (window.innerWidth < 991) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
  }
});

// Toggle mobile navbar
const mobileNavToggle = document.querySelector('[bw-navbar="mobile-toggle"]');
const mobileNav = document.querySelector('[bw-navbar="menu"]');

mobileNavToggle.addEventListener('click', () => {
  mobileNavToggle?.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');

  // Disable scrolling when the navbar is visible in mobile
  if (mobileNav.classList.contains('is-active') && window.innerWidth < 991) {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px';
  } else {
    document.body.style.overflow = 'auto';
    document.body.style.paddingRight = '0px';
  }
});

if (window.innerWidth > 991) {
  document.body.style.overflow = 'auto';
  document.body.style.paddingRight = '0px';
}

if (window.innerWidth <= 991) {
  document.body.style.overflow = 'auto';
  document.body.style.paddingRight = '0px';
}
