/* Lógica compartida por index.html, producto.html y contacto.html */

const IVA = 0.21;
const IVA_KEY = "blizzcool_iva_incluido";
const LANG_KEY = "blizzcool_lang";

/* ---------- Estado: IVA e idioma ---------- */

function ivaActivo() {
  return sessionStorage.getItem(IVA_KEY) === "1";
}
function setIvaActivo(activo) {
  sessionStorage.setItem(IVA_KEY, activo ? "1" : "0");
}
function lang() {
  return localStorage.getItem(LANG_KEY) === "en" ? "en" : "es";
}
function setLang(l) {
  localStorage.setItem(LANG_KEY, l);
}

/* ---------- Textos de interfaz ---------- */

const STR = {
  es: {
    navInicio: "Inicio", navCatalogo: "Catálogo", navContacto: "Contacto",
    heroTitle: "Equipos de climatización, frío y protección térmica industrial.",
    heroSubtitle: "Aire acondicionado portátil, enfriadores evaporativos, nebulizadores, ventilación industrial y ropa refrigerante. Un catálogo, una ficha técnica por equipo.",
    statTotal: "Equipos en catálogo", statCategorias: "Familias de producto",
    statFotos: "Hasta 15 °C menos en condiciones óptimas", statPrecios: "Sin obra: equipos portátiles con enchufe estándar",
    ctaBandTitle: "¿No encuentras el equipo adecuado para tu espacio?",
    ctaBandText: "Cuéntanos tu superficie, tu entorno de trabajo y tu necesidad. Te ayudamos a elegir la solución correcta.",
    ctaBandBtn: "Solicitar asesoramiento",
    ctaProductTitle: "¿Quieres presupuesto para este equipo?",
    ctaProductText: "Indícanos cantidad, ubicación y plazo. Te respondemos con la propuesta ajustada a tu caso.",
    ctaProductBtn: "Pedir presupuesto",
    fichaTecnicaLink: "Ficha técnica",
    precioConsultar: "Precio a consultar",
    ivaInclNote: "IVA incl.", sinIvaNote: "sin IVA",
    ivaInclNoteBig: "· IVA incluido (21%)", sinIvaNoteBig: "· precio sin IVA",
    ivaToggleOn: "Precios con IVA (21%)", ivaToggleOff: "Precios sin IVA",
    equiposEnCatalogo: (n) => `${n} equipo${n > 1 ? "s" : ""} en catálogo`,
    breadcrumbCatalogo: "Catálogo",
    descripcionTitle: "Descripción", fichaTecnicaTitle: "Ficha técnica", aplicacionesTitle: "Aplicaciones",
    variantesTitle: "Variantes disponibles",
    variantesText: "Mismo precio de referencia para todas las variantes. Código interno (Sage Tools) de cada una:",
    variante: "Variante", codigoInterno: "Código interno",
    referenciaInterna: "Referencia interna", sageToolsLabel: "Código Sage Tools", gidLabel: "GID",
    otrosEquipos: "Otros equipos de la gama",
    solicitarPresupuesto: "Solicitar presupuesto", verMasEquipos: "Ver más equipos de esta gama",
    equipoNoEncontrado: "Equipo no encontrado",
    noExiste: (id) => `No existe ningún equipo con el identificador "${id}" en el catálogo.`,
    volverCatalogo: "Volver al catálogo",
    footerLine: "© Blizzcool (Toolsplace, S.L.) — catálogo interno",
    footerRight: "+34 617 879 087 · blizzcool.es",
    contactoTitle: "Contacto",
    contactoSubtitle: "¿Tienes dudas sobre qué equipo necesitas? Escríbenos, llámanos o pasa a vernos.",
    contactoEmailLabel: "Email", contactoTelLabel: "Teléfono", contactoWhatsappLabel: "WhatsApp",
    contactoDireccionLabel: "Dirección", contactoEmpresaLabel: "Empresa",
    contactoComoLlegar: "Cómo llegar",
    contactoFormTitle: "Escríbenos directamente",
    contactoFormText: "Este botón abre tu programa de correo con el destinatario ya rellenado.",
    contactoEscribirEmail: "Escribir un email",
    contactoAbrirWhatsapp: "Abrir WhatsApp",
    drawerMenu: "Menú", drawerFamilias: "Familias de producto",
    drawerWhatsapp: "Escríbenos por WhatsApp",
    idioma: "Idioma",
    ivaFloatOn: "incl.", ivaFloatOff: "sin",
    compartir: "Compartir / código QR", compartirTitulo: "Compartir esta página",
    compartirTexto: "Escanea el código con la cámara del móvil o copia el enlace.",
    copiarEnlace: "Copiar enlace", enlaceCopiado: "Enlace copiado", compartirNativo: "Compartir…",
    descargarQR: "Descargar QR", cerrar: "Cerrar",
  },
  en: {
    navInicio: "Home", navCatalogo: "Catalog", navContacto: "Contact",
    heroTitle: "Industrial climate control, cooling and thermal protection equipment.",
    heroSubtitle: "Portable air conditioning, evaporative coolers, misting fans, industrial ventilation and cooling workwear. One catalog, one datasheet per unit.",
    statTotal: "Products in catalog", statCategorias: "Product families",
    statFotos: "Up to 15 °C cooler in optimal conditions", statPrecios: "No building work: portable units on a standard plug",
    ctaBandTitle: "Can't find the right equipment for your space?",
    ctaBandText: "Tell us your floor area, your work environment and your needs. We'll help you pick the right solution.",
    ctaBandBtn: "Request advice",
    ctaProductTitle: "Want a quote for this unit?",
    ctaProductText: "Tell us the quantity, location and timeframe. We'll get back to you with a proposal tailored to your case.",
    ctaProductBtn: "Request a quote",
    fichaTecnicaLink: "Datasheet",
    precioConsultar: "Price on request",
    ivaInclNote: "VAT incl.", sinIvaNote: "excl. VAT",
    ivaInclNoteBig: "· VAT included (21%)", sinIvaNoteBig: "· price excl. VAT",
    ivaToggleOn: "Prices incl. VAT (21%)", ivaToggleOff: "Prices excl. VAT",
    equiposEnCatalogo: (n) => `${n} product${n > 1 ? "s" : ""} in catalog`,
    breadcrumbCatalogo: "Catalog",
    descripcionTitle: "Description", fichaTecnicaTitle: "Datasheet", aplicacionesTitle: "Applications",
    variantesTitle: "Available variants",
    variantesText: "Same reference price for every variant. Internal code (Sage Tools) for each one:",
    variante: "Variant", codigoInterno: "Internal code",
    referenciaInterna: "Internal reference", sageToolsLabel: "Sage Tools code", gidLabel: "GID",
    otrosEquipos: "Other equipment in this range",
    solicitarPresupuesto: "Request a quote", verMasEquipos: "See more equipment in this range",
    equipoNoEncontrado: "Product not found",
    noExiste: (id) => `There's no product with the identifier "${id}" in the catalog.`,
    volverCatalogo: "Back to catalog",
    footerLine: "© Blizzcool (Toolsplace, S.L.) — internal catalog",
    footerRight: "+34 617 879 087 · blizzcool.es",
    contactoTitle: "Contact",
    contactoSubtitle: "Not sure which unit you need? Write to us, call us, or come and see us.",
    contactoEmailLabel: "Email", contactoTelLabel: "Phone", contactoWhatsappLabel: "WhatsApp",
    contactoDireccionLabel: "Address", contactoEmpresaLabel: "Company",
    contactoComoLlegar: "Get directions",
    contactoFormTitle: "Write to us directly",
    contactoFormText: "This button opens your email app with the recipient already filled in.",
    contactoEscribirEmail: "Write an email",
    contactoAbrirWhatsapp: "Open WhatsApp",
    drawerMenu: "Menu", drawerFamilias: "Product families",
    drawerWhatsapp: "Message us on WhatsApp",
    idioma: "Language",
    ivaFloatOn: "incl.", ivaFloatOff: "excl.",
    compartir: "Share / QR code", compartirTitulo: "Share this page",
    compartirTexto: "Scan the code with your phone camera or copy the link.",
    copiarEnlace: "Copy link", enlaceCopiado: "Link copied", compartirNativo: "Share…",
    descargarQR: "Download QR", cerrar: "Close",
  },
};
function t(key) {
  return STR[lang()][key];
}

