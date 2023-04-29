
function ret(){
    const arrow = document.querySelector(".moveuparrow");
    if(window.scrollY>160){
        arrow.classList.add('active');
    }
    else{
        arrow.classList.remove('active');
    }
}
window.addEventListener("scroll",ret);

function scrollotop(){
    window.scrolltotop()
}