/* TICCORENA · "SALA TICCORENA" — v5 vitrinas (15/11/26)
   Se "entra" a una sala de museo: degradé desde el blanco de la tienda, sala con pared, piso brillante y focos;
   las 3 remeras dentro de vitrinas de vidrio sobre pedestales, con la etiqueta pegada en el vidrio.
   Al bajar, la sala se acerca (efecto de entrar). Al salir, degradé de vuelta al blanco.
   Tocar una vitrina abre la ficha completa (datos de las tablas de cada producto + precios). Solo portada. */
(function () {
  if (location.pathname !== '/' || window.__tcrnDet) return;
  var BASE = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@267df9252970fd42d30e36841b7bd3faff045cd8/greatness-detalle/';
  var OBRAS = [
    { id: 'warrior', n: '01', nombre: 'Warrior', sub: 'Ángel a caballo', anio: '2026', img: 'obra-warrior.webp',
      etiqueta: 'Ángel a caballo. Algodón 16/1 y +450 strass aplicados con calor.',
      url: 'https://ticcorena.com/productos/remera-tcrn-warrior-7l9x5/',
      datos: [['Color', 'Negra'], ['Tela', 'Algodón 16/1 de alto gramaje'], ['Brillos', '+450 strass aplicados con calor'],
              ['Estampa', 'Alta calidad, no se quiebra ni se despinta'], ['Diseño', 'Único en el mundo. Sí, en el mundo']],
      precio: '$31.990', lista: '$35.550', envio: true },
    { id: 'greatness', n: '03', nombre: 'Greatness', sub: 'Cupido con corona', anio: '2026', img: 'obra-greatness.webp', nueva: true,
      etiqueta: 'Cupido con corona. Algodón 20/1 y +590 cristales aplicados con calor.',
      url: 'https://ticcorena.com/productos/remera-tcrn-greatness/',
      datos: [['Color', 'Negra'], ['Tela', 'Algodón 20/1 de alto gramaje'], ['Brillos', '+590 cristales aplicados con calor'],
              ['Estampa', 'Serigrafía de 44 × 50 cm, no se quiebra ni se despinta'], ['Diseño', 'Único en el mundo. Sí, en el mundo']],
      precio: '$36.990', lista: '$41.100', envio: false },
    { id: 'sanmiguel', n: '02', nombre: 'San Miguel', sub: 'San Miguel Arcángel', anio: '2026', img: 'obra-sanmiguel.webp',
      etiqueta: 'San Miguel Arcángel. Grabado a una tinta de 37 × 50 cm, brillos en la marca.',
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
    var quieto = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    var PARED = '#171513', PISO = '#0d0c0b';
    var css = ''
      + "@font-face{font-family:'Unbounded';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/unbounded/v12/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b244rNgQ.woff2) format('woff2')}"
      + "@font-face{font-family:'Cormorant Garamond';font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5wDD-iNM8.woff2) format('woff2')}"
      + '#tcrn-det{position:relative;overflow:hidden;background:' + PARED + ';color:#fff}'
      /* entrada y salida: degradé desde / hacia el blanco de la tienda */
      + '#tcrn-det .tm-entrada{height:260px;background:linear-gradient(#fff 0%,#e9e7e3 18%,#8d8984 48%,#2e2b28 78%,' + PARED + ' 100%);position:relative}'
      + '#tcrn-det .tm-salida{height:220px;background:linear-gradient(' + PISO + ' 0%,#3a3733 35%,#bdbab5 72%,#fff 100%)}'
      + '#tcrn-det .tm-cartel{position:absolute;left:0;right:0;bottom:22px;text-align:center}'
      + '#tcrn-det .tm-cartel p{margin:0;font:600 10px/1 Unbounded,sans-serif;letter-spacing:.42em;color:#a39f99}'
      /* la sala */
      + '#tcrn-det .tm-sala{position:relative;padding:40px 0 0;transform-origin:50% 40%;will-change:transform}'
      + '#tcrn-det .tm-muro{position:absolute;inset:0 0 150px 0;background:radial-gradient(ellipse 70% 60% at 50% 30%,#24211e,' + PARED + ' 70%)}'
      + '#tcrn-det .tm-muro:after{content:"";position:absolute;inset:0;opacity:.35;background:repeating-linear-gradient(90deg,rgba(255,255,255,.018) 0 1px,transparent 1px 160px)}'
      + '#tcrn-det .tm-zocalo{position:absolute;left:0;right:0;bottom:150px;height:10px;background:linear-gradient(#26231f,#1a1816);border-top:1px solid #2f2b27}'
      + '#tcrn-det .tm-piso{position:absolute;left:0;right:0;bottom:0;height:150px;background:linear-gradient(#1d1a17,' + PISO + ' 85%);overflow:hidden}'
      + '#tcrn-det .tm-piso:before{content:"";position:absolute;left:-50%;right:-50%;top:0;height:300%;transform-origin:50% 0;transform:perspective(380px) rotateX(64deg);'
      + 'background:repeating-linear-gradient(90deg,rgba(255,255,255,.035) 0 1px,transparent 1px 110px)}'
      + '#tcrn-det .tm-titulo{position:relative;text-align:center;padding:0 16px}'
      + '#tcrn-det .tm-titulo p{margin:0 0 14px;font:600 10px/1 Unbounded,sans-serif;letter-spacing:.38em;color:#8d8882}'
      + '#tcrn-det .tm-titulo h2{margin:0;font:italic 500 clamp(30px,4vw,52px)/1 "Cormorant Garamond",Georgia,serif;color:#ece8e1;letter-spacing:-.005em}'
      /* fila de vitrinas */
      + '#tcrn-det .tm-fila{position:relative;display:flex;justify-content:center;align-items:flex-end;gap:clamp(30px,5vw,90px);padding:150px 40px 46px;max-width:1260px;margin:0 auto}'
      + '#tcrn-det .v{position:relative;flex:0 0 auto;width:clamp(210px,21vw,270px);background:none;border:0;padding:0;margin:0;cursor:pointer;color:inherit;font:inherit;text-align:left;'
      + '-webkit-box-reflect:below 0 linear-gradient(transparent 62%,rgba(255,255,255,.13))}'
      + '#tcrn-det .v span{display:block}'
      + '#tcrn-det .v.grande{width:clamp(250px,26vw,330px)}'
      /* foco y cono de luz */
      + '#tcrn-det .v-foco{position:absolute;left:50%;top:-150px;width:34px;height:14px;margin-left:-17px;background:linear-gradient(#2c2925,#0e0d0c);border-radius:3px 3px 10px 10px;z-index:3}'
      + '#tcrn-det .v-foco:before{content:"";position:absolute;left:50%;top:-40px;width:2px;height:40px;background:#262320;margin-left:-1px}'
      + '#tcrn-det .v-foco:after{content:"";position:absolute;left:50%;bottom:-3px;width:16px;height:4px;margin-left:-8px;border-radius:50%;background:#fff6e5;box-shadow:0 0 12px 4px rgba(255,244,222,.75)}'
      + '#tcrn-det .v-cono{position:absolute;left:50%;top:-138px;width:150%;height:calc(100% + 138px);transform:translateX(-50%);pointer-events:none;z-index:0;'
      + 'clip-path:polygon(46% 0,54% 0,100% 100%,0 100%);background:linear-gradient(rgba(255,244,222,.22),rgba(255,244,222,.06) 70%,rgba(255,244,222,0));transition:opacity .4s;opacity:.85}'
      + '#tcrn-det .v:hover .v-cono,#tcrn-det .v:focus-visible .v-cono{opacity:1}'
      /* vitrina de vidrio */
      + '#tcrn-det .v-caja{position:relative;z-index:1;aspect-ratio:4/5}'
      + '#tcrn-det .v-tapa{position:absolute;left:-1px;right:-1px;top:-9px;height:9px;background:linear-gradient(rgba(255,255,255,.32),rgba(255,255,255,.08));border:1px solid rgba(255,255,255,.28);border-bottom:0;'
      + 'transform:perspective(200px) rotateX(48deg);transform-origin:50% 100%}'
      + '#tcrn-det .v-fondo{position:absolute;inset:0 7% 0 7%;background:radial-gradient(ellipse 80% 60% at 50% 20%,rgba(255,244,222,.16),rgba(255,255,255,.02) 70%),linear-gradient(#1f1c19,#141210)}'
      + '#tcrn-det .v-base-int{position:absolute;left:0;right:0;bottom:0;height:9%;background:linear-gradient(#2a2622,#1b1916);border-top:1px solid rgba(255,255,255,.08)}'
      + '#tcrn-det .v-remera{position:absolute;left:9%;right:9%;top:8%;bottom:12%;display:flex;align-items:center;justify-content:center;transition:transform .5s cubic-bezier(.2,.8,.2,1)}'
      + '#tcrn-det .v-remera img{width:100%;height:auto;max-height:100%;object-fit:contain;filter:drop-shadow(0 16px 14px rgba(0,0,0,.55)) brightness(1.03)}'
      + '#tcrn-det .v:hover .v-remera{transform:scale(1.03)}'
      + '#tcrn-det .v-vidrio{position:absolute;inset:0;border:1px solid rgba(255,255,255,.3);background:linear-gradient(180deg,rgba(255,255,255,.06),rgba(255,255,255,.015) 40%,rgba(255,255,255,.04));'
      + 'box-shadow:inset 0 0 0 1px rgba(255,255,255,.05),inset 6px 0 10px -6px rgba(255,255,255,.18),inset -6px 0 10px -6px rgba(255,255,255,.12)}'
      + '#tcrn-det .v-vidrio:before{content:"";position:absolute;inset:0;background:linear-gradient(112deg,transparent 18%,rgba(255,255,255,.13) 26%,rgba(255,255,255,.03) 33%,transparent 40%,transparent 62%,rgba(255,255,255,.07) 66%,transparent 70%);'
      + 'background-size:220% 100%;background-position:0 0;transition:background-position 1.1s ease}'
      + '#tcrn-det .v:hover .v-vidrio:before{background-position:-60% 0}'
      + '#tcrn-det .v-vidrio:after{content:"";position:absolute;left:0;right:0;top:0;height:1px;background:rgba(255,255,255,.55)}'
      /* etiqueta pegada en el vidrio */
      + '#tcrn-det .v-etiq{position:absolute;right:6%;bottom:6%;width:56%;z-index:2;background:#f3efe7;color:#141210;padding:8px 9px 9px;box-shadow:0 1px 2px rgba(0,0,0,.35)}'
      + '#tcrn-det .v-etiq:after{content:"";position:absolute;inset:0;background:linear-gradient(112deg,transparent 30%,rgba(255,255,255,.35) 40%,transparent 50%);pointer-events:none}'
      + '#tcrn-det .v-etiq b{display:block;font:italic 500 16px/1 "Cormorant Garamond",Georgia,serif}'
      + '#tcrn-det .v-etiq i{display:block;margin:4px 0 5px;font:600 6.5px/1.3 Unbounded,sans-serif;letter-spacing:.16em;color:#7a756e;font-style:normal;text-transform:uppercase}'
      + '#tcrn-det .v-etiq em{display:block;font:400 8.5px/1.35 "Archivo",Arial,sans-serif;font-style:normal;color:#3a3632}'
      + '#tcrn-det .v-nueva{position:absolute;left:6%;top:5%;z-index:2;background:#f3efe7;color:#141210;font:600 7px/1 Unbounded,sans-serif;letter-spacing:.22em;padding:5px 6px}'
      /* pedestal */
      + '#tcrn-det .v-ped{position:relative;z-index:1;height:clamp(90px,9vw,120px);background:linear-gradient(90deg,#d9d5ce,#efece6 30%,#f5f2ed 55%,#d6d2cb);'
      + 'box-shadow:inset 0 10px 14px -8px rgba(0,0,0,.35)}'
      + '#tcrn-det .v-ped:before{content:"";position:absolute;left:0;right:0;top:0;height:6px;background:linear-gradient(#fbfaf7,#e7e3dc)}'
      + '#tcrn-det .v-ped:after{content:"TOCÁ PARA VER LA FICHA";position:absolute;left:0;right:0;bottom:16px;text-align:center;font:600 7px/1 Unbounded,sans-serif;letter-spacing:.24em;color:#9a958e}'
      + '#tcrn-det .v-sombra{position:absolute;left:-14%;right:-14%;bottom:-18px;height:36px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(255,244,222,.16),transparent 70%);z-index:0}'
      + '#tcrn-det .tm-desliza{display:none;position:relative;text-align:center;margin:0;padding:0 0 26px;font:600 8.5px/1 Unbounded,sans-serif;letter-spacing:.24em;color:#77726b}'
      /* ficha (modal) */
      + '#tcrn-ficha{position:fixed;inset:0;z-index:100000;display:flex;align-items:center;justify-content:center;padding:24px;background:rgba(10,10,10,.78);backdrop-filter:blur(6px);-webkit-backdrop-filter:blur(6px);opacity:0;pointer-events:none;transition:opacity .35s}'
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
      /* celular */
      + '@media (max-width:860px){#tcrn-det .tm-entrada{height:200px}#tcrn-det .tm-salida{height:170px}'
      + '#tcrn-det .tm-fila{justify-content:flex-start;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;padding:150px 18vw 46px;gap:34px}'
      + '#tcrn-det .tm-fila::-webkit-scrollbar{display:none}'
      + '#tcrn-det .v,#tcrn-det .v.grande{width:64vw;scroll-snap-align:center}#tcrn-det .v.grande{order:-1}'
      + '#tcrn-det .v-etiq b{font-size:15px}#tcrn-det .v-etiq em{font-size:8px}'
      + '#tcrn-det .tm-desliza{display:block}'
      + '#tcrn-ficha{padding:0;align-items:flex-end}#tcrn-ficha .tf-caja{grid-template-columns:1fr;max-height:92vh;transform:translateY(40px)}'
      + '#tcrn-ficha .tf-img{padding:26px 60px}#tcrn-ficha .tf-txt{padding:26px 20px 30px}#tcrn-ficha h3{font-size:38px}#tcrn-ficha dl div{grid-template-columns:96px 1fr}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var s = document.createElement('section'); s.id = 'tcrn-det';
    s.innerHTML = '<div class="tm-entrada"><div class="tm-cartel"><p>ENTRADA · SALA TICCORENA</p></div></div>'
      + '<div class="tm-sala"><div class="tm-muro"></div><div class="tm-zocalo"></div><div class="tm-piso"></div>'
      + '<div class="tm-titulo"><p>COLECCIÓN 2026</p><h2>Tres piezas. Ninguna se repite.</h2></div>'
      + '<div class="tm-fila">' + OBRAS.map(function (o, i) {
        return '<button type="button" class="v' + (o.nueva ? ' grande' : '') + '" data-i="' + i + '" aria-label="Ver la ficha de ' + o.nombre + '">'
          + '<span class="v-cono"></span><span class="v-foco"></span>'
          + '<span class="v-caja"><span class="v-tapa"></span><span class="v-fondo"></span><span class="v-base-int"></span>'
          + '<span class="v-remera"><img src="' + BASE + o.img + '" alt="Remera TCRN ' + o.nombre + '" loading="lazy"></span>'
          + '<span class="v-vidrio"></span>'
          + (o.nueva ? '<span class="v-nueva">NUEVA</span>' : '')
          + '<span class="v-etiq"><b>' + o.nombre + '</b><i>N.º ' + o.n + ' · Córdoba · ' + o.anio + '</i><em>' + o.etiqueta + '</em></span></span>'
          + '<span class="v-ped"></span><span class="v-sombra"></span></button>';
      }).join('') + '</div><p class="tm-desliza">DESLIZÁ PARA RECORRER LA SALA →</p></div>'
      + '<div class="tm-salida"></div>';

    var seccion = ancla ? (ancla.closest('section') || ancla) : null;
    if (seccion && seccion.parentNode) seccion.parentNode.insertBefore(s, seccion.nextSibling);
    else box.appendChild(s);

    // efecto de "entrar": la sala se acerca a medida que bajás
    var sala = s.querySelector('.tm-sala');
    if (!quieto) {
      var pend = false;
      var paso = function () {
        pend = false;
        var r = s.getBoundingClientRect(), vh = window.innerHeight;
        if (r.bottom < 0 || r.top > vh) return;
        var p = Math.max(0, Math.min(1, (vh - r.top) / (vh + 260)));   // 0 al asomar, 1 ya adentro
        var e = 1 - Math.pow(1 - p, 2);
        sala.style.transform = 'scale(' + (0.9 + 0.1 * e).toFixed(4) + ')';
        sala.style.opacity = (0.35 + 0.65 * e).toFixed(3);
      };
      window.addEventListener('scroll', function () { if (!pend) { pend = true; requestAnimationFrame(paso); } }, { passive: true });
      window.addEventListener('resize', paso); paso();
    }

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
    s.querySelectorAll('.v').forEach(function (b) { b.addEventListener('click', function () { abrir(+b.getAttribute('data-i')); }); });
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