/* ---------- Datos de contacto (fuente: blizzcool.es/contacto) ---------- */

const CONTACTO = {
  empresa: "Toolsplace, S.L. (marca Blizzcool)",
  email: "info@blizzcool.es",
  telefono: "+34 617 879 087",
  telefonoDisplay: "+34 617 879 087",
  whatsapp: "https://wa.me/34617879087",
  direccion: "C/ Segorbe 45, P.I. Carrús, 03206 Elche (Alicante)",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent("C/ Segorbe 45, 03206 Elche, Alicante"),
};

/* ---------- Precio ---------- */

function calcularPrecio(pvp) {
  if (pvp === null || pvp === undefined || pvp === "") {
    return { texto: t("precioConsultar"), pendiente: true };
  }
  const num = Number(pvp);
  if (Number.isNaN(num)) return { texto: String(pvp), pendiente: false };
  const conIva = ivaActivo();
  const total = conIva ? num * (1 + IVA) : num;
  const localeStr = lang() === "en" ? "en-IE" : "de-DE"; // de-DE fuerza el punto de millares (2.189,00 €) también en 4 cifras
  const texto = total.toLocaleString(localeStr, { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return { texto, pendiente: false, conIva };
}

function nombreCategoria(id) {
  const c = CATEGORIAS.find((c) => c.id === id);
  if (!c) return id;
  return lang() === "en" ? c.nombreEn : c.nombre;
}

function textoProducto(p, campo) {
  // campo: "resumen" | "descripcion"
  if (lang() === "en") return p[campo + "En"] || p[campo];
  return p[campo];
}
function specsProducto(p) {
  return lang() === "en" ? p.specsEn : p.specs;
}
function aplicacionesProducto(p) {
  return lang() === "en" ? p.aplicacionesEn : p.aplicaciones;
}

function mediaHTML(producto, alt) {
  if (producto.imagen) {
    return `<img src="${producto.imagen}" alt="${alt}" loading="lazy">`;
  }
  return `<div class="placeholder-photo"><span>${lang() === "en" ? "Photo pending" : "Foto pendiente"}</span></div>`;
}

function cardHTML(p) {
  const precio = calcularPrecio(p.pvp);
  const nota = precio.pendiente ? "" : precio.conIva ? ` ${t("ivaInclNote")}` : ` ${t("sinIvaNote")}`;
  return `
    <a class="card" href="producto.html?id=${p.id}">
      <div class="card-media">${mediaHTML(p, p.nombre)}</div>
      <div class="card-body">
        <div class="card-model">${p.id.toUpperCase()}</div>
        <h3 class="card-title">${p.nombre}</h3>
        <p class="card-summary">${textoProducto(p, "resumen")}</p>
      </div>
      <div class="card-foot">
        <span class="price ${precio.pendiente ? "pending" : ""}" data-pvp="${p.pvp ?? ""}">${precio.texto}<span class="iva-note">${nota}</span></span>
        <span class="link-inline">${t("fichaTecnicaLink")}</span>
      </div>
    </a>`;
}

/* ---------- Cabecera y pie compartidos (con menú hamburguesa) ---------- */

function chromeHTML(activeKey) {
  const L = lang();
  const navItems = [
    { key: "inicio", href: "index.html", label: t("navInicio") },
    { key: "catalogo", href: "index.html#catalogo-top", label: t("navCatalogo") },
    { key: "contacto", href: "contacto.html", label: t("navContacto") },
  ];
  const shareDesktop = `<button type="button" class="site-nav-share js-share-open">${t("compartir")}</button>`;
  const navHTML = navItems
    .map((n) => `<a href="${n.href}" class="${activeKey === n.key ? "active" : ""}">${n.label}</a>`)
    .join("");

  return `
    <div class="wrap header-bar">
      <a class="wordmark" href="index.html"><img src="https://blizzcool.es/wp-content/uploads/2025/12/cropped-cropped-LOGO-3-600x78-1.avif" alt="Blizzcool" class="logo-img"></a>

      <nav class="site-nav">${navHTML}${shareDesktop}</nav>

      <div class="header-right">
        <div class="header-meta">
          <a href="mailto:${CONTACTO.email}">${CONTACTO.email}</a> · <a href="tel:${CONTACTO.telefono}">${CONTACTO.telefonoDisplay}</a><br>
          ${CONTACTO.direccion}
        </div>
      </div>

      <div class="header-actions">
        <button type="button" id="lang-toggle" class="lang-toggle">${L === "es" ? "EN" : "ES"}</button>
        <button type="button" id="menu-toggle" class="menu-toggle" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <div id="drawer-backdrop" class="drawer-backdrop"></div>
    <aside id="mobile-menu" class="mobile-menu" aria-label="${t("drawerMenu")}">
      <div class="drawer-head">
        <img src="https://blizzcool.es/wp-content/uploads/2025/12/cropped-cropped-LOGO-3-600x78-1.avif" alt="Blizzcool" class="logo-img">
        <button type="button" id="drawer-close" class="drawer-close" aria-label="Cerrar">×</button>
      </div>
      <nav class="mobile-nav">
        ${navHTML}
        <button type="button" id="drawer-cats-toggle" class="drawer-acc" aria-expanded="false" aria-controls="drawer-cats">
          <span>${t("drawerFamilias")}</span>
        </button>
        <div id="drawer-cats" class="drawer-cats">
          ${CATEGORIAS.map((c) => `<a href="index.html#${c.id}">${nombreCategoria(c.id)}</a>`).join("")}
        </div>
      </nav>
      <div class="mobile-menu-row">
        <span class="mobile-menu-row-label">${t("idioma")}</span>
        <button type="button" id="lang-toggle-mobile" class="lang-toggle">${L === "es" ? "English" : "Español"}</button>
      </div>
      <div class="mobile-menu-contact">
        <a href="mailto:${CONTACTO.email}">${CONTACTO.email}</a>
        <a href="tel:${CONTACTO.telefono}">${CONTACTO.telefonoDisplay}</a>
        <span>${CONTACTO.direccion}</span>
        <a class="btn-wa" href="${CONTACTO.whatsapp}" target="_blank" rel="noopener">${t("drawerWhatsapp")}</a>
        <button type="button" class="btn-share js-share-open">
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><path d="M14 14h3v3M21 14v3M17 21h4M14 21h.01"/></svg>
          ${t("compartir")}
        </button>
      </div>
    </aside>`;
}



function footerHTML() {
  return `
    <div class="wrap">
      <span>${t("footerLine")}</span>
      <span>${t("footerRight")}</span>
    </div>
    <div id="share-modal" class="share-modal" role="dialog" aria-modal="true" aria-labelledby="share-title" hidden>
      <div class="share-backdrop js-share-close"></div>
      <div class="share-card">
        <button type="button" class="drawer-close js-share-close" aria-label="${t("cerrar")}">×</button>
        <h2 id="share-title">${t("compartirTitulo")}</h2>
        <p>${t("compartirTexto")}</p>
        <div id="share-qr" class="share-qr"></div>
        <div id="share-url" class="share-url"></div>
        <div class="share-actions">
          <button type="button" class="btn js-share-copy">${t("copiarEnlace")}</button>
          <button type="button" class="btn btn-outline js-share-native">${t("compartirNativo")}</button>
          <button type="button" class="btn btn-outline js-share-download">${t("descargarQR")}</button>
        </div>
      </div>
    </div>
    <div class="float-stack">
    ${ivaFloatHTML()}
    <a class="wa-float" href="${CONTACTO.whatsapp}" target="_blank" rel="noopener" aria-label="WhatsApp ${CONTACTO.telefonoDisplay}" title="WhatsApp ${CONTACTO.telefonoDisplay}">
      <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true"><path fill="currentColor" d="M16 3C8.8 3 3 8.7 3 15.8c0 2.6.8 5.1 2.2 7.2L3.2 29l6.2-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.9S23.2 3 16 3zm0 23.5c-2.1 0-4.1-.6-5.8-1.6l-.4-.2-3.7 1.2 1.2-3.6-.3-.4A10.6 10.6 0 0 1 5.3 15.8C5.3 10 10.1 5.3 16 5.3S26.7 10 26.7 15.8 21.9 26.5 16 26.5zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.6-1.6-.9-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.6l.5-.6.3-.5c.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.8 5 .8.4 1.4.6 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.8.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z"/></svg>
    </a>`;
}

function ivaFloatHTML() {
  const activo = ivaActivo();
  return `
    <button type="button" class="iva-float js-iva-toggle" aria-pressed="${activo}" title="${activo ? t("ivaToggleOn") : t("ivaToggleOff")}">
      <span class="iva-float-top">IVA</span>
      <span class="iva-float-state">${activo ? t("ivaFloatOn") : t("ivaFloatOff")}</span>
    </button>`;
}

function actualizarPreciosEnPagina() {
  document.querySelectorAll(".price[data-pvp]").forEach((el) => {
    const pvpRaw = el.getAttribute("data-pvp");
    const pvp = pvpRaw === "" ? null : Number(pvpRaw);
    const precio = calcularPrecio(pvp);
    el.classList.toggle("pending", precio.pendiente);
    const nota = precio.pendiente ? "" : precio.conIva ? ` ${t("ivaInclNote")}` : ` ${t("sinIvaNote")}`;
    el.innerHTML = `${precio.texto}<span class="iva-note">${nota}</span>`;
  });
  document.querySelectorAll(".price-big[data-pvp]").forEach((el) => {
    const pvpRaw = el.getAttribute("data-pvp");
    const pvp = pvpRaw === "" ? null : Number(pvpRaw);
    const precio = calcularPrecio(pvp);
    el.classList.toggle("pending", precio.pendiente);
    const nota = precio.pendiente ? "" : precio.conIva ? ` ${t("ivaInclNoteBig")}` : ` ${t("sinIvaNoteBig")}`;
    el.innerHTML = `${precio.texto}<span class="iva-note-big">${nota}</span>`;
  });
  document.querySelectorAll(".iva-float").forEach((btn) => {
    const activo = ivaActivo();
    btn.setAttribute("aria-pressed", activo);
    btn.setAttribute("title", activo ? t("ivaToggleOn") : t("ivaToggleOff"));
    btn.querySelector(".iva-float-state").textContent = activo ? t("ivaFloatOn") : t("ivaFloatOff");
  });
}

function initChrome(activeKey) {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) header.innerHTML = chromeHTML(activeKey);
  if (footer) footer.innerHTML = footerHTML();


  document.querySelectorAll(".js-iva-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      setIvaActivo(!ivaActivo());
      actualizarPreciosEnPagina();
    });
  });

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const backdrop = document.getElementById("drawer-backdrop");
  const closeBtn = document.getElementById("drawer-close");
  if (menuToggle && mobileMenu) {
    const setOpen = (open) => {
      mobileMenu.classList.toggle("open", open);
      if (backdrop) backdrop.classList.toggle("open", open);
      menuToggle.setAttribute("aria-expanded", open);
      menuToggle.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
    };
    menuToggle.addEventListener("click", () => setOpen(!mobileMenu.classList.contains("open")));
    if (backdrop) backdrop.addEventListener("click", () => setOpen(false));
    if (closeBtn) closeBtn.addEventListener("click", () => setOpen(false));
    mobileMenu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") setOpen(false); });

    const accBtn = document.getElementById("drawer-cats-toggle");
    const accPanel = document.getElementById("drawer-cats");
    if (accBtn && accPanel) {
      accBtn.addEventListener("click", () => {
        const open = accPanel.classList.toggle("open");
        accBtn.setAttribute("aria-expanded", open);
        accBtn.classList.toggle("open", open);
      });
    }
  }

  initShare();

  ["lang-toggle", "lang-toggle-mobile"].forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) {
      btn.addEventListener("click", () => {
        setLang(lang() === "es" ? "en" : "es");
        if (typeof window.renderPage === "function") window.renderPage();
      });
    }
  });
}

