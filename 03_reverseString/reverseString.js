const reverseString = function(input) {
let length = input.length;
let reversedOutput ="";
for (let i=length-1; i >=0; i--)
{
    reversedOutput += input[i];
}

return reversedOutput;
};

// Do not edit below this line
module.exports = reverseString;
