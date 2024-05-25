// names.js

let namesArray;

function sortNames() {
  const input = document.getElementById('nameInput').value;
  namesArray = input.split(',').map(name => name.trim()); // Trim each name to remove extra spaces
  const sortedNames = namesArray.slice().sort();
  displayNameResult(sortedNames);
}

function searchName() {
  const searchValue = document.getElementById('searchNameInput').value.trim();
  const foundIndex = namesArray.findIndex(name => name === searchValue); // Use findIndex to get the index of the name
  displayNameResult(foundIndex !== -1 ? `Index of ${searchValue}: ${foundIndex}` : 'Name not found'); // Update the message
}

function displayNameResult(result) {
  const outputDiv = document.getElementById('nameOutput');
  outputDiv.innerHTML = `<p>${result}</p>`;
}
