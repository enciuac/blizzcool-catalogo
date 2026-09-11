import json

# ---------- Datos base extraídos de la tarifa (columna PVP = precio de referencia, sin IVA) ----------

CATEGORIAS = [
    {"id": "aire-acondicionado", "nombre": "Aire acondicionado industrial portátil"},
    {"id": "enfriadores-evaporativos", "nombre": "Enfriadores evaporativos industriales"},
    {"id": "nebulizadores", "nombre": "Nebulizadores industriales"},
    {"id": "ventiladores-techo", "nombre": "Ventiladores industriales de techo"},
    {"id": "ventiladores-portatiles", "nombre": "Ventiladores industriales portátiles"},
    {"id": "ventiladores-pared", "nombre": "Ventiladores industriales de pared"},
    {"id": "ropa-termica", "nombre": "Ropa térmica y refrigerante"},
    {"id": "recambios", "nombre": "Recambios y post-venta"},
]

# id, categoria, nombre, pvp, sageTools, gid, resumen, descripcion, specs, aplicaciones, destacado
PRODUCTOS = []

def add(id, categoria, nombre, pvp, sageTools, gid, resumen, descripcion, specs, aplicaciones=None, destacado=False, variantes=None):
    PRODUCTOS.append({
        "id": id, "categoria": categoria, "nombre": nombre, "pvp": pvp,
        "sageTools": sageTools, "gid": gid,
        "resumen": resumen, "descripcion": descripcion, "specs": specs,
        "aplicaciones": aplicaciones or [], "destacado": destacado,
        "imagen": None, "variantes": variantes,
    })

# ---------- AIRE ACONDICIONADO INDUSTRIAL PORTÁTIL ----------
add("ac-1900-1", "aire-acondicionado", "AC-1900/1", 695, "1030001", "5252.5",
    "Spot cooler compacto para espacios medianos, oficinas y locales sin obra.",
    "Aire acondicionado portátil por compresor, listo para enfriar con un simple enchufe estándar y un tubo de evacuación al exterior. Pensado para locales comerciales, oficinas en alquiler o como equipo de emergencia cuando falla un sistema fijo.",
    [
        {"label": "Alimentación", "value": "220–240 V / 50 Hz"},
        {"label": "Capacidad frigorífica", "value": "2,0 kW (2.000 frigorías)"},
        {"label": "Potencia nominal", "value": "700 W"},
        {"label": "Corriente nominal", "value": "3,2 A"},
        {"label": "Caudal de aire", "value": "230 m³/h"},
        {"label": "Refrigerante", "value": "R290 (180 g)"},
        {"label": "Ambiente de servicio", "value": "20–43 °C"},
        {"label": "Nivel sonoro", "value": "52 dB(A)"},
        {"label": "Dimensiones", "value": "465 × 287 × 586 mm"},
        {"label": "Peso neto / bruto", "value": "25,5 kg / 28,3 kg"},
        {"label": "Superficie recomendada", "value": "Hasta 190 m²"},
    ],
    ["Locales comerciales y oficinas en alquiler", "Salas de servidores pequeñas", "Equipo de emergencia ante avería de climatización fija", "Eventos y ferias"],
    destacado=True)

add("ac-2700-1", "aire-acondicionado", "AC-2700/1", 890, "1030002", "5252.1",
    "Spot cooler intermedio para talleres y locales de tamaño medio.",
    "Segundo escalón de la gama de spot coolers Blizzcool, entre el AC-1900/1 y el AC-3500/2. Refrigeración por compresor, portátil y sin necesidad de instalación fija. Es también la elección habitual para salas de servidores por su bajo consumo.",
    [
        {"label": "Capacidad frigorífica", "value": "2.700 frigorías"},
        {"label": "Caudal de aire", "value": "400 m³/h"},
        {"label": "Potencia nominal", "value": "950 W"},
        {"label": "Ambiente de servicio", "value": "18–45 °C"},
        {"label": "Refrigerante", "value": "R290"},
        {"label": "Peso neto", "value": "42 kg"},
    ],
    ["Talleres y locales comerciales medianos", "Salas de servidores y racks electrónicos", "Eventos y ferias"])

