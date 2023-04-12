const fibonacci = function(input) {
input = parseInt(input);
if (input >= 0){
    let fibonacciArray = [0,1];

    for (let i = 1; i < input; i++) {
        let newItem = fibonacciArray[i] + fibonacciArray[i-1];    
        console.log(newItem);
        fibonacciArray.push(newItem);
}
return fibonacciArray[input];
}
else return "OOPS";
}


console.log(fibonacci(5));
// Do not edit below this line
module.exports = fibonacci;
