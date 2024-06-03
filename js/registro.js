const draggable = document.getElementById("draggable");
const pagination = document.getElementById("pagination");

let DatosCar = JSON.parse(localStorage.getItem("DatosCar")) || [

    {
        "nombre": "Audífonos gamer inalámbricos ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen1.png",
        "codigo": "AU01",
        "precio": 20000,
        "color": "Azul",
        "marca": "Logitech",
        "modelo": "CAT STN-28",

    },
    {
        "nombre": "Audífonos gamer inalámbricos ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen2.png",
        "codigo": "AU02",
        "precio": 30000,
        "color": "blanco",
        "marca": "Logitech",
        "modelo": "G G Series G435",
    },

    {
        "nombre": "Audífonos inalámbricos  ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen3.png",
        "codigo": "AU03",
        "precio": 40000,
        "color": "negro",
        "marca": "Lenovo",
        "modelo": "X4",

    },

    {
        "nombre": "Audífonos inalámbricos  ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen4.png",
        "codigo": "AU04",
        "precio": 30000,
        "color": "negro",
        "marca": "Soundcore",
        "modelo": " Life Series Life Q30 A3028 ",
    },

    {
        "nombre": "Audífonos in-ear gamer ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen5.png",
        "codigo": "AU05",
        "precio": 50000,
        "color": "negro",
        "marca": "Lenovo",
        "modelo": "LivePods LP6 ",

    },

    {
        "nombre": "Audífonos Internos Inalámbricos ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen6.png",
        "codigo": "AU06",
        "precio": 30000,
        "color": "negro",
        "marca": "Lenovo",
        "modelo": "Wi-c100",

    },

    {
        "nombre": "Audífonos in-ear ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen7.png",
        "codigo": "AU07",
        "precio": 80000,
        "color": "negro",
        "marca": "Lenovo",
        "modelo": "GM2 Pro",

    },

    {
        "nombre": "Audífonos gamer inalámbricos ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen8.png",
        "codigo": "AU08",
        "precio": 20000,
        "color": "negro",
        "marca": "Logitech",
        "modelo": "G Pro X",

    },

    {
        "nombre": "Audífonos gamer inalámbricos ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen9.png",
        "codigo": "AU09",
        "precio": 60000,
        "color": "negro",
        "marca": "HYPERX",
        "modelo": "Cloud Flight",

    },

    {
        "nombre": "Audífonos gamer inalámbricos ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen10.png",
        "codigo": "AU10",
        "precio": 45000,
        "color": "negro",
        "marca": "Logitech",
        "modelo": "G535",

    },

    {
        "nombre": "Audífonos gamer inalámbricos ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen11.png",
        "codigo": "AU11",
        "precio": 20000,
        "color": "blanco",
        "marca": "Logitech",
        "modelo": "Zone Vibe 100",

    },

    {
        "nombre": "Audífonos gamer inalámbricos ",
        "categoria": "Audífonos",
        "imagen": "imagen2/imagen12.png",
        "codigo": "AU12",
        "precio": 65000,
        "color": "negro",
        "marca": "Skullcandy Crusher",
        "modelo": "Coral S6CRW-K591",

    },

    {
        "nombre": "Cámara web ",
        "categoria": "Camaras",
        "imagen": "imagen2/imagen13.png",
        "codigo": "CAM01",
        "precio": 200000,
        "color": "negro",
        "marca": "Logitech",
        "modelo": "4K Pro Ultra HD Pro",

    },

    {
        "nombre": "Cámara web ",
        "categoria": "Camaras",
        "imagen": "imagen2/imagen14.png",
        "codigo": "CAM02",
        "precio": 250000,
        "color": "negro",
        "marca": "Logitech",
        "modelo": "Sat X11 720p",

    },

    {
        "nombre": "Cámara web USB",
        "categoria": "Camaras",
        "imagen": "imagen2/imagen15.png",
        "codigo": "CAM03",
        "precio": 250000,
        "color": "negro",
        "marca": "Steren",
        "modelo": "COM124",

    },

    {
        "nombre": "Teclado gamer ",
        "categoria": "Teclados",
        "imagen": "imagen2/imagen16.png",
        "codigo": "TE01",
        "precio": 30000,
        "color": "negro",
        "marca": "Genius GX",
        "modelo": "Scorpion K220 QWERTY",

    },

    {
        "nombre": "Teclado gamer ",
        "categoria": "Teclados",
        "imagen": "imagen2/imagen17.png",
        "codigo": "TE02",
        "precio": 150000,
        "color": "negro",
        "marca": "HyperX",
        "modelo": "Alloy Origins 60",

    },

    {
        "nombre": "Teclado gamer ",
        "categoria": "Teclados",
        "imagen": "imagen2/imagen18.png",
        "codigo": "TE03",
        "precio": 70000,
        "color": "negro",
        "marca": "Razer",
        "modelo": "Ornata V3 X ",

    },

    {
        "nombre": "Teclado gamer ",
        "categoria": "Teclados",
        "imagen": "imagen2/imagen19.png",
        "codigo": "TE04",
        "precio": 100000,
        "color": "negro",
        "marca": "Logitech",
        "modelo": "K400 Plus",

    },

    {
        "nombre": "Teclado gamer ",
        "categoria": "Teclados",
        "imagen": "imagen2/imagen20.png",
        "codigo": "TE05",
        "precio": 60000,
        "color": "negro",
        "marca": "XTRIKE ME",
        "modelo": "KB-509",

    },

    {
        "nombre": "Teclado gamer ",
        "categoria": "Teclados",
        "imagen": "imagen2/imagen21.png",
        "codigo": "TE06",
        "precio": 50000,
        "color": "negro",
        "marca": "XTECH",
        "modelo": "XTK-510S",

    },

    {
        "nombre": "Teclado gamer ",
        "categoria": "Teclados",
        "imagen": "imagen2/imagen22.png",
        "codigo": "TE07",
        "precio": 70000,
        "color": "blanco",
        "marca": "WYCK",
        "modelo": "WK-220",

    },

    {
        "nombre": "Teclado gamer ",
        "categoria": "Teclados",
        "imagen": "imagen2/imagen23.png",
        "codigo": "TE08",
        "precio": 80000,
        "color": "negro",
        "marca": "TRUST",
        "modelo": "Gxt 830",

    },

    {
        "nombre": "Teclado Inalámbrico Bluetooth ",
        "categoria": "Teclados",
        "imagen": "imagen2/imagen24.png",
        "codigo": "TE09",
        "precio": 80000,
        "color": "blanco",
        "marca": "Logitech",
        "modelo": "K380",
    },

    {
        "nombre": "Monitor gamer ",
        "categoria": "Monitores",
        "imagen": "imagen2/imagen25.png",
        "codigo": "MO01",
        "precio": 800000,
        "color": "negro",
        "marca": "Samsung",
        "modelo": "Ips De 24 Full Hd Freesync 75Hz Hdmi F24t350",

    },

    {
        "nombre": "Monitor gamer ",
        "categoria": "Monitores",
        "imagen": "imagen2/imagen26.png",
        "codigo": "MO02",
        "precio": 700000,
        "color": "negro",
        "marca": "LG",
        "modelo": "Ultrawide LG 29 Ips Hdr10 Freesync 75hz 5ms 29wp500",

    },

    {
        "nombre": "Monitor Ultrawide ",
        "categoria": "Monitores",
        "imagen": "imagen2/imagen27.png",
        "codigo": "MO03",
        "precio": 900000,
        "color": "negro",
        "marca": "LG",
        "modelo": "29 Ips Hdr10 Freesync 75hz 5ms 29wp500",

    },

    {
        "nombre": "Mouse gamer ",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen28.png",
        "codigo": "RA01",
        "precio": 180000,
        "color": "negro",
        "marca": "Razer ",
        "modelo": "DeathAdder Essential",

    },

    {
        "nombre": "Mouse gamer ",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen29.png",
        "codigo": "RA02",
        "precio": 170000,
        "color": "púrpura",
        "marca": "Razer ",
        "modelo": " VSG Aurora ",

    },

    {
        "nombre": "Mouse gamer ",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen30.png",
        "codigo": "RA03",
        "precio": 150000,
        "color": "negro",
        "marca": "Logitech",
        "modelo": " G203 Rgb Lighsync",

    },



    {
        "nombre": "Mouse gamer Ergonómico  ",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen31.png",
        "codigo": "RA06",
        "precio": 170000,
        "color": "negro",
        "marca": "GENIUS",
        "modelo": "ERGO 8250S",

    },

    {
        "nombre": "Mouse gamer Ergonómico  ",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen32.png",
        "codigo": "RA07",
        "precio": 140000,
        "color": "negro",
        "marca": "ZELOTES",
        "modelo": "T30",

    },

    {
        "nombre": "Mouse gamer Cableado  ",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen33.png",
        "codigo": "RA08",
        "precio": 130000,
        "color": "negro",
        "marca": "Logitech",
        "modelo": "1040803",

    },

    {
        "nombre": "Mouse gamer Alambrico",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen34.png",
        "codigo": "RA09",
        "precio": 110000,
        "color": "blanco",
        "marca": "Logitech",
        "modelo": "G502X ",

    },

    {
        "nombre": "Mouse gamer",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen35.png",
        "codigo": "RA10",
        "precio": 159900,
        "color": "blanco",
        "marca": "REDRAGON",
        "modelo": "M988W-RGB",

    },


    {
        "nombre": "Mouse gamer",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen36.png",
        "codigo": "RA12",
        "precio": 99900,
        "color": "negro",
        "marca": "REDRAGON",
        "modelo": "M607",

    },

    {
        "nombre": "Mouse gamer",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen37.png",
        "codigo": "RA13",
        "precio": 79900,
        "color": "negro",
        "marca": "REDRAGON",
        "modelo": "m601 rgb",

    },

    {
        "nombre": "Mouse gamer",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen38.png",
        "codigo": "RA14",
        "precio": 54900,
        "color": "negro",
        "marca": "XTRIKE ME",
        "modelo": "GM-512",

    },

    {
        "nombre": "Mouse gamer",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen39.png",
        "codigo": "RA15",
        "precio": 55900,
        "color": "negro",
        "marca": "DELUX",
        "modelo": "M800BU RGB",

    },

    {
        "nombre": "Mouse gamer",
        "categoria": "Mouses",
        "imagen": "imagen2/imagen40.png",
        "codigo": "RA16",
        "precio": 89900,
        "color": "negro",
        "marca": "ZELOTES",
        "modelo": "T-80",

    },

    {
        "nombre": "Impresora a color ",
        "categoria": "Impresoras",
        "imagen": "imagen2/imagen41.png",
        "codigo": "IMP01",
        "precio": 89900,
        "color": "negro",
        "marca": "Canon",
        "modelo": "Pixma G3160",

    },

    {
        "nombre": "Impresora a color ",
        "categoria": "Impresoras",
        "imagen": "imagen2/imagen42.png",
        "codigo": "IMP02",
        "precio": 89900,
        "color": "negro",
        "marca": "Epson",
        "modelo": "EcoTank L800 (110V)",

    },

    {
        "nombre": "Impresora Multifuncional  ",
        "categoria": "Impresoras",
        "imagen": "imagen2/imagen43.png",
        "codigo": "IMP03",
        "precio": 89900,
        "color": "blanco",
        "marca": "Hp",
        "modelo": "Smart Tank 520 ",

    },

    {
        "nombre": "Impresora Multifuncional  ",
        "categoria": "Impresoras",
        "imagen": "imagen2/imagen44.png",
        "codigo": "IMP04",
        "precio": 89900,
        "color": "negro",
        "marca": "Epson",
        "modelo": "EcoTank L3150 ",

    },


    {
        "nombre": "Impresora Multifuncional  ",
        "categoria": "Impresoras",
        "imagen": "imagen2/imagen45.png",
        "codigo": "IMP05",
        "precio": 370000,
        "color": "negro",
        "marca": "HP",
        "modelo": "DeskJet Ink Advantage 2875 ",

    },

    {
        "nombre": "Impresora Multifuncional  ",
        "categoria": "Impresoras",
        "imagen": "imagen2/imagen46.png",
        "codigo": "IMP06",
        "precio": 500000,
        "color": "negro",
        "marca": "CANON",
        "modelo": "G3160",

    },

    {
        "nombre": "Impresora Multifuncional  ",
        "categoria": "Impresoras",
        "imagen": "imagen2/imagen47.png",
        "codigo": "IMP07",
        "precio": 999000,
        "color": "negro",
        "marca": "BROTHER",
        "modelo": "dcpt720dw",

    },

    {
        "nombre": "Impresora Multifuncional  ",
        "categoria": "Impresoras",
        "imagen": "imagen2/imagen48.png",
        "codigo": "IMP08",
        "precio": 1200000,
        "color": "negro",
        "marca": "BROTHER",
        "modelo": "MFC-T920DW",

    },

    {
        "nombre": "Impresora Multifuncional  ",
        "categoria": "Impresoras",
        "imagen": "imagen2/imagen49.png",
        "codigo": "IMP09",
        "precio": 4000000,
        "color": "blanco",
        "marca": "BROTHER",
        "modelo": "MFC-L9570CDW",

    },


    {
        "nombre": "Impresora Multifuncional  ",
        "categoria": "Impresoras",
        "imagen": "imagen2/imagen50.png",
        "codigo": "IMP10",
        "precio": 4000000,
        "color": "blanco",
        "marca": "EPSON",
        "modelo": "WF-6590",

    },
 
];

