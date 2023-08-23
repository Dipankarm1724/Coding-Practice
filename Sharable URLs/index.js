function updateURL() {
    const name = encodeURIComponent(document.getElementById('name').value);
    const year = encodeURIComponent(document.getElementById('year').value);

    let queryString = '';
    if (name) {
      queryString += `?name=${name}`;
    }
    if (year) {
      queryString += `${queryString ? '&' : '?'}year=${year}`;
    }

    const baseURL = 'https://localhost:8080/';

    const finalURL = baseURL + queryString;
    document.getElementById('url').textContent = finalURL;
  }

  // Add event listener to the form submit button
  document.getElementById('urlForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    updateURL(); // Call the function to update the URL
  });

  // Call the function initially to set the URL with default values
  updateURL();