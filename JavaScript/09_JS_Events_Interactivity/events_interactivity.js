/* REAL-WORLD SCENARIO: Smart Form Validation
   1. click: For the final submission.
   2. input/keyup: For real-time password checking.
   3. mouseover/mouseout: For UI hover effects.
   4. focus/blur: For highlighting active fields.
*/

const card = document.getElementById("regCard");
const userInput = document.getElementById("userInput");
const passInput = document.getElementById("passInput");
const strengthBar = document.getElementById("strength-bar");
const feedback = document.getElementById("passFeedback");
const form = document.getElementById("regForm");

// --- 1. MOUSE EVENTS (Hover Effects) ---
card.addEventListener("mouseover", () => {
    card.style.transform = "translateY(-10px)";
});

card.addEventListener("mouseout", () => {
    card.style.transform = "translateY(0)";
});

// --- 2. FOCUS EVENTS (Highlighting) ---
userInput.addEventListener("focus", () => {
    userInput.classList.add("focused");
});

userInput.addEventListener("blur", () => {
    userInput.classList.remove("focused");
});

// --- 3. KEYBOARD/INPUT EVENTS (Real-time Strength Meter) ---
passInput.addEventListener("input", (e) => {
    const val = e.target.value;
    const len = val.length;

    if (len === 0) {
        strengthBar.style.width = "0%";
        feedback.innerText = "Enter at least 6 characters";
    } else if (len < 6) {
        strengthBar.style.width = "30%";
        strengthBar.className = "progress-bar bg-danger";
        feedback.innerText = "Weak Password ❌";
    } else if (len < 10) {
        strengthBar.style.width = "60%";
        strengthBar.className = "progress-bar bg-warning";
        feedback.innerText = "Medium Strength ⚠️";
    } else {
        strengthBar.style.width = "100%";
        strengthBar.className = "progress-bar bg-success";
        feedback.innerText = "Strong Password ✅";
    }
});

// --- 4. FORM EVENTS (Prevention & Submission) ---
form.addEventListener("submit", (event) => {
    // IMPORTANT: Prevents the page from refreshing
    event.preventDefault(); 
    
    if (passInput.value.length < 6) {
        alert("Password is too short!");
    } else {
        alert(`Welcome, ${userInput.value}! Registration Successful.`);
        console.log("Form Submitted to Database.");
    }
});