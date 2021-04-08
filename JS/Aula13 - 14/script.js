function contar(){
    let n1 = document.querySelector("#inicio");
    let n2 = document.querySelector("#fim");
    let n3 = document.querySelector("#passo");
    let res = document.querySelector("#res")
        res.innerHTML = "Contando..."
        let i = Number(n1.value)
        let f = Number(n2.value)
        let p = Number(n3.value)        
        for(let cont = i; cont <= f; cont += p){
           
            console.log(cont)
        }
        res.innerHTML = cont
    }


