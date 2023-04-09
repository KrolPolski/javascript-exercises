
const sumAll = function(firstNum, lastNum) {
    let runningTotal = 0;
for (let i= lastNum - firstNum + 1; i > 0; i--)
{
    runningTotal += i;
    
}
return runningTotal;}
console.log(sumAll(1,5));
// Do not edit below this line
module.exports = sumAll;
