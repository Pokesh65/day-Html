//string replace
let pad3 ="Hello Pokesh how are you man"
console.log(pad3.replace("how are you","i am fine"))
pad4=pad3.replace("how","fine")
console.log(pad4)
//search methos
console.log(pad3.search("y"))
console.log(pad3.search(/P/i))

//match method
console.log("-----match started-------")
console.log(pad3.match(/o/i))
console.log(pad3.match(/o/ig))
//array
console.log("match all")
let pad5 ="Hello Pokesh how are you manoooo"
let convertto=pad5.matchAll("o") 
console.log(convertto)
console.log(Array.from(convertto)[7])

//Search sort accurence duplicates pattern filter

//Array inbulid methods 
console.log("Array inbuild methods started")

let arrypoks=[3,4,5,6,7,8,9,0]
console.log("Push,unshift")
arrypoks.push(20)
arrypoks.unshift(1)
console.log(arrypoks) 

console.log("Pop,shift")
arrypoks.pop()
arrypoks.shift()
console.log(arrypoks)

//array length
console.log("array length:")
console.log(arrypoks.length)
//convert array to string
console.log("convert array to string")
console.log(arrypoks.toString())
console.log(arrypoks.concat(["add"]))

//more than array need to connect we need to use spread operator or three dot
console.log("Array connect")
let arr1=[arrypoks,[66,44,23,5,78,909,21],[0,88,66,55,443,21]]
console.log(arr1)
//spread operator
console.log("Spread operator")
//using ... is spread operator
let arr2=[...arrypoks,...[66,44,23,5,78,909,21],...[0,88,66,55,443,21]]
console.log(arr2)

//sort 
// console.log("Sort used for ascending order")
// arr2.sort()
// console.log(arr2)

//Splice methods 
console.log("Splice mwthods")
arr2.splice(3,1,"down","welcome")
console.log(arr2)

console.log("Splice mwthods 02")
arr2.splice(2,1,"hi","hello")
console.log(arr2.slice(2,5))
//slice method only for array
console.log(arr2.includes("hello"))

//join methods 
console.log(arr2.join(" (+_+) "))

//reverse methods
let arr3=[1,2,3,4,5]
arr3.reverse()
console.log(arr3) 

//fill methods used to one index to another index fill the same value
console.log("Fill started")
arr3.fill("++",3,5)
console.log(arr3)

//array iteration metods.........TBC..........

