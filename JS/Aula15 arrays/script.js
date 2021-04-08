var a = [1,2,3,4];
console.log(a);
a.push(5)
console.log(a)
console.log(a[0])
a[1] = 5
console.log(a)
console.log(a.length)
console.log(a.sort())
for(c = 0; c <= a.length; c++){
    console.log(`valor ${a[c]} e posição ${c}`)
    
}
for(let c in a){
    console.log(`valor ${a[c]} e posição ${c}`)
}
console.log(a.indexOf(20))
