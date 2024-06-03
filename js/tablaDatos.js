const searchProducts = () => {
    const name = document.getElementById("searchName").value.toLowerCase();
    const minPrice = parseInt(document.getElementById("minPrice").value);
    const maxPrice = parseInt(document.getElementById("maxPrice").value);
    const category = document.getElementById("searchCategory").value;

    let DatosCar = JSON.parse(localStorage.getItem("DatosCar")) || [];
    let filteredProducts = DatosCar.filter(product => {
        return (!name || product.nombre.toLowerCase().includes(name)) &&
               (!minPrice || product.precio >= minPrice) &&
               (!maxPrice || product.precio <= maxPrice) &&
               (!category || product.categoria === category);
    });

    renderTable(filteredProducts);
};

const renderTable = (products) => {
    const tbody = document.querySelector("#productTable tbody");
    tbody.innerHTML = "";

    products.forEach(product => {
        const row = `<tr>
            <td>${product.nombre}</td>
            <td>${product.categoria}</td>
            <td><img src="${product.imagen}" alt="" width="50"></td>
            <td>${product.codigo}</td>
            <td>${product.precio}</td>
            <td>${product.color}</td>
            <td>${product.marca}</td>
            <td>${product.modelo}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
};


const clearFilters = () => {
    document.getElementById("searchName").value = "";
    document.getElementById("minPrice").value = "";
    document.getElementById("maxPrice").value = "";
    document.getElementById("searchCategory").value = "";

    renderTable(DatosCar);
};

document.addEventListener("DOMContentLoaded", () => {
    let DatosCar = JSON.parse(localStorage.getItem("DatosCar")) || [];
    const categories = [...new Set(DatosCar.map(product => product.categoria))];
    const categorySelect = document.getElementById("searchCategory");

    categories.forEach(category => {
        const option = document.createElement("option");
        option.value = category;
        option.textContent = category;
        categorySelect.appendChild(option);
    });
});