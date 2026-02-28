// 1. SINGLE-LINE COMMENT: This is for quick notes.
/* 2. MULTI-LINE COMMENT: 
   Scenario: Project "System Health Check"
   Objective: Ensure the JS engine is connected to the HTML.
*/

// 3. INTERNAL COMMUNICATION (The Console)
console.log("System Check: JavaScript is connected!"); 
console.table(["HTML", "CSS", "Bootstrap", "JavaScript"]); // Displays data in a nice table

// 4. EXTERNAL COMMUNICATION (User Alerts)
alert("Welcome to the JS Module!"); // Pops up a window (Commented out so it doesn't annoy you)

// 5. DOCUMENT COMMUNICATION (Writing directly to the page)
document.write("<h1>Module 01: Setup Complete</h1>");
document.write("<p>Check the Browser Console (F12) to see the secret messages.</p>");

// 6. ERROR & WARNING HANDLING (Real-world debugging)
console.warn("This is a warning: Don't forget to link the script at the bottom of <body>!");
console.error("This is an error: If you see this, something is broken.");