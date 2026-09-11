# Catálogo Blizzcool — cómo funciona

## Archivos
- `index.html` — página principal (grid por familia de producto, 8 familias).
- `producto.html` — plantilla única que genera la ficha de **cualquier** equipo según el parámetro `?id=` en la URL.
- `productos.js` — **el único fichero que necesitas editar a mano** para fotos y ampliar fichas técnicas. Los precios ya están cargados desde la tarifa.
- `catalogo.js` — lógica de renderizado, cálculo de IVA e interruptor (no hace falta tocarlo).
- `styles.css` — estilos (no hace falta tocarlo).
- `generar_productos.py` — script que generó `productos.js` a partir de `TARIFA_BLIZZCOOL_NETOS_Y_REVENDEDORES.xlsx`. Solo hace falta si en el futuro quieres regenerar todo el catálogo desde una tarifa nueva; para cambios puntuales, edita `productos.js` directamente.
- `img/` — carpeta para las fotos de los equipos.

## Precios e IVA
- Cada producto tiene un campo `pvp`: es el precio de la columna **PVP** de la tarifa, **siempre sin IVA**.
- En la cabecera hay un interruptor "Precios sin IVA / Precios con IVA (21%)". Al activarlo, todos los precios de la página (catálogo y ficha de producto) se recalculan sumando el 21% de IVA, sin tocar el dato guardado (`pvp` sigue siendo el neto).
- El estado del interruptor se recuerda mientras dure la sesión del navegador (se reinicia sin IVA al abrir una pestaña nueva).
- 40 equipos ya tienen precio cargado (los 40 de la tarifa). Si añades un producto nuevo sin precio, pon `pvp: null` y la página mostrará "Precio a consultar".

## Cómo añadir una foto
1. Copia la foto a `img/` (ej. `img/ac-1900-1.jpg`).
2. En `productos.js`, busca el producto y cambia `imagen: null` por `imagen: "img/ac-1900-1.jpg"`.

## Cómo cambiar un precio
Cambia el valor de `pvp` (solo el número, sin símbolo de euro, sin IVA):
```js
pvp: 695,
```

## Cómo ampliar una ficha técnica
Añade líneas al array `specs` del producto:
```js
specs: [
  { label: "Capacidad frigorífica", value: "2.000 frigorías" },
  { label: "Nuevo dato", value: "Su valor" },
],
```

## Productos con variantes (tallas/colores)
Los chalecos BW08 y BW-04 tienen varias tallas/colores al mismo precio. Se listan en el array `variantes` de ese producto y aparecen en su ficha técnica como tabla. Para añadir una variante nueva:
```js
variantes: [
  { color: "Amarillo", talla: "SM", sageTools: "1090012" },
  // añade aquí la nueva variante
],
```

## Cómo añadir un equipo nuevo
Copia un bloque completo dentro de `PRODUCTOS` en `productos.js` y cambia:
- `id` (único, sin espacios ni acentos — se usa en la URL).
- `categoria` (debe coincidir con uno de los `id` de `CATEGORIAS`).
- El resto de campos (`pvp`, `sageTools`, `gid` son opcionales — pon `null` si no aplican).

No hace falta tocar ningún HTML: la ficha nueva aparece sola en `index.html` y en `producto.html?id=tu-nuevo-id`.

## Cómo probarlo
Abre `index.html` con doble clic (funciona sin servidor, todo es HTML/CSS/JS estático) o súbelo tal cual a cualquier hosting.

## Familias de producto actuales
1. Aire acondicionado industrial portátil (4 equipos)
2. Enfriadores evaporativos industriales (3 equipos)
3. Nebulizadores industriales (2 equipos)
4. Ventiladores industriales de techo (6 equipos)
5. Ventiladores industriales portátiles (3 equipos)
6. Ventiladores industriales de pared (3 equipos)
7. Ropa térmica y refrigerante (5 equipos, 2 con variantes de talla/color)
8. Recambios y post-venta (14 referencias)

## Fotos y logo
Las 40 fichas ya tienen foto real: están enlazadas directamente desde blizzcool.es (mismo dominio, no se han copiado archivos), así que si Blizzcool cambia una foto en su web, se actualiza sola aquí también. El logo de la cabecera es el mismo enlace directo a `blizzcool.es/wp-content/uploads/...LOGO-3...avif`. Si en algún momento prefieres tener copias propias por si el hotlink deja de funcionar, descarga las imágenes desde el propio código fuente de blizzcool.es, guárdalas en `img/` y cambia el `imagen:` de cada producto en `productos.js` por la ruta local (ej. `"img/ac-1900-1.avif"`).

## Nota sobre el contacto
Email, teléfono y dirección (`info@blizzcool.es`, `+34 617 879 087`, C/ Segorbe 45, P.I. Carrús, Elche) y la razón social (Toolsplace, S.L., CIF B42669192) están tomados de la web oficial actual (blizzcool.es). Si cambian, se edita en `index.html`, `producto.html` y `catalogo.js` (buscar "mailto:info@blizzcool.es").
