/* REAL-WORLD SCENARIO: The Salary Machine
   1. Function Declaration: The standard way.
   2. Parameters: The "Input" data.
   3. Return Value: The "Output" result.
   4. Arrow Function: The modern, short-hand way.
*/

const display = document.getElementById("salary-display");

// --- 1. FUNCTION DECLARATION (The Reusable Machine) ---
// This function takes a base salary and calculates the net pay after 10% tax.
function calculateNetPay(employeeName, baseSalary) {
    const tax = baseSalary * 0.10;
    const net = baseSalary - tax;
    
    // Returning a formatted string
    return `<strong>${employeeName}</strong><br>Net Salary: ₹${net} (Tax: ₹${tax})`;
}

// --- 2. FUNCTION EXPRESSION (Storing a function in a variable) ---
const logTransaction = function(status) {
    console.log(`[PAYROLL] System Status: ${status} at ${new Date().toLocaleTimeString()}`);
};

// --- 3. ARROW FUNCTION (Modern ES6 way - Concise) ---
// Perfect for simple, one-line calculations
const resetDisplay = () => display.innerHTML = "<h5>Select Employee to Calculate</h5>";

// --- 4. THE "TRIGGER" FUNCTIONS (Called by HTML Buttons) ---

function processJunior() {
    // Calling our 'calculateNetPay' machine with specific inputs
    const result = calculateNetPay("Mallikarjun (Junior)", 30000);
    display.innerHTML = result;
    logTransaction("Junior Processed");
}

function processSenior() {
    const result = calculateNetPay("X-Workz (Senior)", 80000);
    display.innerHTML = result;
    logTransaction("Senior Processed");
}

function resetSystem() {
    resetDisplay();
    logTransaction("System Reset");
}

// --- 5. DEFAULT PARAMETERS (Fallback values) ---
function welcomeMessage(user = "Guest") {
    console.log(`Welcome to the Payroll Dashboard, ${user}!`);
}
welcomeMessage("C Mallikarjun"); // Outputs: Welcome... C Mallikarjun
welcomeMessage();                // Outputs: Welcome... Guest