/* ---------- Página índice ---------- */

function renderIndex() {
  initChrome("catalogo");

  const cont = document.getElementById("catalogo");
  const nav = document.getElementById("cat-nav-list");
  let navHTML = "";
  let bodyHTML = "";

  CATEGORIAS.forEach((cat) => {
    const productos = PRODUCTOS.filter((p) => p.categoria === cat.id);
    if (productos.length === 0) return;
    const nombre = nombreCategoria(cat.id);

    navHTML += `<a href="#${cat.id}">${nombre}</a>`;

    bodyHTML += `
      <section class="cat-section" id="${cat.id}">
        <h2>${nombre}</h2>
        <p class="cat-count">${t("equiposEnCatalogo")(productos.length)}</p>
        <div class="grid">
          ${productos.map(cardHTML).join("")}
        </div>
      </section>`;
  });

  nav.innerHTML = navHTML;
  cont.innerHTML = bodyHTML;

  document.getElementById("hero-title").textContent = t("heroTitle");
  document.getElementById("hero-subtitle").textContent = t("heroSubtitle");
  document.getElementById("stat-total-label").textContent = t("statTotal");
  document.getElementById("stat-categorias-label").textContent = t("statCategorias");
  document.getElementById("stat-fotos-label").textContent = t("statFotos");
  document.getElementById("stat-precios-label").textContent = t("statPrecios");
  document.getElementById("cta-band-title").textContent = t("ctaBandTitle");
  document.getElementById("cta-band-text").textContent = t("ctaBandText");
  document.getElementById("cta-band-btn").textContent = t("ctaBandBtn");

  document.getElementById("stat-total").textContent = PRODUCTOS.length;
  document.getElementById("stat-categorias").textContent = CATEGORIAS.length;
  document.getElementById("stat-fotos").textContent = "−15 °C";
  document.getElementById("stat-precios").textContent = "0 " + (lang() === "en" ? "works" : "obras");

  document.documentElement.lang = lang();
}

