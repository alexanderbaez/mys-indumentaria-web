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
        subcategoria: "moda",
        descripcion: "Remera 100% algodón, corte oversize ideal para un look casual y cómodo."
    },
    {
        id: "m-02",
        nombre: "Conjunto Deportivo Active",
        precio: 15500,
        talles: ["S", "M", "L"],
        imagenes: ["../images/conjunto-deportivo.jpg"],
        categoria: "mujeres",
        subcategoria: "deportivo",
        descripcion: "Top con soporte medio y calza de tiro alto con tecnología dry-fit."
    },
    {
        id: "m-03",
        nombre: "Jean Wide Leg Blue",
        precio: 22000,
        talles: ["36", "38", "40", "42", "44"],
        imagenes: ["../images/jean-mujer.jpg"],
        categoria: "mujeres",
        subcategoria: "moda",
        descripcion: "Jean tendencia de pierna ancha, tiro alto y tela rígida de alta calidad."
    },

    // --- SECCIÓN HOMBRES ---
    {
        id: "h-01",
        nombre: "Musculosa de algodon",
        precio: 9000,
        talles: ["M", "L", "XL", "XXL"],
        imagenes: ["../images/Musculosa-Especial-Hombre1.png",
            "../images/Musculosa-Especial-Hombre2.png",
            "../images/Musculosa-Especial-Hombre3.png",
            "../images/Musculosa-Especial-Hombre4.png",
            "../images/Musculosa-Especial-Hombre5.png",

        ],
        categoria: "hombres",
        subcategoria: "moda",
        descripcion: "Remera entallada de algodón peinado, cuello redondo reforzado."
    },
    {
        id: "h-02",
        nombre: "Musculosa de algodon lisa",
        precio: 14500,
        talles: ["40", "42", "44", "46"],
        imagenes: ["../images/Musculosa-Hombre-Lisa1.png",
            "../images/Musculosa-Hombre-Lisa2.png"
        ],
        categoria: "hombres",
        subcategoria: "moda",
        descripcion: "Bermuda de gabardina con bolsillos laterales, ideal para el verano."
    },

        {
        id: "h-03",
        nombre: "Musculosa de algodon estampadas",
        precio: 14500,
        talles: ["40", "42", "44", "46"],
        imagenes: ["../images/Musculosa-Hombre-Estampada1.png",
        ],
        categoria: "hombres",
        subcategoria: "moda",
        descripcion: "Bermuda de gabardina con bolsillos laterales, ideal para el verano."
    },

            {
        id: "h-04",
        nombre: "Remera de algodon estampadas",
        precio: 14500,
        talles: ["40", "42", "44", "46"],
        imagenes: ["../images/Remera-Especial-hombre1.png",
            "../images/Remera-Especial-hombre2.png",
            "../images/Remera-Especial-hombre3.png",
            "../images/Remera-Especial-hombre4.png",
            "../images/Remera-Especial-hombre5.png",
            "../images/Remera-Especial-hombre6.png",
            "../images/Remera-Especial-hombre7.png",
        ],
        categoria: "hombres",
        subcategoria: "moda",
        descripcion: "Bermuda de gabardina con bolsillos laterales, ideal para el verano."
    },

                {
        id: "h-05",
        nombre: "Remera de algodon estampadas",
        precio: 14500,
        talles: ["40", "42", "44", "46"],
        imagenes: ["../images/Remera-Especial-1.png",
          "../images/Remera-Especial-2.png",
          "../images/Remera-Especial-3.png",
          "../images/Remera-Especial-4.png",
        ],
        categoria: "hombres",
        subcategoria: "moda",
        descripcion: "Bermuda de gabardina con bolsillos laterales, ideal para el verano."
    },

                    {
        id: "h-06",
        nombre: "Remera de algodon chicago",
        precio: 14500,
        talles: ["40", "42", "44", "46"],
        imagenes: ["../images/Remeras-Chicago1.png",
       "../images/Remeras-Chicago2.png",
       "../images/Remeras-Chicago3.png",
        ],
        categoria: "hombres",
        subcategoria: "moda",
        descripcion: "Bermuda de gabardina con bolsillos laterales, ideal para el verano."
    },

                        {
        id: "h-07",
        nombre: "Remera de algodon juvenil lisa",
        precio: 14500,
        talles: ["40", "42", "44", "46"],
        imagenes: ["../images/Remera-juvenil-Lisa.png",
        ],
        categoria: "hombres",
        subcategoria: "moda",
        descripcion: "Bermuda de gabardina con bolsillos laterales, ideal para el verano."
    },

                            {
        id: "h-08",
        nombre: "Remera de algodon juvenil estampada",
        precio: 14500,
        talles: ["40", "42", "44", "46"],
        imagenes: ["../images/Remera-juvenil.png",
        ],
        categoria: "hombres",
        subcategoria: "moda",
        descripcion: "Bermuda de gabardina con bolsillos laterales, ideal para el verano."
    },
    {
        id: "h-09",
        nombre: "Musculosa deportiva",
        precio: 12000,
        talles: ["S", "M", "L", "XL"],
        imagenes: ["../images/musculosa-deportiva1.png",
            "../images/musculosa-deportiva2.png"
        ],
        categoria: "hombres",
        subcategoria: "deportivo",
        descripcion: "Short liviano con tecnología de secado rápido, ideal para entrenamiento intenso."
    },
        {
        id: "h-10",
        nombre: "Remera deportiva",
        precio: 12000,
        talles: ["S", "M", "L", "XL"],
        imagenes: ["../images/remera-deportiva1.png",
            "../images/remera-deportiva2.png",
        ],
        categoria: "hombres",
        subcategoria: "deportivo",
        descripcion: "Short liviano con tecnología de secado rápido, ideal para entrenamiento intenso."
    },

    // --- SECCIÓN LIBRERÍA (RESTAURADA COMPLETA) ---
    {
        id: "lib-01",
        nombre: "Bolígrafo Stick 026",
        precio: 4500,
        talles: [],
        imagenes: ["../images/4Boligrafos-filgo-stick1.png", "../images/4Boligrafos-filgo-stick2.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Cuerpo hexagonal, Tinta suave a base de aceite, Grip ergonómico, Capuchón ventilado antiahogo."
    },
    {
        id: "lib-02",
        nombre: "Marcador Ezco escolar x 6 colores",
        precio: 3200,
        talles: [],
        imagenes: ["../images/6marcadores-ezco-escolar.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Ideal para: papel, Grosor del trazo: 1mm, Es lavable."
    },
    {
        id: "lib-03",
        nombre: "Acuarelas Essential x12 colores Keyroad",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Acuerelas.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "ACUARELAS KEYROAD COLORES X 12 + PINCEL. 23 MM."
    },
    {
        id: "lib-04",
        nombre: "Compás Plástico Fiddo Ezco",
        precio: 28000,
        talles: [],
        imagenes: ["../images/ezco-Compas1.png", "../images/ezco-Compas2.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Tipo de punta: dibujo, Tipo de instrumento de dibujo: mina, Largo: 13cm."
    },
    {
        id: "lib-05",
        nombre: "Goma de borrar lápiz Pinto 3020",
        precio: 28000,
        talles: [],
        imagenes: ["../images/gomas-pinto-filgo1.png", "../images/gomas-pinto-filgo2.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Goma sintética para borrado de calidad, Borrado limpio y fácil sin dañar el papel."
    },
    {
        id: "lib-06",
        nombre: "Boligrafo Birome Filgo Stick Azul",
        precio: 28000,
        talles: [],
        imagenes: ["../images/lapiceraAzul-filgo1.png", "../images/lapiceraAzul-filgo2.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Grosor del trazo: 1 mm. Punta fina para una escritura suave y precisa."
    },
    {
        id: "lib-07",
        nombre: "Boligrafo Birome Filgo Stick Negro",
        precio: 28000,
        talles: [],
        imagenes: ["../images/lapiceraNegra-filgo1.png", "../images/lapiceraNegra-filgo2.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Tinta a base de aceite para un secado rápido y sin manchas."
    },
    {
        id: "lib-08",
        nombre: "Lapiz De Grafito Negro Pinto Filgo",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Lapiz-Pinto-Filgo1.png", "../images/Lapiz-Pinto-Filgo2.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Graduación del lápiz: HB nro 2."
    },
    {
        id: "lib-09",
        nombre: "Lapices De Colores Surtidos Penmac",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Penmac-12Lapices-color1.png", "../images/Penmac-12Lapices-color2.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Unidades por pack: 12, Color del trazo: Varios Colores."
    },
    {
        id: "lib-010",
        nombre: "Lapiz Portaminas Filgo Real Grip 0.7mm",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Portaminas-fingo1.png", "../images/Portaminas-fingo2.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Tipo de portaminas: retráctil. Hecho de goma, plástico. Grosor: 0.7 mm."
    },
    {
        id: "lib-011",
        nombre: "Reglas Filgo Geox Flex Escolar 20 Cm",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Reglas-Flexible-Filgo1.png", "../images/Reglas-Flexible-Filgo2.png", "../images/Reglas-Flexible-Filgo3.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Flexible y resistente. La medida máxima es de 20cm."
    },
    {
        id: "lib-012",
        nombre: "Kit De Reglas Geométricas - 4 Piezas",
        precio: 28000,
        talles: [],
        imagenes: ["../images/Set-4reglas-20cm1.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Incluye Escuadras y transportadores. Medida máxima 20cm."
    },
    {
        id: "lib-013",
        nombre: "Tempera Señorita Pomo 10 Colores",
        precio: 28000,
        talles: [],
        imagenes: ["../images/temperas-señoritas1.png", "../images/temperas-señoritas2.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "10 unidades de témpera en pomo de 8 mL. Colores vibrantes."
    },
    {
        id: "lib-014",
        nombre: "Tijera Pinto Filgo",
        precio: 28000,
        talles: [],
        imagenes: ["../images/tijera-pinto-filgo1.png", "../images/tijera-pinto-filgo2.png"],
        categoria: "libreria",
        subcategoria: "libreria",
        descripcion: "Diseño ergonómico, cuchillas de acero inoxidable. Punta roma."
    }
];