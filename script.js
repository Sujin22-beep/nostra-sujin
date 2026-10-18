var offerbar = document.querySelector(".offerbar")
var btn1 = document.getElementById("offerbarbtn")
btn1.addEventListener("click",function(){
    offerbar.style.display= "none"
})
let sidenav = document.querySelector(".sidenav")
let sidenavbtn = document.getElementById("sidenavbtn")
let menu = document.getElementById("menu")
menu.addEventListener("click",function(){
    sidenav.style.right= 0
})
sidenavbtn.addEventListener("click",function(){
    sidenav.style.right= "-50%"
})

let email =document.getElementById("input")
let btn = document.getElementById("querybtn")
let emailerror = document.getElementById("emailerror")
let emailregex = /^[a-zA-Z0-9]+@gmail\.com/
btn.addEventListener("click",function(){
    if(emailregex.test(email.value ) == false)
    {
        emailerror.textContent= "*Enter valid mail ID"
        emailerror.style.color = "red"

    }
    else{
       emailerror.textContent= "Subscribed Successfully"
       emailerror.style.color = "green"

    }

})
   


var slides = document.querySelectorAll(".add > div");
var currentSlide = 0;

function showSlide(index) {
    slides.forEach(function (slide) {
        slide.style.display = "none";
    });

    slides[index].style.display = "block";
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide =
        (currentSlide - 1 + slides.length) % slides.length;

    showSlide(currentSlide);
}

showSlide(currentSlide);