/* ---------- Página de producto ---------- */

function variantesHTML(p) {
  if (!p.variantes || p.variantes.length === 0) return "";
  const filas = p.variantes
    .map((v) => {
      const desc = [v.color, v.talla].filter(Boolean).join(" · ") || "—";
      return `<tr><td>${desc}</td><td>${v.sageTools || "—"}</td></tr>`;
    })
    .join("");
  return `
    <h2>${t("variantesTitle")}</h2>
    <p>${t("variantesText")}</p>
    <table class="specs-table variants-table">
      <thead><tr><td>${t("variante")}</td><td>${t("codigoInterno")}</td></tr></thead>
      <tbody>${filas}</tbody>
    </table>`;
}

function codigosHTML(p) {
  const filas = [];
  if (p.sageTools) filas.push(`<tr><td>${t("sageToolsLabel")}</td><td>${p.sageTools}</td></tr>`);
  if (p.gid) filas.push(`<tr><td>${t("gidLabel")}</td><td>${p.gid}</td></tr>`);
  if (filas.length === 0) return "";
  return `<h2>${t("referenciaInterna")}</h2><table class="specs-table">${filas.join("")}</table>`;
}

function renderProducto() {
  initChrome("catalogo");

  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = PRODUCTOS.find((x) => x.id === id);
  const cont = document.getElementById("producto-cont");

  document.getElementById("cta-product-title").textContent = t("ctaProductTitle");
  document.getElementById("cta-product-text").textContent = t("ctaProductText");
  document.getElementById("cta-product-btn").textContent = t("ctaProductBtn");
  document.documentElement.lang = lang();

  if (!p) {
    cont.innerHTML = `
      <div class="wrap" style="padding:60px 24px;">
        <h1 style="font-family:var(--font-head);">${t("equipoNoEncontrado")}</h1>
        <p>${t("noExiste")(id || "")}</p>
        <p><a class="link-inline" href="index.html">${t("volverCatalogo")}</a></p>
      </div>`;
    document.title = `${t("equipoNoEncontrado")} · Blizzcool`;
    return;
  }

  document.title = `${p.nombre} · Blizzcool`;

  const catNombre = nombreCategoria(p.categoria);
  const specs = specsProducto(p);
  const aplicaciones = aplicacionesProducto(p);

  const specsHTML = specs.map((s) => `<tr><td>${s.label}</td><td>${s.value}</td></tr>`).join("");
  const aplicacionesHTML = (aplicaciones || []).map((a) => `<li>${a}</li>`).join("");

  const relacionados = PRODUCTOS.filter((x) => x.categoria === p.categoria && x.id !== p.id).slice(0, 3);
  const relacionadosHTML = relacionados.map(cardHTML).join("");
  const mailtoPresupuesto = `mailto:${CONTACTO.email}?subject=${encodeURIComponent((lang() === "en" ? "Quote request: " : "Presupuesto ") + p.nombre)}`;

  cont.innerHTML = `
    <nav class="breadcrumb wrap">
      <a href="index.html">${t("breadcrumbCatalogo")}</a> &nbsp;/&nbsp;
      <a href="index.html#${p.categoria}">${catNombre}</a> &nbsp;/&nbsp;
      ${p.nombre}
    </nav>

    <div class="wrap product-hero">
      <div class="product-media">${mediaHTML(p, p.nombre)}</div>
      <div class="product-info">
        <div class="card-model">${p.id.toUpperCase()} · ${catNombre}</div>
        <h1>${p.nombre}</h1>
        <p class="lead">${textoProducto(p, "resumen")}</p>

        <div class="buy-panel">
          <div class="price-row">
            <span class="price-big" data-pvp="${p.pvp ?? ""}"></span>
          </div>
          <a class="btn btn-accent" href="${mailtoPresupuesto}">${t("solicitarPresupuesto")}</a>
          <a class="btn btn-outline" href="${CONTACTO.whatsapp}" target="_blank" rel="noopener">${t("contactoAbrirWhatsapp")}</a>
          <a class="btn btn-outline" href="index.html#${p.categoria}">${t("verMasEquipos")}</a>
        </div>
      </div>
    </div>

    <div class="mobile-buy-bar">
      <span class="price-big" data-pvp="${p.pvp ?? ""}"></span>
      <a class="btn btn-accent" href="${mailtoPresupuesto}">${t("solicitarPresupuesto")}</a>
    </div>

    <div class="wrap section-block">
      <h2>${t("descripcionTitle")}</h2>
      <p>${textoProducto(p, "descripcion")}</p>

      <h2>${t("fichaTecnicaTitle")}</h2>
      <table class="specs-table">${specsHTML}</table>

      ${aplicacionesHTML ? `<h2>${t("aplicacionesTitle")}</h2><ul class="tag-list">${aplicacionesHTML}</ul>` : ""}

      ${variantesHTML(p)}

      ${codigosHTML(p)}

      ${relacionadosHTML ? `<h2>${t("otrosEquipos")}</h2><div class="related">${relacionadosHTML}</div>` : ""}
    </div>`;

  actualizarPreciosEnPagina();
}

