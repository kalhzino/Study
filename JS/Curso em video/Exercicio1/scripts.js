function carregar(){
    var msg = window.document.querySelector(".Mensagem");
    var sauda = window.document.getElementById("Saudacao")
    var img = window.document.getElementById("img");
    var title = window.document.getElementById("titulo")
    var data = new Date;
    var hora = data.getHours();
    var minutos = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos`;
    title.innerText = ("Deu bom");
    if(hora >= 0 && hora <= 12){
        saudacao = "Bom dia";
        img.src = "images/manha.jpg";
        sauda.innerHTML = saudacao
        document.body.style.backgroundColor = "#0000ff"
    } else if(hora > 12 && hora <= 18){
        saudacao = "Boa Tarde";
        img.src = "images/tarde.jpg";
        sauda.innerHTML = saudacao
        document.body.style.backgroundColor = "#b9846f"
    }else{
        saudacao = "Boa noite";
        img.src = "Images/noite.jpg";
        document.body.style.backgroundColor = "#515154"
        sauda.innerHTML = saudacao
    }
    
}