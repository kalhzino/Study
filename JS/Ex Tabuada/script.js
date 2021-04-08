function tabuada(){
    let tab = document.querySelector("#seltab")
    let num = document.querySelector("#txtnum")

    if(num.value.length == 0){
        alert("digite um numero")
    }
    else{
        tab.innerHTML = ""
        let n = Number(document.querySelector("#txtnum").value)
        for(let c = 1; c <= 10; c ++ ){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}