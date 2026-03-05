/* ==========================================================================
   LÓGICA DE NEGOCIO - M&S INDUMENTARIA
   ========================================================================== */

const WHATSAPP_NUMBER = '5492644762626';
let carrito = JSON.parse(localStorage.getItem('msIndumentariaCarrito')) || [];

document.addEventListener('DOMContentLoaded', () => {
    actualizarContadorUI();

    if (typeof PRODUCTOS === 'undefined') return;

    const contenedor = document.getElementById("contenedor-productos");
    if (contenedor) {
        const titulo = document.title.toLowerCase();
        let categoriaBuscada = "";

        if (titulo.includes("mujer")) categoriaBuscada = "mujeres";
        else if (titulo.includes("hombre")) categoriaBuscada = "hombres";
        else if (titulo.includes("niño") || titulo.includes("niños")) categoriaBuscada = "niños";
        else if (titulo.includes("libreria")) categoriaBuscada = "libreria";

        renderizarPaginaCategoria(categoriaBuscada);
    }

    const modalCarrito = document.getElementById('cartModal');
    if (modalCarrito) {
        modalCarrito.addEventListener('show.bs.modal', renderizarListaCarrito);
    }
});

// --- FUNCIÓN PARA SEPARAR POR SECCIONES ---
function renderizarPaginaCategoria(cat) {
    const contenedor = document.getElementById("contenedor-productos");
    if (!contenedor) return;
    contenedor.innerHTML = "";

    const productosCategoria = PRODUCTOS.filter(p => p.categoria === cat);

    if (cat === "libreria") {
        dibujarSeccion(contenedor, "Artículos de Librería", productosCategoria);
    } else {
        const moda = productosCategoria.filter(p => p.subcategoria === "moda");
        const deportivo = productosCategoria.filter(p => p.subcategoria === "deportivo");

        if (moda.length > 0) dibujarSeccion(contenedor, "Colección Moda", moda);
        if (deportivo.length > 0) dibujarSeccion(contenedor, "Línea Deportiva", deportivo);
    }
}

// --- DIBUJAR UNA SECCIÓN CON TÍTULO Y PRODUCTOS ---
function dibujarSeccion(contenedor, titulo, lista) {
    contenedor.innerHTML += `
        <div class="col-12 mt-5 mb-4">
            <h2 class="display-6 fw-bold text-uppercase border-start border-4 border-dark ps-3" 
                style="letter-spacing: 2px; font-family: 'Playfair Display';">
                ${titulo}
            </h2>
        </div>
    `;

    lista.forEach(p => {
        const tieneStock = p.stock !== false;
        
        // Generar badges de talles para la tarjeta (Vista Profesional)
        let htmlBadgesTalles = "";
        if (p.talles && p.talles.length > 0) {
            htmlBadgesTalles = `<div class="mt-2 d-flex flex-wrap justify-content-center gap-1">`;
            p.talles.forEach(t => {
                htmlBadgesTalles += `<span class="badge border border-dark text-dark fw-normal bg-transparent" style="font-size: 0.7rem;">${t}</span>`;
            });
            htmlBadgesTalles += `</div>`;
        }

        contenedor.innerHTML += `
            <div class="col-12 col-md-6 col-lg-4 mb-4 d-flex">
                <div class="product-card shadow-sm w-100 d-flex flex-column position-relative" 
                     style="background-color: #ffffff; border: 1px solid #eee; ${!tieneStock ? 'filter: grayscale(0.6);' : ''}">
                    
                    <div class="card-img-container" style="cursor: pointer;" onclick="mostrarDetalleProducto('${p.id}')">
                        <img src="${p.imagenes[0]}" alt="${p.nombre}" loading="lazy" class="img-fluid"
                             onmouseover="${p.imagenes[1] ? `this.src='${p.imagenes[1]}'` : ''}"
                             onmouseout="this.src='${p.imagenes[0]}'">
                    </div>

                    <div class="card-body text-center d-flex flex-column p-3">
                        <h5 class="card-title mb-1 fw-bold" style="font-size: 1.1rem; color: #1a1a1a;">${p.nombre}</h5>
                        
                        ${htmlBadgesTalles}

                        <p class="text-muted small my-2" style="min-height: 2.5rem;">${p.descripcion}</p>
                        
                        <div class="mb-3 mt-auto">
                            <span class="fw-bold text-dark" style="font-size: 1.3rem;">$${p.precio.toLocaleString('es-AR')}</span>
                        </div>

                        <button class="btn btn-dark w-100 py-2 text-uppercase fw-bold rounded-0" 
                                onclick="mostrarDetalleProducto('${p.id}')">
                            ${tieneStock ? 'Ver Detalle' : 'Sin Stock'}
                        </button>
                    </div>
                </div>
            </div>`;
    });
}

