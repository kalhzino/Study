function jogarDado(){
    const img = document.querySelector("img#img")
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    img.setAttribute("src", `img/${randomNumber}.png`)
}
function animarDado(){
    setTimeout(jogarDado, 500);
    const img = document.querySelector("img#img")
    img.setAttribute("src","img/dice-roll.gif");   
}