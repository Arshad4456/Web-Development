let a = prompt("Enter Your First Number: ")
let b = prompt("Enter Your Second Number: ")


//Throw Error
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("You didn't enter numbers!")
}

sum = parseInt(a) + parseInt(b)

console.log("The sum is : ", sum)



//Catch Error
// try {
//     console.log("The sum is :", sum*x)
// } catch (error) {
//     // alert(err.name)
//     // alert(err.message)
//     // alert(err.stack )
//     console.log("Ye to error aa gaya!")
// } finally{
//     console.log("All files are closed.And database connection is also closed!")
// }

// let x = 1;
function main(){
try {
    console.log("The sum is :", sum*x)
} catch (error) {
    // alert(err.name)
    // alert(err.message)
    // alert(err.stack )
    console.log("Ye to error aa gaya!")
} finally{
    console.log("All files are closed.And database connection is also closed!")
}
}

let c = main();