/* QUANTUM DASHBOARD: The Complete Integration
*/

// --- 1. STATE MANAGEMENT (Arrays & Objects) ---
let tasks = [
    { id: 1, text: "Finish JavaScript Modules", completed: true },
    { id: 2, text: "Build Capstone Project", completed: false }
];

// --- 2. SELECTORS (DOM) ---
const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const greeting = document.getElementById("greeting");
const statsText = document.getElementById("statsText");
const progressBar = document.getElementById("progressBar");

// --- 3. DYNAMIC GREETING (Control Flow) ---
const updateGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) greeting.innerText = "Good Morning, Developer!";
    else if (hour < 18) greeting.innerText = "Good Afternoon, Pro!";
    else greeting.innerText = "Good Evening, Legend!";
};

// --- 4. ASYNC DATA (Fetch API) ---
async function fetchQuote() {
    try {
        const response = await fetch('https://dummyjson.com/quotes/random');
        const data = await response.json();
        // ES6 Destructuring
        const { quote, author } = data; 
        document.getElementById("quote").innerText = `"${quote}" — ${author}`;
    } catch (err) {
        document.getElementById("quote").innerText = "Stay focused. Work hard.";
    }
}

// --- 5. CORE LOGIC (Functions, Loops, Operators) ---
function renderTasks() {
    taskList.innerHTML = "";
    
    // Loop through tasks array
    tasks.forEach((task) => {
        const { id, text, completed } = task; // ES6 Destructuring
        
        const taskDiv = document.createElement("div");
        taskDiv.className = `d-flex justify-content-between align-items-center p-2 mb-2 border-bottom`;
        taskDiv.innerHTML = `
            <span class="${completed ? 'done' : ''}" onclick="toggleTask(${id})" style="cursor:pointer">
                ${completed ? '✅' : '⭕'} ${text}
            </span>
            <button class="btn btn-sm btn-danger" onclick="deleteTask(${id})">Delete</button>
        `;
        taskList.appendChild(taskDiv);
    });

    updateStats();
}

// --- 6. CALCULATIONS (Operators) ---
function updateStats() {
    const total = tasks.length;
    const finished = tasks.filter(t => t.completed).length;
    const percent = total === 0 ? 0 : Math.round((finished / total) * 100);
    
    document.getElementById("countBadge").innerText = `${total} Tasks`;
    statsText.innerText = `${percent}% Completed`;
    progressBar.style.width = `${percent}%`;
}

// --- 7. EVENT HANDLERS ---
addBtn.addEventListener("click", () => {
    const val = taskInput.value;
    if (!val) return alert("Please enter a task!");

    // Spread Operator to update array
    const newTask = { id: Date.now(), text: val, completed: false };
    tasks = [...tasks, newTask];
    
    taskInput.value = "";
    renderTasks();
});

function toggleTask(id) {
    tasks = tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t);
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    renderTasks();
}

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    const cards = document.querySelectorAll(".card");
    cards.forEach(c => c.classList.toggle("dark-card"));
    
    const isDark = document.body.classList.contains("dark-mode");
    document.getElementById("themeBtn").innerText = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// --- 8. INITIALIZE APP ---
updateGreeting();
fetchQuote();
renderTasks();