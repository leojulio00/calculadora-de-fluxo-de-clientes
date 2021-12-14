const cards = document.querySelectorAll(".cards")
const input1 = document.querySelector(".inputCard1").value
const input2 = document.querySelector(".inputCard2").value
const input3 = document.querySelector(".inputCard3").value
const input4 = document.querySelector(".inputCard4").value

var results = document.querySelector(".results")
var btn1 = document.querySelector(".btnInput1")
var btn2 = document.querySelector(".btnInput2")
var btn3 = document.querySelector(".btnInput3")
var btn4 = document.querySelector(".btnInput4")

function indexActiveCard(){
    if(cards[0].classList.contains("activeCard")){
        return 0
    }
    if(cards[1].classList.contains("activeCard")){
        return 1
    }
    if(cards[2].classList.contains("activeCard")){
        return 2
    }
    if(cards[3].classList.contains("activeCard")){
        return 3
    }
}

btn1.addEventListener("click", ()=>{
    var n = indexActiveCard() 
    + 1
    console.log(indexActiveCard())
    cards[indexActiveCard()].classList.remove("activeCard")
    cards[n].classList.add("activeCard")
})

btn2.addEventListener("click", ()=>{
    var n = indexActiveCard() 
    + 1
    console.log(indexActiveCard())
    cards[indexActiveCard()].classList.remove("activeCard")
    cards[n].classList.add("activeCard")
})

btn3.addEventListener("click", ()=>{
    var n = indexActiveCard() 
    + 1
    console.log(indexActiveCard())
    cards[indexActiveCard()].classList.remove("activeCard")
    cards[n].classList.add("activeCard")
})

btn4.addEventListener("click", ()=>{
    cards[indexActiveCard()].classList.remove("activeCard")
    results.style.display = "block"
    results.classList.add("activeCard")
    document.querySelector("body").style.overflowY = "scroll"
})

console.log(input1 + " " + input2 + " " + input3 + " " + input4)




