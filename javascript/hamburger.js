const hamburger = document.querySelector(".hamburger");
const navmenu = document.querySelector(".nav-menu");
const motivationtext = document.querySelector(".motivationtext");
const container = document.querySelector(".container");
let homepage2 = document.getElementById("aboutus");
let service = document.getElementById("service");
let promotion = document.getElementById("promotionid");
let price = document.getElementById("priceid");
let bmi = document.getElementById("bmiid");
let footer = document.getElementById("footerid");
// let homepage = document.getElementById("homepage");

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
    motivationtext.classList.toggle("active");
    container.classList.toggle("active");
    homepage2.classList.toggle("active");
    service.classList.toggle("active");
    // homepage.classList.toggle("active");
    promotion.classList.toggle("blur");
    price.classList.toggle("blur");
    bmi.classList.toggle("blur");
    footer.classList.toggle("blur");
})