console.log("id class selector by document")

//By Classname

// let boxes = document.getElementsByClassName("box")

// console.log(boxes)

// boxes[2].style.backgroundColor = "red"


//By Id
// document.getElementById("greenbox").style.backgroundColor = "green";
// document.getElementById("redbox").style.backgroundColor = "red";

// By querySelector
// document.querySelector(".box").style.backgroundColor = "green";


// By querySelectorAll

// document.querySelectorAll(".box").style.backgroundColor = "green";


document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
})

//By Tag
// document.getElementsByTagName("div")

//By Name
// document.getElementsByName("khan")


// matches
// document.getElementsByTagName("div")
// e[4].matches("redbox")


// closest
e[4].closest("conatiner")


// contains
// document.querySelector(".container").contains (e[2])
