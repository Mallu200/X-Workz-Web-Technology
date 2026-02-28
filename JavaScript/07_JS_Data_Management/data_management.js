/* REAL-WORLD SCENARIO: Managing a Store Inventory
   1. Objects: Individual product details (Key-Value pairs).
   2. Arrays: The list of all products.
   3. Array Methods: Adding, removing, and counting items.
*/

// --- 1. THE DATA (Objects inside an Array) ---
let inventory = [
    { id: 101, name: "Samsung S23", price: 75000, stock: true },
    { id: 102, name: "Google Pixel 7", price: 55000, stock: true },
    { id: 103, name: "OnePlus 11", price: 60000, stock: false }
];

const listArea = document.getElementById("product-list");
const countBadge = document.getElementById("total-count");

// --- 2. THE DISPLAY FUNCTION (The "Pro" way) ---
function updateUI() {
    listArea.innerHTML = ""; // Clear current list
    countBadge.innerText = inventory.length; // Update count

    // Using .forEach to loop through the Array
    inventory.forEach((phone) => {
        const statusClass = phone.stock ? "text-success" : "text-danger";
        const statusText = phone.stock ? "In Stock" : "Out of Stock";

        listArea.innerHTML += `
            <div class="col-md-4">
                <div class="card product-card shadow-sm border-0">
                    <div class="card-body">
                        <h5 class="card-title fw-bold">${phone.name}</h5>
                        <p class="card-text text-muted">Price: ₹${phone.price.toLocaleString()}</p>
                        <span class="small ${statusClass}">${statusText}</span>
                        <hr>
                        <small class="text-secondary">SKU: ${phone.id}</small>
                    </div>
                </div>
            </div>
        `;
    });
}

// --- 3. ARRAY METHODS (Push & Pop) ---

function addLatestPhone() {
    // Creating a NEW Object
    const newPhone = {
        id: 104,
        name: "iPhone 15 Pro",
        price: 130000,
        stock: true
    };
    
    inventory.push(newPhone); // Adding to the END of the array
    updateUI();
}

function removeLastPhone() {
    inventory.pop(); // Removing the LAST item
    updateUI();
}

// --- 4. OBJECT ACCESS (Dot Notation) ---
console.log(`First item in stock: ${inventory[0].name}`); // Samsung S23
console.log(`Is Google Pixel in stock? ${inventory[1].stock}`); // true

// Initial Load
updateUI();

// --- 5. THE "THIS" KEYWORD (Introduction) ---
const manager = {
    name: "C Mallikarjun",
    greet: function() {
        console.log(`Inventory managed by: ${this.name}`);
    }
};
manager.greet();