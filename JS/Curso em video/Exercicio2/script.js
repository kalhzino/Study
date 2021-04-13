function verificar(){
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector("input#txtano");
    var res = document.querySelector("div#resultado"); 
    var img = document.getElementById("img")
    if(fano.value.length === 0|| fano.value > ano){
        window.alert("verifique o ano e tente novamente")
    }
    else{
        var radsex = document.getElementsByName("radsex");
        var idade = ano - Number(fano.value);
        var genero = ""
        img.src = "images/Cheffenia.png"
        if(radsex[0].checked){
            genero = "masc"
        }
        else if(radsex[1].checked){
            genero = "fem"
        }
        res.innerHTML = `idade cauculada ${idade} e sexo ${genero}`

    }
}