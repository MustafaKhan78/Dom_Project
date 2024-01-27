// reduce

function calculateSum(numbers) {
    return numbers.reduce((a, c) => {
        return a + c;
    });
}

const number = [1,2,3,4,5];
const sum = calculateSum(number);

console.log(calculateSum([1,2,3,4,5]));
