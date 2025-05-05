console.log("Random business name generator:")

let adj1 = "Crazy";
let adj2 = "Amazing";
let adj3 = "Fire";
// let engine = "Engine";
// let food = "Foods";
// let garments = "Garments";
let word1 = "Bros";
let word2 = "Limited";
let word3 = "Hub";

let shopType = prompt("Enter Type of shop:");

// function shopName(engine,food,garments){
    // let Engine = "Engine";
    // let food = "Foods";
    // let garments = "Garments";
    
    if(shopType === "engine"){
        console.log(shopType + " " + adj3 + " " + word2)
}
else if (shopType === "food"){
    console.log(shopType + " " + adj2 + " " + word1)
}
else if (shopType === "garments"){
    console.log(shopType + " " + adj1 + " " + word3)
}
else{
    // alert("Please Choose different type of Shop Name")
    console.log("Please Choose different type of Shop Name")
}
// }

console.log("Task complete")