if (!localStorage.getItem("DatosCar")) {
    localStorage.setItem("DatosCar", JSON.stringify(DatosCar));
} else {
    DatosCar = JSON.parse(localStorage.getItem("DatosCar"));
}

const itemsPerPage = 15;
let currentPage = 1;
const totalPages = Math.ceil(DatosCar.length / itemsPerPage);

const renderPage = (page) => {
    draggable.innerHTML = "";
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const items = DatosCar.slice(start, end);
    for (let vistaProductos of items) {
        draggable.innerHTML += `
            <div class="card">
                <div class="card__img">
                    <img src="${vistaProductos.imagen}" alt="${vistaProductos.nombre}" />
                </div>
                <div class="card__description">
                    <p class="text__description">${vistaProductos.nombre}</p>
                    <span class="price">Precio: ${vistaProductos.precio}</span>
                    <p class="category">Categoría: ${vistaProductos.categoria}</p>
                    <p class="code">Código: ${vistaProductos.codigo}</p>
                    <p class="color">Color: ${vistaProductos.color}</p>
                    <p class="brand">Marca: ${vistaProductos.marca}</p>
                    <p class="model">Modelo: ${vistaProductos.modelo}</p>
                </div>
            </div>
        `;
    }
    renderPagination();
};

const renderPagination = () => {
    pagination.innerHTML = "";
    pagination.innerHTML += `
        <button onclick="goToPage(${currentPage - 1})" ${currentPage === 1 ? 'disabled' : ''}>Anterior</button>
        <span>Página ${currentPage} de ${totalPages}</span>
        <button onclick="goToPage(${currentPage + 1})" ${currentPage === totalPages ? 'disabled' : ''}>Siguiente</button>
    `;
};

const goToPage = (page) => {
    currentPage = page;
    renderPage(page);
};

renderPage(currentPage);