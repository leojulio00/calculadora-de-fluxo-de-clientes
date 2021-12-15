var splash = document.querySelector(".splash")

document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("animaSplash")
    }, 3000)
    setTimeout(()=>{
        splash.style.display = "none"
    }, 5000)
})