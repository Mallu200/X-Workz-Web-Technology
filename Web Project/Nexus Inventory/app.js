// --- INITIALIZATION ---
let products = JSON.parse(localStorage.getItem("nexus_data")) || [];
let editMode = false;

const form = document.getElementById("productForm");
const tableBody = document.getElementById("productTableBody");
const submitBtn = document.getElementById("submitBtn");
const formTitle = document.getElementById("formTitle");
const cancelBtn = document.getElementById("cancelBtn");

// --- READ (Display Data) ---
function renderTable(data = products) {
    tableBody.innerHTML = "";
    data.forEach((item, index) => {
        tableBody.innerHTML += `
            <tr>
                <td>#${index + 1}</td>
                <td class="fw-bold">${item.name}</td>
                <td><span class="badge bg-info text-dark">${item.category}</span></td>
                <td>$${item.price}</td>
                <td>
                    <button class="btn btn-sm btn-warning me-1" onclick="prepareUpdate(${item.id})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteProduct(${item.id})">Delete</button>
                </td>
            </tr>
        `;
    });
    localStorage.setItem("nexus_data", JSON.stringify(products));
}

// --- CREATE & UPDATE ---
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("pName").value;
    const category = document.getElementById("pCategory").value;
    const price = document.getElementById("pPrice").value;
    const id = document.getElementById("productId").value;

    if (editMode) {
        // UPDATE Logic
        products = products.map(p => p.id == id ? { ...p, name, category, price } : p);
        resetForm();
    } else {
        // CREATE Logic
        const newProduct = {
            id: Date.now(),
            name,
            category,
            price
        };
        products.push(newProduct);
    }

    renderTable();
    form.reset();
});

// --- DELETE ---
function deleteProduct(id) {
    if (confirm("Are you sure you want to delete this product?")) {
        products = products.filter(p => p.id !== id);
        renderTable();
    }
}

// --- UPDATE PREPARATION (Loading data into form) ---
function prepareUpdate(id) {
    const product = products.find(p => p.id === id);
    document.getElementById("pName").value = product.name;
    document.getElementById("pCategory").value = product.category;
    document.getElementById("pPrice").value = product.price;
    document.getElementById("productId").value = product.id;

    editMode = true;
    formTitle.innerText = "Edit Product";
    submitBtn.innerText = "Update Changes";
    submitBtn.className = "btn btn-success w-100";
    cancelBtn.classList.remove("d-none");
}

// --- SEARCH LOGIC (Filter) ---
document.getElementById("searchInput").addEventListener("input", (e) => {
    const term = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.name.toLowerCase().includes(term));
    renderTable(filtered);
});

// Reset Utility
function resetForm() {
    editMode = false;
    formTitle.innerText = "Add New Product";
    submitBtn.innerText = "Add Product";
    submitBtn.className = "btn btn-primary w-100";
    cancelBtn.classList.add("d-none");
    document.getElementById("productId").value = "";
}

cancelBtn.addEventListener("click", () => {
    form.reset();
    resetForm();
});

// Initial Load
renderTable();