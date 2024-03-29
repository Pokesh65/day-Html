//usringa strict
"use strict"

let word="Hello World"
console.log(word);

//String template
let insert="food related"
let wordf=`this is ${insert} website`
console.log(wordf);

//Promise methods similar to try catch methods
let a=5
let promise1=new Promise((yes,reject)=>{
    if(a==4){
        yes("Hello you")//resolve
    }else{
        reject("Error throws")//reject
    }

})
//  console.log(promise1)
//.then methods used for printing the log methods after all the promise process runs

//ES6 Asynchoronous Function
console.log("-----Asynchoronous Function------");
async function resu(){
    // let res1=await promise1
    // console.log(res1);
    try{
        let res1=await promise1
        console.log(res1);

    }catch(bug){
        console.log(bug);

    }
}
resu()


//  let result=promise1.then((pri)=>{
//     console.log(pri);
//  }).catch((err)=>{
//     console.log(err);
//  })

console.log("-------Type convertion------");
console.log(parseInt("5")+10);

//type Of operators
console.log(typeof[1,3]);
console.log(typeof"wooow");
console.log(typeof undefined);
console.log(undefined);
console.log(typeof(typeof undefined));

console.log("-----Is NAN Methods Started-----");
//IsNAN is not a number?
console.log("is not a number?: " +isNaN(10)+"  no it is number");
console.log(isNaN("String")+":   yes it is not a number");
console.log(isNaN("4"));
//isnan
if(!isNaN){
    letter+=letter.repeat(parseInt("3"))

}

console.log("-----Set Timeout------");

setTimeout(()=>{
    console.log("Have a good day");

},5000)

setInterval(()=>{
    console.log("That's Great");

},2000)


