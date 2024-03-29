let poke="There are the best Welthiest and Romantic couple"

const live=80;
let dinesh=["pokesh",22,"kumar",19]
console.log(live)
console.log(dinesh)
console.log(poke)
poke="they live their best version of their life"
console.log(poke)
console.log(dinesh[3])
let obj={
    name:"Pokesh",
    old:23,

}
obj["Status"]="engaged"
console.log(obj)
//operators
//arithmetic,logical.boolean.ternary
console.log(live+22)
console.log(live-22)
console.log(live/22)
console.log(live*22)
console.log(live%22)

//logical operators
        //<,>,<=,>=,==,!=
        console.log(10!=1)
        console.log(50>20)

//comparision operators
    //and or && ||
    console.log(10>=1 || 50<=40)
        console.log(50!=20 && 50<=20)
        console.log(50!=20 && (50<=20 || 10>2))
        console.log((50==20 && 50<=20) && 10>2)

//Ternary Operators
    //condition ? if true or if false;
    let num=40;

    10<0? num = num+ 10: num=0;
    console.log(num)

//Loops

for (let p=10; p>=8; p--){
    console.log("Hi Hellooooo") 
}
for (let i=0; i<dinesh.length; i++){
    console.log(dinesh[i]+" "+i)
}

//While loop
let D = 0;
while(D < dinesh.length){
    console.log(dinesh[D]+"  index value=  "+D)

    D++

   
}
//if loop
console.log("if loop started")
num=0;
if(num==-5){
    console.log(num)
    num=num+10
    console.log(num+"  condition comes to if statement")
}else if(num<4){ 
    console.log(num)
    num=num-10
    console.log(num+" condition comes to else if statement")
}
    else{ 
    console.log("condition falied")
}