add("ac-3500-2", "aire-acondicionado", "AC-3500/2", 1165, "1030003", "5252.2",
    "3.500 frigorías para talleres, almacenes y fábricas de tamaño medio.",
    "Sistema de refrigeración por compresor de alto rendimiento y bajo consumo, diseñado para trabajar de forma continua en entornos exigentes. Portátil, con ruedas y sin necesidad de instalación fija.",
    [
        {"label": "Capacidad frigorífica", "value": "3.500 frigorías"},
        {"label": "Caudal de aire", "value": "600 m³/h"},
        {"label": "Potencia nominal", "value": "1.400 W"},
        {"label": "Ambiente de servicio", "value": "18–45 °C"},
        {"label": "Refrigerante", "value": "R290"},
        {"label": "Peso neto", "value": "49 kg"},
    ],
    ["Talleres y almacenes", "Fábricas", "Eventos, ferias y exposiciones"],
    destacado=True)

add("ac-5300-3", "aire-acondicionado", "AC-5300/3", 1990, "1030004", "5252.3",
    "La referencia de mayor capacidad de la gama, para grandes superficies.",
    "El modelo de mayores prestaciones de la gama de spot coolers Blizzcool. Refrigeración por compresor de alto rendimiento para naves y locales de gran superficie, operativo el mismo día sin obra ni permisos.",
    [
        {"label": "Capacidad frigorífica", "value": "5.300 frigorías"},
        {"label": "Caudal de aire", "value": "800 m³/h"},
        {"label": "Potencia nominal", "value": "2.200 W"},
        {"label": "Ambiente de servicio", "value": "18–45 °C"},
        {"label": "Refrigerante", "value": "R1234yf"},
        {"label": "Peso neto", "value": "95 kg"},
    ],
    ["Naves industriales de gran superficie", "Salas de servidores y centros de datos", "Locales comerciales grandes"])

# ---------- ENFRIADORES EVAPORATIVOS ----------
add("bc-200", "enfriadores-evaporativos", "BC 200", 1540, "1010001", "5176.7",
    "Enfriador evaporativo de entrada de gama, para espacios medianos.",
    "Equipo de climatización por evaporación de agua: aspira aire caliente, lo hace pasar por paneles húmedos y lo devuelve más frío, sin gases refrigerantes ni compresor. Consumo eléctrico muy inferior al de un aire acondicionado equivalente.",
    [
        {"label": "Tipo", "value": "Enfriador evaporativo"},
        {"label": "Refrigerante", "value": "Sin gases — solo agua y aire"},
        {"label": "Clima recomendado", "value": "Seco — humedad relativa por debajo del 60%"},
    ],
    ["Talleres y almacenes medianos", "Locales comerciales", "Espacios deportivos"])

add("bc-290", "enfriadores-evaporativos", "BC 290", 1815, "1010002", "5176.2",
    "Enfriador evaporativo de gama media, mayor caudal que el BC 200.",
    "Equipo de climatización por evaporación de agua, un escalón por encima del BC 200 en caudal de aire. Sin gases refrigerantes ni compresor, con un coste operativo muy inferior al del aire acondicionado tradicional.",
    [
        {"label": "Tipo", "value": "Enfriador evaporativo"},
        {"label": "Refrigerante", "value": "Sin gases — solo agua y aire"},
        {"label": "Clima recomendado", "value": "Seco — humedad relativa por debajo del 60%"},
    ],
    ["Naves y talleres", "Almacenes y centros logísticos", "Terrazas de hostelería"])

add("bc-395", "enfriadores-evaporativos", "BC 395", 2189, "1010003", "5176.3",
    "Enfriador evaporativo de gran caudal para naves y espacios amplios.",
    "Equipo de climatización por evaporación de agua: aspira aire caliente, lo hace pasar por paneles húmedos y lo devuelve hasta 15 °C más frío, sin gases refrigerantes ni compresor. Consumo eléctrico muy inferior al de un aire acondicionado equivalente.",
    [
        {"label": "Caudal de aire", "value": "Hasta 345 m³/min"},
        {"label": "Reducción de temperatura", "value": "Entre 12 y 15 °C en condiciones óptimas"},
        {"label": "Consumo estimado", "value": "0,5–3 kW/h según modelo"},
        {"label": "Refrigerante", "value": "Sin gases — solo agua y aire"},
        {"label": "Extra", "value": "Sistema anti-bacterias integrado"},
        {"label": "Clima recomendado", "value": "Seco — humedad relativa por debajo del 60%"},
    ],
    ["Naves industriales y de producción", "Talleres mecánicos y de carrocería", "Almacenes y centros logísticos", "Gimnasios y espacios deportivos", "Terrazas de hostelería"],
    destacado=True)

