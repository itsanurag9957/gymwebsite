let index = 0;
let colorarr = ['url("./images/image1.jpg")', 'url("./images/image2.jpg")', 'url("./images/image3.jpg")', 'url("./images/image4.jpg")', 'url("./images/image5.jpg")'];
function changebackground() {
    let section = document.getElementById("homepage");
    section.style.backgroundImage = colorarr[index];
    index = index + 1;
    if (index > colorarr.length) {
        index = 0;
    }

}

function changeTxtBackground(){
    let text1="Fitness is not a Destination<br>But a Journey";
    let text2="Train Your Body<br>One rep at a time";
    let motivationtext = document.getElementById("mtext2");
    if(motivationtext.innerHTML==text1){
        motivationtext.innerHTML=text2;
    }
    else if(motivationtext.innerHTML==text2){
        motivationtext.innerHTML=text1;
    }
}
setInterval(changebackground, 3000);