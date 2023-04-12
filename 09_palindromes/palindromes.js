const palindromes = function (input) {
// purge punctuation, white space and make everything lowercase

let lowerInput = input.toLowerCase(); 
let splitInputArray = lowerInput.split('');
let sanitizedArray = splitInputArray.filter(function(letter){
    let punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ ';
    return punctuation.indexOf(letter) === -1;
    
console.log(sanitizedArray);

});
let reunitedInput = sanitizedArray.join();
return reunitedInput === reverseString(reunitedInput);

}


    
    
console.log(palindromes("Hannah!!!..."));
function reverseString(input) 
    {
    let length = input.length;
    let reversedOutput ="";
    for (let i=length-1; i >=0; i--)
    {
        reversedOutput += input[i];
    }
    
    return reversedOutput;
    };

// Do not edit below this line
module.exports = palindromes;
