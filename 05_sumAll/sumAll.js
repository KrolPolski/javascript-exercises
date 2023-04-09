
const sumAll = function(firstNum, lastNum) {
    if (typeof firstNum === "number" && typeof lastNum === "number" && firstNum > 0 && lastNum >0)
    {
    let runningTotal = 0;
    let absoluteValue = Math.abs(firstNum - lastNum);
for (let i= absoluteValue + 1; i > 0; i--)
{
    runningTotal += i;
    
}
return runningTotal;}

else return "ERROR";
}
console.log(sumAll(1,5));
// Do not edit below this line
module.exports = sumAll;
