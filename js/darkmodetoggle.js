
function calculateSquare() {
    const input = parseFloat(document.getElementById("numberInput").value);
    const resultScreen = document.getElementById("resultScreen");

    if (isNaN(input)) {
        resultScreen.innerText = "Please enter a valid number.";
        return;
    }

    const result = input * input;
    
    resultScreen.innerText = `${input} squared is ${result}`;
}

function setDarkMode() {
    document.body.style.backgroundColor = "#121212";
    document.body.style.color = "#f1f1f1";
}

function setLightMode() {
    document.body.style.backgroundColor = "#ffffff";
    document.body.style.color = "#000000";
}