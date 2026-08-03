// Smooth Reveal Animation

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


// Button Hover Effect

const buttons = document.querySelectorAll(".buttons a");

buttons.forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.04)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});


// Navbar Background on Scroll

window.addEventListener("scroll", () => {

    const navbar = document.querySelector(".navbar");

    if(window.scrollY > 50){

        navbar.style.background = "rgba(0,0,0,.75)";

    }else{

        navbar.style.background = "rgba(0,0,0,.35)";

    }

});
