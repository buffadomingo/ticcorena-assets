/* TICCORENA · GREATNESS "CARTA LEGENDARIA" — v6 (15/11/26)
   La Greatness como carta coleccionable holográfica. Se inclina con el mouse (PC) o al inclinar el celular
   (giroscopio; en iPhone pide permiso con un botón) o arrastrando el dedo; brillo tornasolado plateado que
   corre con el ángulo. Al tocarla se da vuelta: atrás está la ficha completa + precio + comprar.
   Datos de TABLA-GREATNESS.png. Se inserta después de "Productos destacados". Solo portada. */
(function () {
  if (location.pathname !== '/' || window.__tcrnDet) return;
  var BASE = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@656a9bbe0a7e53cb4c699ef8ab80670ddf74c62a/greatness-detalle/';
  var URL = 'https://ticcorena.com/productos/remera-tcrn-greatness/';
  var STATS = [['BRILLO', '590', 1, '+590 cristales aplicados con calor'], ['TELA', '20/1', .92, 'Algodón de alto gramaje'],
               ['ESTAMPA', '44×50', .95, 'Serigrafía que no se quiebra ni se despinta'], ['RAREZA', 'ÚNICA', 1, 'Diseño único en el mundo']];

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
      + '#tcrn-det,#tcrn-det *{box-sizing:border-box}'
      + '#tcrn-det{background:radial-gradient(ellipse 60% 70% at 70% 50%,#ffffff,#F1F0EC 70%);color:#0A0A0A;padding:96px 0 104px;overflow:hidden}'
      + '#tcrn-det .tc-in{max-width:1160px;margin:0 auto;padding:0 40px;display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}'
      + '#tcrn-det .tc-kick{font:600 10px/1 Unbounded,sans-serif;letter-spacing:.32em;color:#8C8C8C;margin:0 0 18px;display:flex;align-items:center;gap:10px}'
      + '#tcrn-det .tc-kick i{font-style:normal;color:#0A0A0A}'
      + '#tcrn-det h2{font:600 clamp(28px,3.4vw,46px)/1.04 Unbounded,sans-serif;letter-spacing:-.015em;text-transform:uppercase;margin:0}'
      + '#tcrn-det .tc-shine{background:linear-gradient(100deg,#0A0A0A 42%,#7a7a7a 47%,#e9e9e9 50%,#7a7a7a 53%,#0A0A0A 58%) 0 0/320% 100% no-repeat;-webkit-background-clip:text;background-clip:text;color:transparent;animation:tc-shine 5s ease-in-out infinite}'
      + '@keyframes tc-shine{0%{background-position:100% 0}45%,100%{background-position:0 0}}'
      + '#tcrn-det .tc-bajada{margin:22px 0 0;max-width:430px;font:400 15px/1.6 "Archivo",Arial,sans-serif;color:#4a4a4a}'
      + '#tcrn-det .tc-como{margin:18px 0 0;display:flex;flex-wrap:wrap;gap:8px}'
      + '#tcrn-det .tc-como span{font:600 9px/1 Unbounded,sans-serif;letter-spacing:.18em;border:1px solid #dcdcd7;padding:9px 11px;color:#8C8C8C}'
      + '#tcrn-det .tc-gyro{margin-top:14px;display:none;font:600 9px/1 Unbounded,sans-serif;letter-spacing:.18em;background:#0A0A0A;color:#fff;border:0;padding:12px 14px;cursor:pointer}'
      + '#tcrn-det .tc-cta{display:inline-block;margin-top:30px;padding:17px 36px;background:#0A0A0A;color:#fff;text-decoration:none;font:600 10px/1 Unbounded,sans-serif;letter-spacing:.26em;transition:background .25s,transform .25s}'
      + '#tcrn-det .tc-cta:hover{background:#262626;transform:translateY(-2px)}'
      /* escena y carta */
      + '#tcrn-det .tc-escena{perspective:1100px;display:flex;justify-content:center;position:relative}'
      + '#tcrn-det .tc-escena:after{content:"";position:absolute;left:18%;right:18%;bottom:-34px;height:40px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(0,0,0,.28),transparent 70%);filter:blur(4px);z-index:0}'
      + '#tcrn-det .tc-carta{position:relative;z-index:1;width:min(360px,78vw);aspect-ratio:63/88;transform-style:preserve-3d;cursor:pointer;touch-action:pan-y;'
      + 'transition:transform .12s linear;--rx:0deg;--ry:0deg;--mx:50%;--my:50%;--o:.0;--f:0deg;transform:rotateX(var(--rx)) rotateY(calc(var(--ry) + var(--f)))}'
      + '#tcrn-det .tc-carta.girando{transition:transform .8s cubic-bezier(.3,1.3,.5,1)}'
      + '#tcrn-det .tc-cara{position:absolute;inset:0;border-radius:18px;backface-visibility:hidden;-webkit-backface-visibility:hidden;overflow:hidden;'
      + 'box-shadow:0 30px 50px -18px rgba(0,0,0,.55),0 10px 18px -8px rgba(0,0,0,.35)}'
      + '#tcrn-det .tc-dorso{transform:rotateY(180deg)}'
      /* marco cromado */
      + '#tcrn-det .tc-frente{padding:11px;background:linear-gradient(135deg,#f4f4f4,#9c9c9c 22%,#ffffff 38%,#7d7d7d 55%,#e9e9e9 72%,#8a8a8a 90%,#f2f2f2)}'
      + '#tcrn-det .tc-int{position:relative;height:100%;border-radius:10px;background:#0b0b0b;display:flex;flex-direction:column;padding:12px 12px 10px;color:#fff}'
      + '#tcrn-det .tc-top{display:flex;justify-content:space-between;align-items:center;gap:8px}'
      + '#tcrn-det .tc-nom{font:600 13px/1 Unbounded,sans-serif;letter-spacing:.04em}'
      + '#tcrn-det .tc-leg{font:600 7.5px/1 Unbounded,sans-serif;letter-spacing:.2em;padding:5px 6px;border:1px solid rgba(255,255,255,.55);white-space:nowrap}'
      + '#tcrn-det .tc-arte{position:relative;margin-top:9px;flex:0 0 auto;aspect-ratio:1/0.74;border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.25);'
      + 'background:radial-gradient(ellipse 70% 60% at 50% 35%,#3a3a3a,#111 72%)}'
      + '#tcrn-det .tc-arte:before{content:"";position:absolute;inset:0;background:radial-gradient(1px 1px at 12% 20%,#fff,transparent),radial-gradient(1px 1px at 80% 15%,#fff,transparent),radial-gradient(1.5px 1.5px at 66% 70%,#fff,transparent),radial-gradient(1px 1px at 25% 78%,#fff,transparent),radial-gradient(1px 1px at 90% 55%,#fff,transparent),radial-gradient(1px 1px at 45% 10%,#fff,transparent);opacity:.7}'
      + '#tcrn-det .tc-arte img{position:absolute;left:14%;top:4%;width:72%;height:auto;filter:drop-shadow(0 10px 12px rgba(0,0,0,.7));transform:translate(calc((var(--mxn,0)) * -6px),calc((var(--myn,0)) * -6px))}'
      + '#tcrn-det .tc-tipo{margin:8px 0 0;font:600 7px/1 Unbounded,sans-serif;letter-spacing:.18em;color:#a9a9a9;padding:6px 0;border-top:1px solid #262626;border-bottom:1px solid #262626}'
      + '#tcrn-det .tc-stats{margin:7px 0 0;display:grid;gap:6px}'
      + '#tcrn-det .tc-st{display:grid;grid-template-columns:56px 1fr auto;align-items:center;gap:8px}'
      + '#tcrn-det .tc-st b{font:600 7px/1 Unbounded,sans-serif;letter-spacing:.16em;color:#bdbdbd}'
      + '#tcrn-det .tc-st em{font:600 10px/1 Unbounded,sans-serif;font-style:normal;text-align:right;min-width:44px}'
      + '#tcrn-det .tc-barra{height:4px;background:#222;border-radius:2px;overflow:hidden}'
      + '#tcrn-det .tc-barra i{display:block;height:100%;width:0;background:linear-gradient(90deg,#9a9a9a,#fff);transition:width 1.1s cubic-bezier(.2,.8,.2,1)}'
      + '#tcrn-det .tc-frase{margin:auto 0 0;padding-top:8px;font:italic 500 14px/1.15 "Cormorant Garamond",Georgia,serif;color:#e7e7e7}'
      + '#tcrn-det .tc-pie{display:flex;justify-content:space-between;margin-top:6px;font:600 6.5px/1 Unbounded,sans-serif;letter-spacing:.16em;color:#7d7d7d}'
      /* holo + reflejo */
      + '#tcrn-det .tc-holo,#tcrn-det .tc-glare,#tcrn-det .tc-chispas{position:absolute;inset:0;border-radius:18px;pointer-events:none}'
      + '#tcrn-det .tc-holo{mix-blend-mode:color-dodge;opacity:calc(.12 + var(--o) * .38);'
      + 'background:repeating-linear-gradient(115deg,rgba(255,255,255,0) 0%,rgba(200,220,255,.28) 3%,rgba(255,215,235,.25) 6%,rgba(215,255,230,.22) 9%,rgba(255,255,255,0) 12%);'
      + 'background-size:260% 260%;background-position:var(--mx) var(--my);filter:saturate(.6)}'
      + '#tcrn-det .tc-glare{mix-blend-mode:soft-light;background:radial-gradient(circle at var(--mx) var(--my),rgba(255,255,255,.55),rgba(255,255,255,0) 42%);opacity:calc(.2 + var(--o) * .6)}'
      + '#tcrn-det .tc-chispas{mix-blend-mode:screen;opacity:calc(.25 + var(--o) * .75);'
      + 'background-image:radial-gradient(1.4px 1.4px at 20% 30%,#fff,transparent),radial-gradient(1.2px 1.2px at 70% 22%,#fff,transparent),radial-gradient(1.6px 1.6px at 40% 62%,#fff,transparent),radial-gradient(1.2px 1.2px at 82% 74%,#fff,transparent),radial-gradient(1.4px 1.4px at 12% 86%,#fff,transparent),radial-gradient(1px 1px at 55% 45%,#fff,transparent);'
      + 'background-size:120px 160px;background-position:var(--mx) var(--my)}'
      /* dorso */
      + '#tcrn-det .tc-dorso{padding:11px;background:linear-gradient(135deg,#f4f4f4,#9c9c9c 22%,#ffffff 38%,#7d7d7d 55%,#e9e9e9 72%,#8a8a8a 90%,#f2f2f2)}'
      + '#tcrn-det .tc-dorso .tc-int{padding:12px 12px 10px}'
      + '#tcrn-det .tc-d-sub{display:flex;justify-content:space-between;gap:8px;margin-top:10px}'
      + '#tcrn-det .tc-d-grid{margin:10px 0 0;display:grid;grid-template-columns:1fr 1fr;gap:6px}'
      + '#tcrn-det .tc-d-cel{border:1px solid #2a2a2a;border-radius:6px;padding:9px 9px 8px;background:linear-gradient(160deg,#161616,#0d0d0d)}'
      + '#tcrn-det .tc-d-cel em{display:block;font:600 19px/1 Unbounded,sans-serif;font-style:normal;color:#fff}'
      + '#tcrn-det .tc-d-cel b{display:block;margin-top:6px;font:600 6.5px/1 Unbounded,sans-serif;letter-spacing:.18em;color:#8C8C8C}'
      + '#tcrn-det .tc-d-cel span{display:block;margin-top:5px;font:400 10px/1.3 "Archivo",Arial,sans-serif;color:#cfcfcf}'
      + '#tcrn-det .tc-d-precio{margin:auto 0 0;padding-top:10px}'
      + '#tcrn-det .tc-d-precio p{margin:0;display:flex;align-items:baseline;gap:10px}'
      + '#tcrn-det .tc-d-precio b{font:600 24px/1 Unbounded,sans-serif}'
      + '#tcrn-det .tc-d-precio s{font:600 11px/1 Unbounded,sans-serif;color:#7d7d7d}'
      + '#tcrn-det .tc-d-precio span{display:block;margin-top:6px;font:400 11px/1.4 "Archivo",Arial,sans-serif;color:#9a9a9a}'
      + '#tcrn-det .tc-d-btn{display:block;margin-top:12px;padding:13px;background:#fff;color:#0A0A0A;text-align:center;text-decoration:none;font:600 8.5px/1 Unbounded,sans-serif;letter-spacing:.22em}'
      + '#tcrn-det .tc-d-volver{margin-top:9px;text-align:center;font:600 7px/1 Unbounded,sans-serif;letter-spacing:.2em;color:#777}'
      + '#tcrn-det .tc-toca{margin:52px 0 0;text-align:center;font:600 9px/1 Unbounded,sans-serif;letter-spacing:.26em;color:#8C8C8C}'
      + '@media (max-width:860px){#tcrn-det{padding:64px 0 76px}#tcrn-det .tc-in{grid-template-columns:1fr;gap:36px;padding:0 16px}'
      + '#tcrn-det .tc-texto{display:contents}#tcrn-det .tc-kick{order:1;margin:0}#tcrn-det h2{order:2}#tcrn-det .tc-como{order:3;margin:-20px 0 0}#tcrn-det .tc-gyro{order:3;margin:-20px 0 0;justify-self:start}#tcrn-det .tc-lado{order:4}'
      + '#tcrn-det .tc-bajada{order:5;margin:0}#tcrn-det .tc-cta{order:7;margin:0;display:block;text-align:center}'
      + '#tcrn-det .tc-carta{width:min(330px,82vw)}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var stats = STATS.map(function (x) {
      return '<div class="tc-st"><b>' + x[0] + '</b><span class="tc-barra"><i data-w="' + (x[2] * 100) + '%"></i></span><em>' + x[1] + '</em></div>';
    }).join('');
    var dorso = STATS.map(function (x) { return '<div class="tc-d-cel"><em>' + x[1] + '</em><b>' + x[0] + '</b><span>' + x[3] + '</span></div>'; }).join('');
    var s = document.createElement('section'); s.id = 'tcrn-det';
    s.innerHTML = '<div class="tc-in"><div class="tc-texto">'
      + '<p class="tc-kick"><i>★</i> CARTA LEGENDARIA · N.º 03</p>'
      + '<h2><span class="tc-shine">La mejor remera con brillos del país.</span></h2>'
      + '<div class="tc-como"><span>' + (tactil ? 'INCLINÁ EL CELU' : 'MOVÉ EL MOUSE') + '</span><span>TOCALA PARA DARLA VUELTA</span></div>'
      + '<button type="button" class="tc-gyro">ACTIVAR MOVIMIENTO</button>'
      + '<p class="tc-bajada">+590 cristales aplicados con calor, algodón 20/1 de alto gramaje y una serigrafía de 44 × 50 cm que no se quiebra. Y un diseño que no existe en ningún otro lado del mundo.</p>'
      + '<a class="tc-cta" href="' + URL + '">QUIERO LA GREATNESS</a></div>'
      + '<div class="tc-lado"><div class="tc-escena"><div class="tc-carta" role="button" tabindex="0" aria-label="Carta de la Greatness: tocá para darla vuelta">'
      + '<div class="tc-cara tc-frente"><div class="tc-int">'
      + '<div class="tc-top"><span class="tc-nom">TICCORENA</span><span class="tc-leg">★ LEGENDARIA</span></div>'
      + '<div class="tc-arte"><img alt="Remera TCRN Greatness" src="' + BASE + 'obra-greatness.webp"></div>'
      + '<p class="tc-tipo">TCRN GREATNESS - FUERA DE SERIE</p>'
      + '<div class="tc-stats">' + stats + '</div>'
      + '<p class="tc-frase">“Para los que quieren brillar de verdad.”</p>'
      + '<div class="tc-pie"><span>TICCORENA · CÓRDOBA</span><span>2026</span></div></div>'
      + '<span class="tc-holo"></span><span class="tc-chispas"></span><span class="tc-glare"></span></div>'
      + '<div class="tc-cara tc-dorso"><div class="tc-int">'
      + '<div class="tc-top"><span class="tc-nom">TICCORENA</span><span class="tc-leg">FICHA · N.º 03</span></div>'
      + '<p class="tc-tipo tc-d-sub"><span>TCRN GREATNESS</span><span>COLOR · NEGRA</span></p>'
      + '<div class="tc-d-grid">' + dorso + '</div>'
      + '<div class="tc-d-precio"><p><b>$36.990</b><s>$41.100</s></p><span>con transferencia · 3 cuotas sin interés</span></div>'
      + '<a class="tc-d-btn" href="' + URL + '">COMPRAR LA GREATNESS</a><p class="tc-d-volver">TOCÁ PARA VOLVER</p></div>'
      + '<span class="tc-holo"></span><span class="tc-chispas"></span><span class="tc-glare"></span></div>'
      + '</div></div></div></div>';

    var seccion = ancla ? (ancla.closest('section') || ancla) : null;
    if (seccion && seccion.parentNode) seccion.parentNode.insertBefore(s, seccion.nextSibling);
    else box.appendChild(s);

    var carta = s.querySelector('.tc-carta'), escena = s.querySelector('.tc-escena');
    var vuelta = false, ultimo = -1e9, visible = false, t0 = performance.now();
    var tx = 0, ty = 0, cx = 0, cy = 0;          // inclinación objetivo / actual, de -1 a 1

    function apuntar(px, py) {                    // px, py de 0 a 1 sobre la carta
      tx = Math.max(-1, Math.min(1, px * 2 - 1)); ty = Math.max(-1, Math.min(1, py * 2 - 1)); ultimo = performance.now();
    }
    escena.addEventListener('pointermove', function (e) {
      if (e.pointerType === 'touch' && !e.isPrimary) return;
      var r = carta.getBoundingClientRect(); apuntar((e.clientX - r.left) / r.width, (e.clientY - r.top) / r.height);
    });
    escena.addEventListener('pointerleave', function () { ultimo = 0; });

    // dar vuelta (sin tapar los links del dorso)
    function girar() { vuelta = !vuelta; carta.classList.add('girando'); carta.style.setProperty('--f', vuelta ? '180deg' : '0deg');
      setTimeout(function () { carta.classList.remove('girando'); }, 820); }
    carta.addEventListener('click', function (e) { if (e.target.closest('a')) return; girar(); });
    carta.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); girar(); } });

    // giroscopio del celular
    var gyroOn = false;
    function onGyro(e) {
      if (e.gamma == null) return; gyroOn = true;
      apuntar(.5 + Math.max(-1, Math.min(1, e.gamma / 30)) / 2, .5 + Math.max(-1, Math.min(1, (e.beta - 40) / 30)) / 2);
    }
    var btnGyro = s.querySelector('.tc-gyro');
    if (tactil && window.DeviceOrientationEvent) {
      if (typeof DeviceOrientationEvent.requestPermission === 'function') {    // iPhone: pide permiso
        btnGyro.style.display = 'inline-block';
        btnGyro.addEventListener('click', function () {
          DeviceOrientationEvent.requestPermission().then(function (r) { if (r === 'granted') { window.addEventListener('deviceorientation', onGyro); btnGyro.style.display = 'none'; } }).catch(function () {});
        });
      } else window.addEventListener('deviceorientation', onGyro);
    }

    function cuadro(now) {
      if (!visible) return; requestAnimationFrame(cuadro);
      var t = (now - t0) / 1000;
      if (now - ultimo > 1800 && !gyroOn) { tx = Math.sin(t * .7) * .55; ty = Math.sin(t * .9 + 1) * .35; }   // se mueve sola
      cx += (tx - cx) * .1; cy += (ty - cy) * .1;
      var mag = Math.min(1, Math.sqrt(cx * cx + cy * cy));
      carta.style.setProperty('--ry', (cx * 14).toFixed(2) + 'deg');
      carta.style.setProperty('--rx', (-cy * 12).toFixed(2) + 'deg');
      carta.style.setProperty('--mx', (50 + cx * 50).toFixed(1) + '%');
      carta.style.setProperty('--my', (50 + cy * 50).toFixed(1) + '%');
      carta.style.setProperty('--mxn', cx.toFixed(3)); carta.style.setProperty('--myn', cy.toFixed(3));
      carta.style.setProperty('--o', mag.toFixed(3));
    }
    function llenar() { s.querySelectorAll('.tc-barra i').forEach(function (i) { i.style.width = i.getAttribute('data-w'); }); }
    if (quieto) { llenar(); return; }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (es) {
        es.forEach(function (en) { var antes = visible; visible = en.isIntersecting; if (visible && !antes) { llenar(); requestAnimationFrame(cuadro); } });
      }, { threshold: .2 }).observe(carta);
    } else { visible = true; llenar(); requestAnimationFrame(cuadro); }
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
