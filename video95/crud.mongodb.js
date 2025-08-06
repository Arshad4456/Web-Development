use ("crudDb")

// console.log(db)


db.createCollection("courses");

// db.courses.insertOne({
//     name: "web dev",
//     price: 6000,
//     duration: "2 months"
// })

// db.courses.insertMany([
//     {
//         name: "python",
//         price: 6000,
//         duration: "3 months"
//     },
//     {
//         name: "Artificial Intelligiance",
//         price: 15000,
//         duration: "5 months"
//     },
//     {
//         name: "Data Science",
//         price: 10000,
//         duration: "5 months"
//     },
//     {
//         name: "Desktop App",
//         price: 12000,
//         duration: "4 months"
//     }


// ])

let a = db.courses.find({ price: 10000})

// let a = db.courses.findOne({ price: 6000})
console.log(a)

// console.log(a.count())

// console.log(a.toArray())


//UPDATE
// db.courses.updateMany({price: 6000}, {$set: {price: 8000}})

//DELETE

// db.courses.deleteOne({ price: 10000})



// Mongo Operaters
// Comparison Operators