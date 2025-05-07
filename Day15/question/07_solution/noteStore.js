

function savedNoteToLocalStorage(note) {
    localStorage.setItem("note", note);
}
let note = localStorage.getItem("note")

// if(note){
//     document.querySelector(".note").innerHTML = note
// }

document.querySelector(".btn").addEventListener("click", () => {
    let note = prompt("Enter Your Note")
    savedNoteToLocalStorage(note)
    document.querySelector(".note").innerHTML = note

})
