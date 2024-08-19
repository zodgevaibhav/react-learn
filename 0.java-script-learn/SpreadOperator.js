
const originalArray = [1, 2, 3];
// Use case 1 - Copy array
const copiedArray = [...originalArray]; 
// Use case 1 - Combine two array
const combineArray = [...copiedArray, ...copiedArray]
// Use case 3 - Pass and print arrat
console.log(sum(...originalArray))

const nameData = {
    "name":"vaibhav",
    "lastName":"zodge"
}
const adress = {
    "city":"Pune",
    "state":"Maharashtra"
}

// Use case 4 - Combine two objects
const data = {...nameData, ...adress}
printData(data)

// ={} ensures there is always default data
function printData(data={})
{
    const fullData={"category":"student",...data}
    console.log(fullData);
}


function sum(a,b,c){
    return a+b+c;
}