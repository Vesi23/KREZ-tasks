const findLastIndex = (items, func) => {

    for (let i = items.length - 1; i >= 0; i--) {
        if (func(items[i])) {
            return i; //  if the function returns true
        }
    }
    return -1; //if no element satisfies the condition
}

// Example usage
console.log(findLastIndex([1, 2, 3, 4], n => n % 2 === 1)); //2
console.log(findLastIndex([1, 2, 3, 4], n => n % 2 === 0)); //3
