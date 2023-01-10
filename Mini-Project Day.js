

// recuperation du bouton

let cleaner =document.querySelector(".btn-left")

//click button
cleaner.addEventListener("click", buttonCleaner)

// recuperation des card

// let cleanerAlls = document.querySelectorAll(".area-design > * ")

function buttonCleaner() {
    for (let div of areaDesign.children) {
        div.style.background = "#fff"
        //  console.log(div)  
        
    }
    stockColor = ""  // vide la boucle apres le stockage de couleur et clear effectué
}


// creer les div de zone desin
 
let design = 1440
let areaDesign = document.querySelector(".area-design")

for ( let pointer = 0; pointer < design; pointer++) {
    let card = document.createElement("div")
    card.style.width = "9px";
    card.style.height = "19px";
    card.style.background = "#fff"
    areaDesign.appendChild(card)
    card.addEventListener("click",animation)

}



let stockColor =""
// let animation = document.querySelector("card")
function animation(e) {
 e.target.style.backgroundColor = stockColor;
}

//evenement  style background

function takeStockColor(e) {
    stockColor = e.style.backgroundColor;
    console.log(e.style);

}
