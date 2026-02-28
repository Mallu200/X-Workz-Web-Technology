/* REAL-WORLD SCENARIO: Fetching External API Data
   1. Fetch API: Making a network request.
   2. Promises: Handling the "Waiting" period.
   3. Async/Await: The modern, clean way to handle async code.
   4. Error Handling: Using try/catch for "Network Failed" scenarios.
*/

const btn = document.getElementById("fetchBtn");
const display = document.getElementById("weather-display");
const loader = document.getElementById("loader");

// --- 1. THE ASYNC FUNCTION (The Modern Standard) ---
async function getWeatherData() {
    // UI Update: Show loader, hide text
    display.innerHTML = "";
    loader.classList.remove("d-none");

    try {
        /* 2. FETCH: We use a real test API (JSONPlaceholder or OpenWeather)
           Note: Using a dummy product API for reliable demo purposes. */
        const response = await fetch('https://dummyjson.com/products/1');
        
        // 3. CHECK: If the server responded with an error (404/500)
        if (!response.ok) {
            throw new Error("Server could not be reached!");
        }

        // 4. PARSE: Turning the raw data into a JS Object
        const data = await response.json();

        // 5. SUCCESS: Displaying the real data
        display.innerHTML = `
            <h1 class="display-4 text-primary">${data.price}°C</h1>
            <h4>${data.title}</h4>
            <p class="text-muted">${data.description}</p>
            <span class="badge bg-success">Status: Live Data</span>
        `;

    } catch (error) {
        // 6. CATCH: If the internet is down or the URL is wrong
        display.innerHTML = `
            <div class="alert alert-danger">Error: ${error.message}</div>
        `;
        console.error("Critical Failure:", error);
    } finally {
        // 7. FINALLY: Always runs, whether success or fail
        loader.classList.add("d-none");
    }
}

// Event Listener to trigger the Async process
btn.addEventListener("click", getWeatherData);

/* 💡 PRO-TIP: PROMISE BASICS (The older way)
   fetch('url').then(res => res.json()).then(data => console.log(data));
   We use Async/Await instead because it reads like normal code!
*/