
// let s = ["i", "like", "this", 
//          "program", "very", "much"];
                                         
// let ans =" ";
// for (var i = 5; i >= 0; i--)
// {
//     ans += s[i] + " ";
// }
// console.log("Reverse Order  :"+
// ans.slice(0,ans.length));

//
console.log("-----Reverse word-------");
let word="take a short nap it will be good"
// console.log(word.split(" "));
console.log(word);
word2=word.split(" ")
console.log(word2);

let rev=" ";
for(let i=7;i>=0;i--){
    rev+=" "+word2[i];
    
}
console.log("Reversed word :"+rev);
// console.log(rev.slice(0,rev.length));

// let sentence = "This is apple";
// let words = sentence.split(" "); // Split the sentence into an array of words
// let reversedSentence = "";

// for (let i = 0; i < words.length; i++) {
//   let word = words[i];
//   let reversedWord = "";

//   for (let j = word.length - 1; j >= 0; j--) {
//     reversedWord += word[j]; // Reverse the characters of each word
//   }

//   reversedSentence += reversedWord + " "; // Add the reversed word to the new sentence
// }
// console.log(reversedSentence.trim(), "\n"); // Print the sentence with reversed words

// console.log("----Reverse a letter-------");


let letter="take a short nap it will be good"
// console.log(word.split(" "));
console.log(letter);
letter2=letter.split(" ")
console.log(letter2);

let revl="";
for(let i=0; i<letter2.length ;i++){
    let reversed = letter2[i]
    let revsent="";
    for(j=reversed.length;j>=0;j--){
      revsent+=" "+reversed[j]
    }
    rev1=" "+reversed
  
   
    
}
console.log(revl)
