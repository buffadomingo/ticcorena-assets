/* TICCORENA · VIDEOS EN LA FICHA DE LA GREATNESS (16/11/26)
   1) Galería: el 2º cuadro es un video (Cabildo, cuerpo entero), mudo y en loop. Tocarlo abre las historias.
   2) Burbuja "Mirala brillar" debajo del precio (primer plano de los strass) → historias a pantalla completa
      (4 videos, barras arriba, tocar izq/der, mantener = pausa, deslizar abajo = cerrar) con talles + "Agregar al carrito".
   Solo en /productos/remera-tcrn-greatness/. */
(function () {
  if (!/\/productos\/remera-tcrn-greatness\/?/.test(location.pathname) || window.__tcrnGV) return;
  window.__tcrnGV = 1;
  var BASE = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@f08ccb0ad03da7f4a14bc51c5d4884da4af59d5e/greatness-videos/';
  var HIST = ['g4', 'g3', 'g2', 'g1'];          // orden de las historias
  var GALERIA_ABRE = 0;                         // el video de la galería abre la historia 0 (g4)
  var PLAY = '<svg viewBox="0 0 24 24" width="12" height="12" fill="currentColor" aria-hidden="true"><path d="M7 4.5v15a1 1 0 0 0 1.5.86l12-7.5a1 1 0 0 0 0-1.72l-12-7.5A1 1 0 0 0 7 4.5z"/></svg>';
  var X = '<svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="#fff" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg>';

  var css = ''
    + "@font-face{font-family:'Unbounded';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/unbounded/v12/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b244rNgQ.woff2) format('woff2')}"
    /* galería */
    + '.tgv-slide .tgv-caja{position:relative;padding-bottom:125%;background:#111;overflow:hidden;cursor:pointer}'
    + '.tgv-slide video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}'
    + '.tgv-chip{position:absolute;left:12px;bottom:12px;display:inline-flex;align-items:center;gap:7px;padding:8px 12px 8px 10px;border-radius:999px;background:rgba(10,10,10,.72);color:#fff;font:600 10px/1 Unbounded,sans-serif;letter-spacing:.06em;text-transform:uppercase;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);pointer-events:none}'
    + '.tgv-thumb{display:block;position:relative;padding-bottom:125%;margin-bottom:1rem;overflow:hidden;background:#111}'
    + '.tgv-thumb img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}'
    + '.tgv-thumb span{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;color:#fff;background:rgba(0,0,0,.25)}'
    /* burbuja */
    + '.tgv-burbuja{display:flex;align-items:center;gap:12px;margin:2px 0 18px;padding:0;background:none;border:0;cursor:pointer;color:#0A0A0A;text-align:left}'
    + '.tgv-aro{flex:0 0 auto;width:62px;height:62px;border-radius:50%;padding:2.5px;position:relative;background:conic-gradient(from 0deg,#0A0A0A,#9a9a9a,#f2f2f2,#9a9a9a,#0A0A0A);animation:tgv-gira 3.2s linear infinite}'
    + '.tgv-aro i{display:block;width:100%;height:100%;border-radius:50%;padding:2.5px;background:#fff;animation:tgv-gira 3.2s linear infinite reverse}'
    + '.tgv-aro video{width:100%;height:100%;border-radius:50%;object-fit:cover;display:block;background:#111}'
    + '@keyframes tgv-gira{to{transform:rotate(360deg)}}'
    + '.tgv-txt b{display:block;font:600 13px/1.15 Unbounded,sans-serif;letter-spacing:.01em;text-transform:uppercase}'
    + '.tgv-txt small{display:block;margin-top:5px;font-size:12px;color:#6b6b6b}'
    + '@media (max-width:767px){.tgv-burbuja{margin:4px auto 18px}}'
    + '@media (prefers-reduced-motion:reduce){.tgv-aro,.tgv-aro i{animation:none}}'
    /* historias */
    + '#tgv-h{position:fixed;inset:0;z-index:2147483000;background:#000;display:none;align-items:center;justify-content:center;touch-action:none;-webkit-user-select:none;user-select:none}'
    + '#tgv-h.abierto{display:flex}'
    + '#tgv-h .h-fondo{position:absolute;inset:-40px;background-size:cover;background-position:center;filter:blur(40px) brightness(.35);opacity:.9}'
    + '#tgv-h .h-col{position:relative;height:100%;width:100%;max-width:calc(100vh * 9 / 16);overflow:hidden;background:#000}'
    + '@media (min-width:768px){#tgv-h .h-col{height:94vh;max-width:calc(94vh * 9 / 16);border-radius:12px}}'
    + '#tgv-h video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:block}'
    + '#tgv-h .h-sombra{position:absolute;inset:0;pointer-events:none;background:linear-gradient(to bottom,rgba(0,0,0,.45),transparent 18%,transparent 52%,rgba(0,0,0,.85))}'
    + '#tgv-h .h-barras{position:absolute;top:10px;left:10px;right:10px;display:flex;gap:4px;z-index:3}'
    + '#tgv-h .h-barras span{flex:1;height:2.5px;border-radius:2px;background:rgba(255,255,255,.35);overflow:hidden}'
    + '#tgv-h .h-barras i{display:block;height:100%;width:0;background:#fff}'
    + '#tgv-h .h-top{position:absolute;top:22px;left:12px;right:6px;display:flex;align-items:center;gap:9px;z-index:3;color:#fff}'
    + '#tgv-h .h-top b{font:600 12px/1 Unbounded,sans-serif;letter-spacing:.02em}'
    + '#tgv-h .h-top small{font-size:12px;opacity:.7}'
    + '#tgv-h .h-cerrar{margin-left:auto;background:none;border:0;padding:8px;cursor:pointer;line-height:0}'
    + '#tgv-h .h-zona{position:absolute;top:70px;bottom:210px;width:40%;z-index:2}'
    + '#tgv-h .h-izq{left:0}#tgv-h .h-der{right:0;width:60%}'
    + '#tgv-h .h-panel{position:absolute;left:0;right:0;bottom:0;z-index:3;padding:0 16px max(18px,env(safe-area-inset-bottom));color:#fff}'
    + '#tgv-h .h-nombre{font:600 15px/1.2 Unbounded,sans-serif;text-transform:uppercase;letter-spacing:.01em}'
    + '#tgv-h .h-precio{margin:5px 0 12px;font-size:13px;opacity:.85}'
    + '#tgv-h .h-talles{display:flex;gap:8px;margin-bottom:10px}'
    + '#tgv-h .h-talles button{flex:1;height:42px;border-radius:8px;border:1.5px solid rgba(255,255,255,.45);background:rgba(0,0,0,.35);color:#fff;font:600 13px/1 Unbounded,sans-serif;cursor:pointer;transition:background .15s,color .15s,border-color .15s}'
    + '#tgv-h .h-talles button.sel{background:#fff;color:#0A0A0A;border-color:#fff}'
    + '#tgv-h .h-talles button:disabled{opacity:.3;text-decoration:line-through;cursor:default}'
    + '#tgv-h .h-comprar{width:100%;height:50px;border:0;border-radius:8px;background:#fff;color:#0A0A0A;font:600 13px/1 Unbounded,sans-serif;letter-spacing:.04em;text-transform:uppercase;cursor:pointer;transition:opacity .2s}'
    + '#tgv-h .h-comprar.falta{opacity:.55}'
    + '#tgv-h .h-flecha{display:none;position:absolute;top:50%;z-index:4;width:52px;height:52px;margin-top:-26px;border-radius:50%;border:0;background:rgba(255,255,255,.92);color:#0A0A0A;cursor:pointer;align-items:center;justify-content:center;box-shadow:0 6px 20px rgba(0,0,0,.35);transition:transform .15s,background .15s}'
    + '#tgv-h .h-flecha:hover{transform:scale(1.08);background:#fff}'
    + '#tgv-h .h-ant{left:calc(50% - (94vh * 9 / 32) - 76px)}#tgv-h .h-sig{right:calc(50% - (94vh * 9 / 32) - 76px)}'
    + '#tgv-h .h-flecha.oculta{visibility:hidden}'
    + '@media (min-width:768px){#tgv-h .h-flecha{display:flex}}'
    + '#tgv-h .h-aviso{height:16px;margin-top:8px;text-align:center;font-size:12px;opacity:.8}';
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  /* ---------- HISTORIAS ---------- */
  var h, vid, barras, fondo, actual = 0, abierto = false, pausado = false, talleSel = null;
  function precioTexto() {
    var p = document.querySelector('#price_display');
    var n = p ? parseInt(p.getAttribute('data-product-price'), 10) / 100 : 0;
    var d = document.querySelector('.js-product-discount-container');
    var m = d && /(\d+)%/.exec(d.textContent);
    function fmt(x) { return '$' + Math.round(x).toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
    if (n && m) return fmt(n * (1 - m[1] / 100)) + ' por transferencia · ' + fmt(n) + ' con tarjeta';
    return n ? fmt(n) : '';
  }
  function armarHistorias() {
    h = document.createElement('div'); h.id = 'tgv-h'; h.setAttribute('role', 'dialog'); h.setAttribute('aria-label', 'Greatness en movimiento');
    var talles = [].slice.call(document.querySelectorAll('.js-insta-variant[data-variation-id="0"]'));
    var FL = '<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 5l7 7-7 7"/></svg>';
    h.innerHTML = '<div class="h-fondo"></div>'
      + '<button type="button" class="h-flecha h-ant" aria-label="Video anterior">' + FL.replace('<svg ', '<svg style="transform:scaleX(-1)" ') + '</button>'
      + '<button type="button" class="h-flecha h-sig" aria-label="Video siguiente">' + FL + '</button>'
      + '<div class="h-col">'
      + '<video playsinline muted preload="auto"></video><div class="h-sombra"></div>'
      + '<div class="h-barras">' + HIST.map(function () { return '<span><i></i></span>'; }).join('') + '</div>'
      + '<div class="h-top"><b>TICCORENA</b><small>Greatness</small><button class="h-cerrar" aria-label="Cerrar">' + X + '</button></div>'
      + '<div class="h-zona h-izq"></div><div class="h-zona h-der"></div>'
      + '<div class="h-panel"><div class="h-nombre">Remera TCRN Greatness</div><div class="h-precio">' + precioTexto() + '</div>'
      + (talles.length ? '<div class="h-talles">' + talles.map(function (t) {
          var sin = /no-stock|disabled/.test(t.className);
          return '<button type="button" data-t="' + t.getAttribute('data-option') + '"' + (sin ? ' disabled' : '') + '>' + t.getAttribute('data-option') + '</button>';
        }).join('') + '</div>' : '')
      + '<button type="button" class="h-comprar falta">Elegí tu talle</button><div class="h-aviso"></div></div></div>';
    document.body.appendChild(h);
    vid = h.querySelector('video'); barras = h.querySelectorAll('.h-barras i'); fondo = h.querySelector('.h-fondo');

    h.querySelector('.h-cerrar').addEventListener('click', cerrar);
    h.querySelector('.h-izq').addEventListener('click', function () { ir(actual - 1); });
    h.querySelector('.h-der').addEventListener('click', function () { ir(actual + 1); });
    h.querySelector('.h-ant').addEventListener('click', function () { ir(actual - 1); });
    h.querySelector('.h-sig').addEventListener('click', function () { ir(actual + 1); });
    vid.addEventListener('ended', function () { ir(actual + 1); });

    // mantener apretado = pausa (como IG); deslizar hacia abajo = cerrar
    var y0 = 0, t0 = 0, timer = null;
    h.addEventListener('pointerdown', function (e) {
      if (e.target.closest('.h-panel,.h-cerrar')) return;
      y0 = e.clientY; t0 = Date.now();
      timer = setTimeout(function () { pausado = true; vid.pause(); }, 220);
    });
    h.addEventListener('pointerup', function (e) {
      clearTimeout(timer);
      if (pausado) { pausado = false; vid.play().catch(function () {}); e.preventDefault(); h.__sinClick = true; setTimeout(function () { h.__sinClick = false; }, 50); }
      if (e.clientY - y0 > 90 && Date.now() - t0 < 700) cerrar();
    });
    h.addEventListener('click', function (e) { if (h.__sinClick) { e.stopPropagation(); e.preventDefault(); } }, true);
    document.addEventListener('keydown', function (e) {
      if (!abierto) return;
      if (e.key === 'Escape') cerrar(); else if (e.key === 'ArrowRight') ir(actual + 1); else if (e.key === 'ArrowLeft') ir(actual - 1);
    });

    // talles: espejan los botones de la ficha
    var btn = h.querySelector('.h-comprar'), aviso = h.querySelector('.h-aviso');
    [].forEach.call(h.querySelectorAll('.h-talles button'), function (b) {
      b.addEventListener('click', function () {
        [].forEach.call(h.querySelectorAll('.h-talles button'), function (o) { o.classList.remove('sel'); });
        b.classList.add('sel'); talleSel = b.getAttribute('data-t');
        btn.textContent = 'Agregar al carrito · ' + talleSel; btn.classList.remove('falta'); aviso.textContent = '';
      });
    });
    btn.addEventListener('click', function () {
      if (talles.length && !talleSel) { aviso.textContent = 'Elegí el talle primero'; return; }
      var real = document.querySelector('.js-insta-variant[data-variation-id="0"][data-option="' + talleSel + '"]');
      if (real && !real.classList.contains('selected')) real.click();
      if (window.dataLayer) dataLayer.push({ event: 'tcrn_historias_carrito', talle: talleSel, historia: HIST[actual] });
      setTimeout(function () {
        cerrar();
        var comprar = document.querySelector('.js-addtocart.js-prod-submit-form');
        if (comprar) comprar.click();
      }, 180);
    });
  }
  function progreso() {
    if (!abierto) return;
    var d = vid.duration || 12;
    for (var i = 0; i < barras.length; i++) barras[i].style.width = i < actual ? '100%' : i > actual ? '0%' : Math.min(100, vid.currentTime / d * 100) + '%';
    requestAnimationFrame(progreso);
  }
  function ir(i) {
    if (!abierto) return;
    if (i < 0) i = 0;
    if (i >= HIST.length) { cerrar(); return; }
    actual = i;
    h.querySelector('.h-ant').classList.toggle('oculta', i === 0);
    h.querySelector('.h-sig').classList.toggle('oculta', i === HIST.length - 1);
    vid.poster = BASE + HIST[i] + '-hist.jpg';
    fondo.style.backgroundImage = 'url(' + BASE + HIST[i] + '-hist.jpg)';
    vid.src = BASE + HIST[i] + '-hist.mp4';
    vid.play().catch(function () {});
    if (HIST[i + 1]) { var pre = new Image(); pre.src = BASE + HIST[i + 1] + '-hist.jpg'; }
  }
  var scrollY = 0;
  function abrir(i) {
    if (!h) armarHistorias();
    abierto = true; h.classList.add('abierto');
    scrollY = window.scrollY; document.documentElement.style.overflow = 'hidden';
    pausarFicha(true);
    ir(i || 0); requestAnimationFrame(progreso);
    if (window.dataLayer) dataLayer.push({ event: 'tcrn_historias_abiertas' });
  }
  function cerrar() {
    if (!abierto) return;
    abierto = false; h.classList.remove('abierto'); vid.pause(); vid.removeAttribute('src'); vid.load();
    document.documentElement.style.overflow = ''; window.scrollTo(0, scrollY);
    pausarFicha(false);
  }
  var vidsFicha = [];
  function pausarFicha(si) { vidsFicha.forEach(function (v) { if (si) v.pause(); else if (v.__visible) v.play().catch(function () {}); }); }
  function autoplayVisible(v) {
    vidsFicha.push(v);
    if (!('IntersectionObserver' in window)) { v.src = v.getAttribute('data-src'); v.play(); return; }
    new IntersectionObserver(function (es) {
      es.forEach(function (en) {
        v.__visible = en.isIntersecting;
        if (en.isIntersecting && !abierto) { if (!v.src) v.src = v.getAttribute('data-src'); v.play().catch(function () {}); }
        else v.pause();
      });
    }, { threshold: 0.35 }).observe(v);
  }

  /* ---------- BURBUJA ---------- */
  function ponerBurbuja() {
    var precio = document.querySelector('[data-store^="product-price-"]');
    if (!precio || document.querySelector('.tgv-burbuja')) return !!precio;
    var b = document.createElement('button'); b.type = 'button'; b.className = 'tgv-burbuja'; b.setAttribute('aria-label', 'Ver la Greatness en movimiento');
    b.innerHTML = '<span class="tgv-aro"><i><video muted loop playsinline preload="none" poster="' + BASE + 'burbuja.jpg" data-src="' + BASE + 'burbuja.mp4"></video></i></span>'
      + '<span class="tgv-txt"><b>Mirala brillar</b><small>' + HIST.length + ' videos · tocá para ver</small></span>';
    precio.parentNode.insertBefore(b, precio.nextSibling);
    b.addEventListener('click', function () { abrir(0); });
    autoplayVisible(b.querySelector('video'));
    return true;
  }

  /* ---------- GALERÍA ---------- */
  function ponerEnGaleria(sw) {
    if (document.querySelector('.tgv-slide')) return;
    var el = document.createElement('div');
    el.className = 'w-100 swiper-slide product-slide slider-slide tgv-slide';
    el.innerHTML = '<div class="tgv-caja"><video muted loop playsinline preload="none" poster="' + BASE + 'galeria.jpg" data-src="' + BASE + 'galeria.mp4"></video>'
      + '<span class="tgv-chip">' + PLAY + 'En movimiento</span></div>';
    sw.addSlide(1, el); sw.update();
    el.querySelector('.tgv-caja').addEventListener('click', function () { abrir(GALERIA_ABRE); });
    autoplayVisible(el.querySelector('video'));

    // miniaturas (PC): sumar la del video y que cada miniatura lleve a su cuadro real
    var thumbs = document.querySelector('.js-swiper-product-thumbs');
    var primera = thumbs && thumbs.querySelector('.swiper-slide');
    if (primera) {
      var t = document.createElement('div'); t.className = 'swiper-slide h-auto w-auto';
      t.innerHTML = '<a href="#" class="js-product-thumb product-thumb tgv-thumb" aria-label="Video"><img src="' + BASE + 'galeria.jpg" alt=""><span>' + PLAY.replace(/12/g, '22') + '</span></a>';
      primera.parentNode.insertBefore(t, primera.nextSibling);
      var tsw = thumbs.swiper; if (tsw) tsw.update();
      thumbs.addEventListener('click', function (e) {
        var a = e.target.closest('.js-product-thumb'); if (!a) return;
        e.preventDefault(); e.stopImmediatePropagation();
        var todas = [].slice.call(thumbs.querySelectorAll('.js-product-thumb'));
        todas.forEach(function (x) { x.classList.remove('selected'); }); a.classList.add('selected');
        sw.slideTo(todas.indexOf(a));
      }, true);
    }
    // el visor de fotos (Fancybox) no conoce el video: al cerrarlo pide volver a la foto N, que ahora es el cuadro N+1
    var slideTo = sw.slideTo;
    sw.slideTo = function (i, vel) {
      if (vel === 0 && i >= 1 && document.querySelector('.fancybox__container')) i = i + 1;
      return slideTo.apply(sw, [i].concat([].slice.call(arguments, 1)));
    };
    sw.on('slideChange', function () {
      var v = el.querySelector('video');
      if (sw.activeIndex === 1 && !abierto) { if (!v.src) v.src = v.getAttribute('data-src'); v.play().catch(function () {}); }
    });
  }

  var intentos = 0;
  (function esperar() {
    var g = document.querySelector('.js-swiper-product');
    var listo = ponerBurbuja();
    if (g && g.swiper) { ponerEnGaleria(g.swiper); return; }
    if (++intentos < 60) setTimeout(esperar, 150); else if (!listo) window.__tcrnGV = 0;
  })();
})();
