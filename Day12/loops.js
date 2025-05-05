
let a = [1,3,5,54,23,2]

//for loop
// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
    
//     console.log(element)
// }


//foreach loop

// a.forEach((value,index,Array) => {
// console.log(value,index,Array)
    
// });


//forin
let obj = {
    a:1,
    b:2,
    c:4
}

for (const key in obj){
    if(Object.prototype.hasOwnProperty.call(obj,key)){
        const element = obj[key];
        console.log(key , element)

    }
}


//forof

for (const iterator of a){
    console.log(iterator)
}
