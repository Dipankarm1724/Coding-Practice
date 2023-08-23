// Arrow function for squaring a number
const square = (number) => number * number;

// Arrow function for doubling a number
const double = (number) => number * 2;

// Function to apply the selected operation to each number in the sequence
const applyOperation = (sequence, operation) => {
    const numbers = sequence
        .split(',')
        .map((num) => parseFloat(num.trim()))
        .filter((num) => !isNaN(num)); // Filter out non-numeric entries

    if (numbers.length === 0) {
        return []; // Return an empty array if no valid numbers found
    }

    let result = [];

    switch (operation) {
        case 'Square':
            result = numbers.map(square);
            break;
        case 'Double':
            result = numbers.map(double);
            break;
        default:
            break;
    }

    return result;
};

// Function to handle the form submission
const handleFormSubmit = (event) => {
    event.preventDefault();
    const sequence = document.getElementById('numInput').value;
    const operation = document.getElementById('operationDropdown').value;
    const resultSequence = applyOperation(sequence, operation);

    if (resultSequence.length === 0) {
        document.getElementById('resultSequence').textContent = 'Invalid input. Please enter a valid sequence of numbers separated by commas.';
    } else {
        document.getElementById('resultSequence').textContent = `Result: ${resultSequence.join(',')}`;
    }
};

// Attach the form submission event listener
document.getElementById('sequenceForm').addEventListener('submit', handleFormSubmit);