/* ---------- Página de contacto ---------- */

function renderContacto() {
  initChrome("contacto");
  document.documentElement.lang = lang();
  document.title = `${t("contactoTitle")} · Blizzcool`;

  const cont = document.getElementById("contacto-cont");
  cont.innerHTML = `
    <div class="wrap contact-hero">
      <h1>${t("contactoTitle")}</h1>
      <p>${t("contactoSubtitle")}</p>
    </div>

    <div class="wrap contact-grid">
      <div class="contact-card">
        <span class="contact-label">${t("contactoEmpresaLabel")}</span>
        <span class="contact-value">${CONTACTO.empresa}</span>
      </div>
      <div class="contact-card">
        <span class="contact-label">${t("contactoEmailLabel")}</span>
        <a class="contact-value link-inline" href="mailto:${CONTACTO.email}">${CONTACTO.email}</a>
      </div>
      <div class="contact-card">
        <span class="contact-label">${t("contactoTelLabel")}</span>
        <a class="contact-value link-inline" href="tel:${CONTACTO.telefono}">${CONTACTO.telefonoDisplay}</a>
      </div>
      <div class="contact-card">
        <span class="contact-label">${t("contactoWhatsappLabel")}</span>
        <a class="contact-value link-inline" href="${CONTACTO.whatsapp}" target="_blank" rel="noopener">${CONTACTO.telefonoDisplay}</a>
      </div>
      <div class="contact-card contact-card-wide">
        <span class="contact-label">${t("contactoDireccionLabel")}</span>
        <span class="contact-value">${CONTACTO.direccion}</span>
        <a class="link-inline contact-directions" href="${CONTACTO.mapsUrl}" target="_blank" rel="noopener">${t("contactoComoLlegar")} →</a>
      </div>
    </div>

    <div class="wrap contact-actions">
      <div class="buy-panel contact-panel">
        <h2>${t("contactoFormTitle")}</h2>
        <p>${t("contactoFormText")}</p>
        <a class="btn btn-accent" href="mailto:${CONTACTO.email}">${t("contactoEscribirEmail")}</a>
        <a class="btn btn-outline" href="${CONTACTO.whatsapp}" target="_blank" rel="noopener">${t("contactoAbrirWhatsapp")}</a>
      </div>
    </div>`;
}


