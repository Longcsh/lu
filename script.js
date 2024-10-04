function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Chỉ dùng eval trong trường hợp tin cậy
    } catch (error) {
        alert('Lỗi: Phép toán không hợp lệ.');
        clearDisplay();
    }
}
