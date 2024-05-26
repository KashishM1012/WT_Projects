function calculateBill() {
    var units = parseFloat(document.getElementById('units').value);
    var totalBill = 0;

    if (!isNaN(units)) {
        if (units <= 50) {
            totalBill = units * 3.50;
        } else if (units <= 150) {
            totalBill = 50 * 3.50 + (units - 50) * 4.00;
        } else if (units <= 250) {
            totalBill = 50 * 3.50 + 100 * 4.00 + (units - 150) * 5.20;
        } else {
            totalBill = 50 * 3.50 + 100 * 4.00 + 100 * 5.20 + (units - 250) * 6.50;
        }
        $("#totalBill").text("Rs. " + totalBill.toFixed(2));
    } else {
        alert("Please enter a valid number of units.");
    }
}



