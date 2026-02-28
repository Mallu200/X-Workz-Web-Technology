/* REAL-WORLD SCENARIO: E-commerce Checkout Logic
   1. Arithmetic: Calculate costs.
   2. Comparison: Check if user has enough money.
   3. Logical: Check if account is active AND balance is sufficient.
*/

// --- 1. DATA INPUT (Variables) ---
let itemPrice = 250;
let quantity = 2;
let userBalance = 600;
let isAccountActive = true;

// --- 2. ARITHMETIC OPERATORS (+, -, *, /) ---
let subtotal = itemPrice * quantity;        // Multiplication
let discountAmount = subtotal * 0.10;       // 10% Discount
let taxAmount = (subtotal - discountAmount) * 0.18; // 18% Tax
let finalTotal = (subtotal - discountAmount) + taxAmount;

// --- 3. ASSIGNMENT OPERATORS (+=, -=) ---
let pointsEarned = 0;
pointsEarned += 50; // Add 50 loyalty points for this purchase

// --- 4. COMPARISON OPERATORS (>, <, ===) ---
// Is the balance enough?
let canAfford = userBalance >= finalTotal; 

// --- 5. LOGICAL OPERATORS (&&, ||, !) ---
// User can buy ONLY IF account is active AND they have enough money
let transactionApproved = isAccountActive && canAfford;

// --- 6. DISPLAYING RESULTS TO HTML ---
document.getElementById("price").innerText = itemPrice;
document.getElementById("qty").innerText = quantity;
document.getElementById("subtotal").innerText = subtotal;
document.getElementById("discount").innerText = discountAmount.toFixed(2);
document.getElementById("tax").innerText = taxAmount.toFixed(2);
document.getElementById("total").innerText = finalTotal.toFixed(2);

// --- 7. FINAL STATUS MESSAGE ---
let alertBox = document.getElementById("statusAlert");

if (transactionApproved) {
    alertBox.classList.add("alert-success");
    alertBox.innerText = "Payment Successful! Points Earned: " + pointsEarned;
} else {
    alertBox.classList.add("alert-danger");
    alertBox.innerText = "Transaction Failed: Insufficient Balance or Inactive Account.";
}

// 8. LOGGING FOR DEVELOPERS
console.log("Balance Check:", userBalance, ">", finalTotal, "=", canAfford);
console.log("Strict Equality Check:", (10 === "10")); // False (Check value & type)