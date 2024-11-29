// Given an array of strings ["React", "JavaScript", "Redux", "PHP", "C#"]:
// Write a program to find the longest word in the array.
// Solution in JavaScript using only for loop and arrays:

const arr=["React", "JavaScript", "Redux", "PHP", "C#"];
let longItem=arr[0];
for (let i=1;i<arr.length;i++){
    if(arr[i].length>longItem.length){
        longItem=arr[i];
    }
}
console.log(longItem)