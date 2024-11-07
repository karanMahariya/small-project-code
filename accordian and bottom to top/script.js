const accordion = document.querySelectorAll('.container');
// console.log(accordion);
accordion.forEach( function(val){
    val.addEventListener('click', function () {
        if (val.classList.contains("active")) {
            val.classList.remove("active");
          } else {
            const valIsOpen = document.querySelectorAll(".active");
            valIsOpen.forEach((valWithIsOpen) => {
              valWithIsOpen.classList.remove("active");
            });
            val.classList.add("active");
          }
      })
})

// Get the button
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};


function scrollFunction() {
  
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction(){
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}