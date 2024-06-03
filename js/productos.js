function validateProductName(name) {
    return name.length <= 20;
}

function validateProductCode(code) {
    if (code.length < 8) {
        return false;
    }

    const hasLowercase = /[a-z]/.test(code);
    const hasUppercase = /[A-Z]/.test(code);
    if (!hasLowercase || !hasUppercase) {
        return false;
    }

    const numMatches = code.match(/\d/g);
    const numCount = numMatches ? numMatches.length : 0;
    if (numCount < 2) {
        return false;
    }

    return true;
}

function openGuidePage() {
    window.open('indicaciones.html', '_blank');
}

document.addEventListener("DOMContentLoaded", function() {
    const guideLink = document.getElementById("guide-link");
    guideLink.addEventListener("click", openGuidePage);
});

document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const categoria = document.getElementById("categoria").value;
    const imagenInput = document.getElementById("Imagen").files[0];
    const codigo = document.getElementById("codigo").value.trim();
    const precio = parseInt(document.getElementById("precio").value.trim());
    const color = document.getElementById("color").value.trim();
    const marca = document.getElementById("marca").value.trim();
    const modelo = document.getElementById("modelo").value.trim();

    const loadingMessage = document.getElementById("loading-message");
    const completeMessage = document.getElementById("complete-message");
    const errorMessage = document.getElementById("error-message");

    if (!validateProductName(nombre)) {
        alert("El nombre del producto no debe superar los 20 caracteres.");
        return;
    }

    if (!validateProductCode(codigo)) {
        alert("El código del producto debe tener al menos 8 caracteres, incluir al menos una letra minúscula, una letra mayúscula y dos números.");
        // Abre la página de indicaciones
        openGuidePage();
        return;
    }

    if (nombre && categoria && imagenInput && codigo && !isNaN(precio) && color && marca && modelo) {
        loadingMessage.style.display = "block";
        errorMessage.style.display = "none";

        const reader = new FileReader();
        reader.onload = function(e) {
            const newProduct = {
                nombre,
                categoria,
                imagen: e.target.result,
                codigo,
                precio,
                color,
                marca,
                modelo
            };

            new Promise((resolve, reject) => {
                setTimeout(() => {
                
                    let DatosCar = JSON.parse(localStorage.getItem("DatosCar")) || [];
                    DatosCar.push(newProduct);
                    localStorage.setItem("DatosCar", JSON.stringify(DatosCar));
                    resolve();
                }, 2000);
            }).then(() => {
                loadingMessage.style.display = "none";
                completeMessage.style.display = "block";
                setTimeout(() => {
                    window.location.href = "vistaProductos.html";
                }, 2000);
            }).catch((error) => {
                console.error("Error:", error);
                loadingMessage.style.display = "none";
                errorMessage.style.display = "block";
            });
        };
        reader.readAsDataURL(imagenInput);
    } else {
        errorMessage.style.display = "block";
    }
});
