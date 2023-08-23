function add(a,b,c,d) {
    return a+b+c+d; 
  }
  
      function curry(fn) {
        return function curried(...args) {
          if (args.length >= fn.length) {
            return fn(...args);
          } else {
            return function (...moreArgs) {
              return curried(...args, ...moreArgs);
            };
          }
        };
      }
  document.getElementById('calculate').addEventListener('click', function() {
    const num1 = Number(document.getElementById('num1').value);
    const num2 = Number(document.getElementById('num2').value);
    const num3 = Number(document.getElementById('num3').value);
    const num4 = Number(document.getElementById('num4').value);
  
    const curried = curry(add);
    const result = curried(num1)(num2)(num3)(num4);
    
    document.getElementById('result').textContent = `Result: ${result}`;
  });