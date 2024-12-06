// Write a function that takes an object and returns a new object where the keys and values are swapped

const obj = { a: "1", b: "2", c: "3" };
function swapKeysAndValues(obj){
   const swapped={};
    const keys=Object.keys(obj);
    for(let i=0;i<keys.length;i++){
        const key=keys[i];
        const value=obj[key];
        swapped[value]=key;
    }
    return swapped
}


console.log(swapKeysAndValues(obj))