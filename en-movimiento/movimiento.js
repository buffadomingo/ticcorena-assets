/* TICCORENA · "EN MOVIMIENTO" — fila de reels en la portada (v2 15/11/26, estilo wearvybes.com)
   Fondo blanco, título chico al centro, videos grandes casi pegados, sin texto encima,
   bolsita arriba a la derecha que lleva a la remera del video. Tocar el video abre el reel.
   Se inserta después de "Productos destacados". Solo cargan/reproducen los videos que están en pantalla. */
(function () {
  if (location.pathname !== '/' || window.__tcrnMov) return;
  var BASE = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@49f32d5bc7a82c61dae3b81112758fdbe48b7aba/en-movimiento/';
  var LISTA = [{"video": "g2.mp4", "poster": "g2.jpg", "frase": "g2", "link": "https://ticcorena.com/productos/remera-tcrn-greatness/", "producto": "https://ticcorena.com/productos/remera-tcrn-greatness/"}, {"video": "w2.mp4", "poster": "w2.jpg", "frase": "w2", "link": "https://ticcorena.com/productos/remera-tcrn-warrior-7l9x5/", "producto": "https://ticcorena.com/productos/remera-tcrn-warrior-7l9x5/"}, {"video": "g4.mp4", "poster": "g4.jpg", "frase": "g4", "link": "https://ticcorena.com/productos/remera-tcrn-greatness/", "producto": "https://ticcorena.com/productos/remera-tcrn-greatness/"}, {"video": "s2.mp4", "poster": "s2.jpg", "frase": "s2", "link": "https://ticcorena.com/productos/remera-tcrn-sanmiguel-1qexy/", "producto": "https://ticcorena.com/productos/remera-tcrn-sanmiguel-1qexy/"}, {"video": "g3.mp4", "poster": "g3.jpg", "frase": "g3", "link": "https://ticcorena.com/productos/remera-tcrn-greatness/", "producto": "https://ticcorena.com/productos/remera-tcrn-greatness/"}, {"video": "w1.mp4", "poster": "w1.jpg", "frase": "w1", "link": "https://ticcorena.com/productos/remera-tcrn-warrior-7l9x5/", "producto": "https://ticcorena.com/productos/remera-tcrn-warrior-7l9x5/"}, {"video": "g1.mp4", "poster": "g1.jpg", "frase": "g1", "link": "https://ticcorena.com/productos/remera-tcrn-greatness/", "producto": "https://ticcorena.com/productos/remera-tcrn-greatness/"}, {"video": "s1.mp4", "poster": "s1.jpg", "frase": "s1", "link": "https://ticcorena.com/productos/remera-tcrn-sanmiguel-1qexy/", "producto": "https://ticcorena.com/productos/remera-tcrn-sanmiguel-1qexy/"}];
  var BOLSA = '<svg viewBox="0 0 24 24" width="15" height="15" fill="#fff" aria-hidden="true"><path d="M7 7V6a5 5 0 0 1 10 0v1h3a1 1 0 0 1 1 1l-1 12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2L3 8a1 1 0 0 1 1-1h3zm2 0h6V6a3 3 0 0 0-6 0v1zm-1 3a1 1 0 0 0-1 1 5 5 0 0 0 10 0 1 1 0 1 0-2 0 3 3 0 0 1-6 0 1 1 0 0 0-1-1z"/></svg>';

  function init() {
    var ancla = document.querySelector('[data-store="home-products-featured"]');
    var box = document.querySelector('.js-home-sections-container');
    if (!ancla && !box) return;
    window.__tcrnMov = 1;

    var css = ''
      + "@font-face{font-family:'Unbounded';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/unbounded/v12/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b244rNgQ.woff2) format('woff2')}"
      + '#tcrn-mov{background:#fff;padding:44px 0 56px;overflow:visible}'
      + '#tcrn-mov .tm-slogan{margin:0 16px 12px;text-align:center;font:600 clamp(24px,3.6vw,46px)/1.05 Unbounded,sans-serif;letter-spacing:-.015em;text-transform:uppercase}'
      + '#tcrn-mov .tm-slogan span{background:linear-gradient(100deg,#0A0A0A 42%,#7a7a7a 47%,#e9e9e9 50%,#7a7a7a 53%,#0A0A0A 58%) 0 0/320% 100% no-repeat;-webkit-background-clip:text;background-clip:text;color:transparent;animation:tm-shine 5s ease-in-out infinite}'
      + '@keyframes tm-shine{0%{background-position:100% 0}45%,100%{background-position:0 0}}'
      + '@media (prefers-reduced-motion:reduce){#tcrn-mov .tm-slogan span{animation:none;background:none;color:#0A0A0A}}'
      + '#tcrn-mov h2{font:600 13px/1.2 Unbounded,sans-serif;letter-spacing:.02em;text-align:center;color:#6b6b6b;margin:0 16px 22px}'
      + '#tcrn-mov .tm-marco{width:100%;margin:0;position:relative}'
      + '#tcrn-mov .tm-track{display:flex;gap:3px;overflow-x:auto;scrollbar-width:none;cursor:grab;-webkit-overflow-scrolling:touch}'
      + '#tcrn-mov .tm-track::-webkit-scrollbar{display:none}'
      + '#tcrn-mov .tm-track.arrastra{cursor:grabbing;scroll-snap-type:none}'
      + '#tcrn-mov .tm-card{flex:0 0 auto;width:clamp(300px,26vw,460px);aspect-ratio:9/16;border-radius:6px;overflow:hidden;position:relative;scroll-snap-align:center;background:#111}'
      + '#tcrn-mov .tm-reel{display:block;width:100%;height:100%}'
      + '#tcrn-mov .tm-card video{width:100%;height:100%;object-fit:cover;display:block}'
      + '#tcrn-mov .tm-bolsa{position:absolute;top:10px;right:10px;width:30px;height:30px;border-radius:6px;background:rgba(40,40,40,.72);display:flex;align-items:center;justify-content:center;z-index:2;transition:background .2s,transform .2s}'
      + '#tcrn-mov .tm-bolsa:hover{background:#0A0A0A;transform:scale(1.08)}'
      + '@media (max-width:767px){#tcrn-mov{padding:34px 0 40px}#tcrn-mov h2{font-size:11px;margin-bottom:18px}#tcrn-mov .tm-card{width:72vw}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var s = document.createElement('section'); s.id = 'tcrn-mov';
    function tarjetas(copia) {
      return LISTA.map(function (v) {
        return '<div class="tm-card"' + (copia ? ' aria-hidden="true"' : '') + '><a class="tm-reel" href="' + v.producto + '" aria-label="Ver la remera"' + (copia ? ' tabindex="-1"' : '') + '>'
          + '<video muted loop playsinline preload="none" poster="' + BASE + v.poster + '" data-src="' + BASE + v.video + '"></video></a>'
          + '<a class="tm-bolsa" href="' + v.producto + '" aria-label="Ver la remera"' + (copia ? ' tabindex="-1"' : '') + '>' + BOLSA + '</a></div>';
      }).join('');
    }
    // la lista va dos veces seguidas: la fila corre sola y da la vuelta sin que se note el salto
    s.innerHTML = '<p class="tm-slogan"><span>Si brilla, es TICCORENA.</span></p><h2>TICCORENA en movimiento 💎</h2><div class="tm-marco"><div class="tm-track">'
      + tarjetas(false) + tarjetas(true) + '</div></div>';

    var seccion = document.getElementById('tcrn-det') || (ancla ? (ancla.closest('section') || ancla) : null);
    if (seccion && seccion.parentNode) seccion.parentNode.insertBefore(s, seccion.nextSibling);
    else box.appendChild(s);

    var track = s.querySelector('.tm-track');
    // la fila ocupa TODO el ancho de la pantalla aunque la tienda la meta en un contenedor angosto
    var marco = s.querySelector('.tm-marco');
    function aLoAncho() {
      marco.style.marginLeft = '0px';
      var izq = marco.getBoundingClientRect().left, ancho = document.documentElement.clientWidth;
      marco.style.width = ancho + 'px'; marco.style.marginLeft = (-izq) + 'px';
    }
    aLoAncho(); window.addEventListener('resize', aLoAncho);
    // MOVIMIENTO SOLO: corre a velocidad fija; se frena mientras la persona la toca/arrastra y sigue 2 s después
    var VEL = window.innerWidth < 768 ? 28 : 40;   // px por segundo
    var quieto = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var pos = 0, ult = 0, pausaHasta = 0, tocando = false;
    function mitad() { return track.scrollWidth / 2; }
    function envolver() {
      var m = mitad(); if (!m) return;
      if (track.scrollLeft >= m) track.scrollLeft -= m;
      else if (track.scrollLeft <= 0) track.scrollLeft += m;
    }
    function frenar() { pausaHasta = performance.now() + 2000; }
    function paso(t) {
      if (ult && !tocando && t > pausaHasta && !document.hidden) {
        pos += VEL * Math.min(t - ult, 64) / 1000;
        var m = mitad(); if (m && pos >= m) pos -= m;
        track.scrollLeft = pos;
      } else pos = track.scrollLeft;
      ult = t; requestAnimationFrame(paso);
    }
    requestAnimationFrame(function () {
      var c = track.querySelector('.tm-card');
      pos = track.scrollLeft = c ? c.getBoundingClientRect().width * 0.45 : 0;   // arranca cortado a los costados
      if (!quieto) requestAnimationFrame(paso);
    });
    track.addEventListener('scroll', function () { if (tocando || performance.now() < pausaHasta) envolver(); }, { passive: true });
    track.addEventListener('touchstart', function () { tocando = true; }, { passive: true });
    track.addEventListener('touchend', function () { tocando = false; frenar(); }, { passive: true });
    track.addEventListener('wheel', frenar, { passive: true });
    // arrastrar con el mouse (PC); si se arrastró, no abre el link
    var abajo = false, x0 = 0, sl0 = 0, movido = false;
    track.addEventListener('mousedown', function (e) { abajo = true; tocando = true; movido = false; x0 = e.pageX; sl0 = track.scrollLeft; });
    window.addEventListener('mouseup', function () { if (abajo) { tocando = false; frenar(); } abajo = false; track.classList.remove('arrastra'); });
    track.addEventListener('mousemove', function (e) {
      if (!abajo) return; var dx = e.pageX - x0;
      if (Math.abs(dx) > 6) { movido = true; track.classList.add('arrastra'); }
      track.scrollLeft = sl0 - dx; envolver(); if (track.scrollLeft !== sl0 - dx) { sl0 = track.scrollLeft + dx; }
    });
    track.addEventListener('click', function (e) { if (movido) { e.preventDefault(); movido = false; } }, true);
    track.addEventListener('dragstart', function (e) { e.preventDefault(); });

    // cargar y reproducir solo lo que se ve
    var vids = s.querySelectorAll('video');
    if ('IntersectionObserver' in window) {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (en) {
          var v = en.target;
          if (en.isIntersecting) {
            if (!v.src) v.src = v.getAttribute('data-src');
            var p = v.play(); if (p && p.catch) p.catch(function () {});
          } else v.pause();
        });
      }, { threshold: 0.25 });
      vids.forEach(function (v) { io.observe(v); });
    } else vids.forEach(function (v) { v.src = v.getAttribute('data-src'); v.play(); });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
