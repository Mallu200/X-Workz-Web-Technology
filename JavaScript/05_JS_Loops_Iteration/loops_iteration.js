/* REAL-WORLD SCENARIO: Bulk Processing 10 Digital Orders
   1. For Loop: Standard counting (0 to 10).
   2. While Loop: Processing until a condition is met (Battery/Memory check).
   3. For...of: The modern way to read items from a list.
*/

const terminal = document.getElementById("terminal-output");
const progressBar = document.getElementById("progress-bar");

// --- 1. THE CLASSIC FOR-LOOP (The Counter) ---
// Scenario: Creating 5 "Loading" pulses
for (let i = 1; i <= 5; i++) {
    console.log(`System Pulse ${i}`);
    terminal.innerHTML += `<div class="log-entry">[SYSTEM] Initializing Pulse #${i}... OK</div>`;
}

// --- 2. THE WHILE-LOOP (The Condition) ---
// Scenario: Cleaning memory until it's below a threshold
let serverLoad = 100;
while (serverLoad > 60) {
    terminal.innerHTML += `<div class="log-entry text-warning">[CLEANUP] Memory usage at ${serverLoad}%. Reducing...</div>`;
    serverLoad -= 10; // Reducing load by 10 each time
}
terminal.innerHTML += `<div class="log-entry text-info">[CLEANUP] Stability reached at ${serverLoad}%.</div>`;

// --- 3. THE MODERN FOR...OF LOOP (The List Reader) ---
// Scenario: Sending emails to a list of customers
const customerList = ["Mallikarjun", "X-Workz", "Student_A", "Student_B"];
let processedCount = 0;

for (const customer of customerList) {
    processedCount++;
    
    // Calculate percentage for progress bar
    let percent = (processedCount / customerList.length) * 100;
    progressBar.style.width = percent + "%";

    // Adding to UI
    terminal.innerHTML += `<div class="log-entry text-success">[MAIL] Sending invoice to: ${customer}@domain.com... Sent!</div>`;
    
    // Breaking a loop early (If we hit a specific user)
    if (customer === "X-Workz") {
        terminal.innerHTML += `<div class="log-entry text-white">[ALERT] High-priority user detected. Skipping wait time.</div>`;
        continue; // Skip the rest of this iteration and move to next
    }
}

// --- 4. THE DO...WHILE (Runs at least once) ---
let attempt = 0;
do {
    attempt++;
    console.log(`Database Reconnection Attempt: ${attempt}`);
} while (attempt < 0); // Even though condition is false, it runs ONCE.