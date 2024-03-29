//Sorting methods

const log=console.log;
log("Short methods started")


let arr1=[100,3,8,9,300,1,4,200,0,400]
log("Assending order Sort")
arr1.sort(function(a,b) {
    return a-b
    
})
log(arr1)
log("Desending order Sort")
arr1.sort(function(a,b) {
    return b-a
    
})
log(arr1)
// arr1.sort


//----------------Day-11---------------//


//Iteration methods
log("Iteration methods started")
//map
log("ForEach Started")
let arrm=[9,4,2,7,0,1,3,5,10]
let foreachex=arrm.forEach((e)=>{
    log(e)

})
log(foreachex)
log("Map Started it doesn't affect orginal array")
let mapex=arrm.map((e,i)=>{// e=array value i= index value
    log(e)
    log("index value:"+i)
    return e+8
    // return e+=" update" //map method string convertion , when u need to change every element u can use map methods
    

})
log(mapex)
log(arrm)
//Filter methods
log("-------Filter Started--------")
let filterchec=arrm.filter((e,i)=>{
    log(e)
    log(i)
    return e>5

})
log("More Then Five value:")
log(filterchec)


//Find methods-----
log("-------Find Started--------")
let Findex=arrm.find((e,i)=>{
    log(e)
    log(i)
    return e>5 //what ever conditon you give when it's satisfied at first element it will be stop 

})
log(Findex)

//Some methods--------
log("-------Some Started--------")
let Somedex=arrm.some((e,i)=>{
    return e>1 //if it satisfied any one element means it's true

})
log(Somedex)

//Every methods------------
log("-------Every Started--------")
let Everyex=arrm.every((e,i)=>{
    return e>0 //if it satisfied all element in the array then only it gives true or else false

})
log(Everyex)
//filter
log("-------Filter2 Started--------")
let filter2chec=arrm.filter((e,i)=>{
    
    return e>5

})
log(filter2chec)

//reduce methods 
log("-------Reduce Started--------")
let reduceex=arrm.reduce((e,i)=>{
    
    return e+i //in reduce method e=0 and i=(9)first element in array after this condition the e take value of e+i value ex 0+9=9 so e=9
    //after all this process that display all added value
})
log(reduceex)

//individual map methods 
log("---------individual map methods----------")
//if we use new keyword before a word it means it's a class
//or if we use a .before a word i means it's Function
//it's alternative way of creating object
let MapEx2= new Map() 
MapEx2.set("name","Pokesh")
MapEx2.set("name2","Dinesh")
MapEx2.set("name3","Lokesh")
MapEx2.set("name4","Rakesh")
MapEx2.set("name5","ganesh")
log(MapEx2)
MapEx2.set("name5","Yogesh")
log(MapEx2)
log(MapEx2.get("name3"))
// MapEx2.clear

//has methods 
//has only take one parameter that is key only
log("-------Has Started--------")
log(MapEx2.get("name2")=="Dinesh")
log(MapEx2.has("name9")) 
//we need to use for loop for findout key value in has methods

log("------Advance for loop------")

for(let obj2 of MapEx2.values()){
    if(obj2=="Lokesh") {
        log(obj2)
        break
    }
   
}
log("------Advance2 for loop------")
//if we need to print key using using values   
for(let obj3 of MapEx2.keys()){
    if(MapEx2.get(obj3)=="Rakesh") {
        log(obj3)
        log(MapEx2.get(obj3))
        break
    }
   
}
// MapEx2.clear()

//delete methods 
log("------------Delete---------")
MapEx2.delete("name2")
log(MapEx2)

