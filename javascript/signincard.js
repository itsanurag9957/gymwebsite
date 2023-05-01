function showsignin(){                                  //function will run on clicking the signin button on navigation bar
    const btn = document.getElementById("navbarsignin");
    let card = document.getElementById("card");
    let homepage = document.getElementById("homepage");
    let homepage2 = document.getElementById("aboutus");
    let cross = document.getElementById("cross");
    let service = document.getElementById("service");
    let promotion=document.getElementById("promotionid");
    let price=document.getElementById("priceid");
    let bmi =document.getElementById("bmiid");
    let footer=document.getElementById("footerid");


    card.classList.add("active");
    homepage.classList.add("active");
    homepage2.classList.add("active");
    btn.classList.add("active");
    cross.classList.remove("active");
    service.classList.add("active");
    promotion.classList.add("blur");
    price.classList.add("blur");
    bmi.classList.add("blur");
    footer.classList.add("blur");

    cross.addEventListener("click",()=>{              //Click event on x mark on sign in card which will close the sign in card
        card.classList.remove("active");
        homepage.classList.remove("active");
        btn.classList.remove("active");
        cross.classList.add("active");
        homepage2.classList.remove("active");
        service.classList.remove("active");
        promotion.classList.remove("blur");
        price.classList.remove("blur");
        bmi.classList.remove("blur");
        footer.classList.remove("blur");
    })
}



function updatevalue(input){
    input.setAttribute('value',input.value);
}

