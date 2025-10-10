const Glass = document.querySelectorAll(".glass");
const Water = document.querySelectorAll(".glass .water");
const bottle = document.querySelector(".bottle");

let bottleHeight = JSON.parse(localStorage.getItem("bottleHeight")) || 0;
// let glassStates = JSON.parse(localStorage.getItem("glassStates")) || [];
bottle.children[0].style.height = bottleHeight + "%";

Glass.forEach((glass, i) => {
    let isFilled = false;
    glass.addEventListener("click", () => {
        Water.forEach((water, j) => {
            if (i === j && bottleHeight < 100 && isFilled == false) {
                water.style.transition = "all 0.9s ease-in";
                water.style.height = "100%";
                bottleHeight += 12.5;
                bottle.children[0].style.height = bottleHeight + "%";
                isFilled = true;

                localStorage.setItem("bottleHeight", JSON.stringify(bottleHeight))
            }
        });
    });
});



// if (i === j && bottleHeight < 100 || i === false) {
//     console.log("dubbelclick");
//     water.style.transition = "all 0.9s ease-in";
//     water.style.height = "0%";
//     bottleHeight += -12.5
//     bottle.children[0].style.height = bottleHeight + "%"

// }