// --- DETALLE DEL PRODUCTO ---
window.mostrarDetalleProducto = function (id) {
    const p = PRODUCTOS.find(prod => prod.id === id);
    if (!p) return;

    let slides = p.imagenes.map((img, idx) => `
        <div class="carousel-item ${idx === 0 ? 'active' : ''}">
            <img src="${img}" class="d-block w-100" style="height: 500px; object-fit: cover;">
        </div>`).join('');

    let controls = "";
    let indicators = "";
    
    if (p.imagenes.length > 1) {
        indicators = `<div class="carousel-indicators">
            ${p.imagenes.map((_, idx) => `<button type="button" data-bs-target="#carouselDetalle" data-bs-slide-to="${idx}" class="${idx === 0 ? 'active' : ''}" style="background-color: #000; width: 10px; height: 10px; border-radius: 50%;"></button>`).join('')}
        </div>`;

        controls = `
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselDetalle" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true" style="filter: invert(1);"></span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselDetalle" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true" style="filter: invert(1);"></span>
            </button>`;
    }

    let htmlTalles = "";
    if (p.talles && p.talles.length > 0) {
        htmlTalles = `
            <div class="mb-4 text-start">
                <label class="fw-bold small text-uppercase mb-2 d-block">Seleccionar Talle:</label>
                <div class="d-flex flex-wrap gap-2" id="talle-selector-container">
                    ${p.talles.map((t, idx) => `
                        <input type="radio" class="btn-check" name="talle-radio" id="talle-${idx}" value="${t}" ${idx === 0 ? 'checked' : ''}>
                        <label class="btn btn-outline-dark rounded-0 px-3" for="talle-${idx}">${t}</label>
                    `).join('')}
                </div>
            </div>`;
    }

    const modalHtml = `
        <div class="modal fade" id="modalDetalle" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-lg modal-dialog-centered">
                <div class="modal-content border-0 rounded-0 shadow-lg">
                    <div class="modal-body p-0 position-relative">
                        <button type="button" class="btn-close position-absolute top-0 end-0 m-3 z-3" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div class="row g-0">
                            <div class="col-md-6 bg-light">
                                <div id="carouselDetalle" class="carousel slide" data-bs-ride="carousel">
                                    ${indicators}
                                    <div class="carousel-inner">${slides}</div>
                                    ${controls}
                                </div>
                            </div>
                            <div class="col-md-6 p-4 d-flex flex-column justify-content-center">
                                <span class="badge bg-dark text-white align-self-start mb-2 rounded-0 text-uppercase">${p.subcategoria || p.categoria}</span>
                                <h2 class="h3 fw-bold mb-2">${p.nombre}</h2>
                                <h3 class="mb-3 text-danger fw-bold">$${p.precio.toLocaleString('es-AR')}</h3>
                                <p class="text-muted small mb-4">${p.descripcion}</p>
                                ${htmlTalles}
                                <button class="btn btn-dark py-3 fw-bold text-uppercase rounded-0 w-100" onclick="agregarAlCarritoConTalle('${p.id}')">Añadir al Carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

    const oldModal = document.getElementById('modalDetalle');
    if (oldModal) oldModal.remove();
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    new bootstrap.Modal(document.getElementById('modalDetalle')).show();
};

// --- AGREGAR AL CARRITO ---
window.agregarAlCarritoConTalle = function (id) {
    const p = PRODUCTOS.find(prod => prod.id === id);
    // Buscamos el valor del radio button seleccionado
    const talleInput = document.querySelector('input[name="talle-radio"]:checked');
    const talleSeleccionado = talleInput ? talleInput.value : "Único";

    const cartId = `${id}-${talleSeleccionado}`;
    const existe = carrito.find(item => item.cartId === cartId);

    if (existe) {
        existe.cantidad++;
    } else {
        carrito.push({
            cartId: cartId,
            id: p.id,
            nombre: p.nombre,
            precio: p.precio,
            imagen: p.imagenes[0],
            talle: talleSeleccionado,
            cantidad: 1
        });
    }

    actualizarYGuardar();
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalDetalle'));
    if (modal) modal.hide();
    mostrarNotificacion(`${p.nombre} (${talleSeleccionado})`);
};

// --- RENDERIZAR CARRITO ---
window.renderizarListaCarrito = function () {
    const container = document.getElementById('cart-items');
    const totalElement = document.getElementById('cart-total');
    if (!container) return;

    if (carrito.length === 0) {
        container.innerHTML = `<div class="text-center py-5"><p class="mb-0">Tu carrito está vacío.</p></div>`;
        if (totalElement) totalElement.innerText = '$0';
        return;
    }

    let total = 0;
    let cartHtml = ``;

    carrito.forEach((item, index) => {
        total += item.precio * item.cantidad;
        cartHtml += `
            <div class="row align-items-center mb-3 g-2 border-bottom pb-2">
                <div class="col-3">
                    <img src="${item.imagen}" class="img-fluid rounded border">
                </div>
                <div class="col-6">
                    <p class="mb-0 fw-bold small text-uppercase">${item.nombre}</p>
                    <small class="text-muted d-block">Talle: <strong>${item.talle}</strong></small>
                    <small class="fw-bold">$${item.precio.toLocaleString('es-AR')}</small>
                </div>
                <div class="col-3 text-end">
                    <div class="d-flex align-items-center justify-content-end">
                        <button class="btn btn-sm btn-outline-dark" onclick="cambiarCantidad(${index}, -1)">-</button>
                        <span class="mx-2 small fw-bold">${item.cantidad}</span>
                        <button class="btn btn-sm btn-outline-dark" onclick="cambiarCantidad(${index}, 1)">+</button>
                    </div>
                </div>
            </div>`;
    });

    container.innerHTML = cartHtml;
    if (totalElement) totalElement.innerText = `$${total.toLocaleString('es-AR')}`;
};

window.cambiarCantidad = function (index, valor) {
    if (carrito[index].cantidad + valor > 0) {
        carrito[index].cantidad += valor;
    } else {
        carrito.splice(index, 1);
    }
    actualizarYGuardar();
    renderizarListaCarrito();
};

function actualizarYGuardar() {
    localStorage.setItem('msIndumentariaCarrito', JSON.stringify(carrito));
    actualizarContadorUI();
}

function actualizarContadorUI() {
    const contador = document.getElementById('cart-count');
    if (!contador) return;
    const totalUnidades = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    contador.innerText = totalUnidades;
    contador.style.display = totalUnidades === 0 ? 'none' : 'flex';
}

function enviarPedidoWhatsApp() {
    if (carrito.length === 0) return;
    let mensaje = "🛍️ *NUEVO PEDIDO - M&S INDUMENTARIA* 🛍️\n------------------------------------------\n\n";
    let total = 0;
    carrito.forEach((item, index) => {
        const subtotal = item.precio * item.cantidad;
        total += subtotal;
        mensaje += `📍 *${index + 1}. ${item.nombre}*\n     📏 Talle: ${item.talle}\n     🔢 Cantidad: ${item.cantidad}\n     💰 Subtotal: $${subtotal.toLocaleString('es-AR')}\n\n`;
    });
    mensaje += "------------------------------------------\n";
    mensaje += `💵 *TOTAL A PAGAR: $${total.toLocaleString('es-AR')}*\n------------------------------------------\n\n`;
    mensaje += "👤 *Datos del Cliente:*\n▫️ Nombre: \n▫️ Dirección: \n\n🚀 _¡Espero tu confirmación!_";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(mensaje)}`, "_blank");
}

function mostrarNotificacion(nombre) {
    const toast = document.createElement('div');
    toast.className = "position-fixed bottom-0 end-0 p-3";
    toast.style.zIndex = "3000";
    toast.innerHTML = `<div class="toast show bg-dark text-white p-3 shadow-lg"><small>✅ Agregado: ${nombre}</small></div>`;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 2500);
}