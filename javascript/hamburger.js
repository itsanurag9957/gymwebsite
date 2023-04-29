const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
const motivationtext = document.querySelector(".motivationtext");
const container = document.querySelector(".container");
    hamburger.addEventListener('click',()=>{
        hamburger.classList.toggle("active");
        navmenu.classList.toggle("active");
        motivationtext.classList.toggle("active");
        container.classList.toggle("active");
        })