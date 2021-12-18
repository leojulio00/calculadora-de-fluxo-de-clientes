const cards = document.querySelectorAll(".cards")
var hTrabalho = document.querySelector(".hTrabalho")
var input1 = document.querySelector(".inputCard1")
var input2 = document.querySelector(".inputCard2")
var input3 = document.querySelector(".inputCard3")
var input4 = document.querySelector(".inputCard4")
var input5 = document.querySelector(".inputCard5")
var nClientesPD = document.querySelector(".nClientesPD")
var nClientesPB = document.querySelector(".nClientesPB")
var lucroBDia = document.querySelector(".lucroBDia")
var lucroBDiaB = document.querySelector(".lucroBDiaB")
var lucroBMes = document.querySelector(".lucroBMes")
var lucroBAno = document.querySelector(".lucroBAno")


/*if(input1 != null, input2 != null, input3 != null, input4 != null){
    input1.value
    input2.value
    input3.value
    input4.value
}*/

var results = document.querySelector(".results")
var btn1 = document.querySelector(".btnInput1")
var btn2 = document.querySelector(".btnInput2")
var btn3 = document.querySelector(".btnInput3")
var btn4 = document.querySelector(".btnInput4")
var btn5 = document.querySelector(".btnInput5")


function passarHTrabalho(){
    let valor = input3.value
    hTrabalho.innerHTML = valor
}

function calcClientes(){
    var valorInput1 = input1.value
    var valorInput2 = input2.value
    var valorInput3 = input3.value
    var valorInput4 = input4.value
    var minutosDeTrabalho = valorInput3 * 60

    var nClientesPBalcao = Math.round((minutosDeTrabalho - valorInput4) / valorInput2)
    var nClientesPDia = Math.round(nClientesPBalcao * valorInput1)

    nClientesPD.innerHTML = nClientesPDia
    nClientesPB.innerHTML = nClientesPBalcao

    
        var valorInput5 = input5.value
    
        var lucroDiario = nClientesPDia * valorInput5
        var lucroDiarioBalcao = nClientesPBalcao * valorInput5
        var lucroMensal = lucroDiario * 30
        var lucroAnual = lucroMensal * 12

            lucroBDia.innerHTML = lucroDiario + " Mts"
            lucroBDiaB.innerHTML = lucroDiarioBalcao + " Mts"
            lucroBMes.innerHTML = lucroMensal + " Mts"
            lucroBAno.innerHTML = lucroAnual + " Mts"
        
    
    
}



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
    if(cards[4].classList.contains("activeCard")){
        return 4
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
        var n = indexActiveCard() 
    + 1
        console.log(indexActiveCard())
        cards[indexActiveCard()].classList.remove("activeCard")
        cards[n].classList.add("activeCard")
    }

    
})

btn5.addEventListener("click", ()=>{
    if(input5.value == ""){
        alert("Preencha o campo em branco antes de seguir.")
    }else{
        cards[indexActiveCard()].classList.remove("activeCard")
        results.style.display = "block"
        results.classList.add("activeCard")

        passarHTrabalho()
        calcClientes()
    }

    
})










