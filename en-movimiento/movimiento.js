/* TICCORENA · "EN MOVIMIENTO" — fila de reels en la portada (15/11/26)
   Se inserta después de "Productos destacados". Videos livianos (12 s, sin audio) servidos por jsDelivr.
   Solo cargan/reproducen cuando están en pantalla. Tocar un video abre el reel en Instagram. */
(function () {
  if (location.pathname !== '/' || window.__tcrnMov) return;
  var BASE = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@7df550c065cabba7591a346d1d20512eb7204ffa/en-movimiento/';
  var IG = 'https://www.instagram.com/ticcorenastore/';
  var LISTA = [{"video": "m04.mp4", "poster": "m04.jpg", "frase": "¿cuántos brillos?", "link": "https://www.instagram.com/reel/DfaT645juN4/"}, {"video": "m02.mp4", "poster": "m02.jpg", "frase": "los brillos de cerca", "link": "https://www.instagram.com/reel/Dfj78tTohKI/"}, {"video": "m07.mp4", "poster": "m07.jpg", "frase": "para la noche", "link": "https://www.instagram.com/reel/Det2k7Mo3bz/"}, {"video": "m09.mp4", "poster": "m09.jpg", "frase": "San Miguel", "link": "https://www.instagram.com/reel/DepTK40I61X/"}, {"video": "m10.mp4", "poster": "m10.jpg", "frase": "2 de la mañana", "link": "https://www.instagram.com/reel/Dd5ThVjxbaF/"}, {"video": "m17.mp4", "poster": "m17.jpg", "frase": "2 millones en su cumpleaños", "link": "https://www.instagram.com/reel/DdtsAYyxNPX/"}, {"video": "m20.mp4", "poster": "m20.jpg", "frase": "la mejor remera de Argentina", "link": "https://www.instagram.com/reel/Ddl9BUpRoAX/"}, {"video": "m25.mp4", "poster": "m25.jpg", "frase": "rehacer el drop", "link": "https://www.instagram.com/reel/DcSK5cVxXhZ/"}];

  function init() {
    var ancla = document.querySelector('[data-store="home-products-featured"]');
    var box = document.querySelector('.js-home-sections-container');
    if (!ancla && !box) return;
    window.__tcrnMov = 1;

    var css = ''
      + "@font-face{font-family:'Unbounded';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/unbounded/v12/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b244rNgQ.woff2) format('woff2')}"
      + '#tcrn-mov{background:#0A0A0A;color:#fff;padding:72px 0 80px;overflow:hidden;position:relative}'
      + '#tcrn-mov .tm-top{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;padding:0 40px;margin-bottom:28px}'
      + '#tcrn-mov .tm-kick{font:600 10px/1 Unbounded,sans-serif;letter-spacing:.3em;color:#8C8C8C;margin:0 0 14px;display:flex;align-items:center;gap:12px}'
      + '#tcrn-mov .tm-kick:before{content:"";width:28px;height:1px;background:#8C8C8C}'
      + '#tcrn-mov h2{font:600 clamp(26px,4.6vw,58px)/.95 Unbounded,sans-serif;letter-spacing:-.01em;margin:0;text-transform:uppercase;color:#fff}'
      + '#tcrn-mov h2 em{font-style:normal;color:transparent;-webkit-text-stroke:1px #fff}'
      + '#tcrn-mov .tm-ig{font:600 10px/1 Unbounded,sans-serif;letter-spacing:.24em;color:#fff;text-decoration:none;border-bottom:1px solid #fff;padding-bottom:6px;white-space:nowrap}'
      + '#tcrn-mov .tm-nav{display:flex;gap:10px;margin-left:24px}'
      + '#tcrn-mov .tm-nav button{width:44px;height:44px;border-radius:50%;border:1px solid #3a3a3a;background:transparent;color:#fff;font-size:18px;cursor:pointer;transition:border-color .2s,background .2s}'
      + '#tcrn-mov .tm-nav button:hover{border-color:#fff;background:#151515}'
      + '#tcrn-mov .tm-der{display:flex;align-items:center}'
      + '#tcrn-mov .tm-track{display:flex;gap:14px;overflow-x:auto;scroll-snap-type:x mandatory;padding:4px 40px 8px;scrollbar-width:none;cursor:grab}'
      + '#tcrn-mov .tm-track::-webkit-scrollbar{display:none}'
      + '#tcrn-mov .tm-track.arrastra{cursor:grabbing;scroll-snap-type:none}'
      + '#tcrn-mov .tm-card{flex:0 0 auto;width:clamp(200px,19vw,260px);aspect-ratio:9/16;border-radius:14px;overflow:hidden;position:relative;scroll-snap-align:start;background:#151515;display:block;text-decoration:none;transform:translateZ(0)}'
      + '#tcrn-mov .tm-card video{width:100%;height:100%;object-fit:cover;display:block;transition:transform .6s ease,filter .4s}'
      + '#tcrn-mov .tm-card:hover video{transform:scale(1.04)}'
      + '#tcrn-mov .tm-card:after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.0) 55%,rgba(0,0,0,.55));pointer-events:none}'
      + '#tcrn-mov .tm-frase{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);text-align:center;padding:0 14px;font:600 12px/1.35 Unbounded,sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#fff;text-shadow:0 1px 8px rgba(0,0,0,.85);z-index:1}'
      + '#tcrn-mov .tm-ver{position:absolute;left:14px;bottom:14px;z-index:1;font:600 9px/1 Unbounded,sans-serif;letter-spacing:.22em;color:#fff;opacity:.85}'
      + '@media (max-width:767px){#tcrn-mov{padding:52px 0 56px}#tcrn-mov .tm-top{padding:0 16px;flex-direction:column;align-items:flex-start;gap:18px}'
      + '#tcrn-mov .tm-track{padding:4px 16px 8px;gap:10px}#tcrn-mov .tm-card{width:58vw;border-radius:12px}#tcrn-mov .tm-nav{display:none}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var s = document.createElement('section'); s.id = 'tcrn-mov';
    var tarjetas = LISTA.map(function (v) {
      return '<a class="tm-card" href="' + v.link + '" target="_blank" rel="noopener" aria-label="' + v.frase + '">'
        + '<video muted loop playsinline preload="none" poster="' + BASE + v.poster + '" data-src="' + BASE + v.video + '"></video>'
        + '<span class="tm-frase">' + v.frase + '</span><span class="tm-ver">VER REEL ↗</span></a>';
    }).join('');
    s.innerHTML = '<div class="tm-top"><div><p class="tm-kick">@TICCORENASTORE</p><h2>Ticcorena <em>en</em><br>movimiento</h2></div>'
      + '<div class="tm-der"><a class="tm-ig" href="' + IG + '" target="_blank" rel="noopener">VER EN INSTAGRAM ↗</a>'
      + '<div class="tm-nav"><button type="button" aria-label="Anterior">←</button><button type="button" aria-label="Siguiente">→</button></div></div></div>'
      + '<div class="tm-track">' + tarjetas + '</div>';

    var seccion = ancla ? (ancla.closest('section') || ancla) : null;
    if (seccion && seccion.parentNode) seccion.parentNode.insertBefore(s, seccion.nextSibling);
    else box.appendChild(s);

    var track = s.querySelector('.tm-track');
    // flechas (PC)
    var bts = s.querySelectorAll('.tm-nav button');
    function paso() { var c = track.querySelector('.tm-card'); return c ? (c.getBoundingClientRect().width + 14) * 2 : 400; }
    bts[0].onclick = function () { track.scrollBy({ left: -paso(), behavior: 'smooth' }); };
    bts[1].onclick = function () { track.scrollBy({ left: paso(), behavior: 'smooth' }); };
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
            if (!v.src) { v.src = v.getAttribute('data-src'); }
            var p = v.play(); if (p && p.catch) p.catch(function () {});
          } else { v.pause(); }
        });
      }, { threshold: 0.35 });
      vids.forEach(function (v) { io.observe(v); });
    } else {
      vids.forEach(function (v) { v.src = v.getAttribute('data-src'); v.play(); });
    }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
