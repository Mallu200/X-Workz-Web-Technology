/* REAL-WORLD SCENARIO: Modern Data Parsing
   1. Template Literals: Dynamic strings.
   2. Destructuring: Pulling data out of objects.
   3. Spread Operator (...): Merging/Copying data.
*/

// --- 1. THE DATA (A Complex Object) ---
let userProfile = {
    fullName: "C Mallikarjun",
    handle: "@mallikarjun_dev",
    stats: {
        followers: 1200,
        following: 300
    },
    skills: ["HTML", "CSS", "Bootstrap"]
};

const displayArea = document.getElementById("content");

// --- 2. DESTRUCTURING (The "Pro" way to extract data) ---
// Instead of writing userProfile.fullName, userProfile.handle...
const renderProfile = (user) => {
    // We "pull out" only the variables we need
    const { fullName, handle, stats: { followers } } = user;
    const [primarySkill] = user.skills; // Array Destructuring (gets the first item)

    // --- 3. TEMPLATE LITERALS (Using backticks `` and ${}) ---
    displayArea.innerHTML = `
        <h2 class="text-center mb-0">${fullName}</h2>
        <p class="text-center text-info">${handle}</p>
        <hr class="bg-light">
        <div class="d-flex justify-content-around">
            <div><strong>Followers:</strong> ${followers}</div>
            <div><strong>Main Skill:</strong> ${primarySkill}</div>
        </div>
    `;
};

// Initial Render
renderProfile(userProfile);

// --- 4. SPREAD OPERATOR (...) (Merging/Updating Data) ---
document.getElementById("updateBtn").addEventListener("click", () => {
    // Scenario: User updates their handle and adds a new skill
    const updatedData = {
        ...userProfile,         // 1. Copy everything from old profile
        handle: "@mallikarjun_pro", // 2. Overwrite just the handle
        skills: [...userProfile.skills, "JavaScript"] // 3. Copy old skills + add new one
    };

    userProfile = updatedData; // Update the main variable
    renderProfile(userProfile); // Re-render with new data
    console.log("Updated Object:", userProfile);
});

// --- 5. ARROW FUNCTIONS (Implicit Return) ---
// One-liner function to format numbers
const formatNum = (num) => num >= 1000 ? (num/1000).toFixed(1) + 'k' : num;
console.log(`Formatted Followers: ${formatNum(userProfile.stats.followers)}`);