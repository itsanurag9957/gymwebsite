function changebg(){
    let scrollValue = window.scrollY;
    let navbar = document.getElementById("head");
    let  service = document.getElementById("serviceinner")
    let imagediv=document.getElementById("imagediv");
    let gymcontainer = document.getElementById("gymcontainer");
    let promotion = document.getElementById("promotion");
    let promotion1 = document.getElementById("promotion1");
    let price = document.getElementById("price");
    let bmi = document.getElementById("bmicontainer");
    let bmihead= document.getElementById("bmihead")





    if(scrollValue>250){
        navbar.classList.add("bgcolor");
    }
    else if(scrollValue<500){
        navbar.classList.remove("bgcolor");
    }
    if(scrollValue>250){
        imagediv.classList.add("moveup")
    }
    else if(scrollValue<250){
        imagediv.classList.remove("moveup")
    }
    if(scrollValue>1144){
        service.classList.add("active");
    }
    else if(scrollValue<1144){
        service.classList.remove("active");
    }
    if(scrollValue>765){
        gymcontainer.classList.add("moveup");
    }
    else if(scrollValue<765){
        gymcontainer.classList.remove("moveup")
    }
    if(scrollValue>1955){
        promotion.classList.add("active");
        promotion1.classList.add("active");
    }
    else if(scrollValue<1955){
        promotion.classList.remove("active");
        promotion1.classList.remove("active");
    }
    if(scrollValue>2735){
        price.classList.add("active");
    }
    else if(scrollValue<2735){
        price.classList.remove("active");
    }
    if(scrollValue>3814){
        bmi.classList.add("active");
        bmihead.classList.add("active");
    }
    else if(scrollValue<3841){
        bmi.classList.remove("active");
        bmihead.classList.remove("active");
    }
//    console.log(scrollValue);
}
window.addEventListener("scroll",changebg);




//counting number on about us section code 
var counterTriggered = false;

        function startCounting(countElement, maxCount) {
            var count = 0;
            var countingInterval = setInterval(function () {
                count++;
                countElement.innerHTML = count + "+";
                if (count >= maxCount) {
                    clearInterval(countingInterval); // stop the counting when count is equal to or greater than maxCount
                }
            }, 30); // increment the count every 1000 milliseconds (1 second)
        }

        window.onscroll = function () {
            if (!counterTriggered && window.pageYOffset > 745) {
                startCounting(document.getElementById("count1"), 500);
                startCounting(document.getElementById("count2"), 50);
                startCounting(document.getElementById("count3"), 16);
                startCounting(document.getElementById("count4"), 25);
                counterTriggered = true;
            }
        };