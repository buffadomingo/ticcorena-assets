/* TICCORENA · PIE DE PÁGINA nuevo (16/11/26) — en todas las páginas, por GTM.
   Reordena el footer nativo de Tiendanube (Morelia) sin borrar lo obligatorio:
   frase grande arriba · 3 columnas (TIENDA / CONTACTO / LISTA PRIVADA) · sellos · logos de pago en gris · línea legal.
   El formulario del newsletter es el NATIVO (se mueve, no se rehace), así sigue llegando a Tiendanube. */
(function () {
  if (window.__tcrnPie) return;
  var FRASE = 'FUERA DE SERIE.';
  var IG = 'https://www.instagram.com/ticcorenastore/';
  var API = 'https://greatness.ticcorena.com/api/lista';

  function init() {
    var f = document.querySelector('footer[data-store="footer"]');
    if (!f || window.__tcrnPie) return;
    window.__tcrnPie = 1;
    var c = f.querySelector('.container') || f;

    var css = ''
      + "@font-face{font-family:'Unbounded';font-style:normal;font-weight:600;font-display:swap;src:url(https://fonts.gstatic.com/s/unbounded/v12/Yq6F-LOTXCb04q32xlpat-6uR42XTqtG68b244rNgQ.woff2) format('woff2')}"
      + 'footer[data-store="footer"].tp-ok{background:#0A0A0A!important;color:#fff;padding-top:0!important;border-top:1px solid #1e1e1e}'
      + '.tp-ok .container{max-width:1240px;text-align:left!important;padding:0 40px}'
      + '.tp-ok .tp-frase{margin:0;padding:72px 0 40px;border-bottom:1px solid #262626;font:600 clamp(40px,8.4vw,128px)/.92 Unbounded,sans-serif;letter-spacing:-.03em;text-transform:uppercase;'
      + 'background:linear-gradient(100deg,#fff 42%,#8a8a8a 47%,#fff 50%,#8a8a8a 53%,#fff 58%) 0 0/320% 100% no-repeat;-webkit-background-clip:text;background-clip:text;color:transparent;animation:tp-shine 6s ease-in-out infinite}'
      + '@keyframes tp-shine{0%{background-position:100% 0}45%,100%{background-position:0 0}}'
      + '@media (prefers-reduced-motion:reduce){.tp-ok .tp-frase{animation:none;background:none;color:#fff}}'
      + '.tp-ok .tp-grid{display:grid;grid-template-columns:1.1fr 1fr 1fr 1.5fr;gap:40px;padding:44px 0 40px;border-bottom:1px solid #262626}'
      + '.tp-ok .tp-logo img{height:auto;width:170px;max-width:100%;max-height:none;filter:none;display:block}'
      + '.tp-ok .tp-logo p{margin:14px 0 0;font:400 13px/1.55 "Archivo",Arial,sans-serif;color:#8a8a8a;max-width:220px}'
      + '.tp-ok .tp-col h4{margin:0 0 16px;font:600 10px/1 Unbounded,sans-serif;letter-spacing:.24em;color:#8a8a8a}'
      + '.tp-ok .tp-col ul{list-style:none;margin:0;padding:0!important}'
      + '.tp-ok .tp-col li{margin:0 0 11px!important;display:block}'
      + '.tp-ok .tp-col a{color:#fff!important;font:500 14px/1.3 "Archivo",Arial,sans-serif;text-decoration:none;background:linear-gradient(#fff,#fff) 0 100%/0 1px no-repeat;transition:background-size .3s}'
      + '.tp-ok .tp-col a:hover{background-size:100% 1px}'
      + '.tp-ok .tp-lista p{margin:0 0 16px;font:400 13px/1.55 "Archivo",Arial,sans-serif;color:#b5b5b5;max-width:340px}'
      + '.tp-ok .tp-lista .input-append{display:flex;gap:0;border-bottom:1px solid #fff;max-width:380px}'
      + '.tp-ok .tp-lista .form-group{flex:1}'
      + '.tp-ok .tp-lista .form-group{margin:0}.tp-ok .tp-lista button.newsletter-btn{cursor:pointer}.tp-ok .tp-lista button:disabled{opacity:.5}'
      + '.tp-ok .tp-msg{margin:12px 0 0!important;font:500 13px/1.4 "Archivo",Arial,sans-serif!important;color:#fff!important;min-height:1px}'
      + '.tp-ok .tp-lista input[type=text]{width:100%;outline:none;background:transparent!important;border:0!important;color:#fff!important;padding:12px 0!important;height:auto!important;font:400 14px "Archivo",Arial,sans-serif!important;box-shadow:none!important}'
      + '.tp-ok .tp-lista input[type=text]::placeholder{color:#6f6f6f}'
      + '.tp-ok .tp-lista input[type=email]{background:transparent!important;border:0!important;color:#fff!important;padding:12px 0!important;height:auto!important;font:400 14px "Archivo",Arial,sans-serif!important;box-shadow:none!important}'
      + '.tp-ok .tp-lista input[type=email]::placeholder{color:#6f6f6f}'
      + '.tp-ok .tp-lista .newsletter-btn{background:#fff!important;color:#0A0A0A!important;border:0!important;margin:6px 0!important;padding:0 16px!important;font:600 9px/1 Unbounded,sans-serif!important;letter-spacing:.2em;text-decoration:none!important;text-transform:uppercase}'
      + '.tp-ok .tp-lista .newsletter-btn:hover{background:#d9d9d9!important}'
      + '.tp-ok .tp-sellos{padding:26px 0 8px}'
      + '.tp-ok .tp-sellos .custom-seal>div{justify-content:flex-start!important;margin:0!important;max-width:none!important}'
      + '.tp-ok .tp-sellos .col{padding:0!important}.tp-ok .tp-sellos .row{margin:0!important}'
      + '.tp-ok .tp-pagos{padding:18px 0 26px;border-bottom:1px solid #262626}'
      + '.tp-ok .tp-pagos .icon-logo{filter:grayscale(1) brightness(1.15);opacity:.5;transition:filter .25s,opacity .25s;width:34px;height:auto;margin:0 4px 6px 0}'
      + '.tp-ok .tp-pagos .icon-logo:hover{filter:none;opacity:1}'
      + '.tp-ok .tp-legal{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:10px 24px;padding:20px 0 0;color:#6f6f6f}'
      + '.tp-ok .tp-legal .my-2{margin:0!important;order:3}'
      + '.tp-ok .tp-legal .powered-by-logo svg{fill:#6f6f6f;height:12px;width:auto}'
      + '.tp-ok .tp-legal .font-smallest,.tp-ok .tp-legal a{color:#6f6f6f!important;font-size:11px!important}'
      + '.tp-ok .tp-legal .claim-link span{margin:0!important}'
      + '@media (max-width:900px){.tp-ok .container{padding:0 16px}.tp-ok .tp-frase{padding:52px 0 30px}'
      + '.tp-ok .tp-grid{grid-template-columns:1fr 1fr;gap:34px 20px;padding:34px 0}.tp-ok .tp-logo,.tp-ok .tp-lista{grid-column:1/-1}'
      + '.tp-ok .tp-legal{flex-direction:column;align-items:flex-start}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

    // piezas nativas que se reusan
    var logo = c.querySelector('.footer-logo-img');
    var menu = c.querySelector('.footer-menu-item') ? c.querySelector('.footer-menu-item').closest('ul') : null;
    var news = c.querySelector('.js-newsletter');
    var mail = c.querySelector('a[href^="mailto:"]');
    var wa = c.querySelector('a[href*="wa.me"]');
    var sellos = c.querySelector('.custom-seal') ? c.querySelector('.custom-seal').closest('.row') : null;
    var pagos = c.querySelector('.footer-payments-shipping-logos') ? c.querySelector('.footer-payments-shipping-logos').parentNode : null;
    var powered = c.querySelector('.powered-by-logo') ? c.querySelector('.powered-by-logo').parentNode : null;
    var copy = [].filter.call(c.children, function (e) { return /Copyright/.test(e.textContent) && !e.querySelector('form'); })[0];
    var claim = c.querySelector('.claim-link');

    function el(tag, cls, html) { var e = document.createElement(tag); if (cls) e.className = cls; if (html) e.innerHTML = html; return e; }

    var nuevo = el('div', 'tp-wrap');
    nuevo.appendChild(el('p', 'tp-frase', FRASE));
    var grid = el('div', 'tp-grid');

    var cLogo = el('div', 'tp-col tp-logo');
    if (logo) { if (logo.dataset.src && !/empty-placeholder/.test(logo.dataset.src)) logo.src = logo.dataset.src; logo.classList.remove('lazyload'); cLogo.appendChild(logo); }
    cLogo.appendChild(el('p', '', 'Creado para los que quieren brillar de verdad.'));
    grid.appendChild(cLogo);

    var cTienda = el('div', 'tp-col', '<h4>TIENDA</h4>');
    if (menu) { menu.className = ''; cTienda.appendChild(menu); }
    grid.appendChild(cTienda);

    var cCont = el('div', 'tp-col', '<h4>CONTACTO</h4>');
    var ul = el('ul');
    if (wa) ul.appendChild(el('li', '', '<a href="' + wa.getAttribute('href') + '" target="_blank" rel="noopener">WhatsApp</a>'));
    ul.appendChild(el('li', '', '<a href="' + IG + '" target="_blank" rel="noopener">Instagram</a>'));
    if (mail) ul.appendChild(el('li', '', '<a href="' + mail.getAttribute('href') + '">' + mail.textContent.trim() + '</a>'));
    cCont.appendChild(ul); grid.appendChild(cCont);

    // LISTA PRIVADA: se pide el @ de Instagram (no el mail) y va al mismo KV del envío gratis (Cloudflare, claves "lista:")
    var cLista = el('div', 'tp-col tp-lista', '<h4>LISTA PRIVADA</h4><p>Dejá tu usuario de Instagram y entrás a la lista: ofertas, descuentos y los próximos drops antes que en ningún lado.</p>'
      + '<form class="tp-form" novalidate><div class="input-append"><div class="form-group"><input type="text" name="ig" placeholder="@tuusuario" autocomplete="off" autocapitalize="off" autocorrect="off" spellcheck="false" aria-label="Tu usuario de Instagram" maxlength="31"></div>'
      + '<button type="submit" class="newsletter-btn">LO QUIERO</button></div><p class="tp-msg" aria-live="polite"></p></form>');
    grid.appendChild(cLista);
    var form = cLista.querySelector('.tp-form'), msg = cLista.querySelector('.tp-msg');
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var ig = form.ig.value.trim().replace(/^@/, '').toLowerCase();
      if (!/^[a-z0-9._]{1,30}$/.test(ig)) { msg.textContent = 'Escribí tu usuario de Instagram, por ejemplo @tuusuario.'; return; }
      var b = form.querySelector('button'); b.disabled = true; msg.textContent = '';
      fetch(API, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ ig: ig }) })
        .then(function (r) { if (!r.ok) throw 0; return r.json(); })
        .then(function (d) { form.querySelector('.input-append').style.display = 'none'; msg.textContent = d.repetido ? '@' + ig + ' ya estaba en la lista privada.' : 'Listo, @' + ig + ': ya estás en la lista privada.'; })
        .catch(function () { b.disabled = false; msg.textContent = 'No se pudo anotar. Probá de nuevo en un rato.'; });
    });
    nuevo.appendChild(grid);

    if (sellos) { var s = el('div', 'tp-sellos'); s.appendChild(sellos); nuevo.appendChild(s); }
    if (pagos) {
      var p = el('div', 'tp-pagos'); p.appendChild(pagos); nuevo.appendChild(p);
      [].forEach.call(pagos.querySelectorAll('img.lazyload'), function (i) { if (i.dataset.src) i.src = i.dataset.src; i.classList.remove('lazyload'); });
    }
    var legal = el('div', 'tp-legal');
    var izq = el('div', 'tp-legal-izq');
    if (copy) izq.appendChild(copy);
    if (claim) izq.appendChild(claim);
    legal.appendChild(izq);
    if (powered) legal.appendChild(powered);
    nuevo.appendChild(legal);

    // lo que sobra del footer viejo (contenedores vacíos, teléfono repetido, el "-") se vacía; los slots de Tiendanube quedan
    [].slice.call(c.children).forEach(function (ch) {
      if (ch.querySelector && ch.querySelector('[data-nubesdk-slot]')) return;
      if (ch.matches && ch.matches('[data-nubesdk-slot]')) return;
      ch.parentNode.removeChild(ch);
    });
    c.insertBefore(nuevo, c.firstChild);
    f.classList.add('tp-ok');
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();
})();
