/* Utilidades compartidas para pintar el catálogo a partir de productos.js */

const IVA = 0.21;
const IVA_KEY = "blizzcool_iva_incluido";

function ivaActivo() {
  return sessionStorage.getItem(IVA_KEY) === "1";
}

function setIvaActivo(activo) {
  sessionStorage.setItem(IVA_KEY, activo ? "1" : "0");
}

function calcularPrecio(pvp) {
  if (pvp === null || pvp === undefined || pvp === "") {
    return { texto: "Precio a consultar", pendiente: true };
  }
  const num = Number(pvp);
  if (Number.isNaN(num)) return { texto: String(pvp), pendiente: false };
  const conIva = ivaActivo();
  const total = conIva ? num * (1 + IVA) : num;
  const texto = total.toLocaleString("es-ES", { style: "currency", currency: "EUR", minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return { texto, pendiente: false, conIva };
}

function nombreCategoria(id) {
  const c = CATEGORIAS.find((c) => c.id === id);
  return c ? c.nombre : id;
}

function mediaHTML(producto, alt) {
  if (producto.imagen) {
    return `<img src="${producto.imagen}" alt="${alt}" loading="lazy">`;
  }
  return `<div class="placeholder-photo"><span>Foto pendiente</span></div>`;
}

function cardHTML(p) {
  const precio = calcularPrecio(p.pvp);
  return `
    <a class="card" href="producto.html?id=${p.id}">
      <div class="card-media">${mediaHTML(p, p.nombre)}</div>
      <div class="card-model">${p.id.toUpperCase()}</div>
      <h3 class="card-title">${p.nombre}</h3>
      <p class="card-summary">${p.resumen}</p>
      <div class="card-foot">
        <span class="price ${precio.pendiente ? "pending" : ""}" data-pvp="${p.pvp ?? ""}">${precio.texto}<span class="iva-note">${precio.pendiente ? "" : precio.conIva ? " IVA incl." : " sin IVA"}</span></span>
        <span class="link-inline">Ficha técnica</span>
      </div>
    </a>`;
}

/* ---------- Interruptor de IVA (cabecera, presente en todas las páginas) ---------- */

function ivaToggleHTML() {
  const activo = ivaActivo();
  return `
    <button type="button" id="iva-toggle" class="iva-toggle" aria-pressed="${activo}">
      <span class="iva-toggle-track"><span class="iva-toggle-thumb"></span></span>
      <span class="iva-toggle-label">${activo ? "Precios con IVA (21%)" : "Precios sin IVA"}</span>
    </button>`;
}

function actualizarPreciosEnPagina() {
  document.querySelectorAll(".price[data-pvp]").forEach((el) => {
    const pvpRaw = el.getAttribute("data-pvp");
    const pvp = pvpRaw === "" ? null : Number(pvpRaw);
    const precio = calcularPrecio(pvp);
    el.classList.toggle("pending", precio.pendiente);
    const nota = precio.pendiente ? "" : precio.conIva ? " IVA incl." : " sin IVA";
    el.innerHTML = `${precio.texto}<span class="iva-note">${nota}</span>`;
  });
  document.querySelectorAll(".price-big[data-pvp]").forEach((el) => {
    const pvpRaw = el.getAttribute("data-pvp");
    const pvp = pvpRaw === "" ? null : Number(pvpRaw);
    const precio = calcularPrecio(pvp);
    el.classList.toggle("pending", precio.pendiente);
    const nota = precio.pendiente ? "" : precio.conIva ? " · IVA incluido (21%)" : " · precio sin IVA";
    el.innerHTML = `${precio.texto}<span class="iva-note-big">${nota}</span>`;
  });
  const btn = document.getElementById("iva-toggle");
  if (btn) {
    const activo = ivaActivo();
    btn.setAttribute("aria-pressed", activo);
    btn.querySelector(".iva-toggle-label").textContent = activo ? "Precios con IVA (21%)" : "Precios sin IVA";
  }
}

function initIvaToggle() {
  const mount = document.getElementById("iva-toggle-mount");
  if (!mount) return;
  mount.innerHTML = ivaToggleHTML();
  document.getElementById("iva-toggle").addEventListener("click", () => {
    setIvaActivo(!ivaActivo());
    actualizarPreciosEnPagina();
  });
}

/* ---------- Página índice ---------- */

function renderIndex() {
  const cont = document.getElementById("catalogo");
  const nav = document.getElementById("cat-nav-list");
  let navHTML = "";
  let bodyHTML = "";

  CATEGORIAS.forEach((cat) => {
    const productos = PRODUCTOS.filter((p) => p.categoria === cat.id);
    if (productos.length === 0) return;

    navHTML += `<a href="#${cat.id}">${cat.nombre}</a>`;

    bodyHTML += `
      <section class="cat-section" id="${cat.id}">
        <h2>${cat.nombre}</h2>
        <p class="cat-count">${productos.length} equipo${productos.length > 1 ? "s" : ""} en catálogo</p>
        <div class="grid">
          ${productos.map(cardHTML).join("")}
        </div>
      </section>`;
  });

  nav.innerHTML = navHTML;
  cont.innerHTML = bodyHTML;

  document.getElementById("stat-total").textContent = PRODUCTOS.length;
  document.getElementById("stat-categorias").textContent = CATEGORIAS.length;
  const conFoto = PRODUCTOS.filter((p) => p.imagen).length;
  const conPrecio = PRODUCTOS.filter((p) => p.pvp !== null && p.pvp !== undefined).length;
  document.getElementById("stat-fotos").textContent = `${conFoto}/${PRODUCTOS.length}`;
  document.getElementById("stat-precios").textContent = `${conPrecio}/${PRODUCTOS.length}`;

  initIvaToggle();
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
    <h2>Variantes disponibles</h2>
    <p>Mismo precio de referencia para todas las variantes. Código interno (Sage Tools) de cada una:</p>
    <table class="specs-table">
      <tr><td><strong>Variante</strong></td><td><strong>Código interno</strong></td></tr>
      ${filas}
    </table>`;
}

function codigosHTML(p) {
  const filas = [];
  if (p.sageTools) filas.push(`<tr><td>Código Sage Tools</td><td>${p.sageTools}</td></tr>`);
  if (p.gid) filas.push(`<tr><td>GID</td><td>${p.gid}</td></tr>`);
  if (filas.length === 0) return "";
  return `<h2>Referencia interna</h2><table class="specs-table">${filas.join("")}</table>`;
}

function renderProducto() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const p = PRODUCTOS.find((x) => x.id === id);
  const cont = document.getElementById("producto-cont");

  if (!p) {
    cont.innerHTML = `
      <div class="wrap" style="padding:60px 24px;">
        <h1 style="font-family:var(--font-head);">Equipo no encontrado</h1>
        <p>No existe ningún equipo con el identificador "<strong>${id || ""}</strong>" en el catálogo.</p>
        <p><a class="link-inline" href="index.html">Volver al catálogo</a></p>
      </div>`;
    document.title = "Equipo no encontrado · Blizzcool";
    initIvaToggle();
    return;
  }

  document.title = `${p.nombre} · Blizzcool`;

  const catNombre = nombreCategoria(p.categoria);

  const specsHTML = p.specs
    .map((s) => `<tr><td>${s.label}</td><td>${s.value}</td></tr>`)
    .join("");

  const aplicacionesHTML = (p.aplicaciones || [])
    .map((a) => `<li>${a}</li>`)
    .join("");

  const relacionados = PRODUCTOS.filter((x) => x.categoria === p.categoria && x.id !== p.id).slice(0, 3);
  const relacionadosHTML = relacionados.map(cardHTML).join("");

  cont.innerHTML = `
    <nav class="breadcrumb wrap">
      <a href="index.html">Catálogo</a> &nbsp;/&nbsp;
      <a href="index.html#${p.categoria}">${catNombre}</a> &nbsp;/&nbsp;
      ${p.nombre}
    </nav>

    <div class="wrap product-hero">
      <div class="product-media">${mediaHTML(p, p.nombre)}</div>
      <div class="product-info">
        <div class="card-model">${p.id.toUpperCase()} · ${catNombre}</div>
        <h1>${p.nombre}</h1>
        <p class="lead">${p.resumen}</p>

        <div class="buy-panel">
          <div class="price-row">
            <span class="price-big" data-pvp="${p.pvp ?? ""}"></span>
          </div>
          <a class="btn" href="mailto:info@blizzcool.es?subject=Presupuesto ${encodeURIComponent(p.nombre)}">Solicitar presupuesto</a>
          <a class="btn btn-outline" href="index.html#${p.categoria}">Ver más equipos de esta gama</a>
        </div>
      </div>
    </div>

    <div class="wrap section-block">
      <h2>Descripción</h2>
      <p>${p.descripcion}</p>

      <h2>Ficha técnica</h2>
      <table class="specs-table">${specsHTML}</table>

      ${aplicacionesHTML ? `<h2>Aplicaciones</h2><ul class="tag-list">${aplicacionesHTML}</ul>` : ""}

      ${variantesHTML(p)}

      ${codigosHTML(p)}

      ${relacionadosHTML ? `<h2>Otros equipos de la gama</h2><div class="related">${relacionadosHTML}</div>` : ""}
    </div>`;

  initIvaToggle();
  actualizarPreciosEnPagina();
}
