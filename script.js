const Glass = document.querySelectorAll(".glass")
const Water = document.querySelectorAll(".glass .water")
const bottle = document.querySelector(".bottle")



let bottleHeight = 0;
const savedElement = [];
Glass.forEach((glass, i) => {


    glass.addEventListener("click", () => {


        Water.forEach((water, j) => {




                if (i === j && bottleHeight<100) {

                    water.style.transition = "all 0.9s ease-in";
                    water.style.height = "100%";
                    bottleHeight += 12.5
                    bottle.children[0].style.height = bottleHeight + "%"
                    
                }   


                // localStorage.setItem("elemntHeights", JSON.stringify(savedElement))



        })

    })
})


