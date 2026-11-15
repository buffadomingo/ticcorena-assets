/* TICCORENA · "SALA TICCORENA" — v4 (15/11/26)
   Sala de museo con las 3 remeras como obras colgadas (Warrior · Greatness · San Miguel), cada una con su luz
   y su placa. Al tocar una obra se abre su ficha completa (datos de las tablas "Por qué no es una remera más"
   de cada producto + precios de la tienda). Se inserta después de "Productos destacados". Solo portada. */
(function () {
  if (location.pathname !== '/' || window.__tcrnDet) return;
  var BASE = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@267df9252970fd42d30e36841b7bd3faff045cd8/greatness-detalle/';
  var OBRAS = [
    { id: 'warrior', n: '01', nombre: 'Warrior', sub: 'Ángel a caballo', anio: '2026', img: 'obra-warrior.webp',
      url: 'https://ticcorena.com/productos/remera-tcrn-warrior-7l9x5/',
      datos: [['Color', 'Negra'], ['Tela', 'Algodón 16/1 de alto gramaje'], ['Brillos', '+450 strass aplicados con calor'],
              ['Estampa', 'Alta calidad, no se quiebra ni se despinta'], ['Diseño', 'Único en el mundo. Sí, en el mundo']],
      precio: '$31.990', lista: '$35.550', envio: true },
    { id: 'greatness', n: '03', nombre: 'Greatness', sub: 'Cupido con corona', anio: '2026', img: 'obra-greatness.webp', nueva: true,
      url: 'https://ticcorena.com/productos/remera-tcrn-greatness/',
      datos: [['Color', 'Negra'], ['Tela', 'Algodón 20/1 de alto gramaje'], ['Brillos', '+590 cristales aplicados con calor'],
              ['Estampa', 'Serigrafía de 44 × 50 cm, no se quiebra ni se despinta'], ['Diseño', 'Único en el mundo. Sí, en el mundo']],
      precio: '$36.990', lista: '$41.100', envio: false },
    { id: 'sanmiguel', n: '02', nombre: 'San Miguel', sub: 'San Miguel Arcángel', anio: '2026', img: 'obra-sanmiguel.webp',
      url: 'https://ticcorena.com/productos/remera-tcrn-sanmiguel-1qexy/',
      datos: [['Color', 'Blanca'], ['Tela', 'Algodón 16/1 de alto gramaje'], ['Brillos', 'En el nombre de la marca'],
              ['Estampa', '37 × 50 cm, grabado a una tinta'], ['Terminación', 'No se quiebra ni se despinta'], ['Diseño', 'Único en el mundo. Sí, en el mundo']],
      precio: '$31.990', lista: '$35.550', envio: true }
  ];

  function init() {
    var ancla = document.querySelector('[data-store="home-products-featured"]');
    var box = document.querySelector('.js-home-sections-container');
    if (!ancla && !box) return;
    window.__tcrnDet = 1;

    var css = ''
      + "@font-face{font-family:'Unbounded';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/unbounded/v12/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b244rNgQ.woff2) format('woff2')}"
      + "@font-face{font-family:'Cormorant Garamond';font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5wDD-iNM8.woff2) format('woff2')}"
      + '#tcrn-det{background:#EEEDE9;color:#0A0A0A;padding:90px 0 96px;overflow:hidden;position:relative}'
      + '#tcrn-det:before{content:"";position:absolute;left:0;right:0;bottom:0;height:16%;background:linear-gradient(#e2e1dc,#d9d8d3);border-top:1px solid #d0cfca}'   /* zócalo */
      + '#tcrn-det .ts-cab{text-align:center;padding:0 16px;position:relative}'
      + '#tcrn-det .ts-kick{font:600 10px/1 Unbounded,sans-serif;letter-spacing:.32em;color:#8C8C8C;margin:0 0 16px}'
      + '#tcrn-det h2{font:italic 500 clamp(32px,4.4vw,56px)/1 "Cormorant Garamond",Georgia,serif;margin:0;letter-spacing:-.01em}'
      + '#tcrn-det .ts-pared{display:flex;justify-content:center;align-items:flex-end;gap:clamp(28px,4.5vw,72px);padding:112px 40px 0;position:relative;max-width:1240px;margin:0 auto}'
      + '#tcrn-det .ts-obra span{display:block}'
      + '#tcrn-det .ts-obra{flex:0 0 auto;width:clamp(220px,24vw,300px);position:relative;cursor:pointer;background:none;border:0;padding:0;text-align:left;color:inherit;font:inherit}'
      + '#tcrn-det .ts-obra.grande{width:clamp(260px,29vw,370px)}'
      + '#tcrn-det .ts-luz{position:absolute;left:50%;top:-70px;width:170%;height:150%;transform:translateX(-50%);pointer-events:none;'
      + 'background:radial-gradient(ellipse 34% 50% at 50% 0,rgba(255,255,255,.75),rgba(255,255,255,.22) 45%,rgba(255,255,255,0) 70%);opacity:.8;transition:opacity .4s;'
      + '-webkit-mask-image:linear-gradient(to bottom,transparent,#000 22%);mask-image:linear-gradient(to bottom,transparent,#000 22%)}'
      + '#tcrn-det .ts-foco{position:absolute;left:50%;top:-62px;width:46px;height:10px;transform:translateX(-50%);background:#1a1a1a;border-radius:2px 2px 8px 8px}'
      + '#tcrn-det .ts-foco:before{content:"";position:absolute;left:50%;top:-14px;width:2px;height:14px;background:#1a1a1a;transform:translateX(-50%)}'
      + '#tcrn-det .ts-marco{position:relative;background:#0A0A0A;padding:10px;box-shadow:0 26px 38px -14px rgba(0,0,0,.42),0 4px 10px rgba(0,0,0,.18);transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s}'
      + '#tcrn-det .ts-paspartu{background:#FBFBF9;padding:12%;box-shadow:inset 0 0 0 1px rgba(0,0,0,.06),inset 0 2px 6px rgba(0,0,0,.08)}'
      + '#tcrn-det .ts-paspartu img{display:block;width:100%;height:auto;aspect-ratio:1/1;object-fit:contain;filter:drop-shadow(0 10px 12px rgba(0,0,0,.18))}'
      + '#tcrn-det .ts-obra:hover .ts-marco,#tcrn-det .ts-obra:focus-visible .ts-marco{transform:translateY(-6px);box-shadow:0 36px 46px -14px rgba(0,0,0,.48),0 6px 12px rgba(0,0,0,.2)}'
      + '#tcrn-det .ts-obra:hover .ts-luz{opacity:1}'
      + '#tcrn-det .ts-nueva{position:absolute;top:-11px;right:-11px;z-index:2;background:#0A0A0A;color:#fff;font:600 8.5px/1 Unbounded,sans-serif;letter-spacing:.2em;padding:7px 9px;border:1px solid #EEEDE9}'
      + '#tcrn-det .ts-placa{margin:22px auto 0;width:max-content;max-width:100%;background:#FAFAF8;border:1px solid #d4d4d0;padding:10px 14px 11px;position:relative}'
      + '#tcrn-det .ts-placa b{display:block;font:italic 500 19px/1.1 "Cormorant Garamond",Georgia,serif}'
      + '#tcrn-det .ts-placa span{display:block;margin-top:5px;font:600 8px/1.4 Unbounded,sans-serif;letter-spacing:.18em;color:#8C8C8C;text-transform:uppercase}'
      + '#tcrn-det .ts-ver{display:block;margin-top:12px;text-align:center;font:600 8.5px/1 Unbounded,sans-serif;letter-spacing:.22em;color:#0A0A0A;opacity:.55;transition:opacity .3s}'
      + '#tcrn-det .ts-obra:hover .ts-ver{opacity:1}'
      /* ficha (modal) */
      + '#tcrn-ficha{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(10,10,10,.72);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);opacity:0;pointer-events:none;transition:opacity .35s}'
      + '#tcrn-ficha.on{opacity:1;pointer-events:auto}'
      + '#tcrn-ficha .tf-caja{position:relative;background:#F7F7F5;color:#0A0A0A;width:min(980px,100%);max-height:calc(100vh - 48px);overflow:auto;display:grid;grid-template-columns:1.05fr 1fr;transform:translateY(18px) scale(.985);transition:transform .45s cubic-bezier(.2,.8,.2,1)}'
      + '#tcrn-ficha.on .tf-caja{transform:none}'
      + '#tcrn-ficha .tf-img{background:#EEEDE9;display:flex;align-items:center;justify-content:center;padding:40px}'
      + '#tcrn-ficha .tf-img img{width:100%;height:auto;filter:drop-shadow(0 22px 24px rgba(0,0,0,.22))}'
      + '#tcrn-ficha .tf-txt{padding:44px 40px 38px}'
      + '#tcrn-ficha .tf-n{font:600 9px/1 Unbounded,sans-serif;letter-spacing:.28em;color:#8C8C8C;margin:0 0 14px}'
      + '#tcrn-ficha h3{font:italic 500 46px/1 "Cormorant Garamond",Georgia,serif;margin:0}'
      + '#tcrn-ficha .tf-sub{font:600 9px/1.5 Unbounded,sans-serif;letter-spacing:.2em;color:#8C8C8C;margin:10px 0 0;text-transform:uppercase}'
      + '#tcrn-ficha dl{margin:26px 0 0;border-top:1px solid #dcdcd8}'
      + '#tcrn-ficha dl div{display:grid;grid-template-columns:110px 1fr;gap:12px;padding:11px 0;border-bottom:1px solid #e6e6e2}'
      + '#tcrn-ficha dt{font:600 9px/1.6 Unbounded,sans-serif;letter-spacing:.16em;color:#8C8C8C;text-transform:uppercase}'
      + '#tcrn-ficha dd{margin:0;font:400 14px/1.45 "Archivo",Arial,sans-serif;color:#1d1d1d}'
      + '#tcrn-ficha .tf-precio{margin:26px 0 0;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}'
      + '#tcrn-ficha .tf-precio b{font:600 30px/1 Unbounded,sans-serif}'
      + '#tcrn-ficha .tf-precio span{font:600 9px/1 Unbounded,sans-serif;letter-spacing:.18em;color:#8C8C8C}'
      + '#tcrn-ficha .tf-extra{margin:8px 0 0;font:400 13px/1.5 "Archivo",Arial,sans-serif;color:#6b6b6b}'
      + '#tcrn-ficha .tf-cta{display:block;margin-top:24px;padding:18px;background:#0A0A0A;color:#fff;text-align:center;text-decoration:none;font:600 10px/1 Unbounded,sans-serif;letter-spacing:.26em;transition:background .25s}'
      + '#tcrn-ficha .tf-cta:hover{background:#262626}'
      + '#tcrn-ficha .tf-nav{display:flex;justify-content:space-between;margin-top:18px}'
      + '#tcrn-ficha .tf-nav button{background:none;border:0;padding:6px 0;cursor:pointer;font:600 9px/1 Unbounded,sans-serif;letter-spacing:.18em;color:#0A0A0A;opacity:.6}'
      + '#tcrn-ficha .tf-nav button:hover{opacity:1}'
      + '#tcrn-ficha .tf-x{position:absolute;top:14px;right:14px;width:40px;height:40px;border-radius:50%;border:1px solid #cfcfcb;background:#F7F7F5;cursor:pointer;font-size:18px;line-height:1;color:#0A0A0A;z-index:2}'
      + '@media (max-width:860px){#tcrn-det{padding:64px 0 70px}#tcrn-det:before{height:10%}'
      + '#tcrn-det .ts-pared{justify-content:flex-start;overflow-x:auto;scroll-snap-type:x mandatory;padding:104px 16px 8px;gap:26px;scrollbar-width:none;align-items:flex-start}'
      + '#tcrn-det .ts-pared::-webkit-scrollbar{display:none}'
      + '#tcrn-det .ts-obra,#tcrn-det .ts-obra.grande{width:70vw;scroll-snap-align:center}#tcrn-det .ts-obra.grande{order:-1}'
      + '#tcrn-det .ts-desliza{display:block}'
      + '#tcrn-ficha{padding:0;align-items:flex-end}#tcrn-ficha .tf-caja{grid-template-columns:1fr;max-height:92vh;transform:translateY(40px)}'
      + '#tcrn-ficha .tf-img{padding:26px 60px}#tcrn-ficha .tf-txt{padding:26px 20px 30px}#tcrn-ficha h3{font-size:38px}#tcrn-ficha dl div{grid-template-columns:96px 1fr}}'
      + '#tcrn-det .ts-desliza{display:none;text-align:center;margin:18px 0 0;font:600 8.5px/1 Unbounded,sans-serif;letter-spacing:.24em;color:#8C8C8C;position:relative}'
      + '@media (min-width:861px){#tcrn-det .ts-desliza{display:none!important}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var s = document.createElement('section'); s.id = 'tcrn-det';
    s.innerHTML = '<div class="ts-cab"><p class="ts-kick">SALA TICCORENA · COLECCIÓN 2026</p><h2>Tres piezas. Ninguna se repite.</h2></div>'
      + '<div class="ts-pared">' + OBRAS.map(function (o, i) {
        return '<button type="button" class="ts-obra' + (o.nueva ? ' grande' : '') + '" data-i="' + i + '" aria-label="Ver la ficha de ' + o.nombre + '">'
          + '<span class="ts-luz"></span><span class="ts-foco"></span>'
          + '<span class="ts-marco">' + (o.nueva ? '<span class="ts-nueva">NUEVA</span>' : '')
          + '<span class="ts-paspartu"><img src="' + BASE + o.img + '" alt="Remera TCRN ' + o.nombre + '" loading="lazy"></span></span>'
          + '<span class="ts-placa"><b>' + o.nombre + '</b><span>N.º ' + o.n + ' · ' + o.sub + ' · ' + o.anio + '</span></span>'
          + '<span class="ts-ver">TOCÁ PARA VER LA FICHA</span></button>';
      }).join('') + '</div><p class="ts-desliza">DESLIZÁ PARA RECORRER LA SALA →</p>';

    var seccion = ancla ? (ancla.closest('section') || ancla) : null;
    if (seccion && seccion.parentNode) seccion.parentNode.insertBefore(s, seccion.nextSibling);
    else box.appendChild(s);

    // en celular, arrancar mostrando la Greatness (que va primera)
    var pared = s.querySelector('.ts-pared');
    requestAnimationFrame(function () { pared.scrollLeft = 0; });

    // ficha
    var f = document.createElement('div'); f.id = 'tcrn-ficha'; f.setAttribute('role', 'dialog'); f.setAttribute('aria-modal', 'true');
    document.body.appendChild(f);
    var actual = 0, overflowAntes = '';
    function pintar(i) {
      var o = OBRAS[i]; actual = i;
      var ant = OBRAS[(i + OBRAS.length - 1) % OBRAS.length], sig = OBRAS[(i + 1) % OBRAS.length];
      f.innerHTML = '<div class="tf-caja"><button type="button" class="tf-x" aria-label="Cerrar">×</button>'
        + '<div class="tf-img"><img src="' + BASE + o.img + '" alt="Remera TCRN ' + o.nombre + '"></div>'
        + '<div class="tf-txt"><p class="tf-n">N.º ' + o.n + ' · SALA TICCORENA' + (o.nueva ? ' · NUEVA' : '') + '</p>'
        + '<h3>' + o.nombre + '</h3><p class="tf-sub">' + o.sub + ' · Córdoba, Argentina · ' + o.anio + '</p>'
        + '<dl>' + o.datos.map(function (d) { return '<div><dt>' + d[0] + '</dt><dd>' + d[1] + '</dd></div>'; }).join('') + '</dl>'
        + '<div class="tf-precio"><b>' + o.precio + '</b><span>CON TRANSFERENCIA</span></div>'
        + '<p class="tf-extra">Precio de lista ' + o.lista + ' · 3 cuotas sin interés' + (o.envio ? ' · Envío gratis' : '') + '</p>'
        + '<a class="tf-cta" href="' + o.url + '">COMPRAR LA ' + o.nombre.toUpperCase() + '</a>'
        + '<div class="tf-nav"><button type="button" data-i="' + OBRAS.indexOf(ant) + '">← ' + ant.nombre.toUpperCase() + '</button>'
        + '<button type="button" data-i="' + OBRAS.indexOf(sig) + '">' + sig.nombre.toUpperCase() + ' →</button></div></div></div>';
    }
    function abrir(i) {
      pintar(i); overflowAntes = document.documentElement.style.overflow; document.documentElement.style.overflow = 'hidden';
      requestAnimationFrame(function () { f.classList.add('on'); var x = f.querySelector('.tf-x'); if (x) x.focus(); });
    }
    function cerrar() { f.classList.remove('on'); document.documentElement.style.overflow = overflowAntes; }
    s.querySelectorAll('.ts-obra').forEach(function (b) { b.addEventListener('click', function () { abrir(+b.getAttribute('data-i')); }); });
    f.addEventListener('click', function (e) {
      if (e.target === f || e.target.closest('.tf-x')) return cerrar();
      var n = e.target.closest('.tf-nav button'); if (n) pintar(+n.getAttribute('data-i'));
    });
    document.addEventListener('keydown', function (e) {
      if (!f.classList.contains('on')) return;
      if (e.key === 'Escape') cerrar();
      if (e.key === 'ArrowRight') pintar((actual + 1) % OBRAS.length);
      if (e.key === 'ArrowLeft') pintar((actual + OBRAS.length - 1) % OBRAS.length);
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
