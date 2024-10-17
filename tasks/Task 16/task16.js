const input = [[8, 5, 8, 3, 5, 5], 8, 5];

const filterArr = (items, ...params) => {

    const filterItems = items.filter(item => !params.includes(item));

    return filterItems;
}

const result = filterArr(...input);

console.log('Filtered Array:', result);