# ---------- NEBULIZADORES ----------
add("bsm-160l", "nebulizadores", "BSM160L", 2490.35, "1040001", "5176.24",
    "Nebulizador de alto caudal con depósito de 160 litros para jornadas completas.",
    "Sistema de nebulización de gota fina (por debajo de 10 micras) que garantiza evaporación completa sin mojar personas ni superficies. Funciona con un simple enchufe estándar, sin instalación eléctrica específica.",
    [
        {"label": "Capacidad de depósito", "value": "160 L"},
        {"label": "Tamaño de gota", "value": "Menos de 10 micras"},
        {"label": "Alimentación", "value": "Enchufe estándar"},
        {"label": "Rendimiento óptimo", "value": "Humedad relativa por debajo del 70–75%"},
    ],
    ["Naves industriales y logística", "Hostelería y terrazas", "Eventos deportivos y culturales"],
    destacado=True)

add("bsm-380l", "nebulizadores", "BSM380L", 2992.28, None, None,
    "Máxima autonomía de la gama: depósito de 380 litros para eventos y grandes espacios.",
    "Versión de mayor depósito de la gama de nebulizadores industriales Blizzcool, pensada para jornadas o eventos completos sin recargas, cubriendo superficies de hasta 250 m² por equipo.",
    [
        {"label": "Capacidad de depósito", "value": "380 L"},
        {"label": "Cobertura", "value": "Hasta 250 m² por equipo"},
        {"label": "Tamaño de gota", "value": "Menos de 10 micras"},
        {"label": "Alimentación", "value": "Enchufe estándar"},
    ],
    ["Pabellones y campus deportivos sin climatización centralizada", "Eventos y ferias exteriores", "Zonas VIP y áreas de calentamiento"])

# ---------- VENTILADORES DE TECHO ----------
add("fam240", "ventiladores-techo", "BW FAM240 · Ø2400 mm", 1090, "1021001", None,
    "Ventilador de techo de gran diámetro, entrada de gama de la serie FAM.",
    "Ventilador de techo de alto volumen y baja velocidad. Mueve grandes volúmenes de aire con un consumo mucho menor que un equipo de climatización de potencia equivalente, sin necesidad de enfriar todo el volumen de la nave.",
    [{"label": "Diámetro", "value": "2.400 mm"}, {"label": "Tipo", "value": "Techo, alto volumen / baja velocidad"}],
    ["Naves industriales de gran altura", "Complemento de climatización existente"])

add("fam300", "ventiladores-techo", "BW FAM300 · Ø3000 mm", 1120, "1021002", None,
    "Ventilador de techo de la serie FAM, un escalón por encima del FAM240.",
    "Ventilador de techo de alto volumen y baja velocidad, con mayor diámetro que el FAM240 para cubrir superficies más amplias.",
    [{"label": "Diámetro", "value": "3.000 mm"}, {"label": "Tipo", "value": "Techo, alto volumen / baja velocidad"}],
    ["Naves industriales de gran altura", "Complemento de climatización existente"])

add("fam370", "ventiladores-techo", "BW FAM370 · Ø3700 mm", 1190, "1021003", None,
    "Ventilador de techo de gran diámetro para naves amplias.",
    "Ventilador de techo de alto volumen y baja velocidad, pensado para espacios de mayor superficie que los modelos FAM240 y FAM300.",
    [{"label": "Diámetro", "value": "3.700 mm"}, {"label": "Tipo", "value": "Techo, alto volumen / baja velocidad"}],
    ["Naves industriales de gran altura", "Almacenes y centros logísticos"])

add("fam430", "ventiladores-techo", "BWP FAM430 · Ø4300 mm", 1882, "1021004", None,
    "Ventilador de techo de la serie profesional BWP, gran diámetro.",
    "Versión de la serie profesional BWP, con mayor diámetro y caudal que la serie FAM estándar. Pensado para naves de gran volumen.",
    [{"label": "Diámetro", "value": "4.300 mm"}, {"label": "Serie", "value": "BWP (profesional)"}],
    ["Naves industriales de gran volumen", "Centros logísticos"])

add("fam500", "ventiladores-techo", "BWP FAM500 · Ø5000 mm", 1882, "1021005", None,
    "Ventilador de techo de la serie profesional BWP, gran diámetro.",
    "Versión de la serie profesional BWP con 5.000 mm de diámetro, para cubrir grandes superficies con un único equipo.",
    [{"label": "Diámetro", "value": "5.000 mm"}, {"label": "Serie", "value": "BWP (profesional)"}],
    ["Naves industriales de gran volumen", "Centros logísticos"])

add("fam610", "ventiladores-techo", "BWP FAM610 · Ø6100 mm", 2679, "1021006", None,
    "El mayor diámetro de la serie profesional BWP.",
    "El modelo de mayor diámetro de la serie BWP, para las naves y espacios de mayor superficie de la gama de ventilación de techo Blizzcool.",
    [{"label": "Diámetro", "value": "6.100 mm"}, {"label": "Serie", "value": "BWP (profesional)"}],
    ["Naves industriales de gran volumen", "Pabellones y grandes superficies"])

