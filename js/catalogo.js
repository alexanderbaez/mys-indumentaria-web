document.addEventListener('DOMContentLoaded', () => {

    // 📱 Configuración global para tu número de WhatsApp
    // Asegúrate de usar el número correcto. El formato es CÓDIGO_PAIS + CÓDIGO_AREA + NUMERO.
    const DEFAULT_WHATSAPP_NUMBER = '5492645188181';

    // ----------------------------------------------------
    // 1. Lógica para el cambio de color de la barra de navegación (Scroll)
    // ----------------------------------------------------
    const nav = document.getElementById('mainNav');

    const toggleNavClass = () => {
        if (nav) {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        }
    };

    toggleNavClass();
    window.addEventListener('scroll', toggleNavClass);

    // ----------------------------------------------------
    // 2. Manejo de la compra por WhatsApp (Optimizado para selección de Talle)
    // ----------------------------------------------------
    const whatsappButtons = document.querySelectorAll('.btn-whatsapp-product');

    whatsappButtons.forEach(button => {
        button.addEventListener('click', (event) => {

            const card = button.closest('.card');
            const productName = button.getAttribute('data-product');
            const productId = button.getAttribute('data-product-id'); // <-- Usamos el ID del producto
            const productType = button.getAttribute('data-type') || 'Artículo';
            const whatsappNumber = button.getAttribute('data-whatsapp-number') || DEFAULT_WHATSAPP_NUMBER;

            let selectedTalle = null;
            let priceText = 'Precio no especificado';

            // --- A. Obtención y Validación del Talle (Revisión Crítica) ---
            const talleGroupContainer = card.querySelector('.talle-select-group');

            if (talleGroupContainer) {
                // Buscamos el radio button CHEQUEADO que tenga el 'name' correcto para ESTE producto.
                // El 'name' del radio es 'size-' seguido del productId (ej: size-prod-m-01)
                const checkedRadio = card.querySelector(`input[type="radio"][name="size-${productId}"]:checked`);

                selectedTalle = checkedRadio ? checkedRadio.value : null;

                // VALIDACIÓN: Si no hay talle, mostramos ALERTA y SALIMOS.
                if (!selectedTalle) {
                    // Si llegamos aquí y no funciona, el problema es que el talle no está marcado.
                    alert(`⚠️ ¡ATENCIÓN! Debes seleccionar un talle (S, M, L, XL) para el producto "${productName}" antes de continuar.`);
                    return; // Esto detiene la función si falta la selección.
                }
            }
            // Si el producto no tiene un selector de talle, selectedTalle será null o se mantendrá como 'Único'.


            // --- B. Obtención del Precio ---
            const priceElement = card.querySelector('.price-text');
            if (priceElement) {
                priceText = priceElement.innerText.trim();
            }

            // --- C. Construcción del Mensaje ---
            let messageLines = [];
            messageLines.push(`*¡Hola!* 👋 Estoy contactando por el producto que vi en su catálogo web.`);
            messageLines.push(`-----------------------------------`);
            messageLines.push(`🌟 *DETALLES DEL PRODUCTO*`);
            messageLines.push(`Producto: *${productName}*`);
            messageLines.push(`Categoría: ${productType}`);
            messageLines.push(`Talle Solicitado: *${selectedTalle || 'Único/Sin selección'}*`); // Muestra el talle o 'Único'
            messageLines.push(`Precio Indicado: ${priceText}`);
            messageLines.push(`-----------------------------------`);
            messageLines.push(`Me gustaría confirmar *stock disponible* y conocer las formas de pago para este artículo.`);
            messageLines.push(`\n¡Gracias! Espero su respuesta.`);

            const message = messageLines.join('\n');

            // --- D. Apertura del Enlace ---
            const encodedMessage = encodeURIComponent(message);
            const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;

            // Intentamos abrir en una nueva pestaña (comportamiento por defecto deseado)
            const newTab = window.open(whatsappUrl, '_blank');

            // Fallback en caso de que el navegador bloquee la ventana emergente
            if (!newTab || newTab.closed || typeof newTab.closed == 'undefined') {
                // Si fue bloqueado, intentamos redirigir la pestaña actual
                alert("El navegador bloqueó la ventana de WhatsApp. Te redirigiremos ahora.");
                window.location.href = whatsappUrl;
            }
        });
    });
});