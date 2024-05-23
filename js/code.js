const block = document.querySelector(".mobile-block");
const img = document.querySelector(".img-close img");
const inputField = document.querySelector(".email-input");

button.addEventListener("click", (event) => {        
    block.classList.toggle("---open");
    curtainActivate();    
    img.addEventListener("click", (event) => {       
        block.classList.remove("---open");
        img.removeEventListener("click", event.listener);
        curtainActivate("Desactivate");
    });    
})

inputField.addEventListener("focus", () => {
    inputField.placeholder = "";
})

inputField.addEventListener("blur", () => {
    inputField.placeholder = "name@email.com";
})

function curtainActivate(toggle) {
    const curtain = document.querySelector(".curtain");
    let bodyHeight = document.body.getClientRects()[0].bottom;    
    curtain.style.height = bodyHeight + "px";
    curtain.style.display = 'block';
    if (toggle == "Desactivate") {
        curtain.style.display = "none";
    }
}