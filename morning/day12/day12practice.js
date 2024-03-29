 //Star pattern print 

 //*
 //***
 //*****
 let result=""
 //for loop for rows
 for(let i=0;i<3;i++){
    //for loop for colums
    for(let j=0;j<5;j++){
        //if for number of colums to be print
        if((i==0 && j<1)||(i==1&&j<3)||(i==2&&j<5)){ 
         result+="*"
        }
        else
        result+=" "
       
    }
    result+="\n"

 }
 console.log("helloooo:\n"+result);

 //whitout using if condition
 console.log("whitout using if condition");
 
 let star=""
 let time=1
 for(let x=1;x<6;x++){
    for(let y=0;y<time;y++){
        star+="*"
    }
    star+="\n"
    if(x>2){
    time+=2
    }   
    else
    time+=1
 }
console.log(star);

//String pattern

let Str1="this is a string example apple"
let str2=Str1.split(" ")

for(let word of str2){
    console.log(word+"---"+word.length);
    for(let letter of word){
        // console.log("------word--to--letter----"+letter);
        
        if(letter=='a'){
            console.log("-----letter a index check----");
            console.log(word+"-->"+word.indexOf(letter));
            // return
        }
        // console.log(letter);
    }
}

//--------Prime number check----------//
console.log("\n--------Prime number check----------\n");
let prime=11
let isprime=true
 for(let i=2;i<prime;i++){
    if(prime%i==0){
        isprime=false
        console.log(prime+": This is not Prime number :"+isprime);

    }
 }
 if(isprime){
    console.log(prime+": This is Prime number :"+isprime);
 }
 console.log("number iteration methods");
 let num=0
 let count=1
 for(let i=1;i<6;i++){
    for(let j=0;j<count;j++){
        num+=i
    }
    num+="\n"
    if(i>2){
        count+=2

    }
    count+=1
    
 }
console.log(num);

 