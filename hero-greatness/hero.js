/* TICCORENA · hero GREATNESS · lo carga la etiqueta de GTM cuando TCRN modo = drop */
(function(){
function init(){
if(window.__tcrnHero)return;
var box=document.querySelector('.js-home-sections-container');if(!box)return;window.__tcrnHero=1;
var st=document.createElement('style');st.id='tcrn-hero-css';st.textContent="#tcrn-hero,#tcrn-hero-fade{--negro:#0A0A0A;--blanco:#FFFFFF;--papel:#F4F4F2;--humo:#8C8C8C;--linea:#262626}#tcrn-hero{position:relative;width:100%;height:calc(100vh - var(--tg-head,0px));height:calc(100svh - var(--tg-head,0px));min-height:480px;overflow:hidden;background:var(--negro)}#tcrn-hero canvas{position:absolute;inset:0;width:100%;height:100%;display:block}#tcrn-hero .tg-ui{position:absolute;left:0;right:0;bottom:0;display:flex;justify-content:space-between;align-items:flex-end;gap:16px;padding:20px clamp(16px,3vw,40px) clamp(18px,3vh,32px);font-family:\"Space Grotesk\",sans-serif;text-transform:uppercase;letter-spacing:.18em;font-size:12px;opacity:0;transform:translateY(10px);transition:opacity .8s ease,transform .8s ease;pointer-events:none}#tcrn-hero.tg-done .tg-ui{opacity:1;transform:none;pointer-events:auto}#tcrn-hero .tg-ui b{display:block;font-weight:700;color:var(--papel)}#tcrn-hero .tg-ui span{color:var(--humo)}#tcrn-hero .tg-btn{display:inline-block;background:var(--papel);color:var(--negro);text-decoration:none;font-weight:700;padding:14px 22px;letter-spacing:.18em;white-space:nowrap}#tcrn-hero .tg-btn:hover{background:var(--blanco)}#tcrn-hero.tg-focus .tg-ui{opacity:.25}#tcrn-hero.tg-focus .tg-ui .tg-btn{visibility:hidden}#tcrn-hero .tg-cta{position:absolute;left:50%;top:40%;z-index:2;transform:translate(-50%,-50%) scale(.9);opacity:0;pointer-events:none;font:700 clamp(15px,1.5vw,22px) \"Space Grotesk\",sans-serif;letter-spacing:.22em;text-transform:uppercase;white-space:nowrap;background:var(--papel);color:var(--negro);text-decoration:none;padding:clamp(18px,2vw,26px) clamp(34px,4vw,60px);box-shadow:0 0 60px rgba(255,255,255,.18);transition:opacity .7s ease,transform .7s cubic-bezier(.2,.9,.3,1.2),background .2s}#tcrn-hero.tg-focus .tg-cta{opacity:1;transform:translate(-50%,-50%) scale(1);pointer-events:auto}#tcrn-hero .tg-cta:hover{background:var(--blanco)}#tcrn-hero-fade{height:clamp(160px,32vh,340px);margin-top:-1px;background:linear-gradient(180deg,#0A0A0A 0%,#0F0F0F 8%,#1C1C1C 18%,#353535 29%,#575757 40%,#7E7E7E 51%,#A4A4A4 62%,#C6C6C6 73%,#E1E1E1 84%,#F4F4F4 93%,#FFFFFF 100%)}#tcrn-hero .tg-ui{padding-right:max(84px,3vw)!important;padding-bottom:max(76px,3vh)!important}#tcrn-hero *{box-sizing:border-box}#tcrn-hero .tg-ui>div{white-space:nowrap}@media (max-width:699px){#tcrn-hero .tg-ui{font-size:10px;letter-spacing:.14em}#tcrn-hero .tg-btn{padding:12px 14px}}html.tcrn-drop section[data-store=\"home-slider\"]{display:none!important}";document.head.appendChild(st);
var wrap=document.createElement('div');wrap.innerHTML="<section id=\"tcrn-hero\"><canvas></canvas><div class=\"tg-ui\"><div><b>TCRN Greatness</b><span>Drop 16.11 \u00b7 C\u00f3rdoba</span></div><a class=\"tg-btn\" href=\"https://ticcorena.com/productos/remera-tcrn-greatness/\">Ver la remera</a></div><a class=\"tg-cta\" href=\"https://ticcorena.com/productos/remera-tcrn-greatness/\">Ver la remera</a></section><div id=\"tcrn-hero-fade\"></div>";
var hero=wrap.firstChild,fade=hero.nextSibling;box.insertBefore(fade,box.firstChild);box.insertBefore(hero,fade);
document.documentElement.classList.add('tcrn-drop');
function head(){var h=document.querySelector('.js-head-main');hero.style.setProperty('--tg-head',(h?h.getBoundingClientRect().height:0)+'px')}
head();window.addEventListener('resize',head);
function run(){
(function(){
const hero=document.getElementById('tcrn-hero');
const cv=hero.querySelector('canvas');const ctx=cv.getContext('2d');
const WORD='GREATNESS';
// Archivo (la de la marca) en su corte más angosto y más negro: mismo ancho, letras mucho más altas
const FONT=px=>'900 extra-condensed '+px+'px "Archivo"';
const SRC={shirt:'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@dd95be0dfac879c05b275330144aaec2e0c6c907/hero-greatness/greatness-roto.webp',body:'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@dd95be0dfac879c05b275330144aaec2e0c6c907/hero-greatness/cupido-cuerpo.png',wn:'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@dd95be0dfac879c05b275330144aaec2e0c6c907/hero-greatness/ala-cerca.png',wf:'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@dd95be0dfac879c05b275330144aaec2e0c6c907/hero-greatness/ala-lejos.png',strass:'https://cdn.jsdelivr.net/gh/buffadomingo/ticcorena-assets@dd95be0dfac879c05b275330144aaec2e0c6c907/hero-greatness/strass.png'};
// strass reales del banco de la estampa (talla brillante), cada uno en 5 giros distintos
let STONES=[];
function buildStones(sheet){const S=sheet.height,n=Math.round(sheet.width/S);STONES=[];
  for(let i=0;i<n;i++)for(let j=0;j<5;j++){const c=document.createElement('canvas');c.width=c.height=S;const g=c.getContext('2d');
    g.translate(S/2,S/2);g.rotate(j*1.2566+i*0.4);g.drawImage(sheet,i*S,0,S,S,-S/2,-S/2,S,S);STONES.push(c)}}
// achica cada piedra al tamaño exacto de pantalla en pasos de a la mitad (si no, la talla se ve como un asterisco)
function sizeStones(px){px=Math.max(4,Math.round(px));return STONES.map(src=>{let cur=src;
  while(cur.width/2>=px){const n=document.createElement('canvas');n.width=n.height=cur.width/2|0;const g=n.getContext('2d');g.imageSmoothingQuality='high';g.drawImage(cur,0,0,n.width,n.height);cur=n}
  const o=document.createElement('canvas');o.width=o.height=px;const g=o.getContext('2d');g.imageSmoothingQuality='high';g.drawImage(cur,0,0,px,px);return o})}
let ST={};
const GLINTS=[[0.313,0.3129],[0.3323,0.2586],[0.266,0.225],[0.6289,0.345],[0.7288,0.3057],[0.5402,0.2814],[0.4829,0.3657],[0.459,0.2793],[0.658,0.2686],[0.5805,0.2864],[0.6647,0.2814],[0.6028,0.3571],[0.2712,0.2614],[0.2399,0.3657],[0.7064,0.3179],[0.2511,0.2871],[0.2846,0.3529],[0.2817,0.2521],[0.459,0.3221],[0.6334,0.295],[0.7362,0.3721],[0.5775,0.3029],[0.5648,0.3386],[0.5999,0.3286],[0.4821,0.3257],[0.3301,0.3664],[0.459,0.2929],[0.2422,0.3286],[0.7004,0.2986],[0.38,0.2993],[0.5872,0.27],[0.2712,0.2757],[0.3554,0.2871],[0.2735,0.3079],[0.2996,0.3986],[0.4128,0.2464],[0.623,0.2364],[0.6647,0.2929],[0.6304,0.2586],[0.3368,0.2421],[0.459,0.3093],[0.5648,0.27],[0.4441,0.3693],[0.5544,0.2407],[0.7198,0.3771],[0.4508,0.2693],[0.3443,0.3643],[0.7317,0.36],[0.6647,0.3129],[0.2675,0.29],[0.3934,0.3629],[0.5656,0.2407],[0.4575,0.2579],[0.5358,0.315],[0.5276,0.3571],[0.4292,0.3407],[0.6401,0.3229],[0.2347,0.3179],[0.6379,0.355],[0.3949,0.2229],[0.3301,0.2771],[0.4747,0.3107],[0.3689,0.3386],[0.6334,0.2793],[0.2466,0.3886],[0.4784,0.2693],[0.3815,0.3107],[0.6878,0.3636],[0.7004,0.33],[0.263,0.2471],[0.3666,0.3543],[0.313,0.2957],[0.4739,0.2893],[0.3569,0.255],[0.345,0.3329],[0.3987,0.3836],[0.3785,0.3871],[0.5358,0.3421],[0.2899,0.3843],[0.7004,0.3664],[0.5171,0.2764],[0.6192,0.2636],[0.7623,0.3707],[0.661,0.3493],[0.6475,0.2864],[0.5358,0.3707],[0.6088,0.2407],[0.7459,0.3586],[0.4724,0.3929],[0.4635,0.3421],[0.4948,0.3307],[0.4531,0.3364],[0.7004,0.2871],[0.4188,0.2179],[0.7198,0.3343],[0.5082,0.345],[0.6818,0.2557],[0.7563,0.2993],[0.304,0.3443],[0.4314,0.3257],[0.6647,0.3279],[0.2921,0.315],[0.725,0.3229],[0.2556,0.3293],[0.6356,0.2207],[0.6125,0.3471],[0.4568,0.3857],[0.2407,0.2943],[0.4314,0.2864],[0.6826,0.3343],[0.6423,0.37],[0.313,0.3264],[0.5775,0.3407],[0.4933,0.2871],[0.7265,0.3893],[0.7504,0.3293],[0.5365,0.26],[0.7474,0.3121],[0.7168,0.3043],[0.2258,0.3693],[0.4605,0.2357],[0.2422,0.2807],[0.5686,0.2564],[0.2563,0.3071],[0.5268,0.3],[0.2273,0.2971],[0.4948,0.4036],[0.4083,0.2586],[0.7183,0.3457],[0.4314,0.3107],[0.3241,0.335],[0.5537,0.265],[0.3838,0.2093],[0.3636,0.3736],[0.582,0.3236],[0.2735,0.3264],[0.5045,0.3071],[0.5015,0.2486],[0.2601,0.37],[0.3808,0.275],[0.7176,0.2743],[0.4523,0.3557],[0.6788,0.2821],[0.3256,0.3236],[0.5663,0.3514],[0.582,0.3521],[0.6483,0.2314],[0.4106,0.3243],[0.2846,0.33],[0.5686,0.315],[0.2914,0.2936],[0.7362,0.2886],[0.6893,0.2879],[0.7496,0.3814],[0.6401,0.265],[0.6535,0.3236],[0.4776,0.2479],[0.2958,0.275],[0.3331,0.3136],[0.3987,0.3136],[0.7004,0.3464],[0.3852,0.3421],[0.5119,0.2879],[0.5976,0.3071],[0.2481,0.3543],[0.5648,0.2279],[0.3167,0.2293],[0.2899,0.3407],[0.6058,0.2514],[0.7034,0.27],[0.3987,0.2864],[0.3711,0.3157],[0.4598,0.365],[0.6736,0.3586],[0.3204,0.3607],[0.4404,0.2643],[0.7414,0.3],[0.427,0.2693],[0.43,0.2586],[0.4091,0.3486],[0.6334,0.3343],[0.5522,0.3357],[0.655,0.255],[0.3204,0.2686],[0.7601,0.3164],[0.3569,0.3479],[0.5171,0.2514],[0.649,0.3543],[0.2727,0.3571],[0.5618,0.3007],[0.3025,0.3664],[0.4724,0.4086],[0.5678,0.37],[0.2846,0.3064],[0.7347,0.3443],[0.4426,0.3071],[0.4106,0.3357],[0.5045,0.3186],[0.3592,0.3243],[0.4009,0.2036],[0.7191,0.3586],[0.4732,0.335],[0.5231,0.38],[0.4642,0.215],[0.6021,0.2914],[0.6706,0.2714],[0.4739,0.3586],[0.3398,0.2871],[0.4836,0.3943],[0.4851,0.3393],[0.3085,0.275],[0.6833,0.3479],[0.3428,0.3493],[0.3458,0.2629],[0.3689,0.2629],[0.6215,0.3307],[0.5797,0.385],[0.7243,0.2936],[0.6393,0.2507],[0.5551,0.2521],[0.4404,0.3464],[0.5246,0.2871],[0.4143,0.28],[0.6684,0.3729],[0.5045,0.2786],[0.5164,0.2371],[0.2675,0.3464],[0.6893,0.3121],[0.5373,0.24],[0.3793,0.3529],[0.7586,0.34],[0.301,0.2479],[0.5551,0.3236],[0.2541,0.38],[0.3443,0.3879],[0.7325,0.2743],[0.5693,0.2886],[0.497,0.2671],[0.4933,0.3536],[0.5186,0.395],[0.5917,0.3879],[0.4933,0.3179],[0.3495,0.2307],[0.2854,0.24],[0.3934,0.2471],[0.5574,0.39],[0.3256,0.2464],[0.3204,0.2836],[0.5902,0.2479],[0.5514,0.2793],[0.5745,0.2757],[0.2407,0.3407],[0.6714,0.2521],[0.5238,0.2636],[0.4806,0.3807],[0.687,0.2693],[0.3502,0.2771],[0.3241,0.2986],[0.5894,0.2986],[0.2906,0.3657]];

// tiempos (segundos)
const T_SLIDE=0.85,T_DROP0=0.6,T_HIT=1.1,T_WAVE=1.1,T_SHIRT0=2.0,T_SHIRT=1.4,T_DONE=3.1,T_LOOP=2.3,LOOP=11,CUP_DUR=7.0,CUP_SHOT=5.1;

let W,H,dpr,L={},dots=[],shirtGl=[],burst=[],solid,mask,shirtCv,bgCv,IM={},t0=0,doneFlag=false;
const rnd=(a,b)=>a+Math.random()*(b-a);
const clamp=(x,a,b)=>Math.max(a,Math.min(b,x));
const easeOutExpo=x=>x>=1?1:1-Math.pow(2,-10*x);
const easeOutCubic=x=>1-Math.pow(1-clamp(x,0,1),3);
const easeOutQuint=x=>1-Math.pow(1-clamp(x,0,1),5);
const easeInOut=x=>{x=clamp(x,0,1);return x<.5?2*x*x:1-Math.pow(-2*x+2,2)/2};
const easeOutBack=x=>{const c=1.7;x=clamp(x,0,1);return 1+(c+1)*Math.pow(x-1,3)+c*Math.pow(x-1,2)};

/* ---------- sprites del strass (plateado) ---------- */
function sprite(sz,draw){const c=document.createElement('canvas');c.width=c.height=sz;draw(c.getContext('2d'),sz);return c}
// strass de cristal: casi transparente al centro, el brillo vive en el borde y en las facetas
const BEAD=sprite(64,(g,s)=>{const r=s/2,R0=r-1;
  // cuerpo: vidrio apenas lechoso, deja ver el fondo
  let gr=g.createRadialGradient(r,r,0,r,r,R0);
  gr.addColorStop(0,'rgba(255,255,255,.06)');gr.addColorStop(.55,'rgba(205,212,222,.14)');
  gr.addColorStop(.82,'rgba(225,231,240,.42)');gr.addColorStop(.94,'rgba(250,252,255,.8)');gr.addColorStop(1,'rgba(255,255,255,.15)');
  g.fillStyle=gr;g.beginPath();g.arc(r,r,R0,0,7);g.fill();
  // corona del cristal: 8 facetas que alternan reflejo y refracción oscura
  for(let i=0;i<8;i++){const a0=i*Math.PI/4-Math.PI/8,a1=a0+Math.PI/4;
    g.fillStyle=i%2?'rgba(255,255,255,.16)':'rgba(0,0,0,.22)';
    g.beginPath();g.moveTo(r+Math.cos(a0)*R0*.42,r+Math.sin(a0)*R0*.42);g.lineTo(r+Math.cos(a0)*R0*.9,r+Math.sin(a0)*R0*.9);
    g.lineTo(r+Math.cos(a1)*R0*.9,r+Math.sin(a1)*R0*.9);g.lineTo(r+Math.cos(a1)*R0*.42,r+Math.sin(a1)*R0*.42);g.closePath();g.fill()}
  // mesa (cara de arriba): octógono con filo claro
  g.strokeStyle='rgba(255,255,255,.38)';g.lineWidth=1.2;g.beginPath();
  for(let i=0;i<=8;i++){const a=i*Math.PI/4-Math.PI/8;const px=r+Math.cos(a)*R0*.42,py=r+Math.sin(a)*R0*.42;i?g.lineTo(px,py):g.moveTo(px,py)}g.stroke();
  // reflejo chico y duro arriba a la izquierda + contorno fino
  g.fillStyle='rgba(255,255,255,.9)';g.beginPath();g.arc(r*.68,r*.62,R0*.11,0,7);g.fill();
  g.strokeStyle='rgba(0,0,0,.45)';g.lineWidth=1;g.beginPath();g.arc(r,r,R0,0,7);g.stroke();});
const HI=sprite(64,(g,s)=>{const r=s/2;let gr=g.createRadialGradient(r*.85,r*.8,0,r,r,r);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(.35,'rgba(240,243,247,.7)');gr.addColorStop(1,'rgba(220,225,230,0)');g.fillStyle=gr;g.beginPath();g.arc(r,r,r,0,7);g.fill();});
const STAR=sprite(128,(g,s)=>{const c=s/2;
  let gr=g.createRadialGradient(c,c,0,c,c,c*.3);gr.addColorStop(0,'rgba(255,255,255,1)');gr.addColorStop(1,'rgba(255,255,255,0)');g.fillStyle=gr;g.fillRect(0,0,s,s);
  const ray=(ang,len,w)=>{g.save();g.translate(c,c);g.rotate(ang);let lg=g.createLinearGradient(-len,0,len,0);
    lg.addColorStop(0,'rgba(255,255,255,0)');lg.addColorStop(.5,'rgba(255,255,255,1)');lg.addColorStop(1,'rgba(255,255,255,0)');
    g.fillStyle=lg;g.beginPath();g.moveTo(-len,0);g.lineTo(0,-w);g.lineTo(len,0);g.lineTo(0,w);g.closePath();g.fill();g.restore()};
  ray(0,c,c*.06);ray(Math.PI/2,c,c*.06);ray(Math.PI/4,c*.5,c*.035);ray(-Math.PI/4,c*.5,c*.035);});

/* ---------- corona imperial (la forma de la del ángel de la estampa) ---------- */
function drawCrown(g,cx,by,rot){const w=L.cw,h=L.ch,lw=w*0.075;g.save();g.translate(cx,by);g.rotate(rot);
  g.fillStyle=g.strokeStyle='#F4F4F2';g.lineWidth=lw;g.lineCap='round';g.lineJoin='round';
  const bt=-h*0.2;                                     // borde de arriba de la banda
  g.fillRect(-w*0.5,bt,w,-bt);                         // banda
  g.beginPath();                                       // arcos de afuera
  g.moveTo(-w*0.46,bt);g.bezierCurveTo(-w*0.62,-h*0.72,-w*0.2,-h*0.86,0,-h*0.74);
  g.moveTo(w*0.46,bt);g.bezierCurveTo(w*0.62,-h*0.72,w*0.2,-h*0.86,0,-h*0.74);
  g.moveTo(-w*0.2,bt);g.bezierCurveTo(-w*0.24,-h*0.55,-w*0.1,-h*0.7,0,-h*0.74);  // arcos de adentro
  g.moveTo(w*0.2,bt);g.bezierCurveTo(w*0.24,-h*0.55,w*0.1,-h*0.7,0,-h*0.74);
  g.stroke();
  g.beginPath();g.arc(0,-h*0.83,w*0.07,0,7);g.fill();  // orbe
  g.beginPath();g.moveTo(0,-h*0.9);g.lineTo(0,-h*1.04);g.moveTo(-w*0.06,-h*0.98);g.lineTo(w*0.06,-h*0.98);g.stroke(); // cruz
  g.restore()}

/* ---------- layout ---------- */
function layout(){
  const r=hero.getBoundingClientRect();W=r.width;H=r.height;dpr=Math.min(window.devicePixelRatio||1,2);
  cv.width=W*dpr;cv.height=H*dpr;ctx.setTransform(dpr,0,0,dpr,0,0);
  const mobile=W<700;
  ctx.font=FONT(100);const w100=ctx.measureText(WORD).width;
  const fs=(W*0.94)/w100*100;
  ctx.font=FONT(fs);const capH=ctx.measureText('H').actualBoundingBoxAscent||fs*0.72;
  const tw=ctx.measureText(WORD).width,gw=ctx.measureText('G').width;
  const x0=(W-tw)/2,cy=mobile?H*0.34:H*0.42,base=cy+capH/2;
  const cw=gw*0.95,ch=cw*0.95;
  L={mobile,fs,capH,x0,cy,base,tw,cw,ch,crownX:x0+gw*0.5,crownBase:cy-capH/2+capH*0.02,crownRot:-0.16,s:Math.max(3,fs/21)};
  // remera: arriba se mete bajo la palabra, abajo deja lugar a la sombra
  const sTop=mobile?cy+capH*0.3:cy-capH*0.22;let sh=H*0.875-sTop,sw=sh*IM.shirt.width/IM.shirt.height;
  const maxW=mobile?W*1.02:W*0.54;if(sw>maxW){sw=maxW;sh=sw*IM.shirt.height/IM.shirt.width}
  // remera 20% más grande, creciendo desde su centro
  const GROW=mobile?1.0:1.2;const sTop2=sTop-sh*(GROW-1)/2;sw*=GROW;sh*=GROW;
  Object.assign(L,{sx:(W-sw)/2,sy:sTop2,sw,sh});

  // fondo: luz suave detrás de la remera
  bgCv=document.createElement('canvas');bgCv.width=W*dpr;bgCv.height=H*dpr;const bg=bgCv.getContext('2d');bg.setTransform(dpr,0,0,dpr,0,0);
  bg.fillStyle='#0A0A0A';bg.fillRect(0,0,W,H);
  let gr=bg.createRadialGradient(W/2,sTop2+sh*0.45,0,W/2,sTop2+sh*0.45,Math.max(sw,sh)*0.9);gr.addColorStop(0,'rgba(255,255,255,.07)');gr.addColorStop(1,'rgba(255,255,255,0)');bg.fillStyle=gr;bg.fillRect(0,0,W,H);

  // palabra + corona sólidas (antes del strass)
  solid=document.createElement('canvas');solid.width=W*dpr;solid.height=H*dpr;
  const sg=solid.getContext('2d');sg.setTransform(dpr,0,0,dpr,0,0);sg.fillStyle='#F4F4F2';
  sg.font=FONT(fs);sg.fillText(WORD,x0,base);drawCrown(sg,L.crownX,L.crownBase,L.crownRot);
  mask=document.createElement('canvas');mask.width=solid.width;mask.height=solid.height;

  // muestreo en grilla hexagonal → strass
  const mk=()=>{const c=document.createElement('canvas');c.width=Math.ceil(W);c.height=Math.ceil(H);return c};
  const a=mk(),ga=a.getContext('2d',{willReadFrequently:true});ga.font=FONT(fs);ga.fillStyle='#000';ga.fillText(WORD,x0,base);
  const da=ga.getImageData(0,0,a.width,a.height).data;
  const b=mk(),gb=b.getContext('2d',{willReadFrequently:true});drawCrown(gb,L.crownX,L.crownBase,L.crownRot);
  const db=gb.getImageData(0,0,b.width,b.height).data;
  const inCrown=(x,y)=>{const xi=x|0,yi=y|0;return xi>=0&&yi>=0&&xi<b.width&&yi<b.height&&db[(yi*b.width+xi)*4+3]>110&&da[(yi*b.width+xi)*4+3]<40};
  const s=L.s,rowH=s*0.866,hx=L.crownX,hy=L.crownBase;dots=[];let maxD=0;
  for(let y=Math.max(0,cy-capH/2-ch*1.3),row=0;y<base+fs*0.1;y+=rowH,row++){
    for(let x=x0-s*3+(row%2?s/2:0);x<x0+tw+s;x+=s){const xi=x|0,yi=y|0;if(xi<0||yi<0||xi>=a.width||yi>=a.height)continue;const k=(yi*a.width+xi)*4+3;
      if(da[k]>110){const d=Math.hypot(x-hx,y-hy);maxD=Math.max(maxD,d);
        dots.push({x,y,r:s*0.43,f:rnd(0,6.283),ph:rnd(0,6.283),d,v:(Math.random()*STONES.length)|0})}}}
  // como en la estampa: casi todas de 4 mm y ~1 de cada 13 de 6 mm (1,5 veces más grande)
  const big=[];
  for(const p of dots){if(Math.random()<0.075&&big.every(q=>Math.hypot(q.x-p.x,q.y-p.y)>s*3.2)){p.r=s*0.645;p.big=1;big.push(p)}}
  dots=dots.filter(p=>p.big||big.every(q=>Math.hypot(q.x-p.x,q.y-p.y)>s*0.97));
  dots.sort((a,b)=>(a.big|0)-(b.big|0));
  ST={s4:sizeStones(s*0.86*dpr),s6:sizeStones(s*1.29*dpr),sc:sizeStones(s*0.72*0.94*dpr)};
  // corona: strass más chicos y apretados para que se lea la forma
  const s2=s*0.72;
  for(let y=L.crownBase-ch*1.3,row=0;y<L.crownBase+ch*0.15;y+=s2*0.866,row++){
    for(let x=L.crownX-cw*0.9+(row%2?s2/2:0);x<L.crownX+cw*0.9;x+=s2){
      if(inCrown(x,y)){const d=Math.hypot(x-hx,y-hy);dots.push({x,y,r:s2*0.47,crown:1,f:rnd(0,6.283),ph:rnd(0,6.283),d,v:(Math.random()*STONES.length)|0})}}}
  dots.forEach(p=>{p.tr=T_HIT+T_WAVE*(1-Math.cbrt(1-clamp(p.d/maxD,0,1)))});L.maxD=maxD;

  // remera con halo de luz atrás, pre-renderizada
  const pad=90;shirtCv=document.createElement('canvas');shirtCv.width=(sw+pad*2)*dpr;shirtCv.height=(sh+pad*2)*dpr;
  const shg=shirtCv.getContext('2d');shg.setTransform(dpr,0,0,dpr,0,0);
  shg.shadowColor='rgba(255,255,255,.16)';shg.shadowBlur=70;shg.drawImage(IM.shirt,pad,pad,sw,sh);
  shg.shadowColor='transparent';shg.drawImage(IM.shirt,pad,pad,sw,sh);L.pad=pad;
  // pocos destellos en la remera (1 de cada 4) para que se siga viendo el diseño
  shirtGl=GLINTS.filter((_,i)=>i%4===0).map(([u,v])=>({u,v,f:rnd(0,6.283),ph:rnd(0,6.283)}));
  layoutQuote();
}

/* ---------- luz ---------- */
const light={x:0,y:0,tx:0,ty:0,last:-9};
window.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'){const r=hero.getBoundingClientRect();light.tx=e.clientX-r.left;light.ty=e.clientY-r.top;light.last=performance.now()/1000}},{passive:true});
window.addEventListener('deviceorientation',e=>{if(e.gamma==null)return;light.tx=W*(0.5+clamp(e.gamma/35,-0.6,0.6));light.ty=H*(0.42+clamp((e.beta-40)/45,-0.5,0.5));light.last=performance.now()/1000});
hero.addEventListener('touchstart',()=>{if(window.DeviceOrientationEvent&&typeof DeviceOrientationEvent.requestPermission==='function'){DeviceOrientationEvent.requestPermission().catch(()=>{})}},{once:true,passive:true});
function spec(px,py,f,ph,t,R){const dx=light.x-px,dy=light.y-py,d=Math.hypot(dx,dy);const fall=Math.exp(-(d*d)/(R*R));
  return Math.pow(Math.max(0,Math.cos(Math.atan2(dy,dx)-f)),4)*fall*(0.75+0.35*Math.sin(t*3.2+ph))*1.3}

/* ---------- lo que pasa por detrás de la palabra ---------- */
function drawArrow(x,y,ang,len,trail){
  ctx.save();ctx.translate(x,y);ctx.rotate(ang);
  const lw=Math.max(2,L.fs*0.026);
  // estela
  let g=ctx.createLinearGradient(-len-trail,0,-len*0.2,0);g.addColorStop(0,'rgba(244,244,242,0)');g.addColorStop(1,'rgba(244,244,242,.35)');
  ctx.strokeStyle=g;ctx.lineWidth=lw*0.8;ctx.beginPath();ctx.moveTo(-len-trail,0);ctx.lineTo(-len*0.2,0);ctx.stroke();
  // vara
  ctx.strokeStyle='#C9C9C7';ctx.lineWidth=lw;ctx.beginPath();ctx.moveTo(-len,0);ctx.lineTo(0,0);ctx.stroke();
  // punta
  const hl=lw*7;ctx.fillStyle='#F4F4F2';ctx.beginPath();ctx.moveTo(hl*0.9,0);ctx.lineTo(-hl*0.3,-hl*0.42);ctx.lineTo(-hl*0.05,0);ctx.lineTo(-hl*0.3,hl*0.42);ctx.closePath();ctx.fill();
  // plumas
  ctx.strokeStyle='#8C8C8C';ctx.lineWidth=lw*0.9;for(let i=0;i<3;i++){const px=-len+i*lw*2.6;ctx.beginPath();ctx.moveTo(px+lw*3,0);ctx.lineTo(px,-lw*3.2);ctx.moveTo(px+lw*3,0);ctx.lineTo(px,lw*3.2);ctx.stroke()}
  ctx.restore();
}
// cupido por capas: ala de atrás, cuerpo, ala de adelante. Cada ala gira desde su raíz en la espalda.
const CG={sh:[0.4271,0.4079],near:[-0.0144,0.9850],far:[0.9617,0.9539],ws:0.85};
function drawCupid(x,y,w,h,ph,vy,alpha){
  if(alpha<=0.005)return;const k=w/IM.body.width;
  // aleteo suave: bajada un poco más rápida que la subida, sin cortes
  const flap=Math.sin(ph)+0.18*Math.sin(2*ph-0.5);
  const bob=-Math.cos(ph)*h*0.035;                 // el cuerpo sube cuando las alas bajan
  ctx.save();ctx.globalAlpha=alpha;ctx.translate(x,y+bob);
  ctx.rotate(clamp(vy/(H*4),-0.08,0.08)+Math.sin(ph+0.8)*0.025);
  const sx=-w/2+CG.sh[0]*w,sy=-h/2+CG.sh[1]*h;
  const wing=(img,pv,ang,sq)=>{const ww=img.width*k*CG.ws,wh=img.height*k*CG.ws;ctx.save();ctx.translate(sx,sy);ctx.rotate(ang);ctx.scale(1,sq);ctx.drawImage(img,-pv[0]*ww,-pv[1]*wh,ww,wh);ctx.restore()};
  wing(IM.wf,CG.far,0.2*flap+0.02,0.9+0.1*Math.cos(ph+0.3));
  ctx.drawImage(IM.body,-w/2,-h/2,w,h);
  wing(IM.wn,CG.near,0.34*flap,0.86+0.14*Math.cos(ph));
  ctx.restore();ctx.globalAlpha=1;
}
/* ---------- la cita: una pluma que se le cae al cupido la escribe a mano y firma ---------- */
const QUOTE=['“para los que quieren','brillar de verdad”'],SIGN='Ticcorena';
const QF=px=>px+'px "Pinyon Script"',SF=px=>px+'px "Mrs Saint Delafield"';
// segundos desde que entra el cupido: a los 1,5 s la pluma empieza a escribir
const Q_LAND=1.5,Q_WRITE=3.0,Q_UNDER=0.45,Q_SIGN=1.0,Q_FLOUR=0.6;
let QL=null;
function layoutQuote(){
  const m=L.mobile,qs=m?Math.max(20,W*0.062):Math.min(40,Math.max(28,W*0.026)),ss=qs*1.0;
  const pad=m?16:Math.max(24,W*0.035),right=W-pad;
  // en celular no hay lugar abajo (la remera ocupa todo el ancho): va en el aire libre arriba de la palabra
  const yS=m?L.cy-L.capH/2-qs*0.9:H*0.79,y2=yS-ss*0.95,y1=y2-qs*1.2;
  const lw=Math.max(1.2,qs*0.045);
  // texto que se revela de izquierda a derecha
  const txt=(s,font,y,col,rot,dx)=>{ctx.font=font;const w=Math.ceil(ctx.measureText(s).width)+8,hh=Math.ceil(parseFloat(font)*1.6);
    const c=document.createElement('canvas');c.width=w*dpr;c.height=hh*dpr;const g=c.getContext('2d');g.scale(dpr,dpr);
    g.font=font;g.fillStyle=col;g.fillText(s,4,hh*0.68);
    const x0=right-w-(dx||0),r=rot||0,P=v=>({x:x0+v*Math.cos(r),y:y+v*Math.sin(r)});
    return{kind:'t',c,w,hh,x0,base:y,rot:r,top:-hh*0.68,start:P(0),end:P(w)}};
  // trazo a mano (lista de puntos) que la pluma va dibujando
  const stroke=(pts,col,width)=>({kind:'s',pts,col,width,start:pts[0],end:pts[pts.length-1]});
  const bez=(p0,c1,c2,p1,n)=>{const o=[];for(let i=0;i<=n;i++){const u=i/n,v=1-u;
    o.push({x:v*v*v*p0.x+3*v*v*u*c1.x+3*v*u*u*c2.x+u*u*u*p1.x,y:v*v*v*p0.y+3*v*v*u*c1.y+3*v*u*u*c2.y+u*u*u*p1.y})}return o};
  const l1=txt(QUOTE[0],QF(qs),y1,'#F4F4F2'),l2=txt(QUOTE[1],QF(qs),y2,'#F4F4F2');
  // subrayado de "de verdad": un trazo apenas curvo, como hecho a pulso
  ctx.font=QF(qs);const ux0=l2.x0+4+ctx.measureText('brillar ').width,ux1=ux0+ctx.measureText('de verdad').width,uy=y2+qs*0.2;
  const under=stroke(bez({x:ux0-qs*0.1,y:uy+qs*0.02},{x:ux0+(ux1-ux0)*0.3,y:uy+qs*0.12},{x:ux0+(ux1-ux0)*0.7,y:uy+qs*0.06},{x:ux1+qs*0.25,y:uy-qs*0.06},28),'#F4F4F2',lw);
  // firma: chiquita, un poco más abajo e inclinada, y después su garabato por debajo
  const sg=txt(SIGN,SF(ss),yS+ss*0.45,'#C9C9C7',-0.14,ss*0.4);
  const r=sg.rot,S=(u,v)=>({x:sg.x0+u*Math.cos(r)-v*Math.sin(r),y:sg.base+u*Math.sin(r)+v*Math.cos(r)}),w=sg.w;
  const fl=[...bez(S(w-6,-ss*0.05),S(w*1.02,ss*0.45),S(w*0.05,ss*0.62),S(w*0.12,ss*0.28),24),
            ...bez(S(w*0.12,ss*0.28),S(w*0.35,ss*0.02),S(w*0.75,ss*0.32),S(w*1.08,ss*0.16),22).slice(1)];
  const flour=stroke(fl,'#C9C9C7',lw*0.9);
  const items=[l1,l2,under,sg,flour];
  // tiempos: las dos líneas en proporción a su largo, después subrayado, firma y garabato
  const tot=l1.w+l2.w;l1.t0=Q_LAND;l1.t1=Q_LAND+Q_WRITE*l1.w/tot;l2.t0=l1.t1+0.12;l2.t1=Q_LAND+Q_WRITE+0.12;
  under.t0=l2.t1+0.15;under.t1=under.t0+Q_UNDER;sg.t0=under.t1+0.25;sg.t1=sg.t0+Q_SIGN;flour.t0=sg.t1+0.05;flour.t1=flour.t0+Q_FLOUR;
  const cta=hero.querySelector('.tg-cta');if(cta)cta.style.top=Math.max(64,L.sy-(m?30:40))+'px';
  QL={items,qs,end:flour.t1};
}
function drawFeather(x,y,ang,len,alpha){   // la punta del cañón queda en (x,y)
  ctx.save();ctx.globalAlpha=alpha;ctx.translate(x,y);ctx.rotate(ang);
  const wv=len*0.16;
  // vexilo (la parte con barbas)
  let gr=ctx.createLinearGradient(-wv,0,wv,0);gr.addColorStop(0,'#8C8C8C');gr.addColorStop(.5,'#F4F4F2');gr.addColorStop(1,'#B5B5B3');
  ctx.fillStyle=gr;ctx.beginPath();ctx.moveTo(0,-len*0.22);
  ctx.bezierCurveTo(-wv*1.2,-len*0.4,-wv*1.1,-len*0.85,0,-len);ctx.bezierCurveTo(wv*0.9,-len*0.8,wv*1.0,-len*0.4,0,-len*0.22);ctx.fill();
  // barbas: rayado fino como grabado
  ctx.strokeStyle='rgba(10,10,10,.55)';ctx.lineWidth=Math.max(0.6,len*0.006);
  for(let i=0;i<16;i++){const yy=-len*(0.27+i*0.045);const ww=wv*Math.sin(Math.PI*(0.15+i/18))*1.05;
    ctx.beginPath();ctx.moveTo(0,yy);ctx.lineTo(-ww,yy-len*0.05);ctx.moveTo(0,yy);ctx.lineTo(ww*0.85,yy-len*0.05);ctx.stroke()}
  // cañón
  ctx.strokeStyle='#F4F4F2';ctx.lineWidth=Math.max(1,len*0.014);ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-len*0.97);ctx.stroke();
  ctx.restore();ctx.globalAlpha=1;
}
function drawQuote(t){
  if(!QL||t<T_LOOP)return;const c=t-T_LOOP,first=c<LOOP;  // la pluma actúa solo en la primera vuelta
  const done=!first||c>QL.end+0.8;
  // lo ya escrito: texto que se revela y trazos que se dibujan, con la punta de la pluma en el borde
  let tip=null;
  for(const it of QL.items){
    const f=done?1:(it.kind==='s'?easeInOut:(x=>x))(clamp((c-it.t0)/(it.t1-it.t0),0,1));if(f<=0)continue;
    if(it.kind==='t'){const vis=it.w*f;
      ctx.save();ctx.translate(it.x0,it.base);ctx.rotate(it.rot);ctx.drawImage(it.c,0,0,Math.max(1,vis*dpr),it.c.height,0,it.top,Math.max(1,vis),it.hh);ctx.restore();
      if(!done&&f<1){const oy=-QL.qs*(0.25+0.3*Math.abs(Math.sin(c*26)));
        tip={x:it.x0+vis*Math.cos(it.rot)-oy*Math.sin(it.rot),y:it.base+vis*Math.sin(it.rot)+oy*Math.cos(it.rot)}}}
    else{const P=it.pts,n=(P.length-1)*f,k=Math.floor(n),fr=n-k;
      ctx.save();ctx.strokeStyle=it.col;ctx.lineWidth=it.width;ctx.lineCap='round';ctx.lineJoin='round';ctx.beginPath();ctx.moveTo(P[0].x,P[0].y);
      for(let i=1;i<=k;i++)ctx.lineTo(P[i].x,P[i].y);
      let e=P[k];if(k<P.length-1){e={x:P[k].x+(P[k+1].x-P[k].x)*fr,y:P[k].y+(P[k+1].y-P[k].y)*fr};ctx.lineTo(e.x,e.y)}
      ctx.stroke();ctx.restore();if(!done&&f<1)tip=e}
  }
  if(done)return;
  const len=L.mobile?52:Math.max(60,QL.qs*2.4),ang=0.55;
  // la pluma no aparece antes: entra justo cuando empieza a escribir
  if(c<Q_LAND)return;
  const fin=Math.min(1,(c-Q_LAND)/0.2);
  if(tip){drawFeather(tip.x,tip.y,ang+Math.sin(c*13)*0.05,len,fin);return}
  // entre un trazo y el siguiente: la pluma vuela en un arquito al próximo comienzo
  const I=QL.items,ni=I.findIndex(it=>c<it.t0);
  if(ni>0){const a=I[ni-1],b=I[ni],q=easeInOut((c-a.t1)/Math.max(0.01,b.t0-a.t1));
    drawFeather(a.end.x+(b.start.x-a.end.x)*q,a.end.y+(b.start.y-a.end.y)*q-Math.sin(q*Math.PI)*QL.qs*0.8,ang,len,1);return}
  // terminó el garabato: levanta vuelo y se apaga
  const q=clamp((c-QL.end)/0.8,0,1),e=I[I.length-1].end;
  drawFeather(e.x+q*40,e.y-q*60,ang-q*0.4,len,1-q);
}
function drawBehind(t){
  if(t<T_LOOP)return;const c=(t-T_LOOP)%LOOP;
  // cupido de la estampa cruza volando de derecha a izquierda, aleteando
  if(IM.body&&IM.wn&&IM.wf){
    const CUP=CUP_DUR,SHOT=CUP_SHOT;  // cruza lento; dispara cuando ya casi sale por la izquierda
    const w=L.fs*(L.mobile?1.5:0.95),h=w*IM.body.height/IM.body.width;
    const pos=cc=>{const q=clamp(cc/CUP,0,1),k=q*0.55+easeInOut(q)*0.45;return{x:W+w*0.25-(W+w*1.25)*k,y:L.cy-L.capH*0.6+Math.sin(cc*1.7)*L.capH*0.15}};
    if(c<CUP){
      const p=pos(c),pv=pos(Math.max(0,c-0.03));const vx=(p.x-pv.x)/0.03,vy=(p.y-pv.y)/0.03;
      const speed=Math.min(1,Math.abs(vx)/(W*0.45));
      const ph=c*Math.PI*2*1.45;
      // estela de movimiento: copias que se quedan atrás y se apagan
      for(let i=3;i>=1;i--){const q=pos(Math.max(0,c-i*0.045));drawCupid(q.x,q.y,w,h,ph-i*0.35,vy,0.16*speed/i)}
      drawCupid(p.x,p.y,w,h,ph,vy,1);
    }
    // la flecha sale de su arco hacia la izquierda
    if(c>SHOT&&c<SHOT+0.9){const p=pos(SHOT);const k=easeOutCubic((c-SHOT)/0.9);const len=L.fs*1.1;
      const x0=p.x-w*0.5,y0=p.y-h*0.045;const x=x0-(x0+len*1.5)*k;
      drawArrow(x,y0,Math.PI,len,W*0.25*Math.min(1,k*3))}
    return}
  // flecha cruza de izquierda a derecha por detrás
  // entra por arriba a la izquierda, baja por detrás de las letras (por encima de la remera) y vuelve a subir
  const a0=0.4,DUR=1.6;if(c>a0&&c<a0+DUR){const k=easeInOut((c-a0)/DUR);const len=L.fs*1.8;
    const xA=-len,xB=W+len*1.5,yTop=L.cy-L.capH*1.45,yLow=L.cy-L.capH*0.5;
    const yAt=q=>yTop+(yLow-yTop)*Math.sin(clamp(q,0,1)*Math.PI);
    const x=xA+(xB-xA)*k,y=yAt(k),y2=yAt(k+0.01);
    drawArrow(x,y,Math.atan2(y2-y,(xB-xA)*0.01),len,W*0.3)}
}

/* ---------- dibujo ---------- */
function frame(now){
  const T=now/1000,t=T-t0;
  if(T-light.last>2.5){light.tx=W*(0.5+0.46*Math.sin(T*0.55));light.ty=H*(0.32+0.2*Math.cos(T*0.41))}
  light.x+=(light.tx-light.x)*0.12;light.y+=(light.ty-light.y)*0.12;
  ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;
  ctx.drawImage(bgCv,0,0,W,H);
  const shake=(t>T_HIT&&t<T_HIT+0.35)?Math.sin((t-T_HIT)*90)*4*(1-(t-T_HIT)/0.35):0;
  const R=Math.max(W,H)*0.28;

  drawBehind(t);

  if(t<T_HIT){
    // 1) palabra blanca entrando desde la izquierda
    const k=easeOutExpo(clamp(t/T_SLIDE,0,1));const off=-(W*1.15)*(1-k);
    ctx.fillStyle='#F4F4F2';ctx.font=FONT(L.fs);ctx.fillText(WORD,L.x0+off,L.base);
    // corona de la estampa cayendo
    if(t>T_DROP0){const k2=clamp((t-T_DROP0)/(T_HIT-T_DROP0),0,1);const yy=-L.ch*0.2+(L.crownBase+L.ch*0.2)*k2*k2;drawCrown(ctx,L.crownX,yy,L.crownRot+0.8*(1-k2))}
  } else {
    // 2) el destello convierte todo en strass desde la corona hacia afuera
    const wave=clamp((t-T_HIT)/T_WAVE,0,1);
    if(wave<1){const rr=L.maxD*easeOutCubic(wave)-L.s;const mg=mask.getContext('2d');
      mg.setTransform(1,0,0,1,0,0);mg.globalCompositeOperation='source-over';mg.clearRect(0,0,mask.width,mask.height);mg.drawImage(solid,0,0);
      if(rr>0){mg.setTransform(dpr,0,0,dpr,0,0);mg.globalCompositeOperation='destination-out';mg.beginPath();mg.arc(L.crownX,L.crownBase,rr,0,7);mg.fill();mg.globalCompositeOperation='source-over'}
      ctx.drawImage(mask,shake,0,W,H)}
    const hi=[];
    for(const p of dots){if(t<p.tr)continue;const a=t-p.tr;const r=p.r*(a<0.22?easeOutBack(a/0.22):1);const x=p.x+shake,y=p.y;
      const k=spec(x,y,p.f,p.ph,t,R)+Math.exp(-a/0.35)*1.2;
      ctx.globalAlpha=0.88+0.12*Math.min(1,k);ctx.drawImage((p.big?ST.s6:p.crown?ST.sc:ST.s4)[p.v],x-r,y-r,r*2,r*2);   // la piedra se enciende cuando le pega la luz
      if(k>0.04)hi.push(x,y,r,k)}
    ctx.globalCompositeOperation='lighter';
    for(let i=0;i<hi.length;i+=4){const x=hi[i],y=hi[i+1],r=hi[i+2],k=hi[i+3];
      ctx.globalAlpha=Math.min(1,k*0.45);ctx.drawImage(HI,x-r*.6,y-r*.6,r*1.2,r*1.2);
      if(k>0.45){const z=r*(2.2+4.5*Math.min(1,k-0.45));ctx.globalAlpha=Math.min(1,(k-0.45)*1.6);ctx.drawImage(STAR,x-z,y-z,z*2,z*2)}}
    // chispas del golpe
    if(t<T_HIT+1.2){
      if(!burst.length){for(let i=0;i<50;i++){const a=rnd(-Math.PI*0.95,-Math.PI*0.05),v=rnd(120,520)*(L.mobile?0.55:1);burst.push({x:L.crownX,y:L.crownBase,vx:Math.cos(a)*v,vy:Math.sin(a)*v,r:L.s*rnd(.3,.6),life:rnd(.5,1.1)})}}
      for(const b of burst){const a=t-T_HIT;if(a>b.life)continue;b.vy+=900/60;b.x+=b.vx/60;b.y+=b.vy/60;
        ctx.globalAlpha=1-a/b.life;const z=b.r*3.5;ctx.drawImage(STAR,b.x-z,b.y-z,z*2,z*2)}
    }
    ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;
  }

  // 3) la remera sube suave y queda levitando (función: al final se vuelve a dibujar por encima del oscurecido)
  const drawShirt=()=>{if(t>T_SHIRT0){
    const k=easeOutQuint((t-T_SHIRT0)/T_SHIRT);
    const lev=Math.sin((t-T_SHIRT0)*1.5)*H*0.012*k;          // flota arriba/abajo
    const rot=Math.sin((t-T_SHIRT0)*1.05)*0.009*k;           // se mece apenas
    const dy=(1-k)*H*0.2+lev,sc=0.9+0.1*k;
    // sombra en el piso: más chica y suave cuando sube
    const up=(lev/(H*0.012)+1)/2;const fx=W/2,fy=L.sy+L.sh+H*0.045;
    const ew=L.sw*0.36*(1-up*0.12)*sc,eh=L.sw*0.035*(1-up*0.12);
    ctx.save();ctx.globalAlpha=k*(0.9-up*0.25);ctx.translate(fx,fy);ctx.scale(1,eh/ew);
    let sg=ctx.createRadialGradient(0,0,0,0,0,ew*1.5);sg.addColorStop(0,'rgba(255,255,255,.12)');sg.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=sg;ctx.beginPath();ctx.arc(0,0,ew*1.5,0,7);ctx.fill();
    sg=ctx.createRadialGradient(0,0,0,0,0,ew);sg.addColorStop(0,'rgba(0,0,0,.95)');sg.addColorStop(.6,'rgba(0,0,0,.6)');sg.addColorStop(1,'rgba(0,0,0,0)');ctx.fillStyle=sg;ctx.beginPath();ctx.arc(0,0,ew,0,7);ctx.fill();
    ctx.restore();
    // remera
    const w=(L.sw+L.pad*2)*sc,h=(L.sh+L.pad*2)*sc,cx=W/2,cyS=L.sy+L.sh/2+dy;
    ctx.save();ctx.globalAlpha=k;ctx.translate(cx,cyS);ctx.rotate(rot);ctx.drawImage(shirtCv,-w/2,-h/2,w,h);
    // brillos de la pedrería de la remera
    if(k>0.6){const fade=(k-0.6)/0.4;const gr=L.s*0.55*(L.sw/700);ctx.globalCompositeOperation='lighter';
      for(const p of shirtGl){const lx=-w/2+(L.pad+p.u*L.sw)*sc,ly=-h/2+(L.pad+p.v*L.sh)*sc;
        const kk=spec(cx+lx,cyS+ly,p.f,p.ph,t,R*0.9)*fade*0.9;
        if(kk>0.3){ctx.globalAlpha=Math.min(0.85,kk);const z=Math.max(3,gr*(1.8+3*Math.min(1,kk)));ctx.drawImage(STAR,lx-z,ly-z,z*2,z*2)}}}
    ctx.restore();ctx.globalCompositeOperation='source-over';ctx.globalAlpha=1;
  }};
  // 4) flecha que cruza por DETRÁS de la remera, suave, con estela (sale cuando el cupido dispara)
  if(t>T_LOOP){const c=(t-T_LOOP)%LOOP,F0=CUP_SHOT+0.15,FD=1.6;
    if(c>F0&&c<F0+FD){const len=L.fs*(L.mobile?1.6:1.2);
      const xA=-len*0.2,xB=W+len*1.6,yA=L.sy+L.sh*0.3,yB=L.sy+L.sh*0.46;
      const at=q=>{q=clamp(q,0,1);const e=easeInOut(q);return{x:xA+(xB-xA)*e,y:yA+(yB-yA)*e-Math.sin(e*Math.PI)*L.sh*0.06}};
      const q=(c-F0)/FD,fade=Math.min(1,q*6,(1-q)*6);
      for(let i=6;i>=0;i--){const p=at(q-i*0.006),n=at(q-i*0.006+0.01);   // copias muy juntas y tenues = desenfoque de movimiento
        ctx.globalAlpha=fade*(i?0.11*(1-i/7):1);drawArrow(p.x,p.y,Math.atan2(n.y-p.y,n.x-p.x),len,i?0:W*0.3)}
      ctx.globalAlpha=1}}
  drawShirt();
  // 5) la pluma del cupido escribe la cita abajo a la derecha (solo la primera vez; después queda escrita)
  drawQuote(t);
  // 6) cuando termina la firma: todo baja de opacidad menos la remera, y aparece el botón grande
  const focus=QL?clamp((t-T_LOOP-QL.end-0.3)/0.9,0,1):0;
  if(focus>0){ctx.fillStyle='rgba(10,10,10,'+(0.78*easeInOut(focus))+')';ctx.fillRect(0,0,W,H);drawShirt();
    if(!hero.classList.contains('tg-focus'))hero.classList.add('tg-focus')}
  if(t>T_DONE&&!doneFlag){doneFlag=true;hero.classList.add('tg-done')}
  requestAnimationFrame(frame);
}

let running=false;
function start(){burst=[];doneFlag=false;hero.classList.remove('tg-done','tg-focus');t0=performance.now()/1000;
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)t0-=T_DONE;
  light.x=light.tx=W*0.1;light.y=light.ty=H*0.3;if(!running){running=true;requestAnimationFrame(frame)}}


const load=src=>new Promise(res=>{const i=new Image();i.crossOrigin='anonymous';i.onload=()=>res(i);i.onerror=()=>res(null);i.src=src});
Promise.all([document.fonts.load(FONT(100)),document.fonts.load('40px "Pinyon Script"'),document.fonts.load('40px "Mrs Saint Delafield"'),load(SRC.shirt),load(SRC.body),load(SRC.wn),load(SRC.wf),load(SRC.strass)]).then(([,,,s,b,wn,wf,st])=>{IM={shirt:s,body:b,wn,wf};buildStones(st);layout();start()});
let rz;window.addEventListener('resize',()=>{clearTimeout(rz);rz=setTimeout(layout,150)});
})();
}
var lk=document.createElement('link');lk.rel='stylesheet';lk.href="https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@62..125,100..900&family=Space+Grotesk:wght@500;700&family=Pinyon+Script&family=Mrs+Saint+Delafield&display=swap";
var ran=false;function go(){if(ran)return;ran=true;run()}
lk.onload=go;lk.onerror=go;setTimeout(go,3500);document.head.appendChild(lk);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();
