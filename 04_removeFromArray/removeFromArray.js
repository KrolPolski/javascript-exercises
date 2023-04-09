const removeFromArray = function(array, removedItem) {
    const index = array.indexOf(removedItem);
    trimmed = array.splice(index,1);
    return array;
};
console.log(removeFromArray([1,2,3],2));
// Do not edit below this line
module.exports = removeFromArray;
