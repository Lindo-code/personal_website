// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

window.onload = function() {
  randomStr();
  copyright();
};
function scrollFunction() {
  //Get the button:
  const mybutton = document.getElementById("myBtn");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
function copyright() {
  const myCopy = document.getElementById("year");
  const d = new Date();
  const currYear = d.getFullYear();
  const str = `Copyright © ${currYear} Lindo Matabane`;
  myCopy.innerText = str;
}