# ---------- VENTILADORES PORTÁTILES ----------
add("gd-120", "ventiladores-portatiles", "GD 120 · Ø1200 mm", 1350, "1020001", None,
    "Ventilador móvil de suelo, motor BLDC de bajo consumo.",
    "Ventilador portátil diseñado desde el origen para mover el aire en espacios de cientos o miles de m², no doméstico reconvertido. La tecnología BLDC (motor de corriente continua sin escobillas) ofrece caudales elevados con consumo mínimo.",
    [{"label": "Diámetro", "value": "1.200 mm"}, {"label": "Motor", "value": "BLDC sin escobillas"}, {"label": "Movilidad", "value": "Ruedas industriales — reubicación sin herramientas"}],
    ["Naves con puertas abiertas o ventilación natural", "Talleres", "Almacenes con tráfico constante de mercancía"],
    destacado=True)

add("gd-150", "ventiladores-portatiles", "GD 150 · Ø1500 mm", 1650, "1020002", None,
    "Ventilador móvil de mayor diámetro que el GD 120.",
    "Versión de mayor diámetro de la serie GD, con motor BLDC de bajo consumo y ruedas industriales para reubicación inmediata.",
    [{"label": "Diámetro", "value": "1.500 mm"}, {"label": "Motor", "value": "BLDC sin escobillas"}, {"label": "Movilidad", "value": "Ruedas industriales"}],
    ["Naves y almacenes de mayor superficie", "Talleres"])

add("gd-200", "ventiladores-portatiles", "GD 200 · Ø2000 mm", 1890, "1020003", None,
    "El modelo de mayor diámetro de la serie GD portátil.",
    "El equipo de mayor caudal de la serie de ventiladores portátiles GD, para espacios de gran superficie que necesitan movilidad total.",
    [{"label": "Diámetro", "value": "2.000 mm"}, {"label": "Motor", "value": "BLDC sin escobillas"}, {"label": "Movilidad", "value": "Ruedas industriales"}],
    ["Naves industriales de gran superficie", "Centros logísticos"])

# ---------- VENTILADORES DE PARED ----------
add("bp-600", "ventiladores-pared", "BP 600", 1080, "1022001", None,
    "Ventilador industrial de pared, entrada de gama.",
    "Ventilador de pared para ventilación forzada en espacios que no retienen el frío de un climatizador: naves con puertas abiertas, talleres con ventilación natural o almacenes con tráfico constante.",
    [{"label": "Tipo", "value": "Ventilador industrial de pared"}],
    ["Talleres", "Almacenes", "Naves con ventilación natural"])

add("bp-900", "ventiladores-pared", "BP 900", 1187, "1022002", None,
    "Ventilador industrial de pared de mayor caudal que el BP 600.",
    "Versión de mayor caudal de la serie BP, para espacios de pared donde se necesita mover más volumen de aire.",
    [{"label": "Tipo", "value": "Ventilador industrial de pared"}],
    ["Talleres", "Almacenes", "Naves con ventilación natural"])

add("bp-1200", "ventiladores-pared", "BP 1200", 1329, "1022003", None,
    "El modelo de mayor caudal de la serie de ventiladores de pared BP.",
    "El equipo de mayores prestaciones de la serie BP, para naves y espacios de pared que requieren el máximo caudal de ventilación forzada.",
    [{"label": "Tipo", "value": "Ventilador industrial de pared"}],
    ["Naves industriales", "Almacenes de gran superficie"])

# ---------- ROPA TÉRMICA ----------
add("bw05", "ropa-termica", "Chaleco refrigerante BW-05", 59.95, "1090011", "5287.1",
    "Tecnología evaporativa: se activa con agua y refresca hasta 15 °C bajo la temperatura ambiente.",
    "Chaleco de tecnología evaporativa: se sumerge en agua uno o dos minutos y el tejido técnico libera la humedad de forma progresiva. Especialmente eficaz en exteriores con flujo de aire.",
    [
        {"label": "Tecnología", "value": "Evaporativa (tejido técnico + agua)"},
        {"label": "Efecto de enfriamiento", "value": "Hasta 15 °C por debajo de la temperatura ambiente"},
        {"label": "Autonomía por activación", "value": "4–8 horas"},
        {"label": "Reactivación", "value": "Volver a mojar el tejido"},
        {"label": "Talla", "value": "Única"},
    ],
    ["Construcción y obras públicas", "Agricultura", "Logística al aire libre", "Servicios municipales y limpieza viaria"],
    destacado=True)

