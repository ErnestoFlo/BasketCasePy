
/* COUNTER */
var decreaseBtn = document.getElementById("boton_decrementar");
var increaseBtn = document.getElementById("boton_incrementar");
var counter = document.getElementById("counter");
const input = document.querySelector("input");
var count = 0;
input.addEventListener("input", updateValue);

decreaseBtn.addEventListener("click", () => {
  console.log("resta");
  count--;
  if (count < 0) {
    count = 0;
  }
  counter.value = count;
});
increaseBtn.addEventListener("click", () => {
  console.log("suma");
  count++;
  counter.value = count;
});
counter.onkeydown = function (e) {
  if (
    !(
      (e.keyCode > 95 && e.keyCode < 106) ||
      (e.keyCode > 47 && e.keyCode < 58) ||
      e.keyCode == 8
    )
  ) {
    return false;
  }
};
function updateValue(e) {
  count = e.srcElement.value;
}
function counterStyle() {
  if (count < 0) {
    counter.classList.add("negative");
  } else if (count > 0) {
    counter.classList.add("positive");
  } else {
    counter.classList.remove("negative");
    counter.classList.remove("positive");
  }
}

/* SLIDE */
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}

/* HEADER */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
