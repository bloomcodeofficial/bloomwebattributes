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

const dropdownToggle = document.querySelector('[bw-navbar="toggle-dropdown1"]');
const dropdown = document.querySelector('[bw-navbar="dropdown1"]');

dropdownToggle.addEventListener('click', () => {
  dropdown.classList.toggle('is-fixed');
  dropdown.classList.toggle('is-active');

  // Disable scrolling when the link is clicked
  if (dropdown.classList.contains('is-fixed') && dropdown.classList.contains('is-active')) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
});
