function calculateBMI() {
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;

    if (height === "" || weight === "") {
        alert("Please enter both height and weight");
        return;
    }

    var heightInMeters = height / 100;
    var bmi = weight / (heightInMeters * heightInMeters);

    displayResult(bmi);
}

function displayResult(bmi) {
    var resultElement = document.getElementById("result");
    var statusElement = document.getElementById("status-text");

    resultElement.innerText = bmi.toFixed(2);

    var category = getBMICategory(bmi);
    statusElement.innerText = category;

    // Set color based on BMI category
    switch (category) {
        case "Underweight":
            statusElement.style.color = "blue";
            break;
        case "Normal Weight":
            statusElement.style.color = "green";
            break;
        case "Overweight":
            statusElement.style.color = "orange";
            break;
        case "Obese":
            statusElement.style.color = "red";
            break;
        default:
            statusElement.style.color = "black";
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 25) {
        return "Normal Weight";
    } else if (bmi >= 25 && bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
