let arr = [1, 2, 3, 1, 2, 3, 4];

// get unique items from here
const set = new Set();
arr.map((value) => set.add(value));
console.log(set);

// get only duplicate
const obj = {};
const newObj = {};
arr.map((value) => {
    if (!obj[value]) {
        obj[value] = 1;
    } else {
        newObj[value] = arr[value];
    }
})

console.log(obj);
console.log(newObj);
