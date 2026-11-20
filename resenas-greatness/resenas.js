/* TICCORENA · RESEÑAS de la GREATNESS (20/11/26) — solo en la ficha de la Greatness, por GTM.
   1) Debajo del título: ★★★★★ 5,0 · N reseñas verificadas (toca → baja a las reseñas)
   2) Arriba de "Productos similares": LOS QUE YA LA TIENEN, tarjetas con foto que pasan solas.
   Para sumar una reseña: agregarla a RESENAS (texto TAL CUAL lo escribió el cliente) y su foto en fotos/. */
(function () {
  if (window.__tcrnRes || !/\/productos\/remera-tcrn-greatness\/?$/.test(location.pathname)) return;
  var BASE = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@e0fe87592bb35120a90c61de11f395ece466ee03/resenas-greatness/';
  var RESENAS = [
    { nombre: 'VALEN', ciudad: 'CÓRDOBA', foto: 'valen.webp', estrellas: 5, texto: 'Una locura la remera amigo. Esos detalles 🔥 Súper recomendable 🤜🏻🤛🏻' },
    { nombre: 'MATÍAS', ciudad: 'CÓRDOBA', foto: 'matias.webp', estrellas: 5, texto: 'zarpada hermano se nota que es de calidad un lujo bro todo bien' },
    { nombre: 'EMIR', ciudad: 'SAN JUAN', foto: 'emir.webp', estrellas: 5, texto: 'muy buena de las mejores remeras q me compré!!! 👏🏻👏🏻 5. estrellas.' }
  ];
  var N = RESENAS.length;
  var prom = RESENAS.reduce(function (a, r) { return a + r.estrellas; }, 0) / N;
  function est(n) { var s = ''; for (var i = 0; i < 5; i++) s += i < Math.round(n) ? '★' : '☆'; return s; }

  function init() {
    var h1 = document.querySelector('h1[data-store^="product-name"]');
    var rel = document.querySelector('[data-store="related-products"]');
    if (!h1 || window.__tcrnRes) return;
    window.__tcrnRes = 1;

    var css = ''
      + "@font-face{font-family:'Unbounded';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/unbounded/v12/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b244rNgQ.woff2) format('woff2')}"
      + '.tr-estrellas{display:inline-flex;align-items:center;gap:8px;margin:2px 0 10px;padding:0;background:none;border:0;cursor:pointer;color:#0A0A0A;text-decoration:none}'
      + '.tr-estrellas b{font-size:15px;letter-spacing:2px;color:#0A0A0A;line-height:1}'
      + '.tr-estrellas span{font:600 9.5px/1 Unbounded,sans-serif;letter-spacing:.12em;color:#5a5a5a;text-transform:uppercase;border-bottom:1px solid #c9c9c9;padding-bottom:3px}'
      + '#tcrn-res,#tcrn-res *{box-sizing:border-box}'
      + '#tcrn-res{background:#0A0A0A;color:#fff;padding:56px 0 60px;margin:40px 0 0;scroll-margin-top:90px}'
      + '#tcrn-res .tr-in{max-width:1160px;margin:0 auto;padding:0 40px}'
      + '#tcrn-res .tr-cab{display:flex;align-items:flex-end;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:26px}'
      + '#tcrn-res h2{margin:0;font:600 clamp(24px,3vw,38px)/1 Unbounded,sans-serif;letter-spacing:-.015em;text-transform:uppercase;color:#fff}'
      + '#tcrn-res .tr-nota{display:flex;align-items:center;gap:10px;font:600 10px/1 Unbounded,sans-serif;letter-spacing:.16em;color:#9a9a9a}'
      + '#tcrn-res .tr-nota b{font-size:16px;letter-spacing:2px;color:#fff}'
      + '#tcrn-res .tr-track{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-width:none;-webkit-overflow-scrolling:touch}'
      + '#tcrn-res .tr-track::-webkit-scrollbar{display:none}'
      + '#tcrn-res .tr-card{flex:0 0 calc((100% - 28px) / 3);scroll-snap-align:start;background:#141414;border:1px solid #262626;border-radius:10px;overflow:hidden;display:flex;flex-direction:column}'
      + '#tcrn-res .tr-foto{aspect-ratio:4/5;background:#1b1b1b center/cover no-repeat}'
      + '#tcrn-res .tr-cuerpo{padding:18px 18px 20px;display:flex;flex-direction:column;gap:12px;flex:1}'
      + '#tcrn-res .tr-cuerpo .tr-st{font-size:15px;letter-spacing:2px;color:#fff;line-height:1}'
      + '#tcrn-res .tr-cuerpo p{margin:0;font:400 15px/1.5 "Archivo",Arial,sans-serif;color:#e6e6e6}'
      + '#tcrn-res .tr-pie{margin-top:auto;display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;padding-top:12px;border-top:1px solid #262626}'
      + '#tcrn-res .tr-quien{font:600 9.5px/1 Unbounded,sans-serif;letter-spacing:.16em;color:#fff}'
      + '#tcrn-res .tr-ver{font:600 8px/1 Unbounded,sans-serif;letter-spacing:.14em;color:#0A0A0A;background:#fff;padding:6px 8px;border-radius:3px;white-space:nowrap}'
      + '#tcrn-res .tr-puntos{display:none;justify-content:center;gap:8px;margin-top:18px}'
      + '#tcrn-res .tr-puntos i{width:7px;height:7px;border-radius:50%;background:#3a3a3a;transition:background .3s,width .3s}'
      + '#tcrn-res .tr-puntos i.on{background:#fff;width:20px;border-radius:4px}'
      + '@media (max-width:860px){#tcrn-res{padding:44px 0 46px}#tcrn-res .tr-in{padding:0 16px}#tcrn-res .tr-card{flex-basis:84%}#tcrn-res .tr-puntos{display:flex}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    // 1) estrellas debajo del título
    var a = document.createElement('a');
    a.className = 'tr-estrellas'; a.href = '#tcrn-res';
    a.setAttribute('aria-label', 'Calificación ' + prom.toFixed(1).replace('.', ',') + ' de 5, ' + N + ' reseñas verificadas');
    a.innerHTML = '<b aria-hidden="true">' + est(prom) + '</b><span>' + prom.toFixed(1).replace('.', ',') + ' · ' + N + ' reseña' + (N > 1 ? 's' : '') + ' verificada' + (N > 1 ? 's' : '') + '</span>';
    h1.parentNode.insertBefore(a, h1.nextSibling);

    // 2) sección de reseñas
    var s = document.createElement('section'); s.id = 'tcrn-res';
    s.innerHTML = '<div class="tr-in"><div class="tr-cab"><h2>Los que ya la tienen</h2>'
      + '<div class="tr-nota"><b>' + est(prom) + '</b>' + prom.toFixed(1).replace('.', ',') + ' · ' + N + ' RESEÑAS</div></div>'
      + '<div class="tr-track">' + RESENAS.map(function (r) {
        return '<article class="tr-card"><div class="tr-foto" role="img" aria-label="Foto de ' + r.nombre + ' con su Greatness" style="background-image:url(' + BASE + r.foto + ')"></div>'
          + '<div class="tr-cuerpo"><div class="tr-st" aria-label="' + r.estrellas + ' de 5 estrellas">' + est(r.estrellas) + '</div><p>“' + r.texto + '”</p>'
          + '<div class="tr-pie"><span class="tr-quien">' + r.nombre + ' · ' + r.ciudad + '</span><span class="tr-ver">✓ COMPRA VERIFICADA</span></div></div></article>';
      }).join('') + '</div><div class="tr-puntos">' + RESENAS.map(function () { return '<i></i>'; }).join('') + '</div></div>';
    if (rel && rel.parentNode) rel.parentNode.insertBefore(s, rel);
    else (document.querySelector('footer') || document.body).insertAdjacentElement('beforebegin', s);

    a.addEventListener('click', function (e) { e.preventDefault(); s.scrollIntoView({ behavior: 'smooth', block: 'start' }); });

    // pasan solas cada 5 s (solo si no entran todas); se frenan al tocar
    var track = s.querySelector('.tr-track'), cards = s.querySelectorAll('.tr-card'), puntos = s.querySelectorAll('.tr-puntos i');
    var i = 0, pausaHasta = 0, visible = false;
    function actual() { var x = track.scrollLeft, mejor = 0, d = 1e9; cards.forEach(function (c, k) { var dd = Math.abs(c.offsetLeft - track.offsetLeft - x); if (dd < d) { d = dd; mejor = k; } }); return mejor; }
    function marcar() { i = actual(); puntos.forEach(function (p, k) { p.classList.toggle('on', k === i); }); }
    function ir(k) { var c = cards[k]; if (c) track.scrollTo({ left: c.offsetLeft - track.offsetLeft, behavior: 'smooth' }); }
    track.addEventListener('scroll', function () { clearTimeout(track._t); track._t = setTimeout(marcar, 80); }, { passive: true });
    ['touchstart', 'mousedown', 'wheel'].forEach(function (ev) { track.addEventListener(ev, function () { pausaHasta = Date.now() + 8000; }, { passive: true }); });
    if ('IntersectionObserver' in window) new IntersectionObserver(function (es) { visible = es[0].isIntersecting; }, { threshold: .3 }).observe(track);
    var quieto = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!quieto) setInterval(function () {
      if (!visible || Date.now() < pausaHasta || document.hidden || track.scrollWidth <= track.clientWidth + 4) return;
      ir((actual() + 1) % cards.length);
    }, 5000);
    marcar();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
