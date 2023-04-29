function showsignin(){                                  //function will run on clicking the signin button on navigation bar
    const btn = document.getElementById("navbarsignin");
    let card = document.getElementById("card");
    let homepage = document.getElementById("homepage");
    let homepage2 = document.getElementById("aboutus");
    let cross = document.getElementById("cross");


    card.classList.add("active");
    homepage.classList.add("active");
    // homepage2.classList.add("active");
    btn.classList.add("active");
    cross.classList.remove("active");


    cross.addEventListener("click",()=>{              //Click event on x mark on sign in card which will close the sign in card
        card.classList.remove("active");
        homepage.classList.remove("active");
        btn.classList.remove("active");
        cross.classList.add("active");
        // homepage2.classList.remove("active");
    })
}



function updatevalue(input){
    input.setAttribute('value',input.value);
}

