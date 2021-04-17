var tot = [];

adicionarVetor = () => {
    let n = document.querySelector("input#txtnum");
    let select = document.querySelector("#slnum");
    let item = document.createElement("option");
    if(n.length == 0 || n.value < 1 || n.value > 100 ){
        alert("Verifique os dados e tente novamente.")
    }
    else{
    item.text = n.value;
    select.appendChild(item);
    tot.push(Number(n.value));
    }
    document.querySelector("#txtnum").focus();
    return{ tot : tot,
    type: Number,}
};

function SomatoriaElementos(){
   QtdElementos = tot.length;
   let n = document.querySelector("#SomaElementos")
   n.innerHTML = `Numero de elementos: ${QtdElementos}`
   return QtdElementos;
}
function SomaArray(){
    soma = 0;
    for(let elementoNoArray in tot){ //tot é meu array
        soma += tot[elementoNoArray]
    }
    let p = document.querySelector("p#SomaArray")
    p.innerHTML = `total da somatória dos elementos: ${soma}`
    return soma;
    
}
function MediaCalc (){
    QtdElementos = SomatoriaElementos();
    Soma = SomaArray();
    media = soma / QtdElementos;
    document.querySelector("p#MediaCalc").innerHTML = (`a media é: ${media}`)
    return media;
}

function MaiorNumero(){
    let maior = tot[0];
    for(let i in tot){
        if(tot[i] > maior){
            maior = tot[i]
        
        }
    }
    document.querySelector("p#MaiorNum").innerHTML = `o Maior é: ${maior}`
}
function MenorNumero(){
    let menor = tot[0];
    for(let i in tot){
        if(tot[i] < menor){
            menor = tot[i]
        
        }
    }
    document.querySelector("p#MenorNum").innerHTML = `o menor é: ${menor}`
}

chamada = () => {
    SomatoriaElementos()
    SomaArray()
    MediaCalc()
    MaiorNumero()
    MenorNumero()
};

