console.log("string tutorial")

let a ="great"
console.log(a)

console.log(a[0])
console.log(a[1])
console.log(a[2])
console.log(a[3])
console.log(a[4])
// console.log(a[5])


console.log(a.length)

let real_name = "Shabir";
let friend = "Shan";
console.log("His name is "+ real_name + " and his friend name is " + friend)

// Template lateral
//string interpolation
console.log(`His name is ${real_name} and his friend name is ${friend}`)


//New line (\n)
//Give tab (\t)
console.log("My name is \n arshad")
console.log("My name is \t arshad")

let b = "arshad";
console.log(b.toUpperCase())
console.log(b.toLowerCase())
console.log(b.slice(0,3))
console.log(b.slice(3))
console.log(b.concat(a," like"," awesome"))

console.log(b.replace("ars","Ars"))

//remove whitespaces
let c = "   khyber   "
console.log(c)
let newc = c.trim();
console.log(newc)

//strings are immutable, they well never change i-e;

console.log(b)