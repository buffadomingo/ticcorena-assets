/* TICCORENA · GREATNESS "LA PIEZA" (A + B, 15/11/26)
   Vitrina a oscuras: la remera apenas se ve bajo una luz cenital. Una luz (mouse en PC, dedo en celular,
   o sola si nadie la toca) recorre la remera y enciende los strass REALES de la estampa a su paso
   (se detectan leyendo los píxeles brillantes del mockup). Abajo, placa de museo con los datos de
   TABLA-GREATNESS.png. Se inserta después de "Productos destacados" (antes de "En movimiento"). Solo portada. */
(function () {
  if (location.pathname !== '/' || window.__tcrnDet) return;
  var IMG = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@2bd51914029b5724b2397d107c55759194aff571/greatness-detalle/greatness.webp';
  var URL = 'https://ticcorena.com/productos/remera-tcrn-greatness/';
  var RATIO = 1057 / 1100;

  function init() {
    var ancla = document.querySelector('[data-store="home-products-featured"]');
    var box = document.querySelector('.js-home-sections-container');
    if (!ancla && !box) return;
    window.__tcrnDet = 1;
    var quieto = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;

    var css = ''
      + "@font-face{font-family:'Unbounded';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/unbounded/v12/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b244rNgQ.woff2) format('woff2')}"
      + "@font-face{font-family:'Cormorant Garamond';font-style:italic;font-weight:500;font-display:swap;src:url(https://fonts.gstatic.com/s/cormorantgaramond/v21/co3smX5slCNuHLi8bLeY9MK7whWMhyjYrGFEsdtdc62E6zd5wDD-iNM8.woff2) format('woff2')}"
      + '#tcrn-det{background:#050505;color:#fff;padding:84px 0 88px;overflow:hidden;position:relative;text-align:center}'
      + '#tcrn-det .tp-kick{font:600 10px/1 Unbounded,sans-serif;letter-spacing:.32em;color:#6f6f6f;margin:0 0 16px}'
      + '#tcrn-det h2{display:inline-block;position:relative;font:600 clamp(24px,3.4vw,42px)/1.08 Unbounded,sans-serif;letter-spacing:-.01em;text-transform:uppercase;margin:0 16px;max-width:760px}'
      + '#tcrn-det .tp-shine{background:linear-gradient(100deg,#d9d9d9 40%,#fff 47%,#fff 50%,#9a9a9a 55%,#d9d9d9 62%) 0 0/320% 100% no-repeat;-webkit-background-clip:text;background-clip:text;color:transparent;animation:tp-shine 5s ease-in-out infinite}'
      + '@keyframes tp-shine{0%{background-position:100% 0}45%,100%{background-position:0 0}}'
      /* vitrina */
      + '#tcrn-det .tp-vitrina{position:relative;width:min(560px,88vw);margin:34px auto 0;aspect-ratio:1100/1057;touch-action:pan-y;cursor:none}'
      + '#tcrn-det .tp-cono{position:absolute;left:50%;top:-34%;width:150%;height:150%;transform:translateX(-50%);pointer-events:none;'
      + 'background:radial-gradient(ellipse 34% 62% at 50% 0,rgba(255,255,255,.13),rgba(255,255,255,.04) 55%,transparent 75%)}'
      + '#tcrn-det .tp-piso{position:absolute;left:12%;right:12%;bottom:-7%;height:12%;border-radius:50%;pointer-events:none;background:radial-gradient(ellipse at center,rgba(255,255,255,.10),transparent 70%)}'
      + '#tcrn-det .tp-img{position:absolute;inset:0;width:100%;height:100%;object-fit:contain;pointer-events:none;user-select:none}'
      + '#tcrn-det .tp-base{filter:brightness(.42) contrast(1.05)}'
      + '#tcrn-det .tp-luz{filter:brightness(1.12) contrast(1.05);-webkit-mask-image:radial-gradient(circle var(--r,150px) at var(--mx,50%) var(--my,30%),#000 0,rgba(0,0,0,.55) 45%,transparent 100%);'
      + 'mask-image:radial-gradient(circle var(--r,150px) at var(--mx,50%) var(--my,30%),#000 0,rgba(0,0,0,.55) 45%,transparent 100%)}'
      + '#tcrn-det canvas{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;mix-blend-mode:screen}'
      + '#tcrn-det .tp-pista{position:absolute;left:50%;bottom:-12%;transform:translateX(-50%);font:600 9px/1 Unbounded,sans-serif;letter-spacing:.28em;color:#6f6f6f;white-space:nowrap;transition:opacity .6s}'
      /* placa de museo */
      + '#tcrn-det .tp-placa{display:inline-block;margin:70px 16px 0;padding:22px 30px 24px;border:1px solid #262626;max-width:470px;text-align:left;position:relative}'
      + '#tcrn-det .tp-placa:before{content:"";position:absolute;left:30px;top:-1px;width:44px;height:1px;background:#fff}'
      + '#tcrn-det .tp-obra{font:italic 500 30px/1 "Cormorant Garamond",Georgia,serif;margin:0 0 6px;color:#fff}'
      + '#tcrn-det .tp-autor{font:600 9px/1.4 Unbounded,sans-serif;letter-spacing:.24em;color:#8C8C8C;margin:0 0 16px}'
      + '#tcrn-det .tp-datos{margin:0;padding:14px 0 0;border-top:1px solid #1d1d1d;list-style:none;font:400 13px/1.9 "Archivo",Arial,sans-serif;color:#bdbdbd}'
      + '#tcrn-det .tp-datos li:before{content:"— ";color:#555}'
      + '#tcrn-det .tp-unica{margin:14px 0 0;font:italic 500 19px/1.2 "Cormorant Garamond",Georgia,serif;color:#fff}'
      + '#tcrn-det .tp-cta{display:inline-block;margin-top:26px;padding:15px 34px;border:1px solid #fff;color:#fff;text-decoration:none;font:600 10px/1 Unbounded,sans-serif;letter-spacing:.26em;transition:background .25s,color .25s}'
      + '#tcrn-det .tp-cta:hover{background:#fff;color:#050505}'
      + '@media (max-width:767px){#tcrn-det{padding:60px 0 64px}#tcrn-det .tp-placa{margin-top:58px;padding:18px 20px 20px}#tcrn-det .tp-obra{font-size:26px}#tcrn-det .tp-datos{font-size:12.5px}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var tactil = window.matchMedia && matchMedia('(hover: none)').matches;
    var s = document.createElement('section'); s.id = 'tcrn-det';
    s.innerHTML = '<p class="tp-kick">TCRN GREATNESS</p><h2><span class="tp-shine">La mejor remera con brillos del país.</span></h2>'
      + '<div class="tp-vitrina"><div class="tp-cono"></div><div class="tp-piso"></div>'
      + '<img class="tp-img tp-base" alt="Remera TCRN Greatness" src="' + IMG + '">'
      + '<img class="tp-img tp-luz" alt="" aria-hidden="true" src="' + IMG + '">'
      + '<canvas></canvas><span class="tp-pista">' + (tactil ? 'DESLIZÁ PARA ILUMINAR' : 'MOVÉ LA LUZ') + '</span></div>'
      + '<div><div class="tp-placa"><p class="tp-obra">Greatness</p><p class="tp-autor">TICCORENA · CÓRDOBA, ARGENTINA · 2026</p>'
      + '<ul class="tp-datos"><li>Algodón 20/1 de alto gramaje</li><li>+590 cristales aplicados con calor</li><li>Serigrafía de 44 × 50 cm que no se quiebra ni se despinta</li></ul>'
      + '<p class="tp-unica">Pieza única en el mundo.</p></div></div>'
      + '<a class="tp-cta" href="' + URL + '">VER LA PIEZA</a>';

    var seccion = ancla ? (ancla.closest('section') || ancla) : null;
    if (seccion && seccion.parentNode) seccion.parentNode.insertBefore(s, seccion.nextSibling);
    else box.appendChild(s);

    var vit = s.querySelector('.tp-vitrina'), cv = s.querySelector('canvas'), ctx = cv.getContext('2d');
    var pista = s.querySelector('.tp-pista');
    var W = 0, H = 0, DPR = Math.min(window.devicePixelRatio || 1, 2);
    function medir() {
      var r = vit.getBoundingClientRect(); W = r.width; H = r.height;
      cv.width = Math.round(W * DPR); cv.height = Math.round(H * DPR); ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
      vit.style.setProperty('--r', Math.round(W * 0.27) + 'px');
    }
    medir(); window.addEventListener('resize', medir);

    // strass reales: píxeles muy brillantes del mockup (letras con strass + estrellas de la estampa)
    var P = [];
    var src = new Image(); src.crossOrigin = 'anonymous';
    src.onload = function () {
      try {
        var w = 550, h = Math.round(w * RATIO), oc = document.createElement('canvas'); oc.width = w; oc.height = h;
        var oc2 = oc.getContext('2d'); oc2.drawImage(src, 0, 0, w, h);
        var d = oc2.getImageData(0, 0, w, h).data, cand = [];
        for (var y = 0; y < h; y += 3) for (var x = 0; x < w; x += 3) {
          var i = (y * w + x) * 4, L = (d[i] + d[i + 1] + d[i + 2]) / 3;
          var letras = y > h * .16 && y < h * .38 && x > w * .17 && x < w * .83;
          if (d[i + 3] > 200 && ((letras && L > 200) || (!letras && y > h * .36 && y < h * .9 && x > w * .2 && x < w * .8 && L > 238)))
            cand.push([x / w, y / h, Math.random() * 6.28, .6 + Math.random() * 1.6, letras ? 1 : .55]);
        }
        for (var k = cand.length - 1; k > 0; k--) { var j = Math.floor(Math.random() * (k + 1)), t = cand[k]; cand[k] = cand[j]; cand[j] = t; }
        P = cand.slice(0, 650);
      } catch (e) { P = []; }
    };
    src.src = IMG;

    // la luz: sigue al mouse / dedo; si nadie la toca, recorre sola
    var lx = .5, ly = .3, tx = .5, ty = .3, ultimo = -1e9, visible = false, t0 = performance.now();
    function mover(e) {
      var r = vit.getBoundingClientRect();
      tx = (e.clientX - r.left) / r.width; ty = (e.clientY - r.top) / r.height; ultimo = performance.now();
      pista.style.opacity = 0;
    }
    vit.addEventListener('pointermove', mover);
    vit.addEventListener('pointerdown', mover);

    function estrella(x, y, a, sz) {
      var g = ctx.createRadialGradient(x, y, 0, x, y, sz * 2.2);
      g.addColorStop(0, 'rgba(255,255,255,' + (a * .9) + ')'); g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g; ctx.beginPath(); ctx.arc(x, y, sz * 2.2, 0, 6.283); ctx.fill();
      ctx.strokeStyle = 'rgba(255,255,255,' + a + ')'; ctx.lineWidth = .9;
      ctx.beginPath(); ctx.moveTo(x - sz * 2.6, y); ctx.lineTo(x + sz * 2.6, y); ctx.moveTo(x, y - sz * 2.6); ctx.lineTo(x, y + sz * 2.6); ctx.stroke();
    }

    function cuadro(now) {
      if (visible) requestAnimationFrame(cuadro); else return;
      var t = (now - t0) / 1000;
      if (now - ultimo > 2500) {               // recorrido solo, sobre todo por las letras con strass
        tx = .5 + .3 * Math.sin(t * .45); ty = .34 + .16 * Math.sin(t * .71 + 1);
      }
      lx += (tx - lx) * .12; ly += (ty - ly) * .12;
      vit.style.setProperty('--mx', (lx * 100).toFixed(2) + '%'); vit.style.setProperty('--my', (ly * 100).toFixed(2) + '%');
      ctx.clearRect(0, 0, W, H);
      var R = .27, cx = lx * W, cy = ly * H, Rp = R * W;
      for (var k = 0; k < P.length; k++) {
        var p = P[k], px = p[0] * W, py = p[1] * H, dx = px - cx, dy = py - cy, dist = Math.sqrt(dx * dx + dy * dy);
        if (dist > Rp) continue;
        var f = 1 - dist / Rp, tw = .5 + .5 * Math.sin(t * p[3] * 3 + p[2]);
        var a = f * f * tw * p[4];
        if (a < .12) continue;
        estrella(px, py, Math.min(1, a * 1.3), 1 + 3.2 * a);
      }
    }
    if (quieto) {                                   // sin movimiento: remera iluminada, sin animación
      s.querySelector('.tp-base').style.filter = 'none'; s.querySelector('.tp-luz').style.display = 'none'; pista.style.display = 'none';
      return;
    }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (en) { var antes = visible; visible = en.isIntersecting; if (visible && !antes) { medir(); requestAnimationFrame(cuadro); } });
      }, { threshold: 0.05 }).observe(vit);
    } else { visible = true; requestAnimationFrame(cuadro); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
