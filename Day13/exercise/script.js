console.log("DOM Concepts Exercise")


let random = Math.random()
console.log(random)
let cont = document.body.firstElementChild


if (random < 0.20) {

    console.log(cont.children[0].style.color = "white")
    console.log(cont.children[0].style.backgroundColor = "blue")

    console.log(cont.children[1].style.color = "blue")
    console.log(cont.children[1].style.backgroundColor = "aqua")

    console.log(cont.children[2].style.color = "white")
    console.log(cont.children[2].style.backgroundColor = "black")

    console.log(cont.children[3].style.color = "white")
    console.log(cont.children[3].style.backgroundColor = "purple")

    console.log(cont.children[4].style.color = "black")
    console.log(cont.children[4].style.backgroundColor = "pink")
}

//2nd
else if (random >= 0.20 && random < 0.40) {

    console.log(cont.children[0].style.color = "blue")
    console.log(cont.children[0].style.backgroundColor = "aqua")

    console.log(cont.children[1].style.color = "white")
    console.log(cont.children[1].style.backgroundColor = "blue")

    console.log(cont.children[2].style.color = "white")
    console.log(cont.children[2].style.backgroundColor = "black")

    console.log(cont.children[3].style.color = "black")
    console.log(cont.children[3].style.backgroundColor = "pink")

    console.log(cont.children[4].style.color = "white")
    console.log(cont.children[4].style.backgroundColor = "purple")
}

//3rd
else if (random >= 0.40 && random <0.60) {
    
    console.log(cont.children[0].style.color = "black")
    console.log(cont.children[0].style.backgroundColor = "pink")
    
    console.log(cont.children[1].style.color = "white")
    console.log(cont.children[1].style.backgroundColor = "purple")
    
    console.log(cont.children[2].style.color = "blue")
    console.log(cont.children[2].style.backgroundColor = "aqua")
    
    console.log(cont.children[3].style.color = "white")
    console.log(cont.children[3].style.backgroundColor = "blue")
    
        console.log(cont.children[4].style.color = "white")
        console.log(cont.children[4].style.backgroundColor = "black")
}

//4th
else if (random >= 0.60 && random <0.80) {

    console.log(cont.children[0].style.color = "white")
    console.log(cont.children[0].style.backgroundColor = "purple")

    console.log(cont.children[1].style.color = "black")
    console.log(cont.children[1].style.backgroundColor = "pink")

    console.log(cont.children[2].style.color = "white")
    console.log(cont.children[2].style.backgroundColor = "black")

    console.log(cont.children[3].style.color = "blue")
    console.log(cont.children[3].style.backgroundColor = "aqua")

    console.log(cont.children[4].style.color = "white")
    console.log(cont.children[4].style.backgroundColor = "blue")
}

//5th
else {

    console.log(cont.children[0].style.color = "blue")
    console.log(cont.children[0].style.backgroundColor = "aqua")

    console.log(cont.children[1].style.color = "white")
    console.log(cont.children[1].style.backgroundColor = "blue")

    console.log(cont.children[2].style.color = "black")
    console.log(cont.children[2].style.backgroundColor = "pink")

    console.log(cont.children[3].style.color = "white")
    console.log(cont.children[3].style.backgroundColor = "purple")

    console.log(cont.children[4].style.color = "white")
    console.log(cont.children[4].style.backgroundColor = "black")

}

