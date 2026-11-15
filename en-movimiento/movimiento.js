/* TICCORENA · "EN MOVIMIENTO" — fila de reels en la portada (v2 15/11/26, estilo wearvybes.com)
   Fondo blanco, título chico al centro, videos grandes casi pegados, sin texto encima,
   bolsita arriba a la derecha que lleva a la remera del video. Tocar el video abre el reel.
   Se inserta después de "Productos destacados". Solo cargan/reproducen los videos que están en pantalla. */
(function () {
  if (location.pathname !== '/' || window.__tcrnMov) return;
  var BASE = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@7df550c065cabba7591a346d1d20512eb7204ffa/en-movimiento/';
  var LISTA = [{"video": "m04.mp4", "poster": "m04.jpg", "frase": "¿cuántos brillos?", "link": "https://www.instagram.com/reel/DfaT645juN4/", "producto": "https://ticcorena.com/productos/remera-tcrn-greatness/"}, {"video": "m02.mp4", "poster": "m02.jpg", "frase": "los brillos de cerca", "link": "https://www.instagram.com/reel/Dfj78tTohKI/", "producto": "https://ticcorena.com/productos/remera-tcrn-greatness/"}, {"video": "m07.mp4", "poster": "m07.jpg", "frase": "para la noche", "link": "https://www.instagram.com/reel/Det2k7Mo3bz/", "producto": "https://ticcorena.com/productos/remera-tcrn-warrior-7l9x5/"}, {"video": "m09.mp4", "poster": "m09.jpg", "frase": "San Miguel", "link": "https://www.instagram.com/reel/DepTK40I61X/", "producto": "https://ticcorena.com/productos/remera-tcrn-sanmiguel-1qexy/"}, {"video": "m10.mp4", "poster": "m10.jpg", "frase": "2 de la mañana", "link": "https://www.instagram.com/reel/Dd5ThVjxbaF/", "producto": "https://ticcorena.com/productos/remera-tcrn-warrior-7l9x5/"}, {"video": "m17.mp4", "poster": "m17.jpg", "frase": "2 millones en su cumpleaños", "link": "https://www.instagram.com/reel/DdtsAYyxNPX/", "producto": "https://ticcorena.com/productos/remera-tcrn-warrior-7l9x5/"}, {"video": "m20.mp4", "poster": "m20.jpg", "frase": "la mejor remera de Argentina", "link": "https://www.instagram.com/reel/Ddl9BUpRoAX/", "producto": "https://ticcorena.com/productos/remera-tcrn-warrior-7l9x5/"}, {"video": "m25.mp4", "poster": "m25.jpg", "frase": "rehacer el drop", "link": "https://www.instagram.com/reel/DcSK5cVxXhZ/", "producto": "https://ticcorena.com/productos/remera-tcrn-warrior-7l9x5/"}];
  var BOLSA = '<svg viewBox="0 0 24 24" width="15" height="15" fill="#fff" aria-hidden="true"><path d="M7 7V6a5 5 0 0 1 10 0v1h3a1 1 0 0 1 1 1l-1 12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2L3 8a1 1 0 0 1 1-1h3zm2 0h6V6a3 3 0 0 0-6 0v1zm-1 3a1 1 0 0 0-1 1 5 5 0 0 0 10 0 1 1 0 1 0-2 0 3 3 0 0 1-6 0 1 1 0 0 0-1-1z"/></svg>';

  function init() {
    var ancla = document.querySelector('[data-store="home-products-featured"]');
    var box = document.querySelector('.js-home-sections-container');
    if (!ancla && !box) return;
    window.__tcrnMov = 1;

    var css = ''
      + "@font-face{font-family:'Unbounded';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/unbounded/v12/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b244rNgQ.woff2) format('woff2')}"
      + '#tcrn-mov{background:#fff;padding:44px 0 56px;overflow:hidden}'
      + '#tcrn-mov h2{font:600 15px/1.2 Unbounded,sans-serif;letter-spacing:.02em;text-align:center;color:#0A0A0A;margin:0 16px 18px}'
      + '#tcrn-mov .tm-marco{max-width:1110px;margin:0 auto;position:relative}'
      + '#tcrn-mov .tm-track{display:flex;gap:3px;overflow-x:auto;scroll-snap-type:x proximity;scrollbar-width:none;cursor:grab;-webkit-overflow-scrolling:touch}'
      + '#tcrn-mov .tm-track::-webkit-scrollbar{display:none}'
      + '#tcrn-mov .tm-track.arrastra{cursor:grabbing;scroll-snap-type:none}'
      + '#tcrn-mov .tm-card{flex:0 0 auto;width:270px;aspect-ratio:9/16;max-height:480px;border-radius:6px;overflow:hidden;position:relative;scroll-snap-align:center;background:#111}'
      + '#tcrn-mov .tm-reel{display:block;width:100%;height:100%}'
      + '#tcrn-mov .tm-card video{width:100%;height:100%;object-fit:cover;display:block}'
      + '#tcrn-mov .tm-bolsa{position:absolute;top:10px;right:10px;width:30px;height:30px;border-radius:6px;background:rgba(40,40,40,.72);display:flex;align-items:center;justify-content:center;z-index:2;transition:background .2s,transform .2s}'
      + '#tcrn-mov .tm-bolsa:hover{background:#0A0A0A;transform:scale(1.08)}'
      + '@media (max-width:767px){#tcrn-mov{padding:34px 0 40px}#tcrn-mov h2{font-size:13px}#tcrn-mov .tm-card{width:62vw}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var s = document.createElement('section'); s.id = 'tcrn-mov';
    s.innerHTML = '<h2>TICCORENA en movimiento 💎</h2><div class="tm-marco"><div class="tm-track">'
      + LISTA.map(function (v) {
        return '<div class="tm-card"><a class="tm-reel" href="' + v.link + '" target="_blank" rel="noopener" aria-label="Ver el reel">'
          + '<video muted loop playsinline preload="none" poster="' + BASE + v.poster + '" data-src="' + BASE + v.video + '"></video></a>'
          + '<a class="tm-bolsa" href="' + v.producto + '" aria-label="Ver la remera">' + BOLSA + '</a></div>';
      }).join('') + '</div></div>';

    var seccion = ancla ? (ancla.closest('section') || ancla) : null;
    if (seccion && seccion.parentNode) seccion.parentNode.insertBefore(s, seccion.nextSibling);
    else box.appendChild(s);

    var track = s.querySelector('.tm-track');
    // que arranque cortado a los costados, como la referencia
    requestAnimationFrame(function () {
      var c = track.querySelector('.tm-card');
      if (c && track.scrollWidth > track.clientWidth) track.scrollLeft = c.getBoundingClientRect().width * 0.45;
    });
    // arrastrar con el mouse (PC); si se arrastró, no abre el link
    var abajo = false, x0 = 0, sl0 = 0, movido = false;
    track.addEventListener('mousedown', function (e) { abajo = true; movido = false; x0 = e.pageX; sl0 = track.scrollLeft; });
    window.addEventListener('mouseup', function () { abajo = false; track.classList.remove('arrastra'); });
    track.addEventListener('mousemove', function (e) {
      if (!abajo) return; var dx = e.pageX - x0;
      if (Math.abs(dx) > 6) { movido = true; track.classList.add('arrastra'); }
      track.scrollLeft = sl0 - dx;
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
