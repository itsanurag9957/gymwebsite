let standard = document.getElementById("standard");
let metric = document.getElementById("metric");
let inches = document.getElementById("inches");
let feet = document.getElementById("feet");
let weight = document.getElementById("weight");
let weight2 = document.getElementById("weight2");
let submit = document.getElementById("submit");
let unit = 1;
weight2.disabled=true;


metric.addEventListener("click", function () {
    unit = 0;
    metric.style.boxShadow="3px 3px 8px 0px black";
    standard.style.backgroundColor = "#262626";
    metric.style.backgroundColor = "#e1193e";
    inches.style.display = "block";
    feet.placeholder = "  Feets";
    weight.placeholder = "  Pounds";
    weight2.placeholder = "  Pounds";
})


standard.addEventListener("click", function () {
    standard.style.boxShadow="3px 3px 8px 0px black";
    unit = 1;
    metric.style.backgroundColor = "#262626";
    standard.style.backgroundColor = "#e1193e";
    inches.style.display = "none";
    feet.placeholder = "  Centimeters";
    weight.placeholder = "  Kilograms";
    weight2.placeholder = "  Kilograms";
    feet.style.width = "100%";
})


submit.addEventListener("click", () => {
    weight2.style.display="block";
    if (unit == 1) {
        if (feet.value.length > 0 && weight.value.length > 0) {
            let inputh1 = feet.value;
            let inputw1 = weight.value;
            if (!isNaN(inputh1) && !isNaN(inputw1)) {
                let feet = Number(inputh1);
                let weig = Number(inputw1);
                var bmi = weig / ((feet/100) * (feet/100)) ;
                weight2.value=bmi.toFixed(2)+" kg/m\u00B2 ";
            }
            else {
                weight2.placeholder = " Please Enter Numbers";
            }
        }
        else {
            weight2.placeholder = " Please Enter the Values";
        }
    }




    else if (unit == 0) {
        weight2.style.display="block";
        if (feet.value.length > 0 && inches.value.length > 0 && weight.value.length > 0) {
            let inputh1 = feet.value;
            let inputh2 = inches.value;
            let inputw1 = weight.value;
            if (!isNaN(inputh1) && !isNaN(inputh2) && !isNaN(inputw1)) {
                let feet = Number(inputh1);
                let inches = Number(inputh2);
                let weig = Number(inputw1);

                var totalheight = feet * 12 + inches;
                var bmi = (weig / (totalheight * totalheight)) * 703;
                weight2.value=bmi.toFixed(2)+" kg/m\u00B2 ";
            }
            else {
                weight2.placeholder = " Enter Numbers";
            }
        }
        else {
            weight2.placeholder = " Blank Values";
        }
    }

})







