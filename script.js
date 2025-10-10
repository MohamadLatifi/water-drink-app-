const Glass = document.querySelectorAll(".glass");
const Water = document.querySelectorAll(".glass .water");
const bottle = document.querySelector(".bottle");

let bottleHeight = 0;

Glass.forEach((glass, i) => {
    let isFilde=false;
    glass.addEventListener("click", () => {
        
        Water.forEach((water, j) => {
            
            if (i === j && bottleHeight < 100 && isFilde==false ) {
                water.style.transition = "all 0.9s ease-in";
                water.style.height = "100%";
                bottleHeight += 12.5;
                bottle.children[0].style.height = bottleHeight + "%";
                isFilde = true;

            }

        })

    }
    )
})

                // if (i === j && bottleHeight < 100 || i === false) {
                //     console.log("dubbelclick");
                //     water.style.transition = "all 0.9s ease-in";
                //     water.style.height = "0%";
                //     bottleHeight += -12.5
                //     bottle.children[0].style.height = bottleHeight + "%"

                // }