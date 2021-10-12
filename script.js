// BMI lbs/in^2 * 703
// Underweight - < 18.5
// Healthy Weight - 18.5 - 24.9
// Overweight - 25 - 29.9
// Obese - 30 and above

// "use strict" to make sure of good practice
"use strict";

const btn = document.querySelector(".btn");
const form = document.querySelector("form");
const resetBtn = document.querySelector(".reset");
const result = document.querySelector(".result");
const heightInput = document.getElementById("height");
const weightInput = document.getElementById("weight");

form.addEventListener("submit", validateInput);

// *Remember to pass in event and use preventDefault to keep form from refreshing*
function validateInput(e) {
    e.preventDefault();
    let height = heightInput.value;
    let weight = weightInput.value;

    //Display Reset button
    resetBtn.style.display = "block";
    result.style.display = "block";
    
    // Validating Input
    if (height === "") {
        return result.textContent = "Please enter a valid height!"
    } else if (weight === "") {
        return result.textContent = "Please enter a valid weight!"
    } else {
        // Trying to add loader.gif, but not working on my browser
        // result.innerHTML = `<div class="loader-div">
        // <img class="loader" src./images/loader.gif" alt="Loading...">
        // </div>`

        // setTimeout(() => {
        //     calculateBMI(height, weight)
        // }, 1000);

        calculateBMI(height, weight);
        
    }
}

// Calculating BMI
function calculateBMI(height, weight) {
    let bmi = (weight / Math.pow(height, 2) * 703).toFixed(1);
    

    // Categorize Result
    if (bmi < 18.5) {
        showResult(`Underweight: <span>${bmi}</span>`, "orange");
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        showResult(`Normal: <span>${bmi}</span>`, "green"); 
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        showResult(`Overweight: <span>${bmi}</span>`, "yellow");
    } else {
        showResult(`Obese: <span>${bmi}</span>`, "red");
    }
}

// Show Result
function showResult(value, color) {
    result.style.backgroundColor = color;
    return result.innerHTML = value;
}

// Reset Button Event
resetBtn.addEventListener("click", () => {
    form.reset();
    result.style.display = "none";
    resetBtn.style.display = "none";
})