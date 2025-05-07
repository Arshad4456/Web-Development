// console.log("JavaScript Callback Function")

// function arshad(){
//     console.log("this is the first function")
// }

// function func(){
//     console.log("This is the second Function")
// }

// function  funcThird(a, b , callback){
//     console.log(a + b);
//     callback();
// }


// funcThird(10,20, arshad);
// funcThird(10,20, func);

//anynomous function

// (params) => {
  
// }


const callback = (arg) => {
  console.log(arg)
}

const loadScript = (src, callback) => {

    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback("arshad");
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback )