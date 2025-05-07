

// async function getdata(){
//     //Simulating getting data from a server
//    return new Promise((resolve, reject) => {
//     setTimeout(() =>{
//         resolve("It's done")
//     },3500)
//     })
// }
// async function main(){
// console.log("Loading modules")

// console.log("Do something else")

// console.log("Load data")

// let data = await getdata()
// console.log(data)

// console.log("process data")

// console.log("task 2")

// }
// main();



//settle means reslove or reject
//reslove means promise has settled successfully 
// reject means promise has not settled successfully

//fetch data

async function getdata(){
    //Simulating getting data from a server
   let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json();
    // let data = await x.text();
    return data
}
async function main(){
console.log("Loading modules")

console.log("Do something else")

console.log("Load data")

let data = await getdata()
console.log(data)

console.log("process data")

console.log("task 2")

}
main();



//post request

// async function getdata(){
//     //Simulating getting data from a server
//    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     body: JSON.stringify({
//         title: 'foo',
//         body: 'bar',
//         userId: 1,
//     }),
//     headers: {
//         'Content-type': 'application/json; charset=UTF-8',
//     },
// })
//     let data = await x.json();
//     return data
// }
// async function main(){
// console.log("Loading modules")

// console.log("Do something else")

// console.log("Load data")

// let data = await getdata()
// console.log(data)

// console.log("process data")

// console.log("task 2")

// }
// main();



//put request for (update)
//delete request
//get request for (direct getting data) e-g; https://www.google.com
//option request            



//method 1
// data.then((v) => {
// console.log(data)
// console.log("process data")
// console.log("task 2")
// })