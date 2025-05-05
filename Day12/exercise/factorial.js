
//factorial of 6 with reduce method

// let arr1 = [6,5,4,3,2,1]

// const fact = ((a,b)=>{
//     return a * b;
// })

// console.log(arr1.reduce(fact))




//factorial of 6 through for loops

let arr1 = [6,5,4,3,2,1]
let fact = 1;

for (let i= 0; i < arr1.length ; i++) {
    const element = arr1[i];
     fact *= element;

     console.log(fact)
    }

    console.log(fact)
    


