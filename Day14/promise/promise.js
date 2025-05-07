console.log("JavaScript Promise Function")

let prom = new Promise((resolve, reject) => {
let a = Math.random()
if(a<0.5){
    reject("Not random number is supported")
}
else{
    
    setTimeout (() => {
            console.log("Yes, I am done")
            resolve("arshad")
            // reject("not done")
        },3000);
    }
    })



let prom2 = new Promise((resolve, reject) => {
let a = Math.random()
if(a<0.5){
    reject("Not random number is supported 2")
}
else{
    
    setTimeout (() => {
            console.log("Yes, I am done 2")
            resolve("arshad 2")
            // reject("not done")
        },3000);
    }
    })

// let p3 = Promise.all([prom, prom2])
// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err)
// })


       //allSettled

// let p3 = Promise.allSettled([prom, prom2])
// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err)
// })


//race

// let p3 = Promise.race([prom, prom2])
// p3.then((a) => {
//     console.log(a);
// }).catch((err) => {
//     console.log(err)
// })

//any
let p3 = Promise.any([prom, prom2])
p3.then((a) => {
    console.log(a);
}).catch((err) => {
    console.log(err)
})