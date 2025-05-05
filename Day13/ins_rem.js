console.log("insert remove through DOM")

console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".box").innerHTML)
console.log(document.querySelector(".box").outerHTML)
console.log(document.querySelector(".box").tagName)
console.log(document.querySelector(".box").nodeName)

console.log(document.querySelector(".container").textContent)


//hidden
// console.log(document.querySelector(".container").hidden = true)



//Change contents
console.log(document.querySelector(".box").innerHTML = "Hey, My Name is Arshad")



// document.querySelector(".box").hasAttribute("style")

// document.querySelector(".box").setAttribute("style",display: inline")

// removeattribute


// .attributes



//dataset :to look for the  createdby

console.log(document.querySelector(".box").dataset)

console.log(document.querySelector(".box").dataset .da)





//Element creation

let div = document.createElement("div");
div.innerHTML = "Hey, i am a new box"

div.setAttribute("class", "created")
document.querySelector(".container").append(div)


// document.querySelector(".container").preappend(div)
// document.querySelector(".container").before(div)
// document.querySelector(".container").after(div)
// document.querySelector(".container").replace(div)

//insert HTML
// let newcont = document.querySelector(".container")
// newcont.insertAdjacentHTML("beforeend", "hey i am insert html")


//Node Removal

// document.querySelector(".box").remove()

//ClassName and ClassList

console.log(document.querySelector(".container").classList)
console.log(document.querySelector(".container").className)



console.log(document.querySelector(".container").classList.add("blue"))

// console.log(document.querySelector(".container").classList.remove("blue")



// If class is present ,so the class will be remove.If class is not present so add the class that's it's called toggle.
// console.log(document.querySelector(".container").classList.toggle("blue")


//contains
console.log(document.querySelector(".container").classList.contains("blue"))

