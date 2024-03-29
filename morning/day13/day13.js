//Set methods
let arr1=[2,4,5,7,8,0,5,2,9,12]
let newset= new Set(arr1)//Set methods remove all dublicate value ,Set is predefind methods
//array.from change object value to array value 
//we can use newset._____
//array key index
console.log(newset);
console.log(Array.from(newset));
console.log("--------Date methods started------");
let newdate= new Date()
console.log(newdate);
//getday methods 
console.log(newdate.getDate());
console.log(newdate.getDay());
//setdate methods like using these methods we can print expire date
newdate.setDate(15)
//these methods moths methos can only get by index value
newdate.setMonth(11)//if you want to print 12th month you need to give 11th index
newdate.setFullYear(2001,7,30)
console.log(newdate);

//class and constructor
console.log("---------class and constructor---------");
class person{
    name="Pokesh"
    dept="Mca"
    constructor(){
        this.name="Dinesh kumar"//this used for changing inside the class values
    }
    //it's only act inside  the class
    //constructor name is constructor only
    //one class only have one constructor
}
let ourclass= new person()
console.log(ourclass)
console.log(ourclass.name);//we can print usring.dept if you want to print individualiy

console.log("---------class and constructor1---------");
class person1{
    name="Pokesh"
    dept="Mca"
    constructor(a){
        this.name=a//this used for changing inside the class values
    }
    //it's only act inside  the class
    //constructor name is constructor only
    //one class only have one constructor
}
let ourclass1= new person1("Dinesh")
console.log(ourclass1)
console.log(ourclass1.name);

//Exception Handling
console.log("-------Exception Handling--------");
try{
const n=5
// n=10
console.log(n);
} catch(t){
    console.log(t);
//  throw t 
//throw methods throw the error if any occurs
    
}finally{
    console.log("I will print anyways");
}
console.log("hey hello");


//Inbuild methods
console.log("------InBuild Function-------");
let num=67.5469034
console.log(num.toPrecision(4));//pricision take all number
console.log(num.toFixed(4));//fixed take number of after the point 
console.log(num+5);
console.log(num.toString()+7);//it add value after all decimal values it cancate


//User Defined Function
// mean if we call any function we need to decide how these function need to act
console.log("------User Defined Function-------");
function addorsub(a,b,c){
    if(a=="add"){
        c=b+5
        console.log("Add  :"+c);
    }else{
        c=b-4
        console.log("Sub  :"+c);
    }
    return c
    //console.log(c);//it's important to use conlog
}
console.log(addorsub("sub",15))
addorsub("add",10)


//IIFE
//Self Involke Function or immediately involke
console.log("-----immediately involke-----");
let anonymous=(()=>{
    console.log("Hiiii");
})()

//Arrow Function
console.log("--------Arrow Function-------");
//normal function have function key word but not arrow mark
//but it has arrow mark but not function key word
//es6 function
let arrowfun=()=>{
    console.log("Arrow Function calls:");
}
arrowfun()
console.log("--------closures ,Higher order function,CallBack-------");
//closures ,Higher order function,CallBack
function hig() {
    return function(){
        console.log("Hi i'm inner function");
    }
    
}
hig()()

//Hosting Function methods
console.log("---------Hosting Function-------");
console.log(you);
let u="hello"
var you="yeah yes i'm "//var enevn tho allow us to run code if it's not defined
console.log(you);