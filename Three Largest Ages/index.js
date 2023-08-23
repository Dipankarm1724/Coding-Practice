document.getElementById('btn').addEventListener('click', function () {
    const inputAges = document.getElementById('inputArea').value.trim();
  
    if (inputAges === '') {
      document.getElementById('output').textContent = 'Please enter ages separated by commas.';
      return;
    }
  
    const agesArray = inputAges.split(',').map(age => parseInt(age.trim()));
  
    if (agesArray.length < 3) {
      agesArray.sort((a, b) => b - a); // Sort in descending order
      document.getElementById('output').textContent = agesArray.join(', ');
    } else {
      const threeLargestAges = agesArray.sort((a, b) => b - a).slice(0, 3); // Sort and take the first three elements
      document.getElementById('output').textContent = threeLargestAges.join(', ');
    }
  });