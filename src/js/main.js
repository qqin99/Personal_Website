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
  selectElementByClass('education-section'),
  selectElementByClass('skills-section'),
  selectElementByClass('projects-section'),
  selectElementByClass('contact-section'),
];
// section id : navbar a class name
const navItems = {
  home: selectElementByClass('homeNavItem'),
  education: selectElementByClass('eduNavItem'),
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


/************** Carousel slider show************** */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

var arrow1 = document.getElementById("arrow1");
var arrow2 = document.getElementById("arrow2");
arrow1.onclick = function() {
    plusSlide(-1);
}
arrow2.onclick = function() {
    plusSlide(1);
}


/************** modal *******************/
var item1 = document.getElementById('item1');
var item2 = document.getElementById('item2');
var item3 = document.getElementById('item3');
var item4 = document.getElementById('item4');
var item5 = document.getElementById('item5');
var item6 = document.getElementById('item6');

var modal1 = document.getElementById('modal1');
var modal2 = document.getElementById('modal2');
var modal3 = document.getElementById('modal3');
var modal4 = document.getElementById('modal4');
var modal5 = document.getElementById('modal5');
var modal6 = document.getElementById('modal6');

var close1 = document.getElementById("close1");
var close2 = document.getElementById("close2");
var close3 = document.getElementById("close3");
var close4 = document.getElementById("close4");
var close5 = document.getElementById("close5");
var close6 = document.getElementById("close6");
// when the user clicks on the modal(icon), show the bigger image;
item1.onclick = function(){
    modal1.style.display = "block";
}
item2.onclick = function(){
    modal2.style.display = "block";
}
item3.onclick = function(){
    modal3.style.display = "block";
}
item4.onclick = function(){
    modal1.style.display = "block";
}
item5.onclick = function(){
    modal2.style.display = "block";
}
item6.onclick = function(){
    modal3.style.display = "block";
}
// When the user clicks on botton (x), close the modal
close1.onclick = function() {
    modal1.style.display = "none";
}
close2.onclick = function() {
    modal2.style.display = "none";
}
close3.onclick = function() {
    modal3.style.display = "none";
}
close4.onclick = function() {
    modal4.style.display = "none";
}
close5.onclick = function() {
    modal5.style.display = "none";
}
close6.onclick = function() {
    modal6.style.display = "none";
}
