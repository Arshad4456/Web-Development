

async function sleep() {
  return  new Promise ((resolve, reject) => {
    setTimeout(() => {
        resolve(655)
    }, 1000);
    })
    
}


//IIFE(Immediate Invoked Function Expression)
(async function main(){

    let a = await sleep();
    console.log(a)
    let b = await sleep();
    console.log(b)


    //Destructuring
    // let [x,y] = [2,3]
    // console.log(x, y)


    //only occur 4 because of rest
    // let [x, y, rest] = [2, 3, 4, 5, 6 , 7, 8]
    // console.log(x, y, rest)

    //all will occur
    // let [x, y, ...rest] = [2, 3, 4, 5, 6 , 7, 8]
    // console.log(x, y, rest)


    //Destructuring through object
    // let obj = {
    //     p: 1,
    //     q: 3,
    //     r: 4
    // }

    // let {p, q} = obj;
    // console.log(p, q)



    //spread syntax
    function sum(d, e, f){
        return d + e + f;
    }

    let arr = [6, 4, 5]
    console.log(sum(arr[0], arr[1], arr[2]))
    // console.log(...arr)  (means that spread the array)
    console.log(sum(...arr))


    //Hoisting
    //it's only occur in var
    // var a1 = 6
    //if we write console.log(a1) at the top this will show us the undefined in the console, but if we use let and const then in the console we will see an error

})();