add("bw08", "ropa-termica", "Chaleco reflectante refrigerante BW08", 59.95, None, None,
    "Misma tecnología evaporativa que el BW-05, con bandas reflectantes de alta visibilidad.",
    "Chaleco con bandas reflectantes de alta visibilidad para entornos que lo requieren, manteniendo la misma tecnología evaporativa y transpirable de la gama BW.",
    [
        {"label": "Tecnología", "value": "Evaporativa (tejido técnico + agua)"},
        {"label": "Efecto de enfriamiento", "value": "Hasta 15 °C por debajo de la temperatura ambiente"},
        {"label": "Autonomía por activación", "value": "4–8 horas"},
        {"label": "Extra", "value": "Bandas reflectantes de alta visibilidad"},
    ],
    ["Obras públicas y vía pública", "Transporte y reparto", "Trabajo nocturno o con baja visibilidad"],
    variantes=[
        {"color": "Amarillo", "talla": "SM", "sageTools": "1090012"},
        {"color": "Amarillo", "talla": "ML", "sageTools": "1090013"},
        {"color": "Amarillo", "talla": "2XL / 3XL", "sageTools": "1090014"},
        {"color": "Naranja", "talla": "SM", "sageTools": "1090015"},
        {"color": "Naranja", "talla": "ML", "sageTools": "1090016"},
        {"color": "Naranja", "talla": "2XL / 3XL", "sageTools": "1090017"},
    ])

add("bw01-pcm", "ropa-termica", "Chaleco refrigerante PCM BW-01", 169.9, "1090001", "5287.4",
    "Placas de cambio de fase: frío estable y constante, sin humedad ni goteo.",
    "Prenda con placas PCM (Phase Change Material) que absorben calor manteniendo una temperatura constante y predefinida durante el cambio de estado. Ideal para interiores sin apenas flujo de aire o bajo ropa de protección.",
    [
        {"label": "Tecnología", "value": "Placas PCM (material de cambio de fase)"},
        {"label": "Regeneración en nevera (4–10 °C)", "value": "2–4 horas"},
        {"label": "Regeneración en congelador", "value": "Más rápida"},
        {"label": "Talla", "value": "Única"},
    ],
    ["Interiores sin flujo de aire", "Bajo ropa de protección (EPI)", "Hornos, fundición, soldadura"])

add("bw04", "ropa-termica", "Chaleco refrigerante BW-04", 59.95, None, None,
    "Chaleco refrigerante de la gama BW, disponible en varias tallas.",
    "Chaleco refrigerante de tecnología evaporativa de la gama Blizzcool, en versión sin bandas reflectantes.",
    [
        {"label": "Tecnología", "value": "Evaporativa (tejido técnico + agua)"},
        {"label": "Efecto de enfriamiento", "value": "Hasta 15 °C por debajo de la temperatura ambiente"},
    ],
    ["Construcción y obras públicas", "Agricultura", "Logística al aire libre"],
    variantes=[
        {"color": None, "talla": "M", "sageTools": "1090007"},
        {"color": None, "talla": "L", "sageTools": "1090008"},
        {"color": None, "talla": "XL", "sageTools": "1090009"},
        {"color": None, "talla": "2XL", "sageTools": "1090010"},
    ])

add("bw02-pcm", "ropa-termica", "Chaleco refrigerante PCM BW-02 + Pack", 149.9, "1090018", None,
    "Chaleco PCM con pack de placas incluido, talla única.",
    "Versión de chaleco PCM que incluye pack de placas de recambio, para alternar ciclos de refrigeración sin interrumpir el turno de trabajo.",
    [
        {"label": "Tecnología", "value": "Placas PCM (material de cambio de fase)"},
        {"label": "Incluye", "value": "Pack de placas de recambio"},
        {"label": "Talla", "value": "Única"},
    ],
    ["Interiores sin flujo de aire", "Bajo ropa de protección (EPI)"])

# ---------- RECAMBIOS Y POST-VENTA ----------
add("bomba-bc200-bc290", "recambios", "Bomba enfriador BC200 / BC290", 59.9, "1019001", "5176.15",
    "Recambio de bomba de agua para los enfriadores evaporativos BC200 y BC290.",
    "Pieza de recambio original Blizzcool para el circuito de agua de los enfriadores evaporativos BC200 y BC290.",
    [{"label": "Compatible con", "value": "BC200, BC290"}])

