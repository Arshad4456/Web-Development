let arr = [1,2,3,4,5,6]
// index   0,1,2,3,4,5

console.log(arr)
console.log(typeof arr)
console.log(arr.length)

//arrays are mutable
arr[4] = 766;
console.log(arr)

//to string

console.log(arr.toString())

//join

console.log(arr.join(" and "))

//pop

console.log(arr.pop())
console.log(arr)

//push
console.log(arr.push(100))
console.log(arr.push("Harry"))

console.log(arr)

//shift
console.log(arr.shift())

//unshift
console.log(arr.unshift("Rawyan"))
console.log(arr)

//delete
console.log(delete arr[6])
console.log(arr)

let arr2 = [11,22,44,33,55,66,77]
//concate

console.log(arr.concat(arr2))

//sort
console.log(arr2.sort())

//splice
console.log(arr2.splice(3,4,45,46))
console.log(arr2)
arr2.splice(3,4,55,66)
console.log(arr2)


arr2.push(44)

arr2.sort()

//slice
console.log(arr2.slice(3,4))
console.log(arr2)


//reverse
console.log(arr2.reverse())