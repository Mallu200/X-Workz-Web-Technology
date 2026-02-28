/* REAL-WORLD SCENARIO: Dynamic Profile Editor
   1. Selection: Finding elements by ID and Selector.
   2. Modification: Changing Text and Attributes.
   3. Styling: Toggling CSS classes.
*/

// --- 1. SELECTION (The "Finding" Phase) ---
const body = document.getElementById("mainBody");
const card = document.getElementById("profileCard");
const nameHeading = document.getElementById("displayName");
const bioPara = document.querySelector("#displayBio"); // Using Query Selector
const img = document.getElementById("userImg");
const inputField = document.getElementById("nameInput");

// --- 2. THE UPDATE LOGIC (Changing Content) ---
function updateProfile() {
    const newName = inputField.value; // Taking value from the input box

    if (newName !== "") {
        nameHeading.innerText = newName; // Changing text only
        bioPara.innerHTML = "Status: <strong>Profile Updated!</strong>"; // Changing HTML content
        img.src = "https://picsum.photos/id/91/150/150"; // Changing an Attribute (image source)
        
        // Success Styling
        nameHeading.style.color = "#0d6efd"; 
    } else {
        alert("Please enter a name first!");
    }
}

// --- 3. CLASS TOGGLING (The "Pro" way to style) ---
function toggleTheme() {
    // classList.toggle adds the class if it's missing, removes it if it exists
    body.classList.toggle("dark-mode");
    card.classList.toggle("dark-mode");
    
    // Changing button text based on theme
    const isDark = body.classList.contains("dark-mode");
    console.log(`Dark Mode Active: ${isDark}`);
}

// --- 4. RESET LOGIC ---
function resetProfile() {
    nameHeading.innerText = "Original Name";
    nameHeading.style.color = "black";
    bioPara.innerText = "This is the original bio text.";
    img.src = "https://picsum.photos/id/64/150/150";
    inputField.value = "";
    
    // Removing classes
    body.classList.remove("dark-mode");
    card.classList.remove("dark-mode");
}