add("bomba-bc395", "recambios", "Bomba enfriador BC395", 72.25, "1019002", "5176.14",
    "Recambio de bomba de agua para el enfriador evaporativo BC395.",
    "Pieza de recambio original Blizzcool para el circuito de agua del enfriador evaporativo BC395.",
    [{"label": "Compatible con", "value": "BC395"}])

add("filtros-bc200", "recambios", "Paquete de filtros BC200 (3 uds.)", 93.25, "1018001", "5176.18",
    "Recambio de filtros para el enfriador evaporativo BC200.",
    "Paquete de 3 filtros de recambio originales Blizzcool para el enfriador evaporativo BC200.",
    [{"label": "Compatible con", "value": "BC200"}, {"label": "Unidades", "value": "3"}])

add("filtros-bc290", "recambios", "Paquete de filtros BC290 (3 uds.)", 104, "1018002", "5176.12",
    "Recambio de filtros para el enfriador evaporativo BC290.",
    "Paquete de 3 filtros de recambio originales Blizzcool para el enfriador evaporativo BC290.",
    [{"label": "Compatible con", "value": "BC290"}, {"label": "Unidades", "value": "3"}])

add("filtros-bc395", "recambios", "Paquete de filtros BC395 (3 uds.)", 147.35, "1018003", "5176.13",
    "Recambio de filtros para el enfriador evaporativo BC395.",
    "Paquete de 3 filtros de recambio originales Blizzcool para el enfriador evaporativo BC395.",
    [{"label": "Compatible con", "value": "BC395"}, {"label": "Unidades", "value": "3"}])

add("generador-anion", "recambios", "Generador de anión", 59.9, "1019010", "5176.16",
    "Recambio del generador de aniones para enfriadores evaporativos Blizzcool.",
    "Pieza de recambio original Blizzcool para el sistema de generación de aniones incorporado en los enfriadores evaporativos.",
    [{"label": "Tipo", "value": "Recambio — generador de aniones"}])

add("panel-control-bc", "recambios", "Panel de control BC200 / BC290 / BC395", 59.95, "1019003", "5176.23",
    "Recambio de panel de control para toda la gama de enfriadores BC.",
    "Panel de control de recambio original Blizzcool, compatible con los tres modelos de la gama de enfriadores evaporativos BC.",
    [{"label": "Compatible con", "value": "BC200, BC290, BC395"}])

add("helice-bc200", "recambios", "Hélice enfriador BC200", 28.5, "1019004", None,
    "Recambio de hélice para el enfriador evaporativo BC200.",
    "Pieza de recambio original Blizzcool para el enfriador evaporativo BC200.",
    [{"label": "Compatible con", "value": "BC200"}])

add("helice-bc290", "recambios", "Hélice enfriador BC290", 56.35, "1019005", None,
    "Recambio de hélice para el enfriador evaporativo BC290.",
    "Pieza de recambio original Blizzcool para el enfriador evaporativo BC290.",
    [{"label": "Compatible con", "value": "BC290"}])

add("helice-bc395", "recambios", "Hélice enfriador BC395", 78.48, "1019006", None,
    "Recambio de hélice para el enfriador evaporativo BC395.",
    "Pieza de recambio original Blizzcool para el enfriador evaporativo BC395.",
    [{"label": "Compatible con", "value": "BC395"}])

add("parrilla-bc200", "recambios", "Parrilla enfriador BC200", 22.8, "1019007", None,
    "Recambio de parrilla para el enfriador evaporativo BC200.",
    "Pieza de recambio original Blizzcool para el enfriador evaporativo BC200.",
    [{"label": "Compatible con", "value": "BC200"}])

add("parrilla-bc290", "recambios", "Parrilla enfriador BC290", 40.25, "1019008", "5176.8",
    "Recambio de parrilla para el enfriador evaporativo BC290.",
    "Pieza de recambio original Blizzcool para el enfriador evaporativo BC290.",
    [{"label": "Compatible con", "value": "BC290"}])

add("parrilla-bc395", "recambios", "Parrilla enfriador BC395", 50.49, "1019009", "5176.9",
    "Recambio de parrilla para el enfriador evaporativo BC395.",
    "Pieza de recambio original Blizzcool para el enfriador evaporativo BC395.",
    [{"label": "Compatible con", "value": "BC395"}])

add("pack-pc01", "recambios", "Pack refrigerante PC01 (4 uds.)", 109.9, "1090051", "5287.3",
    "Pack de 4 placas refrigerantes de recambio para chalecos PCM.",
    "Pack de 4 placas PCM de recambio, compatibles con los chalecos refrigerantes PCM de la gama Blizzcool, para disponer de juegos extra y alternar ciclos sin interrumpir el turno.",
    [{"label": "Unidades", "value": "4"}, {"label": "Compatible con", "value": "Chalecos refrigerantes PCM Blizzcool"}])

