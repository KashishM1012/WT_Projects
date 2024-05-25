let num;

function sortArray(){
    const input=document.getElementById('numberInput').value;
    num=input.split(',').map(Number);
    const sorted=num.slice().sort((a,b) => a - b);
    displayResult(sorted);
}

function searchArray(){
    const searchValue = parseInt(document.getElementById('searchInput').value);
    const foundIndex = num.indexOf(searchValue);
    displayResult(foundIndex !==-1) ? `Index of ${searchValue} is: ${foundIndex}` : `Not found`;

}

function displayResult(result){
    const outputDiv=document.getElementById('output');
    outputDiv.innerHTML = `<p>${result}</p>`;
}



