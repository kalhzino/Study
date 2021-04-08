function contar(){
    let ini = document.getElementById("inicio")
    let fim = document.getElementById("fim")
    let passo = document.querySelector("#passo")
    let resultado = document.getElementById("res")

    if(ini.value.length == 0 || fim.value.length == 0|| passo.value.length == 0){
        window.alert("verifique os dados e tente novamente.")
    }
    else{
        resultado.innerHTML = "contando..."
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            alert("passo invalido, considerando passo 1")
            p = 1;
        }
        if(i < f ){
            for(let c = i; c <= f; c += p){
                resultado.innerHTML += `${c} \u{1f449} `
            }
        }
        else{
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{1f449}`
            }
        }        
       resultado.innerHTML += `\u{1F3C1}`
    }
}

