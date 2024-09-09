// call back function

function sum(num1, num2,fnTocall) {
    let result = num1 + num2;
    return fnTocall(result);
}

function displayResult(data) {
    console.log("Result of the sum is : " + data);
}

function displayResultPassive(data) {
    console.log("Sum's result is : " + data);
}

// You are only allowed to call one function after this
sum(10,19,displayResult)