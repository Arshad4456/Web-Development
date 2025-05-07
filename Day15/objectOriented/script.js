

class animal{
    constructor(name){
        this.name = name;
        console.log("This is first sentence of costructor")
    }

    eats(){
        console.log("mai kata hoo")
    }

    jumps(){
        console.log("mai kood sakta hoo")
    }
}

//extends
class lion extends animal{
    constructor(name){
        super(name)
        console.log("Ye  lion hai bhai")
    }

    // override method
    eats(){
        console.log("mai kata hoo per roar")

        // super keyword
        super.eats();
    }
}

let a = new animal("Bunny");
console.log(a)

let l = new lion("Roar");
console.log(l);



// instanceof

console.log(l instanceof lion)