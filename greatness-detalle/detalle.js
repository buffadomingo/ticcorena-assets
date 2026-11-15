/* TICCORENA · GREATNESS "LA PIEZA" — v3 galería clara + lupa de joyero (15/11/26)
   Lo opuesto al hero (que es oscuro y centrado): fondo papel, remera colgada a la izquierda, título y
   placa de museo a la derecha. Una lupa (mouse en PC, dedo en celular, o sola si nadie la toca) muestra
   la estampa aumentada en alta resolución, con los strass REALES destellando adentro.
   Datos de TABLA-GREATNESS.png. Se inserta después de "Productos destacados". Solo portada. */
(function () {
  if (location.pathname !== '/' || window.__tcrnDet) return;
  var IMG = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@350dcb40f61c3dbe37f69ab3fadbe3f2f88adb98/greatness-detalle/greatness.webp', HD = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@350dcb40f61c3dbe37f69ab3fadbe3f2f88adb98/greatness-detalle/greatness-hd.webp';
  var URL = 'https://ticcorena.com/productos/remera-tcrn-greatness/';
  var RATIO = 1057 / 1100, ZOOM = 2.6;

  function init() {
    var ancla = document.querySelector('[data-store="home-products-featured"]');
    var box = document.querySelector('.js-home-sections-container');
    if (!ancla && !box) return;
    window.__tcrnDet = 1;
    var quieto = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
    var tactil = window.matchMedia && matchMedia('(hover: none)').matches;

    var css = ''
      + "@font-face{font-family:'Unbounded';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/unbounded/v12/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b244rNgQ.woff2) format('woff2')}"
      + "@font-face{font-family:'Cormorant Garamond';font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5wDD-iNM8.woff2) format('woff2')}"
      + '#tcrn-det{background:#F4F4F2;color:#0A0A0A;padding:96px 0 100px;overflow:hidden}'
      + '#tcrn-det .tg-in{max-width:1180px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1.15fr 1fr;gap:64px;align-items:center}'
      /* remera colgada en la pared */
      + '#tcrn-det .tg-pared{position:relative}'
      + '#tcrn-det .tg-vit{position:relative;width:100%;aspect-ratio:1100/1057;touch-action:pan-y}'
      + '#tcrn-det .tg-vit.mouse{cursor:none}'
      + '#tcrn-det .tg-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;filter:drop-shadow(0 34px 34px rgba(0,0,0,.22)) drop-shadow(0 6px 8px rgba(0,0,0,.12));user-select:none;pointer-events:none}'
      + '#tcrn-det .tg-gancho{position:absolute;left:50%;top:-4.5%;width:2px;height:6%;background:#0A0A0A;transform:translateX(-50%);opacity:.75}'
      + '#tcrn-det .tg-gancho:before{content:"";position:absolute;left:50%;top:-7px;width:8px;height:8px;border-radius:50%;border:1.5px solid #0A0A0A;transform:translateX(-50%)}'
      /* lupa */
      + '#tcrn-det .tg-lupa{position:absolute;left:0;top:0;width:var(--d,200px);height:var(--d,200px);border-radius:50%;overflow:hidden;pointer-events:none;z-index:3;'
      + 'box-shadow:0 0 0 1px #0A0A0A,0 0 0 7px #F4F4F2,0 0 0 8px #0A0A0A,0 22px 40px rgba(0,0,0,.35);will-change:transform;opacity:0;transition:opacity .4s}'
      + '#tcrn-det .tg-lupa.on{opacity:1}'
      + '#tcrn-det .tg-lupa canvas{width:100%;height:100%;display:block;background:#111}'
      + '#tcrn-det .tg-x{position:absolute;z-index:4;font:600 9px/1 Unbounded,sans-serif;letter-spacing:.18em;background:#0A0A0A;color:#fff;padding:5px 7px;pointer-events:none;opacity:0;transition:opacity .4s;will-change:transform}'
      + '#tcrn-det .tg-x.on{opacity:1}'
      + '#tcrn-det .tg-pista{margin:34px 0 0;text-align:center;font:600 9px/1 Unbounded,sans-serif;letter-spacing:.28em;color:#8C8C8C;transition:opacity .6s}'
      /* texto */
      + '#tcrn-det .tg-kick{font:600 10px/1 Unbounded,sans-serif;letter-spacing:.32em;color:#8C8C8C;margin:0 0 18px}'
      + '#tcrn-det h2{font:600 clamp(26px,3.2vw,44px)/1.06 Unbounded,sans-serif;letter-spacing:-.015em;text-transform:uppercase;margin:0;color:#0A0A0A}'
      + '#tcrn-det .tg-shine{background:linear-gradient(100deg,#0A0A0A 42%,#7a7a7a 47%,#e9e9e9 50%,#7a7a7a 53%,#0A0A0A 58%) 0 0/320% 100% no-repeat;-webkit-background-clip:text;background-clip:text;color:transparent;animation:tg-shine 5s ease-in-out infinite}'
      + '@keyframes tg-shine{0%{background-position:100% 0}45%,100%{background-position:0 0}}'
      + '#tcrn-det .tg-placa{margin:40px 0 0;padding:22px 26px 24px;border:1px solid #d4d4d0;background:#FAFAF8;position:relative;max-width:440px}'
      + '#tcrn-det .tg-placa:before{content:"";position:absolute;left:26px;top:-1px;width:44px;height:2px;background:#0A0A0A}'
      + '#tcrn-det .tg-obra{font:italic 500 32px/1 "Cormorant Garamond",Georgia,serif;margin:0 0 8px}'
      + '#tcrn-det .tg-autor{font:600 9px/1.5 Unbounded,sans-serif;letter-spacing:.22em;color:#8C8C8C;margin:0 0 16px}'
      + '#tcrn-det .tg-datos{margin:0;padding:14px 0 0;border-top:1px solid #e2e2de;list-style:none;font:400 13.5px/1.9 "Archivo",Arial,sans-serif;color:#3a3a3a}'
      + '#tcrn-det .tg-datos li:before{content:"— ";color:#a5a5a5}'
      + '#tcrn-det .tg-unica{margin:14px 0 0;font:italic 500 20px/1.2 "Cormorant Garamond",Georgia,serif}'
      + '#tcrn-det .tg-cta{display:inline-block;margin-top:30px;padding:16px 36px;background:#0A0A0A;color:#fff;text-decoration:none;font:600 10px/1 Unbounded,sans-serif;letter-spacing:.26em;transition:background .25s,transform .25s}'
      + '#tcrn-det .tg-cta:hover{background:#262626;transform:translateY(-2px)}'
      + '@media (max-width:860px){#tcrn-det{padding:64px 0 68px}#tcrn-det .tg-in{grid-template-columns:1fr;gap:20px;padding:0 16px}'
      + '#tcrn-det .tg-texto{order:-1}#tcrn-det .tg-placa{margin-top:26px}#tcrn-det .tg-pared{margin-top:30px}'
      + '#tcrn-det .tg-obra{font-size:28px}#tcrn-det .tg-datos{font-size:13px}#tcrn-det .tg-cta{display:block;text-align:center}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var s = document.createElement('section'); s.id = 'tcrn-det';
    s.innerHTML = '<div class="tg-in">'
      + '<div class="tg-pared"><div class="tg-vit' + (tactil ? '' : ' mouse') + '"><span class="tg-gancho"></span>'
      + '<a href="' + URL + '" aria-label="Ver la Greatness"><img class="tg-img" alt="Remera TCRN Greatness" src="' + IMG + '" loading="lazy"></a>'
      + '<div class="tg-lupa"><canvas></canvas></div><span class="tg-x">×' + ZOOM.toString().replace('.', ',') + '</span></div>'
      + '<p class="tg-pista">' + (tactil ? 'DESLIZÁ EL DEDO PARA VER DE CERCA' : 'PASÁ LA LUPA POR LA REMERA') + '</p></div>'
      + '<div class="tg-texto"><p class="tg-kick">TCRN GREATNESS</p><h2><span class="tg-shine">La mejor remera con brillos del país.</span></h2>'
      + '<div class="tg-placa"><p class="tg-obra">Greatness</p><p class="tg-autor">TICCORENA · CÓRDOBA, ARGENTINA · 2026</p>'
      + '<ul class="tg-datos"><li>Algodón 20/1 de alto gramaje</li><li>+590 cristales aplicados con calor</li><li>Serigrafía de 44 × 50 cm que no se quiebra ni se despinta</li></ul>'
      + '<p class="tg-unica">Pieza única en el mundo.</p></div>'
      + '<a class="tg-cta" href="' + URL + '">VER LA PIEZA</a></div></div>';

    var seccion = ancla ? (ancla.closest('section') || ancla) : null;
    if (seccion && seccion.parentNode) seccion.parentNode.insertBefore(s, seccion.nextSibling);
    else box.appendChild(s);

    var vit = s.querySelector('.tg-vit'), lupa = s.querySelector('.tg-lupa'), xz = s.querySelector('.tg-x');
    var cv = lupa.querySelector('canvas'), ctx = cv.getContext('2d'), pista = s.querySelector('.tg-pista');
    var W = 0, H = 0, D = 200, DPR = Math.min(window.devicePixelRatio || 1, 2);
    function medir() {
      var r = vit.getBoundingClientRect(); W = r.width; H = r.height;
      D = Math.round(Math.max(130, Math.min(230, W * 0.36)));
      lupa.style.setProperty('--d', D + 'px'); cv.width = D * DPR; cv.height = D * DPR; ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    medir(); window.addEventListener('resize', medir);

    // imagen grande para la lupa + strass reales (píxeles brillantes)
    var hd = new Image(), hdOk = false, P = [];
    hd.crossOrigin = 'anonymous';
    hd.onload = function () {
      hdOk = true;
      try {
        var w = 600, h = Math.round(w * RATIO), oc = document.createElement('canvas'); oc.width = w; oc.height = h;
        var c2 = oc.getContext('2d'); c2.drawImage(hd, 0, 0, w, h);
        var d = c2.getImageData(0, 0, w, h).data, cand = [];
        for (var y = 0; y < h; y += 2) for (var x = 0; x < w; x += 2) {
          var i = (y * w + x) * 4, L = (d[i] + d[i + 1] + d[i + 2]) / 3;
          var letras = y > h * .16 && y < h * .38 && x > w * .17 && x < w * .83;
          if (d[i + 3] > 200 && ((letras && L > 205) || (!letras && y > h * .36 && y < h * .9 && x > w * .2 && x < w * .8 && L > 240)))
            cand.push([x / w, y / h, Math.random() * 6.28, .7 + Math.random() * 1.8, letras ? 1 : .6]);
        }
        for (var k = cand.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)), t = cand[k]; cand[k] = cand[j]; cand[j] = t; }
        P = cand.slice(0, 1400);
      } catch (e) { P = []; }
    };

    var lx = .45, ly = .3, tx = .45, ty = .3, ultimo = -1e9, visible = false, t0 = performance.now();
    function mover(e) {
      var r = vit.getBoundingClientRect();
      tx = Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)); ty = Math.max(0, Math.min(1, (e.clientY - r.top) / r.height));
      ultimo = performance.now(); pista.style.opacity = 0;
    }
    vit.addEventListener('pointermove', mover); vit.addEventListener('pointerdown', mover);

    function destello(x, y, a, sz) {
      var g = ctx.createRadialGradient(x, y, 0, x, y, sz * 2.4);
      g.addColorStop(0, 'rgba(255,255,255,' + (a * .95) + ')'); g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, sz * 2.4, 0, 6.283); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,' + a + ')'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x - sz * 3, y); ctx.lineTo(x + sz * 3, y); ctx.moveTo(x, y - sz * 3); ctx.lineTo(x, y + sz * 3); ctx.stroke();
    }

    function cuadro(now) {
      if (!visible) return; requestAnimationFrame(cuadro);
      var t = (now - t0) / 1000;
      if (now - ultimo > 2500) { tx = .5 + .26 * Math.sin(t * .42); ty = .36 + .15 * Math.sin(t * .67 + 1); }
      lx += (tx - lx) * .14; ly += (ty - ly) * .14;
      var cx = lx * W, cy = ly * H;
      lupa.style.transform = 'translate(' + (cx - D / 2) + 'px,' + (cy - D / 2) + 'px)';
      xz.style.transform = 'translate(' + (cx + D * .32) + 'px,' + (cy + D * .32) + 'px)';
      if (!hdOk) return;
      lupa.classList.add('on'); xz.classList.add('on');
      // recorte de la imagen grande que corresponde a la lupa
      var vw = D / ZOOM, vh = D / ZOOM;                        // tamaño del área vista, en px de la vitrina
      var sx = (cx - vw / 2) / W * hd.naturalWidth, sy = (cy - vh / 2) / H * hd.naturalHeight;
      var sw = vw / W * hd.naturalWidth, sh = vh / H * hd.naturalHeight;
      ctx.fillStyle = '#F4F4F2'; ctx.fillRect(0, 0, D, D);
      ctx.drawImage(hd, sx, sy, sw, sh, 0, 0, D, D);
      ctx.globalCompositeOperation = 'lighter';
      for (var k = 0; k < P.length; k++) {
        var p = P[k], px = (p[0] * W - (cx - vw / 2)) * ZOOM, py = (p[1] * H - (cy - vh / 2)) * ZOOM;
        if (px < -10 || py < -10 || px > D + 10 || py > D + 10) continue;
        var tw = Math.sin(t * p[3] * 2.4 + p[2]); if (tw < .35) continue;
        var a = (tw - .35) / .65 * p[4];
        destello(px, py, Math.min(1, a), 1.2 + 3 * a);
      }
      ctx.globalCompositeOperation = 'source-over';
    }
    if (quieto) { lupa.style.display = 'none'; xz.style.display = 'none'; pista.style.display = 'none'; return; }
    function arrancar() { if (!hd.src) hd.src = HD; medir(); requestAnimationFrame(cuadro); }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (en) { var antes = visible; visible = en.isIntersecting; if (visible && !antes) arrancar(); });
      }, { rootMargin: '200px 0px', threshold: 0 }).observe(vit);
    } else { visible = true; arrancar(); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
