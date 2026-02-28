/* REAL-WORLD SCENARIO: Storing User Profile Data
   - const: Use for data that NEVER changes (ID, Birthday).
   - let: Use for data that CAN change (Age, Bio).
*/

// 1. CONSTANT (Cannot be reassigned)
const userId = "UX-99210"; // String
const birthYear = 1995;    // Number

// 2. LET (Can be updated)
let userName = "C Mallikarjun"; // String
let userAge = 28;               // Number
let isPremium = true;           // Boolean (True/False)
let userBio = "Building the future at X-Workz."; // String
let lastLogin = null;           // Null (Intentionally empty)
let socialLinks;                // Undefined (Not set yet)

// --- THE LOGIC: UPDATING DATA ---
userAge = 29; // Updating age (let allows this)
// userId = "UX-123"; // ERROR: This would crash the site because const cannot change!

// 3. LOGGING TYPES (The typeof operator)
console.log("Data Check:");
console.log("Name is a:", typeof userName);
console.log("Age is a:", typeof userAge);
console.log("Premium Status is a:", typeof isPremium);
console.log("Social Links are:", typeof socialLinks);

// 4. CONNECTING TO HTML (Simple DOM intro)
// We use the variables we created to fill the HTML page
document.getElementById("userName").innerText = userName;
document.getElementById("userBio").innerText = userBio;
document.getElementById("userAge").innerText = userAge;
document.getElementById("isPremium").innerText = isPremium ? "✅ Yes" : "❌ No";
document.getElementById("userId").innerText = userId;

// 5. TEMPLATE LITERALS (The "Pro" way to combine variables and strings)
console.log(`User ${userName} (ID: ${userId}) has logged in.`);