# ---------- Fotos reales, tomadas directamente de blizzcool.es (mismo dominio, se enlazan) ----------

BASE = "https://blizzcool.es/wp-content/uploads"
IMAGENES = {
    "ac-1900-1": f"{BASE}/2025/12/aire-acondicionado-portatil-ac-1900-1.avif",
    "ac-2700-1": f"{BASE}/2025/12/aire-acondicionado-portatil-ac-2700-1.avif",
    "ac-3500-2": f"{BASE}/2025/12/aire-acondicionado-portatil-ac-3500-1.avif",
    "ac-5300-3": f"{BASE}/2025/12/aire-acondicionado-portatil-ac-5300-3.avif",
    "bc-200": f"{BASE}/2025/12/Enfriador-evaporativo-Blizzcool-BC-200-Frontal-2-1024x1024.avif",
    "bc-290": f"{BASE}/2025/12/Enfriador-evaporativo-Blizzcool-BC-290-Frontal-2-1024x1024.avif",
    "bc-395": f"{BASE}/2025/12/Enfriador-evaporativo-Blizzcool-BC-395-Frontal-2-1024x1024.avif",
    "bsm-160l": f"{BASE}/2026/01/Front-BSM160.avif",
    "bsm-380l": f"{BASE}/2026/01/Front-BSM380.avif",
    "fam240": f"{BASE}/2025/12/Ventilador-de-Techo-BUENA-WEB-1024x1024.avif",
    "fam300": f"{BASE}/2025/12/Ventilador-de-Techo-BUENA-WEB-1024x1024.avif",
    "fam370": f"{BASE}/2025/12/Ventilador-de-Techo-BUENA-WEB-1024x1024.avif",
    "fam430": f"{BASE}/2025/12/Ventiladores-de-techo-GRANDES-1-1024x1024.avif",
    "fam500": f"{BASE}/2025/12/Ventiladores-de-techo-GRANDES-1-1024x1024.avif",
    "fam610": f"{BASE}/2025/12/Ventiladores-de-techo-GRANDES-1-1024x1024.avif",
    "gd-120": f"{BASE}/2025/12/Ventilador-Movil-Blizzcool-HDY-12-32-O1200-Buena-1-1024x1024.avif",
    "gd-150": f"{BASE}/2025/12/Ventilador-Movil-Blizzcool-HDY-15-32-O1500-Buen-2-1024x1024.avif",
    "gd-200": f"{BASE}/2025/12/Ventilador-Movil-Blizzcool-HDY-2-32-O2000-Buena-2-1024x1024.avif",
    "bp-600": f"{BASE}/2026/01/BP600-1024x1024.avif",
    "bp-900": f"{BASE}/2026/01/BP900-1024x1024.avif",
    "bp-1200": f"{BASE}/2026/01/BP1200-1024x1024.avif",
    "bw05": f"{BASE}/2026/01/Chaleco-BW05-1024x1024.avif",
    "bw08": f"{BASE}/2025/12/Productoo-1024x1024.avif",
    "bw01-pcm": f"{BASE}/2025/12/modelo_BW_3.avif",
    "bw04": f"{BASE}/2025/12/modelo_BW_5.avif",
    "bw02-pcm": f"{BASE}/2025/12/Chaleco-BW02-1024x1024.avif",
    "pack-pc01": f"{BASE}/2025/12/Placas-de-Hielo-1024x825.avif",
    "helice-bc200": f"{BASE}/2026/02/Helice-BC200-1-1024x1024.avif",
    "helice-bc290": f"{BASE}/2026/02/Helice-BC200-1-1024x1024.avif",
    "helice-bc395": f"{BASE}/2026/02/Helice-BC200-1-1024x1024.avif",
    "parrilla-bc200": f"{BASE}/2026/02/Rejilla-1024x1024.avif",
    "parrilla-bc290": f"{BASE}/2026/02/Rejilla-1024x1024.avif",
    "parrilla-bc395": f"{BASE}/2026/02/Rejilla-1024x1024.avif",
    "panel-control-bc": f"{BASE}/2026/02/Panel-de-Control-Frente-1024x1024.avif",
    "generador-anion": f"{BASE}/2026/02/Generador-de-Anion-1024x1024.avif",
    "filtros-bc200": f"{BASE}/2026/02/Filtro2-1-1024x1024.avif",
    "filtros-bc290": f"{BASE}/2026/02/Filtro2-1-1024x1024.avif",
    "filtros-bc395": f"{BASE}/2026/02/Filtro2-1-1024x1024.avif",
    "bomba-bc200-bc290": f"{BASE}/2026/02/Bomba-de-Agua-1024x1024.avif",
    "bomba-bc395": f"{BASE}/2026/02/Bomba-de-Agua-1024x1024.avif",
}

