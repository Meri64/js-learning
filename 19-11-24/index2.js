// Write a for loop to replace all spaces in a string with hyphens (-).
//     Example Input:
//   let sentence = "I am learning JavaScript";
//      Expected Output: “I-am-learning-JavaScript”

let firstString='I am learning JavaScript';
let outString='';
for(i=0;i<firstString.length;i++) {
if (firstString[i]===" "){
  outString +='-';
} else {outString+=firstString[i];
    }
}console.log(outString)