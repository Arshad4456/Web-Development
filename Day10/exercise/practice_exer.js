let random = Math.random()
console.log(random)
let a = prompt("Enter Your First Number:")
let b = prompt ("Enter the operator:")
let c = prompt ("Enter Your Second Number:")

let rawyan = {
    "+" : "-",
    "*" : "+",
    "-" : "/",
    "/" : "**",

}

if(random > 0.8){
console.log(`Your result is ${eval(`${a} ${b} ${c}`)}`)
alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}

else {
    b = rawyan[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
