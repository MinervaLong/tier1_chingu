/*Parallax effect*/

const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function(){
	let offset = window.pageYOffset;
	parallax.style.backgroundPositionY = offset*0.7 + "px";
});


/* Top button*/
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 125 || document.documentElement.scrollTop > 125) {
    document.getElementById("top-btn").style.display = "block";
  } else {
    document.getElementById("top-btn").style.display = "none";
  }
}