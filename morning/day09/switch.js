// Switch statement

switch("wednesday"){
    case "monday":
        console.log("option sunday is selected")
        break;
    case "tuesday":
        console.log("option sunday is selected")
        break;
    case "wednesday":
        console.log("option wednesday is selected")
        break;
    case "thursday":
        console.log("option thursday is selected")
        break;
    case "friday":
        console.log("option friday is selected")
        break;
    default:
        console.log("Invalid switch")
        break;
        
    
}


// Advanced for loop
console.log("--------Advanced for loop--------");

let pokesh=["age:",22,"class:","mca","year:"]
//convert array to string
for(let d of pokesh){
    console.log(d)
    
}

// Do-while
console.log("-------Do-while---------");
let y=4;
console.log("do while started")
do{
    console.log("-----do print------")
    console.log(pokesh[y])
    y++ 

}while(y > pokesh.length){
    console.log("while ended")
    
}

//nested if------------------
console.log("------nested if--------");

//object iteration

let ok = {
    name: "Pokesh",
    age:22,
    class:"java"
}

for(let o in ok){
    console.log(o)
    console.log(ok[o])
}
ok["Time"]="8:30"
console.log(ok) 

pokesh[7]="dinesh"
console.log(pokesh)

//String Predefined methods
        //changing string into array

let str="this is string methods"
console.log(str.split(" "))
console.log(str.length+" "+ str)
for(k=0;k<str.length;k++){
    console.log(k)
}
let strtoArray=str.split(" ")
console.log(strtoArray)
console.log(str.length)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
console.log("charact  "+ str.charAt(3))
console.log(str.includes("di"))
console.log("20"===20)

//slice methods
console.log("-----slice methods----");
console.log(str.slice(0,7))
console.log(str.slice(7,13))
console.log(str.slice(-6))

//subString methods
//substring can't take negative value but slice can, both are same
console.log("-----Substring-------");
console.log(str.substring(5,9))

//subStr
console.log("-----Substr-------")
console.log(str.substr(13,7))

//padstart

let pad="Heello"

    console.log(pad.padEnd(15," welcome"))
    console.log(pad.padStart(15,"welcome "))

let pad2="       Hello pokesh how are you"
console.log(pad2==pad)

//trim methods
console.log("-----Trim Methods Started------");
console.log(pad2.trim()==pad)
console.log("----Trim 2 started----");
let pad3=pad2.trim()
console.log(pad3)

//cancat
console.log(pad3.concat(" sir").concat(" welcome"))
console.log(pad3+"  sir")

//repeat methods
console.log(pad3.repeat(3))

//start with end with

console.log(pad2.startsWith("he"))
console.log(pad2.endsWith("lo"))

//String Search methods
console.log(pad3.indexOf("e"))
console.log(pad3.lastIndexOf("l"))




  


