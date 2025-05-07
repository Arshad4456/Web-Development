

if(localStorage.getItem("name")){
    a = localStorage.getItem("name")
    document.write("Welcome" + a)
}

else{
    let a = prompt("Enter Your Name:")
    localStorage.setItem("name" , a)
    document.write("Welcome " + a)

}