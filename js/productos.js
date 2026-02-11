/* ==========================================================================
   PRODUCTOS.JS - M&S INDUMENTARIA 
   ========================================================================== */

const PRODUCTOS = [
    // --- SECCIÓN MUJERES ---
    {
        id: "m-01",
        nombre: "Remera Oversize Cotton",
        precio: 8500,
        talles: ["S", "M", "L", "XL"],
        imagenes: ["../images/remera-mujer-1.jpg"],
        categoria: "mujeres",
        descripcion: "Remera 100% algodón, corte oversize ideal para un look casual y cómodo."
    },
    {
        id: "m-02",
        nombre: "Conjunto Deportivo Active",
        precio: 15500,
        talles: ["S", "M", "L"],
        imagenes: ["../images/conjunto-deportivo.jpg"],
        categoria: "mujeres",
        descripcion: "Top con soporte medio y calza de tiro alto con tecnología dry-fit."
    },
    {
        id: "m-03",
        nombre: "Jean Wide Leg Blue",
        precio: 22000,
        talles: ["36", "38", "40", "42", "44"],
        imagenes: ["../images/jean-mujer.jpg"],
        categoria: "mujeres",
        descripcion: "Jean tendencia de pierna ancha, tiro alto y tela rígida de alta calidad."
    },

    // --- SECCIÓN HOMBRES ---
    {
        id: "h-01",
        nombre: "Remera Basic Slim Fit",
        precio: 9000,
        talles: ["M", "L", "XL", "XXL"],
        imagenes: ["../images/remera-hombre-1.jpg"],
        categoria: "hombres",
        descripcion: "Remera entallada de algodón peinado, cuello redondo reforzado."
    },
    {
        id: "h-02",
        nombre: "Bermuda Gabardina Premium",
        precio: 14500,
        talles: ["40", "42", "44", "46"],
        imagenes: ["../images/bermuda-hombre.jpg"],
        categoria: "hombres",
        descripcion: "Bermuda de gabardina con bolsillos laterales, ideal para el verano."
    },
    {
        id: "h-03",
        nombre: "Boxer M&S Signature",
        precio: 4500,
        talles: ["S", "M", "L", "XL"],
        imagenes: ["../images/boxer-m-s.jpg"],
        categoria: "hombres",
        descripcion: "Boxer de microfibra sin costuras, máxima comodidad y ajuste."
    },

    // --- SECCIÓN LIBRERÍA ---
    {
        id: "lib-01",
        nombre: "Bolígrafo Stick 026",
        precio: 4500,
        talles: [], // Sin talles para librería
        imagenes: ["../images/4Boligrafos-filgo-stick1.png",
            "../images/4Boligrafos-filgo-stick2.png"

        ],
        categoria: "libreria",
        descripcion: "Cuerpo hexagonal, Tinta suave a base de aceite, Grip ergonómico, Capuchón ventilado antiahogo, Punta metálica de tungsteno, Escritura confortable."
    },
    {
        id: "lib-02",
        nombre: "Marcador Ezco escolar x 6 colores",
        precio: 3200,
        talles: [],
        imagenes: ["../images/6marcadores-ezco-escolar.png"],
        categoria: "libreria",
        descripcion: "Ideal para: papel, Grosor del trazo: 1mm, Es lavable."
    },
    {
        id: "lib-03",
        nombre: "Acuarelas Essential x12 colores Keyroad",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Acuerelas.png"],
        categoria: "libreria",
        descripcion: "ACUARELAS KEYROAD COLORES X 12 + PINCEL. 23 MM."
    },
    {
        id: "lib-04",
        nombre: "Compás Plástico Fiddo Ezco",
        precio: 28000,
        talles: [],
        imagenes: ["../images/ezco-Compas1.png",
            "../images/ezco-Compas2.png"
        ],
        categoria: "libreria",
        descripcion: "Tipo de punta: dibujo, Tipo de instrumento de dibujo: mina, Largo: 13cm.."
    },

    {
        id: "lib-05",
        nombre: "Goma de borrar lápiz Pinto 3020",
        precio: 28000,
        talles: [],
        imagenes: ["../images/gomas-pinto-filgo1.png",
            "../images/gomas-pinto-filgo2.png"
        ],
        categoria: "libreria",
        descripcion: "Goma sintética para borrado de calidad, Borrado limpio y fácil sin dañar el papel, Protegida con film de prolipropileno."
    },

    {
        id: "lib-06",
        nombre: "Boligrafo Birome Lapicera Filgo Stick 026 Azul Color del exterior Transparente",
        precio: 28000,
        talles: [],
        imagenes: ["../images/lapiceraAzul-filgo1.png",
            "../images/lapiceraAzul-filgo2.png"
        ],
        categoria: "libreria",
        descripcion: "Grosor del trazo: 1 mm. Color del exterior: Transparente. Punta fina para una escritura suave y precisa. Tinta a base de aceite para un secado rápido y sin manchas. Diseño exterior transparente que muestra nivel de tinta. Incluye capuchón para protección y seguridad."
    },

    {
        id: "lib-07",
        nombre: "Boligrafo Birome Lapicera Filgo Stick 026 NEgro Color del exterior Transparente",
        precio: 28000,
        talles: [],
        imagenes: ["../images/lapiceraNegra-filgo1.png",
            "../images/lapiceraNegra-filgo2.png"
        ],
        categoria: "libreria",
        descripcion: "Grosor del trazo: 1 mm. Color del exterior: Transparente. Punta fina para una escritura suave y precisa. Tinta a base de aceite para un secado rápido y sin manchas. Diseño exterior transparente que muestra nivel de tinta. Incluye capuchón para protección y seguridad."
    },
    {
        id: "lib-08",
        nombre: "Lapiz De Grafito Negro Pinto Filgo",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Lapiz-Pinto-Filgo1.png",
            "../images/Lapiz-Pinto-Filgo2.png"
        ],
        categoria: "libreria",
        descripcion: "Graduación del lápiz: HB nro 2."
    },
    {
        id: "lib-09",
        nombre: "Lapices De Colores Surtidos Penmac",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Penmac-12Lapices-color1.png",
            "../images/Penmac-12Lapices-color2.png"
        ],
        categoria: "libreria",
        descripcion: "Unidades por pack: 12, Formato de venta: Pack, Color del trazo: Varios Colores"
    },
    {
        id: "lib-010",
        nombre: "Lapiz Portaminas Filgo Real Grip 0.7mm",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Portaminas-fingo1.png",
            "../images/Portaminas-fingo2.png"
        ],
        categoria: "libreria",
        descripcion: "Color de la mina: Grafito, Nombre del diseño: REALGRIP, Tipo de portaminas: retráctil. Tipo de trazo: fino. Hecho de goma, plástico. Grosor de las minas: 5 mm. Es recargable."
    },
    {
        id: "lib-011",
        nombre: "Reglas Filgo Geox Flex Escolar 20 Cm",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Reglas-Flexible-Filgo1.png",
            "../images/Reglas-Flexible-Filgo2.png",
            "../images/Reglas-Flexible-Filgo3.png"
        ],
        categoria: "libreria",
        descripcion: "Formato de venta: Unidad, Incluye Reglas rígidas transparentes. La medida máxima es de 20cm."
    },
    {
        id: "lib-012",
        nombre: "Kit De Reglas Geométricas De 20 Cm - 4 Piezas Gris",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Set-4reglas-20cm1.png",
        ],
        categoria: "libreria",
        descripcion: "Incluye Escuadras transportadoras. La medida máxima es de 20cm."
    },
    {
        id: "lib-013",
        nombre: "Tempera Señorita Sta En Pomo 8 Cc X 10 Colores",
        precio: 28000,
        talles: [],
        imagenes: ["../images/temperas-señoritas1.png",
            "../images/temperas-señoritas2.png"
        ],
        categoria: "libreria",
        descripcion: "Amplia gama de colores vibrantes. 10 unidades de témpera en pomo. Volumen de 8 mL por unidad. Ideal para proyectos de arte y manualidades."
    },
        {
        id: "lib-014",
        nombre: "Tijera Pinto Filgo",
        precio: 28000,
        talles: [],
        imagenes: ["../images/tijera-pinto-filgo1.png",
            "../images/tijera-pinto-filgo2.png"
        ],
        categoria: "libreria",
        descripcion: "Diseño para zurdos y diestros. Punta roma para mayor seguridad. Cuchillas de acero inoxidable. Mango de plástico resistente y durable"
    },
];
