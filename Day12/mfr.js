let arr1 = [1,4,2,3,5,6,7]
let arr2 = [];

// for(let index = 0;index < arr1.length ; index++){
//     const element = arr1[index]
//     arr2.push(element**2)
//     console.log(arr2)
// }


//map

let arr3 = arr1.map((element)=>{
    return element**2;
})
console.log(arr3)


//filter
const greaterthanthree = ((e)=>{
    if(e>3){
        return true
    }
    return false
})

console.log(arr1.filter(greaterthanthree))
console.log(arr1)

//reduce
let arr4 = [1,2,4,5,6]

const red = ((a,b) =>{
 return a * b;
})

console.log(arr4.reduce(red))



//arry.from

console.log(Array.from("Rawyan"));