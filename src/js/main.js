/* Your JS here. */
// console.log('Hello World!')

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("main-nav");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

//scroll aware navigation
function selectElementByClass(className) {
  return document.querySelector(`.${className}`);
}
//section class names
const sections = [
  selectElementByClass('home-section'),
  selectElementByClass('skills-section'),
  selectElementByClass('projects-section'),
  selectElementByClass('contact-section'),
];
// section id : navbar a class name
const navItems = {
  home: selectElementByClass('homeNavItem'),
  skills: selectElementByClass('skillsNavItem'),
  projects: selectElementByClass('projectsNavItem'),
  contact_me: selectElementByClass('contactNavItem'),
};

// intersection observer setup
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.7,
};

function observerCallback(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // get the nav item corresponding to the id of the section
      // that is currently in view
      const navItem = navItems[entry.target.id];
      // add 'active' class on the navItem
      navItem.classList.add('active');
      // remove 'active' class from any navItem that is not
      // same as 'navItem' defined above
      Object.values(navItems).forEach((item) => {
        if (item != navItem) {
          item.classList.remove('active');
        }
      });
    }
  });
}

const observer = new IntersectionObserver(observerCallback, observerOptions);

sections.forEach((sec) => observer.observe(sec));
