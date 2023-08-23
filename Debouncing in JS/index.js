// Debounce function
function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  
  // Function to display input text
  function performSearch() {
    const inputText = document.getElementById('searchInput').value;
    document.getElementById('output').textContent = "Search for: " + inputText;
  }
  
  // Debounced version of performSearch function with 500ms delay
  const debouncedPerformSearch = debounce(performSearch, 500);
  
  // Add event listener to the searchInput field
  document.getElementById('searchInput').addEventListener('input', debouncedPerformSearch);
  