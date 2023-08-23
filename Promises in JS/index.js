// Function that returns a Promise
function getData() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation with a delay of 2000ms
      setTimeout(() => {
        resolve('Data received!');
      }, 2000);
    });
  }
  
  // Function to handle the button click event
  function handleGetDataButtonClick() {
    // Get the output paragraph element
    const outputElement = document.getElementById('output');
  
    // Update the output text to 'Loading...' while waiting for the Promise to resolve
    outputElement.textContent = 'Loading...';
  
    // Call the getData function and use the .then method to handle the Promise resolution
    getData()
      .then((result) => {
        // Once the Promise resolves, display the returned string in the output paragraph
        outputElement.textContent = result;
      })
      .catch((error) => {
        // Handle errors here if needed
        outputElement.textContent = 'Error occurred!';
      });
  }
  
  // Add event listener to the button for the click event
  document.getElementById('getDataButton').addEventListener('click', handleGetDataButtonClick);