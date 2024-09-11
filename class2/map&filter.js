// using map and filter;

//MAP 
const input = [ 1,2,3,4,56,7];

const output = input.map((i) => {
    return i*2;
});
console.log(output);


// FILTER
const ins  = [1,2,3,4,5,6,7,8,9,0];

const ous = ins.filter((i) => {
    if (i % 2 == 0){
        return true;
    } else {
        return false;
    }
});

console.log(ous);