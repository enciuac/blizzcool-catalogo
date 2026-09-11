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
    statFotos: "Con foto cargada", statPrecios: "Con precio fijado",
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
  },
  en: {
    navInicio: "Home", navCatalogo: "Catalog", navContacto: "Contact",
    heroTitle: "Industrial climate control, cooling and thermal protection equipment.",
    heroSubtitle: "Portable air conditioning, evaporative coolers, misting fans, industrial ventilation and cooling workwear. One catalog, one datasheet per unit.",
    statTotal: "Products in catalog", statCategorias: "Product families",
    statFotos: "With photo uploaded", statPrecios: "With price set",
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
  const localeStr = lang() === "en" ? "en-IE" : "es-ES";
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
      <div class="card-model">${p.id.toUpperCase()}</div>
      <h3 class="card-title">${p.nombre}</h3>
      <p class="card-summary">${textoProducto(p, "resumen")}</p>
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
  const navHTML = navItems
    .map((n) => `<a href="${n.href}" class="${activeKey === n.key ? "active" : ""}">${n.label}</a>`)
    .join("");

  return `
    <div class="wrap header-bar">
      <a class="wordmark" href="index.html"><img src="https://blizzcool.es/wp-content/uploads/2025/12/cropped-cropped-LOGO-3-600x78-1.avif" alt="Blizzcool" class="logo-img"></a>

      <nav class="site-nav">${navHTML}</nav>

      <div class="header-right">
        <div id="iva-toggle-mount"></div>
        <button type="button" id="lang-toggle" class="lang-toggle">${L === "es" ? "EN" : "ES"}</button>
        <div class="header-meta">
          <a href="mailto:${CONTACTO.email}">${CONTACTO.email}</a> · <a href="tel:${CONTACTO.telefono}">${CONTACTO.telefonoDisplay}</a><br>
          ${CONTACTO.direccion}
        </div>
      </div>

      <button type="button" id="menu-toggle" class="menu-toggle" aria-label="Menu" aria-expanded="false">
        <span></span><span></span><span></span>
      </button>
    </div>

    <div id="mobile-menu" class="mobile-menu">
      <nav class="mobile-nav">${navHTML}</nav>
      <div class="mobile-menu-row">
        <div id="iva-toggle-mount-mobile"></div>
        <button type="button" id="lang-toggle-mobile" class="lang-toggle">${L === "es" ? "EN" : "ES"}</button>
      </div>
      <div class="mobile-menu-contact">
        <a href="mailto:${CONTACTO.email}">${CONTACTO.email}</a>
        <a href="tel:${CONTACTO.telefono}">${CONTACTO.telefonoDisplay}</a>
        <span>${CONTACTO.direccion}</span>
      </div>
    </div>`;
}

function footerHTML() {
  return `
    <div class="wrap">
      <span>${t("footerLine")}</span>
      <span>${t("footerRight")}</span>
    </div>`;
}

function ivaToggleHTML() {
  const activo = ivaActivo();
  return `
    <button type="button" class="iva-toggle js-iva-toggle" aria-pressed="${activo}">
      <span class="iva-toggle-track"><span class="iva-toggle-thumb"></span></span>
      <span class="iva-toggle-label">${activo ? t("ivaToggleOn") : t("ivaToggleOff")}</span>
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
  document.querySelectorAll(".js-iva-toggle").forEach((btn) => {
    const activo = ivaActivo();
    btn.setAttribute("aria-pressed", activo);
    btn.querySelector(".iva-toggle-label").textContent = activo ? t("ivaToggleOn") : t("ivaToggleOff");
  });
}

function initChrome(activeKey) {
  const header = document.getElementById("site-header");
  const footer = document.getElementById("site-footer");
  if (header) header.innerHTML = chromeHTML(activeKey);
  if (footer) footer.innerHTML = footerHTML();

  ["iva-toggle-mount", "iva-toggle-mount-mobile"].forEach((id) => {
    const mount = document.getElementById(id);
    if (mount) mount.innerHTML = ivaToggleHTML();
  });

  document.querySelectorAll(".js-iva-toggle").forEach((btn) => {
    btn.addEventListener("click", () => {
      setIvaActivo(!ivaActivo());
      actualizarPreciosEnPagina();
    });
  });

  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener("click", () => {
      const open = mobileMenu.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", open);
      menuToggle.classList.toggle("open", open);
      document.body.classList.toggle("menu-open", open);
    });
    // Cierra el menú si se navega o cambia el tamaño a escritorio
    mobileMenu.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        mobileMenu.classList.remove("open");
        menuToggle.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("menu-open");
      })
    );
  }

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
  const conFoto = PRODUCTOS.filter((p) => p.imagen).length;
  const conPrecio = PRODUCTOS.filter((p) => p.pvp !== null && p.pvp !== undefined).length;
  document.getElementById("stat-fotos").textContent = `${conFoto}/${PRODUCTOS.length}`;
  document.getElementById("stat-precios").textContent = `${conPrecio}/${PRODUCTOS.length}`;

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
    <table class="specs-table">
      <tr><td><strong>${t("variante")}</strong></td><td><strong>${t("codigoInterno")}</strong></td></tr>
      ${filas}
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
          <a class="btn" href="mailto:${CONTACTO.email}?subject=${encodeURIComponent((lang() === "en" ? "Quote request: " : "Presupuesto ") + p.nombre)}">${t("solicitarPresupuesto")}</a>
          <a class="btn btn-outline" href="index.html#${p.categoria}">${t("verMasEquipos")}</a>
        </div>
      </div>
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
        <a class="btn" href="mailto:${CONTACTO.email}">${t("contactoEscribirEmail")}</a>
        <a class="btn btn-outline" href="${CONTACTO.whatsapp}" target="_blank" rel="noopener">${t("contactoAbrirWhatsapp")}</a>
      </div>
    </div>`;
}
