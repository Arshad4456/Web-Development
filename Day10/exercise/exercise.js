let random = Math.random()
console.log(random)
let a = prompt("Enter Your First number : ")
let  c= prompt("Enter Your operator : ")
let b = prompt("Enter Your second number : ")

let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",

}

if(random > 0.8){
//perform correct calculation
console.log(`The result is ${a} ${c} ${b}`)
alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c= obj[c]
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}