let numbersArray;

    function sortArray() {
      const input = document.getElementById('numberInput').value;
      numbersArray = input.split(',').map(Number);
      const sortedNumbers = numbersArray.slice().sort((a, b) => a - b);
      displayResult(sortedNumbers);
    }

    function searchArray() {
      const searchValue = parseInt(document.getElementById('searchInput').value);
      const foundIndex = numbersArray.indexOf(searchValue);
      displayResult(foundIndex !== -1 ? `Index of ${searchValue} in sorted array: ${foundIndex}` : 'Not found');
    }

    function displayResult(result) {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = `<p>${result}</p>`;
    }

