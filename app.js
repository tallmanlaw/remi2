const arr1 = [2, 54, 93, 66, 42, 96, 43];
const arr2 = [3, 5, 89, 10, 11, 13, 42];
const arr3 = [90, 8, 1, 1, 43, 27, 63, 33];
const arr4 = [1, 8, 3, 13, 13, 99, 202];

const arrSum = function (arr) {
    return arr.reduce(function (a, b) {
        return a + b
    }, 0)
}
console.log(arrSum(arr1));
console.log(arrSum(arr2));
console.log(arrSum(arr3));
console.log(arrSum(arr4));

/* Write a function that takes in an array and console.logs the sum of
all the numbers in the array. Then call the function 4 times, passing in
one array above each time. */

const numberOfTimes = prompt('How many students do you want to see?');
const nameList = ['sally', 'sarah', 'betsy', 'sam', 'aretha', 'sun'];

const foo = function (numberOfTimes, nameList) {
    let newArr = [];
   for(let i = 0; i < numberOfTimes; i++) {
       newArr.push(nameList[i]);
    }
    return newArr;
}
console.log(foo(numberOfTimes, nameList));


/* Write a function that takes in numberOfTimes and nameList as paramaters and returns
the number of students entered in the prompt. For example if I type 2 into the prompt
the function will return `sally, sarah`. Then console.log the function to see 
the return. */

let total = 0;
const sumNum = function (N) {
    for (let i = 1; i < N; i++) {
        total +=i;
    }
    return total;
}
console.log(sumNum(172));

/* Create a loop inside a function that sums the number from 1 to 172, inclusively.
Save the sum in a global variable called total. Call the function.
Console.log the total. */