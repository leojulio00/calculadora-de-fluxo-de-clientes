const cards = document.querySelectorAll(".cards")
var input1 = document.querySelector(".inputCard1")
var input2 = document.querySelector(".inputCard2")
var input3 = document.querySelector(".inputCard3")
var input4 = document.querySelector(".inputCard4")


if(input1 != null, input2 != null, input3 != null, input4 != null){
    input1.value
    input2.value
    input3.value
    input4.value
}

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
    if(input1.value == ""){
        alert("Preencha o campo em branco antes de seguir.")
    }else{
        var n = indexActiveCard() 
    + 1
        console.log(indexActiveCard())
        cards[indexActiveCard()].classList.remove("activeCard")
        cards[n].classList.add("activeCard")
    }
})

btn2.addEventListener("click", ()=>{
    if(input2.value == ""){
        alert("Preencha o campo em branco antes de seguir.")
    }else{
        var n = indexActiveCard() 
    + 1
        console.log(indexActiveCard())
        cards[indexActiveCard()].classList.remove("activeCard")
        cards[n].classList.add("activeCard")
    }

})

btn3.addEventListener("click", ()=>{
    if(input3.value == ""){
        alert("Preencha o campo em branco antes de seguir.")
    }else{
        var n = indexActiveCard() 
    + 1
        console.log(indexActiveCard())
        cards[indexActiveCard()].classList.remove("activeCard")
        cards[n].classList.add("activeCard")
    }

    
})

btn4.addEventListener("click", ()=>{
    if(input4.value == ""){
        alert("Preencha o campo em branco antes de seguir.")
    }else{
        cards[indexActiveCard()].classList.remove("activeCard")
        results.style.display = "block"
        results.classList.add("activeCard")
    }

    
})