/* ---------- Compartir / QR ---------- */

function urlCompartir() {
  // Siempre la portada del catálogo, independientemente de la página desde la que se comparta
  const u = new URL("index.html", window.location.href);
  return u.href.replace(/index\.html$/, "");
}

function dibujarQR(cont, texto) {
  cont.innerHTML = "";
  if (typeof qrcode !== "function") {
    cont.innerHTML = `<p class="share-qr-fallback">QR no disponible sin conexión.</p>`;
    return null;
  }
  const qr = qrcode(0, "M");
  qr.addData(texto);
  qr.make();
  const n = qr.getModuleCount();
  const size = 6, margin = 3;
  const canvas = document.createElement("canvas");
  const px = (n + margin * 2) * size;
  canvas.width = px; canvas.height = px;
  const ctx = canvas.getContext("2d");
  ctx.fillStyle = "#ffffff"; ctx.fillRect(0, 0, px, px);
  ctx.fillStyle = "#1b2433";
  for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
    if (qr.isDark(r, c)) ctx.fillRect((c + margin) * size, (r + margin) * size, size, size);
  }
  cont.appendChild(canvas);
  return canvas;
}

function initShare() {
  const modal = document.getElementById("share-modal");
  if (!modal) return;
  let canvas = null;

  const abrir = () => {
    const url = urlCompartir();
    document.getElementById("share-url").textContent = url;
    canvas = dibujarQR(document.getElementById("share-qr"), url);
    modal.hidden = false;
    document.body.classList.add("menu-open");
    const drawer = document.getElementById("mobile-menu");
    const backdrop = document.getElementById("drawer-backdrop");
    const mt = document.getElementById("menu-toggle");
    if (drawer) drawer.classList.remove("open");
    if (backdrop) backdrop.classList.remove("open");
    if (mt) { mt.classList.remove("open"); mt.setAttribute("aria-expanded", "false"); }
  };
  const cerrar = () => { modal.hidden = true; document.body.classList.remove("menu-open"); };

  document.querySelectorAll(".js-share-open").forEach((b) => b.addEventListener("click", abrir));
  modal.querySelectorAll(".js-share-close").forEach((b) => b.addEventListener("click", cerrar));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) cerrar(); });

  modal.querySelector(".js-share-copy").addEventListener("click", async (e) => {
    const btn = e.currentTarget;
    try { await navigator.clipboard.writeText(urlCompartir()); } catch (_) {
      const ta = document.createElement("textarea"); ta.value = urlCompartir(); document.body.appendChild(ta); ta.select(); document.execCommand("copy"); ta.remove();
    }
    const orig = btn.textContent; btn.textContent = t("enlaceCopiado");
    setTimeout(() => (btn.textContent = orig), 1800);
  });

  const nativeBtn = modal.querySelector(".js-share-native");
  if (navigator.share) {
    nativeBtn.addEventListener("click", () => navigator.share({ title: "Blizzcool", url: urlCompartir() }).catch(() => {}));
  } else {
    nativeBtn.style.display = "none";
  }

  modal.querySelector(".js-share-download").addEventListener("click", () => {
    if (!canvas) return;
    const a = document.createElement("a");
    a.download = "blizzcool-qr.png";
    a.href = canvas.toDataURL("image/png");
    a.click();
  });
}