for p in PRODUCTOS:
    if p["id"] in IMAGENES:
        p["imagen"] = IMAGENES[p["id"]]

# ---------- Escribir productos.js ----------

def js_str(v):
    if v is None:
        return "null"
    return json.dumps(v, ensure_ascii=False)

def js_specs(specs):
    items = ",\n      ".join(
        f'{{ label: {js_str(s["label"])}, value: {js_str(s["value"])} }}' for s in specs
    )
    return f"[\n      {items},\n    ]" if specs else "[]"

def js_list(items):
    if not items:
        return "[]"
    inner = ", ".join(js_str(i) for i in items)
    return f"[{inner}]"

def js_variantes(vs):
    if not vs:
        return "null"
    items = ",\n      ".join(
        f'{{ color: {js_str(v.get("color"))}, talla: {js_str(v.get("talla"))}, sageTools: {js_str(v.get("sageTools"))} }}'
        for v in vs
    )
    return f"[\n      {items},\n    ]"

lines = []
lines.append("/**")
lines.append(" * CATÁLOGO BLIZZCOOL — fichero de datos")
lines.append(" * ---------------------------------------------------")
lines.append(" * Precios: columna PVP de la tarifa oficial (TARIFA_BLIZZCOOL_NETOS_Y_REVENDEDORES.xlsx),")
lines.append(" * siempre SIN IVA. El sitio calcula el 21% de IVA con el interruptor de la cabecera.")
lines.append(" *")
lines.append(" * Cómo alimentar este fichero:")
lines.append(' * - imagen: ruta a la foto del equipo (ej. "img/ac-1900-1.jpg"). Déjalo en null si aún no hay foto.')
lines.append(" * - pvp: precio de venta al público SIN IVA (número). Es el precio de referencia de la tarifa.")
lines.append(" * - specs: lista de { label, value } — lo que sale en la ficha técnica.")
lines.append(" * - sageTools / gid: códigos internos de la tarifa, se muestran como referencia en la ficha.")
lines.append(" * - No borres ningún campo aunque esté vacío: usa null o \"\" para no romper la página.")
lines.append(" * - Para añadir un producto nuevo, copia un bloque entero y cambia el \"id\" (debe ser único, sin espacios).")
lines.append(" */")
lines.append("")
lines.append("const CATEGORIAS = [")
for c in CATEGORIAS:
    lines.append(f'  {{ id: {js_str(c["id"])}, nombre: {js_str(c["nombre"])} }},')
lines.append("];")
lines.append("")
lines.append("const PRODUCTOS = [")

current_cat = None
for p in PRODUCTOS:
    if p["categoria"] != current_cat:
        current_cat = p["categoria"]
        cat_nombre = next(c["nombre"] for c in CATEGORIAS if c["id"] == current_cat)
        lines.append(f"  // ---------- {cat_nombre.upper()} ----------")
    lines.append("  {")
    lines.append(f'    id: {js_str(p["id"])},')
    lines.append(f'    categoria: {js_str(p["categoria"])},')
    lines.append(f'    nombre: {js_str(p["nombre"])},')
    lines.append(f'    resumen: {js_str(p["resumen"])},')
    lines.append(f'    imagen: {js_str(p["imagen"])},')
    lines.append(f'    pvp: {js_str(p["pvp"])},')
    lines.append(f'    sageTools: {js_str(p["sageTools"])},')
    lines.append(f'    gid: {js_str(p["gid"])},')
    lines.append(f'    destacado: {"true" if p["destacado"] else "false"},')
    lines.append(f'    descripcion: {js_str(p["descripcion"])},')
    lines.append(f'    specs: {js_specs(p["specs"])},')
    lines.append(f'    aplicaciones: {js_list(p["aplicaciones"])},')
    lines.append(f'    variantes: {js_variantes(p["variantes"])},')
    lines.append("  },")
lines.append("];")
lines.append("")

out = "\n".join(lines)
with open("/home/claude/blizzcool-catalogo/productos.js", "w", encoding="utf-8") as f:
    f.write(out)

print("Productos generados:", len(PRODUCTOS))
print("Categorías:", len(CATEGORIAS))
EOF_MARKER = None
