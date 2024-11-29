//include
const arr=['JS','24',NaN,7];
let searchValue=NaN;
let found=false;
for(let i=0;i<arr.length;i++){
    
    if(arr[i]==searchValue || isNaN(searchValue) && isNaN(arr[i])){
       found=true;
       break;
    }
};
console.log(found)
