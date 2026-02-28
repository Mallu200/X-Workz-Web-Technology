/* REAL-WORLD SCENARIO: Smart Home Security Logic
   1. If-Else: Primary security check.
   2. Ternary: Quick UI status toggle.
   3. Switch: Handling different system modes (Home, Away, Night).
*/

// --- 1. INPUT DATA ---
let enteredPin = 1234;
let correctPin = 1234;
let hasFingerprint = false;
let systemMode = "AWAY"; // Options: HOME, AWAY, NIGHT

let light = document.getElementById("status-light");
let msg = document.getElementById("display-msg");

// --- 2. THE IF-ELSE LOGIC (Multi-condition) ---
if (enteredPin === correctPin || hasFingerprint) {
    // Logic for SUCCESS
    light.className = "unlocked";
    msg.innerText = "Access Granted: Door Unlocked";
    console.log("Entry logged: Authorized User.");
} else if (enteredPin === '0000') {
    // Logic for specific error
    light.className = "warning";
    msg.innerText = "Emergency Override Mode";
} else {
    // Logic for FAILURE
    light.className = "locked";
    msg.innerText = "ACCESS DENIED: Alarm Triggered!";
    console.warn("Security Alert: Unauthorized attempt.");
}

// --- 3. SWITCH STATEMENT (Best for multiple fixed categories) ---
let modeDisplay = document.getElementById("mode-text");
let hint = document.getElementById("action-hint");

switch (systemMode) {
    case "HOME":
        modeDisplay.innerText = "Home Mode (Cameras Off)";
        hint.innerText = "Welcome back!";
        break;
    case "AWAY":
        modeDisplay.innerText = "Away Mode (Full Security)";
        hint.innerText = "Monitoring all motion sensors...";
        break;
    case "NIGHT":
        modeDisplay.innerText = "Night Mode (Perimeter Only)";
        hint.innerText = "Stay safe while you sleep.";
        break;
    default:
        modeDisplay.innerText = "Standard Mode";
}

// --- 4. TERNARY OPERATOR (Short-hand if-else) ---
// Syntax: condition ? valueIfTrue : valueIfFalse
let isAlarmOn = (systemMode === "AWAY") ? "🔔 Alarm Active" : "🔕 Alarm Standby";
console.log(`Current Status: ${isAlarmOn}`);

// 5. THE "TRUTHY" & "FALSY" CHECK
// In JS, 0, "", null, undefined, and false are all 'Falsy'.
let userName = ""; 
if (!userName) {
    console.log("Guest User Detected (Empty string is Falsy)");
}