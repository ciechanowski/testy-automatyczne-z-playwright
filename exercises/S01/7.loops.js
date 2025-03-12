// Your task:
// 1. Write body of function 'elementChecker'
// 2. Inside this function iterate through elements from an array
// 3. print each element on console

// to test your solution in terminal You can run following command:
// npm run es1e7

//// TODO:
// here place your solution:

// solution 1:
function elementChecker(anArray) {
    for (let index = 0; index < anArray.length; index++) {
        console.log(anArray[index]);
    }
};

// solution 2:
// function elementChecker(anArray) {
//     anArray.forEach(element => {
//         console.log(element);
//     });
// };

//// DON'T MODIFY CODE BELOW!
// Here You will find expected result of exercise
elementChecker([1, 2, 'test']);

// Expected output:
// Expected output of this script is following info on console:
// 1
// 2
// test