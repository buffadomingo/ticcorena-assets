/* TICCORENA · GREATNESS CON DETALLES SEÑALADOS (15/11/26, idea "Buscá el jean…" de wessindumentaria.com)
   Título + link a la ficha + la remera grande con 4 puntos y su explicación (datos de TABLA-GREATNESS.png).
   Se inserta justo después de "Productos destacados" (antes de "En movimiento"). Solo en la portada. */
(function () {
  if (location.pathname !== '/' || window.__tcrnDet) return;
  var IMG = 'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@2bd51914029b5724b2397d107c55759194aff571/greatness-detalle/greatness.webp';
  var URL = 'https://ticcorena.com/productos/remera-tcrn-greatness/';
  // x, y = % sobre la imagen · lado = dónde va el texto en PC
  var PUNTOS = [
    { x: 36, y: 27, lado: 'izq', t: '+590 strass', d: 'Aplicados con calor, uno al lado del otro.' },
    { x: 90, y: 25, lado: 'der', t: 'Algodón 20/1', d: 'Tela de alto gramaje.' },
    { x: 57, y: 44, lado: 'der', t: 'Diseño único', d: 'Único en el mundo. Sí, en el mundo.' },
    { x: 27, y: 56, lado: 'izq', t: 'Estampa 44 × 50 cm', d: 'No se quiebra ni se despinta.' }
  ];
  var IMG_W = 56, IMG_L = 22;           // la remera ocupa el 56% del escenario, centrada
  var RATIO = 1057 / 1100;               // alto/ancho de la imagen

  function init() {
    var ancla = document.querySelector('[data-store="home-products-featured"]');
    var box = document.querySelector('.js-home-sections-container');
    if (!ancla && !box) return;
    window.__tcrnDet = 1;
    var css = ''
      + "@font-face{font-family:'Unbounded';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/unbounded/v12/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b244rNgQ.woff2) format('woff2')}"
      + '#tcrn-det{background:#fff;color:#0A0A0A;padding:80px 0 70px;overflow:hidden}'
      + '#tcrn-det .td-in{max-width:1040px;margin:0 auto;padding:0 32px}'
      + '#tcrn-det .td-kick{font:600 10px/1 Unbounded,sans-serif;letter-spacing:.3em;color:#8C8C8C;margin:0 0 14px}'
      + '#tcrn-det h2{font:600 clamp(26px,3.6vw,44px)/1.05 Unbounded,sans-serif;letter-spacing:-.015em;margin:0 0 18px;max-width:720px;color:#0A0A0A}'
      + '#tcrn-det .td-link{display:inline-flex;align-items:center;gap:10px;font:600 12px/1 "Archivo",Arial,sans-serif;color:#0A0A0A;text-decoration:none}'
      + '#tcrn-det .td-link span{width:22px;height:22px;border:1.5px solid #0A0A0A;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;font-size:12px;transition:transform .25s}'
      + '#tcrn-det .td-link:hover span{transform:translateX(4px)}'
      + '#tcrn-det .td-esc{position:relative;margin-top:36px;aspect-ratio:100/' + (IMG_W * RATIO).toFixed(2) + '}'
      + '#tcrn-det .td-img{position:absolute;left:' + IMG_L + '%;width:' + IMG_W + '%;top:0;filter:drop-shadow(0 30px 40px rgba(0,0,0,.18))}'
      + '#tcrn-det .td-p{position:absolute;width:18px;height:18px;margin:-9px 0 0 -9px;border-radius:50%;background:#fff;box-shadow:0 0 0 2px #0A0A0A;z-index:3}'
      + '#tcrn-det .td-p:before{content:"";position:absolute;inset:5px;border-radius:50%;background:#0A0A0A}'
      + '#tcrn-det .td-p:after{content:"";position:absolute;inset:-7px;border-radius:50%;border:1.5px solid rgba(255,255,255,.9);animation:td-lat 2.2s ease-out infinite}'
      + '@keyframes td-lat{0%{transform:scale(.6);opacity:1}100%{transform:scale(1.6);opacity:0}}'
      + '#tcrn-det .td-n{display:none}'
      + '#tcrn-det .td-l{position:absolute;height:1px;background:#0A0A0A;z-index:2;transform-origin:left}'
      + '#tcrn-det .td-txt{position:absolute;width:19%;transform:translateY(-50%)}'
      + '#tcrn-det .td-txt b{display:block;font:600 12px/1.2 Unbounded,sans-serif;margin-bottom:6px}'
      + '#tcrn-det .td-txt p{margin:0;font:400 13px/1.45 "Archivo",Arial,sans-serif;color:#555}'
      + '#tcrn-det .td-txt.izq{left:0;text-align:right}#tcrn-det .td-txt.der{right:0;text-align:left}'
      + '#tcrn-det .td-lista{display:none}'
      + '@media (max-width:767px){#tcrn-det{padding:56px 0 48px}#tcrn-det .td-in{padding:0 16px}'
      + '#tcrn-det .td-esc{aspect-ratio:100/' + (100 * RATIO).toFixed(2) + ';margin-top:24px}#tcrn-det .td-img{left:0;width:100%}'
      + '#tcrn-det .td-l,#tcrn-det .td-txt{display:none}'
      + '#tcrn-det .td-p{width:24px;height:24px;margin:-12px 0 0 -12px}#tcrn-det .td-p:before{display:none}'
      + '#tcrn-det .td-n{display:flex;position:absolute;inset:0;align-items:center;justify-content:center;font:600 11px/1 Unbounded,sans-serif;color:#0A0A0A}'
      + '#tcrn-det .td-lista{display:grid;grid-template-columns:1fr 1fr;gap:18px 16px;margin:22px 0 0;padding:0;list-style:none}'
      + '#tcrn-det .td-lista li{display:flex;gap:10px}#tcrn-det .td-lista i{flex:0 0 22px;height:22px;border-radius:50%;background:#0A0A0A;color:#fff;font:600 10px/22px Unbounded,sans-serif;text-align:center;font-style:normal}'
      + '#tcrn-det .td-lista b{display:block;font:600 11px/1.25 Unbounded,sans-serif;margin-bottom:4px}#tcrn-det .td-lista p{margin:0;font:400 12px/1.4 "Archivo",Arial,sans-serif;color:#555}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    var h = '<div class="td-in"><p class="td-kick">TCRN GREATNESS</p><h2>La mejor remera con brillos del país.</h2>'
      + '<a class="td-link" href="' + URL + '"><span>→</span>Ver la Greatness</a>'
      + '<div class="td-esc"><a href="' + URL + '" aria-label="Ver la Greatness"><img class="td-img" src="' + IMG + '" alt="Remera TCRN Greatness" loading="lazy"></a>';
    PUNTOS.forEach(function (p, i) {
      var px = IMG_L + IMG_W * p.x / 100;         // % del escenario
      var top = p.y + '%';
      h += '<span class="td-p" style="left:' + px + '%;top:' + top + '"><span class="td-n">' + (i + 1) + '</span></span>';
      if (p.lado === 'izq') h += '<span class="td-l" style="top:' + top + ';left:20.5%;width:' + (px - 20.5) + '%"></span>';
      else h += '<span class="td-l" style="top:' + top + ';left:' + px + '%;width:' + (79.5 - px) + '%"></span>';
      h += '<div class="td-txt ' + p.lado + '" style="top:' + top + '"><b>' + p.t + '</b><p>' + p.d + '</p></div>';
    });
    h += '</div><ol class="td-lista">' + PUNTOS.map(function (p, i) {
      return '<li><i>' + (i + 1) + '</i><div><b>' + p.t + '</b><p>' + p.d + '</p></div></li>';
    }).join('') + '</ol></div>';

    var s = document.createElement('section'); s.id = 'tcrn-det'; s.innerHTML = h;
    var seccion = ancla ? (ancla.closest('section') || ancla) : null;
    if (seccion && seccion.parentNode) seccion.parentNode.insertBefore(s, seccion.nextSibling);
    else box.appendChild(s);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
