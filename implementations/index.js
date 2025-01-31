// implement methods
// forEach
// map
// filter
// find
// indexOf
// includes
// reverse
// new keyword
//_________________________________________________________________________________________________________________________________
                                           // implementation of forEach
//________________________________________________________________________________________________________________________________
// const arr=[10,20,30,40];
// Array.prototype.customforEach=function(callback){
//     for (let i=0; i<this.length;i++){
//         callback(this[i],i,this)
//     }
// }
// arr.customforEach((item,index,arr)=>{
// console.log(item,index,arr)
// })
//____________________________________________________________________________________________________________________________________
                      //implementation of map. syntax- array.map(function(currentValue, index, arr), thisValue)
//____________________________________________________________________________________________________________________________________
// const arr=[10,20,30,40];
// Array.prototype.customMap=function(callback){
//     let newArr=[];
//     for (let i=0;i<this.length;i++){
//     newArr.push(callback(this[i],i,this))
//      };
//      return newArr;
    
// }

// const arr2=arr.customMap(function(item){ //The user can decide the logic they want to apply to the array
//     return item/2;
// });
// console.log(arr2);
// console.log(arr);
//__________________________________________________________________________________________________________________________________
                        //implemantation of filter. syntax-array.filter(function(currentValue, index, arr), thisValue).
                       // Method creates a new array 
//__________________________________________________________________________________________________________________________________
// const arr=[10,20,30,40,];
// Array.prototype.customFilter=function(callback){
// let newArr=[];
// for (let i=0;i<this.length;i++){
//     if(callback(this[i],i,this)){
//     newArr.push(this[i])
// }
//     }
//       return newArr;
// }
// const arr2=arr.customFilter(function(item){
//         return item>24;
//      })
// console.log(arr);
// console.log(arr2);
//________________________________________________________________________________________________________________________________-
                //implementation of find().syntax-array.find(function(currentValue, index, arr),thisValue)
               //The find() method returns the value of the first element that passes a test.
              // The find() method executes a function for each array element.
             // The find() method returns undefined if no elements are found.
//_________________________________________________________________________________________________________________________________
// const arr=[10,20,30,40];
// Array.prototype.customFind= function(callback){
//     for (let i=0;i<this.length;i++){
//       if(callback(this[i],i,this)){
//         console.log(this[i]) 
//         break;
//      } else{
//         console.log(undefined)
//      } 
// }
//   }
//     const arr2=arr.customFind(function(item){
//         return item>100;
//     })
//____________________________________________________________________________________________________________________________________
                         //implementation of indexof().Syntax-array.indexOf(item, start)
                        // The indexOf() method returns the first index (position) of a specified value.
                       // The indexOf() method returns -1 if the value is not found.
                      // The indexOf() method starts at a specified index and searches from left to right.
                     // By default the search starts at the first element and ends at the last.
                    // Negative start values counts from the last element (but still searches from left to right).
//_____________________________________________________________________________________________________________________________________
// const arr=[10,20,30,40,30,10,40];
// Array.prototype.customIndexOf=function(item,start=0){
//     for(let i=start;i<this.length;i++){

//         if(this[i]===item){
//             return i  } 
//     }
//             return -1;
// }

// index=arr.customIndexOf(40,4);
// console.log(index)
//_____________________________________________________________________________________________________________________________________

                        //implementation of includes().Syntaxstring.includes(searchvalue, start)
//_____________________________________________________________________________________________________________________________________
//  const arr=[10,20,30,40,30];
//  Array.prototype.customInculdes=function(element,start=0){
// for(let i=start;i<this.length;i++){
//     if(this[i]===element){
//         return true;
//  }
// }
//         return false;
//  }
//  const searchValue=arr.customInculdes(20,3);
//  console.log(searchValue)
 //____________________________________________________________________________________________________________________________________

                                 //implementation of reverse().Syntax-array.reverse()
                                //The reverse() method reverses the order of the elements in an array.
                               // The reverse() method overwrites the original array.
//____________________________________________________________________________________________________________________________________
// const arr = [10, 20, 40, 30];
// Array.prototype.customReverse = function() {
//     let left = 0;
//     let right = this.length - 1;    
// while (left < right) {
//         [this[left], this[right]] = [this[right], this[left]];   // Swaping elements 
//         left++;
//         right--;
//     }
    
//     return this;  
// };
// arr.customReverse();
// console.log(arr); 
//____________________________________________________________________________________________________________________________________