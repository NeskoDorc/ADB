




// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");
var header2 = document.getElementById("myHeader2");

// Get the offset position of the navbar
var sticky = header.offsetTop;
var sticky = header2.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header2.classList.add("sticky");
    header2.classList.add("po");
  } else {
    header.classList.remove("sticky");
    header2.classList.remove("sticky");
    header2.classList.remove("po");
  }
}








