// ---------- strings ----------
const S={
de:{recipes:"Rezepte",sub:n=>`${n} Rezepte · Version vom ${VERSION}`,search:"z. B. Quark, Weihnachten, Suppe …",random:"🎲 Was koche ich heute?",shop:"🛒 Einkaufsliste",
cats:{"Alle":"Alle","Favoriten":"Favoriten","Als Nächstes":"🔖 Als Nächstes","Saison":"🍂 Saison","Bewertet":"Bewertet","Noch nie gemacht":"Noch nie gemacht","Suppen":"Suppen","Hauptgerichte":"Hauptgerichte","Salate":"Salate","Beilagen":"Beilagen","Frühstück":"Frühstück","Snacks":"Snacks","Desserts":"Desserts","Backen":"Backen"},
season:s=>`Passt gerade: ${s}`,seasons:{Frühling:"Frühling",Sommer:"Sommer",Herbst:"Herbst",Winter:"Winter"},xmas:" & Weihnachten",nextEmpty:"Noch leer – im Rezept auf „🔖 Als Nächstes“ tippen.",none:"Nichts gefunden.",
back:"← Alle Rezepte",rateHint:"Bewerten",rateHint2:"Nochmal tippen zum Entfernen",next:"🔖 Als Nächstes",nextOn:"🔖 Auf der Liste",shopAdd:"🛒 Einkaufsliste",shopOn:"🛒 Auf der Liste",cook:"👩‍🍳 Kochmodus",share:"📤 Teilen",
prep:"Vorbereitung",time:"Zeit",nutr:"Nährwert",ingredients:"Zutaten",steps:"Zubereitung",tips:"Tipps",myNotes:"Meine Notizen",notePh:"z. B. nächstes Mal weniger Zucker …",saved:"Gespeichert ✓",
tick:"Antippen zum Abhaken · ⏱ Zeiten antippen für Timer",scaled:f=>`Mengen umgerechnet ×${f} – bitte mit Gefühl abschmecken.`,tin:" (Formgröße anpassen!)",portions:"Portionen",times:"× Menge",
shopTitle:"Einkaufsliste",shopHint:"Antippen zum Abhaken. Mengen sind schon auf deine Portionen umgerechnet.",shopEmpty:"Noch leer. Öffne ein Rezept und tippe auf „🛒 Einkaufsliste“.",copyList:"Liste kopieren",clearList:"Liste leeren",copied:"Kopiert.",copiedList:"Kopiert (ohne abgehakte Zutaten).",
data:"Meine Daten",dataTxt:"Bewertungen, Notizen, „Als Nächstes“ und die Einkaufsliste sind auf diesem Gerät gespeichert. Ab und zu sichern und im Chat einfügen, dann sind sie in jeder neuen Version mit drin.",exp:"Daten sichern (kopieren)",imp:"Daten einfügen",impPh:"Gesicherte Daten hier einfügen",impGo:"Übernehmen",impOk:"Übernommen ✓",impErr:"Das hat nicht geklappt – bitte den kompletten gesicherten Text einfügen.",expOk:"Kopiert – einfach im Chat einfügen.",expSel:"Text markieren und kopieren:",
shareTitle:"Rezept teilen",asImg:"🖼 Als Bild (JPG)",asTxt:"📝 Als Text",imgHint:"Bild gedrückt halten zum Speichern oder Teilen:",close:"Schließen",
step:(i,n)=>`Schritt ${i} von ${n}`,prev:"← Zurück",nextStep:"Weiter →",done:"Fertig ✓",showIng:"Zutaten",hideIng:"Schritte",timerDone:"Fertig!",keepOn:"Bildschirm bleibt an",
origLbl:"Original",source:"Quelle"},
en:{recipes:"Recipes",sub:n=>`${n} recipes · version ${VERSION}`,search:"e.g. quark, Christmas, soup …",random:"🎲 What should I cook?",shop:"🛒 Shopping list",
cats:{"Alle":"All","Favoriten":"Favourites","Als Nächstes":"🔖 Try next","Saison":"🍂 In season","Bewertet":"Rated","Noch nie gemacht":"Never tried","Suppen":"Soups","Hauptgerichte":"Mains","Salate":"Salads","Beilagen":"Sides","Frühstück":"Breakfast","Snacks":"Snacks","Desserts":"Desserts","Backen":"Baking"},
season:s=>`In season now: ${s}`,seasons:{Frühling:"spring",Sommer:"summer",Herbst:"autumn",Winter:"winter"},xmas:" & Christmas",nextEmpty:"Still empty – tap “🔖 Try next” in a recipe.",none:"Nothing found.",
back:"← All recipes",rateHint:"Rate",rateHint2:"Tap again to remove",next:"🔖 Try next",nextOn:"🔖 On the list",shopAdd:"🛒 Shopping list",shopOn:"🛒 On the list",cook:"👩‍🍳 Cooking mode",share:"📤 Share",
prep:"Prep",time:"Time",nutr:"Nutrition",ingredients:"Ingredients",steps:"Method",tips:"Tips",myNotes:"My notes",notePh:"e.g. less sugar next time …",saved:"Saved ✓",
tick:"Tap to tick off · tap ⏱ times for a timer",scaled:f=>`Amounts scaled ×${f} – season to taste.`,tin:" (adjust tin size!)",portions:"servings",times:"× amount",
shopTitle:"Shopping list",shopHint:"Tap to tick off. Amounts already match your servings.",shopEmpty:"Still empty. Open a recipe and tap “🛒 Shopping list”.",copyList:"Copy list",clearList:"Clear list",copied:"Copied.",copiedList:"Copied (without ticked items).",
data:"My data",dataTxt:"Ratings, notes, try-next and the shopping list are stored on this device. Back them up now and then and paste them in the chat, so they're in every new version.",exp:"Back up data (copy)",imp:"Paste data",impPh:"Paste backed-up data here",impGo:"Import",impOk:"Imported ✓",impErr:"That didn't work – please paste the complete backup text.",expOk:"Copied – just paste it in the chat.",expSel:"Select and copy the text:",
shareTitle:"Share recipe",asImg:"🖼 As image (JPG)",asTxt:"📝 As text",imgHint:"Long-press the image to save or share:",close:"Close",
step:(i,n)=>`Step ${i} of ${n}`,prev:"← Back",nextStep:"Next →",done:"Done ✓",showIng:"Ingredients",hideIng:"Steps",timerDone:"Done!",keepOn:"Screen stays on",
origLbl:"Original",source:"Source"}};
const TAGMAP={"Favorit":"Favourite","Noch nie gemacht":"Never tried","Basic":"Basic","vegetarisch":"vegetarian","schnell":"quick","einfach":"easy","Weihnachten":"Christmas","Kuchen":"cake","Torte":"gateau","Brot":"bread","Frühstück":"breakfast","Herbst":"autumn","Winter":"winter","Sommer":"summer","Frühling":"spring","Party":"party","Kinder":"kids","Familienrezept":"family recipe","Plätzchen":"cookies","Käsekuchen":"cheesecake","Nudelsalat":"pasta salad","Hefeteig":"yeast dough","Nudeln":"pasta","Grillen":"BBQ","vorbereiten":"make-ahead","Schokolade":"chocolate","Äpfel":"apples","Kirschen":"cherries","Erdbeeren":"strawberries","Rhabarber":"rhubarb","Garnelen":"prawns","Hähnchen":"chicken","Schwein":"pork","Rind":"beef","Pute":"turkey","Lachs":"salmon","Linsen":"lentils","Mais":"corn","Kleingebäck":"small bakes","Brötchen":"rolls","Zimt":"cinnamon","Mandeln":"almonds","Quark":"quark","Gemüse":"vegetables","Suppe":"soup","Muscheln":"mussels","Meeresfrüchte":"seafood","Reis":"rice","Spinat":"spinach","Pilze":"mushrooms","Käse":"cheese","Zwiebeln":"onions","Dip":"dip","Mittagessen":"lunch","Feier":"celebration","Geschenk":"gift","Kartoffeln":"potatoes","Spargel":"asparagus","Tomate":"tomato","Knödel":"dumplings","süßes Hauptgericht":"sweet main","Auflauf":"bake","Ofengericht":"oven bake","Airfryer":"air fryer","ohne Hefe":"no yeast","ohne Kneten":"no-knead","ohne Backen":"no-bake","Donuts":"doughnuts","frittiert":"deep-fried","gedämpft":"steamed","scharf":"spicy","Kräuter":"herbs","Kokos":"coconut","Datteln":"dates","Karamell":"caramel","einfrieren":"freezes well","Vollkorn":"wholegrain","Karotten":"carrots","Blumenkohl":"cauliflower","Waffeln":"waffles"};
const CUISMAP={"Deutsch":"German","Französisch":"French","Italienisch":"Italian","Amerikanisch":"American","Österreichisch":"Austrian","Britisch":"British","Griechisch":"Greek","Mexikanisch":"Mexican","Chinesisch":"Chinese","Japanisch":"Japanese","Thailändisch":"Thai","Orientalisch":"Middle Eastern","International":"International","Tex-Mex":"Tex-Mex","Australisch":"Australian","Mediterran":"Mediterranean","Schwäbisch":"Swabian","Lateinamerikanisch":"Latin American"};

const CATS=["Alle","Favoriten","Als Nächstes","Saison","Bewertet","Noch nie gemacht","Suppen","Hauptgerichte","Salate","Beilagen","Frühstück","Snacks","Desserts","Backen"];
const GROUPS=CATS.slice(6);
const has=(r,t)=>r.tags.includes(t);
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const stars=n=>n?"★".repeat(n)+"☆".repeat(5-n):"";

// ---------- storage ----------
function load(k,d){try{const v=JSON.parse(localStorage.getItem(k)||"null");return v==null?d:v;}catch(e){return d;}}
function store(k,v){try{localStorage.setItem(k,JSON.stringify(v));}catch(e){}}
let U=load("rez-user",null);
if(!U){U={ratings:{},notes:{},next:[],nextRemoved:[],shop:Object.assign({},BAKED.shop||{}),checked:Object.assign({},BAKED.checked||{})};store("rez-user",U);}
["ratings","notes","shop","checked"].forEach(k=>{if(!U[k])U[k]={};});
if(!Array.isArray(U.next))U.next=[];if(!Array.isArray(U.nextRemoved))U.nextRemoved=[];
const saveU=()=>store("rez-user",U);
const rate=r=>(r.id in U.ratings)?U.ratings[r.id]:(BAKED.ratings[r.id]||0);
const noteOf=id=>(id in U.notes)?U.notes[id]:(BAKED.notes[id]||"");
const isNext=id=>U.next.includes(id)||(BAKED.next.includes(id)&&!U.nextRemoved.includes(id));
function toggleNext(id){if(isNext(id)){U.next=U.next.filter(x=>x!==id);if(BAKED.next.includes(id)&&!U.nextRemoved.includes(id))U.nextRemoved.push(id);}else{U.next.push(id);U.nextRemoved=U.nextRemoved.filter(x=>x!==id);}saveU();}

let LANG=load("rez-lang","de"); if(!["de","en","orig"].includes(LANG))LANG="de";
const UIL=()=>LANG==="en"?"en":(LANG==="orig"?(load("rez-uil","de")):"de");
const T=()=>S[UIL()];
function V(r){ // view of a recipe in the chosen language
  const L=LANG==="orig"?null:LANG;
  if(!L||r.lang.toLowerCase()===L) return {title:r.title,servings:r.servings,prep:r.prep,total:r.total,nutr:r.nutr,ing:r.ing,steps:r.steps,notes:r.notes||[]};
  const t=TR[L][r.id]; if(!t) return V(Object.assign({},r,{lang:L.toUpperCase()}));
  return {title:t.title,servings:t.servings??r.servings,prep:t.prep??r.prep,total:t.total??r.total,nutr:t.nutr??r.nutr,
    ing:t.ing.map(g=>({h:g[0],i:g[1]})),steps:t.steps.map(g=>({h:g[0],i:g[1]})),notes:t.notes||[]};
}
const tagL=t=>UIL()==="en"?(TAGMAP[t]||t):t;
const cuisL=c=>UIL()==="en"?c.split(" / ").map(x=>CUISMAP[x]||x).join(" / "):c;

// ---------- seasons ----------
function seasonNow(){const m=new Date().getMonth()+1;return m>=3&&m<=5?"Frühling":m>=6&&m<=8?"Sommer":m>=9&&m<=11?"Herbst":"Winter";}
const tagSeason={Frühling:["Frühling","Spargel","Rhabarber"],Sommer:["Sommer","Grillen","Erdbeeren"],Herbst:["Herbst","Äpfel","Pflaumen"],Winter:["Winter","Weihnachten"]};
function inSeason(r){const s=seasonNow(),m=new Date().getMonth()+1;return tagSeason[s].some(t=>has(r,t))||(m===11&&has(r,"Winter"))||((m===11||m===12)&&has(r,"Weihnachten"));}

// ---------- scaling ----------
const FR={0.25:"1/4",0.5:"1/2",0.75:"3/4"};
function toNum(t){t=t.trim();let m;if(m=t.match(/^(\d+)\s+(\d+)\/(\d+)$/))return +m[1]+ +m[2]/+m[3];if(m=t.match(/^(\d+)\/(\d+)$/))return +m[1]/+m[2];return parseFloat(t.replace(",","."));}
function fmt(v){if(v>=100)return String(Math.round(v/5)*5);if(v>=10)return String(Math.round(v));const q=Math.round(v*4)/4;if(q===0)return "1/4";const w=Math.floor(q),f=+(q-w).toFixed(2);return f?(w?w+" "+FR[f]:FR[f]):String(w);}
const QRE=/^((?:ca\.\s*)?)((?:\d+\s+\d+\/\d+)|(?:\d+\/\d+)|(?:\d+(?:[.,]\d+)?))(?:\s*[–-]\s*((?:\d+\/\d+)|(?:\d+(?:[.,]\d+)?)))?/;
function scaleLine(s,f){if(f===1)return s;const m=s.match(QRE);if(!m)return s;const rest=s.slice(m[0].length);
  if(/^\s*(Prise|Prisen|pinch|pinches)\b/i.test(rest))return s;
  if(/^\s*(Eier|Ei|Eigelb|Eiweiß|large eggs?|eggs?|egg whites?|egg yolks?)\b/i.test(rest)){const n=x=>String(Math.max(1,Math.round(toNum(x)*f)));return m[1]+n(m[2])+(m[3]?"–"+n(m[3]):"")+rest;}
  let out=m[1]+fmt(toNum(m[2])*f);if(m[3])out+="–"+fmt(toNum(m[3])*f);return out+rest;}
const baseServ=r=>{const m=(r.servings||"").match(/\d+/);return m?+m[0]:0;};
let curServ={};
const factor=r=>{const b=baseServ(r);return b?(curServ[r.id]||b)/b:(curServ[r.id]||1);};

// ---------- timers ----------
const TIMRE=/(\d+(?:[.,]\d+)?)(?:\s*[–-]\s*(\d+(?:[.,]\d+)?))?\s*(Std\.|Stunden?|hours?|h)(?:\s+(\d+)\s*(Min\.|min))?|(\d+)(?:\s*[–-]\s*(\d+))?\s*(Min\.|Minuten|minutes?|min)(?:\s+(\d+)\s*(Sek\.|sec))?/g;
function withTimers(text){
  return esc(text).replace(TIMRE,(m,h1,h2,hu,hm,_a,m1,m2,mu,ms)=>{
    let sec; if(h1){sec=parseFloat(h1.replace(",","."))*3600+(hm?+hm*60:0);} else {sec=+m1*60+(ms?+ms:0);}
    if(!sec||sec<60) return m; return `<span class="tm" data-s="${Math.round(sec)}">${m}</span>`;});
}
let TIMERS=[];let audioCtx=null;
function beep(){try{audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.frequency.value=880;o.connect(g);g.connect(audioCtx.destination);g.gain.setValueAtTime(.25,audioCtx.currentTime);o.start();o.stop(audioCtx.currentTime+.35);}catch(e){}}
function startTimer(sec,label){try{audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();audioCtx.resume&&audioCtx.resume();}catch(e){}
  TIMERS.push({id:Date.now()+Math.random(),end:Date.now()+sec*1000,label,ring:false});wakeOn();drawTimers();}
function fmtT(ms){const s=Math.max(0,Math.ceil(ms/1000)),h=Math.floor(s/3600),m=Math.floor(s%3600/60),x=s%60;return (h?h+":"+String(m).padStart(2,"0"):m)+":"+String(x).padStart(2,"0");}
function drawTimers(){const el=document.getElementById("timers");
  el.innerHTML=TIMERS.map(t=>`<div class="tmr ${t.ring?"ring":""}"><span class="tt">${t.ring?T().timerDone:fmtT(t.end-Date.now())}</span><span class="lbl">${esc(t.label)}</span><button data-x="${t.id}" aria-label="x">✕</button></div>`).join("");
  el.querySelectorAll("button[data-x]").forEach(b=>b.onclick=()=>{TIMERS=TIMERS.filter(t=>String(t.id)!==b.dataset.x);drawTimers();});}
setInterval(()=>{if(!TIMERS.length)return;let changed=false;TIMERS.forEach(t=>{if(!t.ring&&Date.now()>=t.end){t.ring=true;changed=true;try{navigator.vibrate&&navigator.vibrate([400,200,400,200,400]);}catch(e){}}});
  if(TIMERS.some(t=>t.ring))beep();drawTimers();},1000);
function bindTimers(root,label){root.querySelectorAll(".tm").forEach(s=>s.onclick=e=>{e.stopPropagation();startTimer(+s.dataset.s,label+" · "+s.textContent);});}

// ---------- wake lock ----------
let wake=null;
async function wakeOn(){if(wake)return true;try{wake=await navigator.wakeLock.request("screen");wake.addEventListener("release",()=>{wake=null;});return true;}catch(e){return false;}}
function wakeOff(){try{wake&&wake.release();}catch(e){}wake=null;}
document.addEventListener("visibilitychange",()=>{if(!document.hidden&&(TIMERS.length||document.getElementById("cook").classList.contains("open")))wakeOn();});

// ---------- state ----------
let state=load("rez-filter",{q:"",cat:"Alle"});if(!CATS.includes(state.cat))state={q:"",cat:"Alle"};
const saveState=()=>store("rez-filter",state);
const hay=r=>{const a=[r.title,r.cat,r.cuisine,r.tags.join(" "),r.ing.map(g=>g.i.join(" ")).join(" ")];for(const L of ["de","en"]){const t=TR[L][r.id];if(t)a.push(t.title,t.ing.map(g=>g[1].join(" ")).join(" "));}a.push(r.tags.map(t=>TAGMAP[t]||"").join(" "));return a.join(" ").toLowerCase();};
const HAY={};const hayOf=r=>HAY[r.id]||(HAY[r.id]=hay(r));
function filtered(){const q=state.q.trim().toLowerCase(),c=state.cat;
  return R.filter(r=>{const ok=c==="Alle"?true:c==="Favoriten"?(has(r,"Favorit")||rate(r)>=5):c==="Als Nächstes"?isNext(r.id):c==="Saison"?inSeason(r):c==="Bewertet"?rate(r)>0:c==="Noch nie gemacht"?(has(r,"Noch nie gemacht")&&!rate(r)):r.cat===c;
    return ok&&(!q||q.split(/\s+/).every(w=>hayOf(r).includes(w)));});}
const shopCount=()=>Object.keys(U.shop).filter(id=>R.find(r=>r.id===id)).length;
const imgTag=(r,cls)=>IMGS.includes(r.id)?`<img class="${cls}" src="img/${r.id}.jpg" alt="" loading="lazy">`:(cls==="th"?`<div class="th ph">${esc(V(r).title[0])}</div>`:"");
function langSwitch(){return `<div class="lang">${[["de","DE"],["en","EN"],["orig",S[UIL()].origLbl]].map(([k,l])=>`<button data-l="${k}" class="${LANG===k?"on":""}">${l}</button>`).join("")}</div>`;}
function bindLang(redraw){document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>{if(LANG!=="orig")store("rez-uil",UIL());LANG=b.dataset.l;store("rez-lang",LANG);redraw();});}

// ---------- list ----------
function item(r){const v=V(r);
  return `<a class="item" href="#${r.id}">${imgTag(r,"th")}<div class="tx"><div class="t"><span>${esc(v.title)}</span><span class="stars">${stars(rate(r))}</span></div>
  <div class="m">${[v.total,(v.servings||"").split(" · ")[0],has(r,"Favorit")?"♥":"",isNext(r.id)?"🔖":"",U.shop[r.id]?"🛒":""].filter(Boolean).map(esc).join(" · ")}</div></div></a>`;}
function list(){const rs=filtered(),c=state.cat,t=T();const sortT=(a,b)=>V(a).title.localeCompare(V(b).title,"de");
  const groups=c==="Bewertet"?[5,4,3,2,1].map(n=>[stars(n),rs.filter(r=>rate(r)===n).sort(sortT)]).filter(g=>g[1].length):GROUPS.map(g=>[t.cats[g],rs.filter(r=>r.cat===g).sort(sortT)]).filter(g=>g[1].length);
  const m=new Date().getMonth()+1;
  const sub=c==="Saison"?`<p class="sub">${t.season(t.seasons[seasonNow()]+([11,12].includes(m)?t.xmas:""))}</p>`:c==="Als Nächstes"&&!rs.length?`<p class="sub">${t.nextEmpty}</p>`:"";
  document.getElementById("app").innerHTML=`
    <header><div><h1>${t.recipes}</h1><p>${t.sub(R.length)}</p></div>${langSwitch()}</header>
    <div class="topbtns"><button class="tb" id="rnd">${t.random}</button><a class="tb" href="#einkaufsliste">${t.shop}${shopCount()?` (${shopCount()})`:""}</a></div>
    <input class="search" id="q" type="search" placeholder="${esc(t.search)}" value="${esc(state.q)}">
    <div class="chips">${CATS.map(x=>`<button class="chip ${x===c?"on":""}" data-c="${x}">${t.cats[x]}</button>`).join("")}</div>
    ${sub}
    ${groups.length?groups.map(([g,items])=>`<div class="group"><h2>${g}</h2>${items.map(item).join("")}</div>`).join(""):(c==="Als Nächstes"?"":`<div class="empty">${t.none}</div>`)}
    <footer><div class="data"><h3>${t.data}</h3><p>${t.dataTxt}</p>
      <button class="copy" id="exp">${t.exp}</button><button class="copy" id="imp">${t.imp}</button><div id="dataout"></div></div>
      Rezepte/Recipes · ${VERSION}</footer>`;
  const qi=document.getElementById("q");
  qi.addEventListener("input",e=>{state.q=e.target.value;saveState();const pos=e.target.selectionStart;list();const n=document.getElementById("q");n.focus();n.setSelectionRange(pos,pos);});
  document.querySelectorAll(".chip").forEach(b=>b.onclick=()=>{state.cat=b.dataset.c;saveState();list();});
  document.getElementById("rnd").onclick=()=>{const pool=rs.length?rs:R;location.hash=pool[Math.floor(Math.random()*pool.length)].id;};
  document.getElementById("exp").onclick=exportData;
  document.getElementById("imp").onclick=()=>{document.getElementById("dataout").innerHTML=`<textarea class="cpbox" id="impbox" placeholder="${esc(t.impPh)}"></textarea><button class="copy" id="impgo">${t.impGo}</button>`;
    document.getElementById("impgo").onclick=()=>{const txt=document.getElementById("impbox").value;const mm=txt.match(/\{[\s\S]*\}/);
      try{const d=JSON.parse(mm[0]);["ratings","notes","shop","checked"].forEach(k=>{if(d[k])Object.assign(U[k],d[k]);});if(Array.isArray(d.next))d.next.forEach(id=>{if(!U.next.includes(id))U.next.push(id);});saveU();list();msg(t.impOk);}catch(e){msg(t.impErr);}};};
  bindLang(list);
}
function msg(m){const o=document.getElementById("dataout");if(o)o.innerHTML=`<p class="cpmsg">${esc(m)}</p>`;}
async function exportData(){const t=T();
  const d={ratings:{},notes:{},next:R.filter(r=>isNext(r.id)).map(r=>r.id),shop:U.shop,checked:U.checked};
  R.forEach(r=>{const v=rate(r);if(v)d.ratings[r.id]=v;const n=noteOf(r.id);if(n)d.notes[r.id]=n;});
  const lines=R.filter(r=>rate(r)).map(r=>`${r.title}: ${rate(r)}/5`);const nl=R.filter(r=>noteOf(r.id)).map(r=>`${r.title} – Notiz: ${noteOf(r.id)}`);
  const txt=`Meine Rezept-Daten\n${lines.join("\n")}${nl.length?"\n"+nl.join("\n"):""}\n\nREZEPTE-DATEN ${JSON.stringify(d)}`;
  let ok=false;try{await navigator.clipboard.writeText(txt);ok=true;}catch(e){}
  document.getElementById("dataout").innerHTML=ok?`<p class="cpmsg">${t.expOk}</p>`:`<p class="cpmsg">${t.expSel}</p><textarea class="cpbox" readonly>${esc(txt)}</textarea>`;}

// ---------- detail ----------
function detail(r,keepScroll){const v=V(r),t=T();
  const src=r.url?`<a href="${r.url}">${esc(r.source)}</a>`:esc(r.source);
  const b=baseServ(r),f=factor(r),cur=b?(curServ[r.id]||b):null;
  const unit=b?((v.servings||"").split(" · ")[0].replace(/^[^\d]*[\d\s–\-\/.,]+/,"").replace(/\(.*\)/,"").trim()):"";
  document.getElementById("app").innerHTML=`<div class="detail">
    <div class="dtop"><a class="back" href="#">${t.back}</a>${langSwitch()}</div>
    ${imgTag(r,"hero")}
    <h1>${esc(v.title)}</h1>
    <div class="src">${src}</div>
    <div class="rate" id="rate">${[1,2,3,4,5].map(n=>`<button data-n="${n}" class="${n<=rate(r)?"on":""}" aria-label="${n}">★</button>`).join("")}<span class="ratehint">${rate(r)?t.rateHint2:t.rateHint}</span></div>
    <div class="acts">
      <button class="act main" id="ck">${t.cook}</button>
      <button class="act" id="shr">${t.share}</button>
      <button class="act ${isNext(r.id)?"on":""}" id="nx">${isNext(r.id)?t.nextOn:t.next}</button>
      <button class="act ${U.shop[r.id]?"on":""}" id="sh">${U.shop[r.id]?t.shopOn:t.shopAdd}</button>
    </div>
    <div class="facts">
      ${v.prep?`<div class="fact"><b>${t.prep}</b>${esc(v.prep)}</div>`:""}
      ${v.total?`<div class="fact"><b>${t.time}</b>${esc(v.total)}</div>`:""}
      ${v.nutr?`<div class="fact"><b>${t.nutr}</b>${esc(v.nutr)}</div>`:""}
    </div>
    <div class="tags">${[cuisL(r.cuisine),...r.tags.map(tagL)].map(x=>`<span class="tag">${esc(x)}</span>`).join("")}</div>
    <div class="box"><div class="ztop"><h2>${t.ingredients}</h2>
      <div class="serv"><button id="sm">−</button><span>${b?`${cur} ${esc(unit||t.portions)}`:`${f}${t.times}`}</span><button id="sp">+</button></div></div>
      ${b&&(v.servings||"").includes(" · ")?`<div class="hint">${esc(v.servings.split(" · ").slice(1).join(" · "))}${f!==1?t.tin:""}</div>`:""}
      <div class="hint">${f!==1?t.scaled(+f.toFixed(2)):t.tick}</div>
      ${v.ing.map(g=>`${g.h?`<h3>${esc(g.h)}</h3>`:""}<ul class="ing">${g.i.map(x=>`<li>${esc(scaleLine(x,f))}</li>`).join("")}</ul>`).join("")}</div>
    <div class="box"><h2>${t.steps}</h2>
      ${v.steps.map((g,gi)=>{const start=v.steps.slice(0,gi).reduce((a,s)=>a+s.i.length,0);return `${g.h?`<h3>${esc(g.h)}</h3>`:""}<ol class="steps" style="counter-reset:s ${start}">${g.i.map(x=>`<li>${withTimers(x)}</li>`).join("")}</ol>`;}).join("")}</div>
    ${v.notes&&v.notes.length?`<div class="box notes"><h2>${t.tips}</h2>${v.notes.map(n=>`<p>• ${esc(n)}</p>`).join("")}</div>`:""}
    <div class="box"><h2>${t.myNotes}</h2><textarea class="note" id="note" placeholder="${esc(t.notePh)}">${esc(noteOf(r.id))}</textarea><div class="hint" id="nsaved"></div></div>
  </div>`;
  document.querySelectorAll(".ing li,.steps li").forEach(li=>li.onclick=()=>li.classList.toggle("done"));
  bindTimers(document.getElementById("app"),v.title);
  const redraw=()=>{const y=window.scrollY;detail(r,true);window.scrollTo(0,y);};
  document.querySelectorAll("#rate button").forEach(bt=>bt.onclick=()=>{const n=+bt.dataset.n;U.ratings[r.id]=(rate(r)===n?0:n);saveU();redraw();});
  document.getElementById("nx").onclick=()=>{toggleNext(r.id);redraw();};
  document.getElementById("sh").onclick=()=>{if(U.shop[r.id]){delete U.shop[r.id];Object.keys(U.checked).forEach(k=>{if(k.startsWith(r.id+"|"))delete U.checked[k];});}else U.shop[r.id]=factor(r);saveU();redraw();};
  const step=d=>{if(b)curServ[r.id]=Math.max(1,(curServ[r.id]||b)+d);else curServ[r.id]=Math.max(.5,(curServ[r.id]||1)+d*.5);if(U.shop[r.id]){U.shop[r.id]=factor(r);saveU();}redraw();};
  document.getElementById("sm").onclick=()=>step(-1);document.getElementById("sp").onclick=()=>step(1);
  document.getElementById("ck").onclick=()=>openCook(r);
  document.getElementById("shr").onclick=()=>openShare(r);
  let tt;document.getElementById("note").addEventListener("input",e=>{clearTimeout(tt);tt=setTimeout(()=>{U.notes[r.id]=e.target.value;saveU();document.getElementById("nsaved").textContent=t.saved;},400);});
  bindLang(redraw);
  if(!keepScroll)window.scrollTo(0,0);
}

// ---------- cooking mode ----------
let CK=null;
function openCook(r){const v=V(r);const flat=[];v.steps.forEach(g=>g.i.forEach(s=>flat.push({h:g.h,s})));CK={r,v,flat,i:0,ing:false};document.getElementById("cook").classList.add("open");wakeOn();drawCook();}
function closeCook(){document.getElementById("cook").classList.remove("open");CK=null;if(!TIMERS.length)wakeOff();}
function drawCook(){const t=T(),{r,v,flat,i,ing}=CK,f=factor(r);const el=document.getElementById("cook");const last=i===flat.length-1;
  el.innerHTML=`<div class="ck-top"><b>${esc(v.title)}</b><button class="act" id="ckx">✕</button></div>
  <div class="ck-body">${ing?`<div class="ck-ing">${v.ing.map(g=>`${g.h?`<div class="ck-h">${esc(g.h)}</div>`:""}${g.i.map(x=>"• "+esc(scaleLine(x,f))).join("<br>")}`).join("<br><br>")}</div>`
   :`<div class="ck-n">${t.step(i+1,flat.length)}</div>${flat[i].h?`<div class="ck-h">${esc(flat[i].h)}</div>`:""}<div class="ck-s">${withTimers(flat[i].s)}</div>`}</div>
  <div class="ck-nav"><button id="cki">${ing?t.hideIng:t.showIng}</button></div><div style="height:10px"></div>
  <div class="ck-nav"><button id="ckp" ${i===0?"disabled":""}>${t.prev}</button><button class="pri" id="ckn">${last?t.done:t.nextStep}</button></div>`;
  bindTimers(el,v.title);
  el.querySelector("#ckx").onclick=closeCook;
  el.querySelector("#cki").onclick=()=>{CK.ing=!CK.ing;drawCook();};
  el.querySelector("#ckp").onclick=()=>{if(CK.i>0){CK.i--;CK.ing=false;drawCook();}};
  el.querySelector("#ckn").onclick=()=>{if(last)closeCook();else{CK.i++;CK.ing=false;drawCook();}};
}

// ---------- share ----------
function recipeText(r){const v=V(r),f=factor(r),t=T();const b=baseServ(r);
  let s=`${v.title}\n`;const serv=b&&f!==1?`${curServ[r.id]} ${(v.servings||"").split(" · ")[0].replace(/^[^\d]*[\d\s–\-\/.,]+/,"").trim()}`:(v.servings||"");
  if(serv)s+=`${serv}${v.total?" · "+v.total:""}\n`;
  s+=`\n${t.ingredients}\n`;v.ing.forEach(g=>{if(g.h)s+=`\n${g.h}\n`;g.i.forEach(x=>s+=`- ${scaleLine(x,f)}\n`);});
  s+=`\n${t.steps}\n`;let n=1;v.steps.forEach(g=>{if(g.h)s+=`\n${g.h}\n`;g.i.forEach(x=>s+=`${n++}. ${x}\n`);});
  if(v.notes&&v.notes.length){s+=`\n${t.tips}\n`;v.notes.forEach(x=>s+=`- ${x}\n`);}
  s+=`\n${t.source}: ${r.source}${r.url?" – "+r.url:""}`;return s;}
function closeSheet(){document.getElementById("sheet").classList.remove("open");}
function openShare(r){const t=T();const sh=document.getElementById("sheet");
  sh.innerHTML=`<div class="sh"><h3>${t.shareTitle}</h3><button class="opt" id="si">${t.asImg}</button><button class="opt" id="st">${t.asTxt}</button><div id="sout"></div><button class="opt" id="sc" style="text-align:center">${t.close}</button></div>`;
  sh.classList.add("open");sh.onclick=e=>{if(e.target===sh)closeSheet();};
  sh.querySelector("#sc").onclick=closeSheet;
  sh.querySelector("#st").onclick=async()=>{const txt=recipeText(r);
    try{if(navigator.share){await navigator.share({title:V(r).title,text:txt});return;}}catch(e){if(e.name==="AbortError")return;}
    let ok=false;try{await navigator.clipboard.writeText(txt);ok=true;}catch(e){}
    sh.querySelector("#sout").innerHTML=ok?`<p class="cpmsg">${t.copied}</p>`:`<textarea class="cpbox" readonly>${esc(txt)}</textarea>`;};
  sh.querySelector("#si").onclick=async()=>{const blob=await recipeImage(r);const name=r.id+".jpg";
    try{const file=new File([blob],name,{type:"image/jpeg"});if(navigator.canShare&&navigator.canShare({files:[file]})){await navigator.share({files:[file],title:V(r).title});return;}}catch(e){if(e.name==="AbortError")return;}
    const url=URL.createObjectURL(blob);
    try{const a=document.createElement("a");a.href=url;a.download=name;document.body.appendChild(a);a.click();a.remove();}catch(e){}
    sh.querySelector("#sout").innerHTML=`<p class="hint" style="margin-top:6px">${t.imgHint}</p><img src="${url}" alt="">`;};
}
function loadImg(src){return new Promise(res=>{const i=new Image();i.onload=()=>res(i);i.onerror=()=>res(null);i.src=src;});}
async function recipeImage(r){const v=V(r),f=factor(r),t=T();const W=1080,P=64,CW=W-2*P;
  const photo=IMGS.includes(r.id)?await loadImg("img/"+r.id+".jpg"):null;
  const c=document.createElement("canvas"),x=c.getContext("2d");
  const serif='"Iowan Old Style","Palatino Linotype",Palatino,Georgia,serif',sans='system-ui,-apple-system,"Segoe UI",Roboto,sans-serif';
  function wrap(text,font,maxW){x.font=font;const words=String(text).split(" ");const lines=[];let cur="";for(const w of words){const test=cur?cur+" "+w:w;if(x.measureText(test).width>maxW&&cur){lines.push(cur);cur=w;}else cur=test;}if(cur)lines.push(cur);return lines;}
  const ops=[];let y=0;const add=(type,o)=>{ops.push(Object.assign({type,y},o));};
  if(photo){add("photo",{h:560});y+=560;}
  y+=P;
  const tl=wrap(v.title,`700 60px ${serif}`,CW);tl.forEach(l=>{add("text",{t:l,font:`700 60px ${serif}`,color:"#2b2622",lh:72});y+=72;});
  const b=baseServ(r);const serv=b&&f!==1?`${curServ[r.id]} ${(v.servings||"").split(" · ")[0].replace(/^[^\d]*[\d\s–\-\/.,]+/,"").trim()}`:(v.servings||"");
  const meta=[serv,v.total].filter(Boolean).join(" · ");if(meta){y+=8;add("text",{t:meta,font:`400 30px ${sans}`,color:"#7a7068",lh:42});y+=42;}
  y+=30;add("text",{t:t.ingredients,font:`700 40px ${serif}`,color:"#b5532f",lh:56});y+=56;
  v.ing.forEach(g=>{if(g.h){y+=10;add("text",{t:g.h.toUpperCase(),font:`600 24px ${sans}`,color:"#b5532f",lh:38});y+=38;}
    g.i.forEach(it=>{const ls=wrap(scaleLine(it,f),`400 30px ${sans}`,CW-36);ls.forEach((l,k)=>{add("text",{t:(k?"":"•"),x2:l,font:`400 30px ${sans}`,color:"#2b2622",lh:42});y+=42;});y+=4;});});
  y+=30;add("text",{t:t.steps,font:`700 40px ${serif}`,color:"#b5532f",lh:56});y+=56;let n=1;
  v.steps.forEach(g=>{if(g.h){y+=10;add("text",{t:g.h.toUpperCase(),font:`600 24px ${sans}`,color:"#b5532f",lh:38});y+=38;}
    g.i.forEach(st=>{const ls=wrap(st,`400 30px ${sans}`,CW-56);ls.forEach((l,k)=>{add("text",{t:(k?"":n+"."),x3:l,font:`400 30px ${sans}`,color:"#2b2622",lh:42});y+=42;});n++;y+=10;});});
  y+=24;const srcL=wrap(`${t.source}: ${r.source}`,`400 24px ${sans}`,CW);srcL.forEach(l=>{add("text",{t:l,font:`400 24px ${sans}`,color:"#7a7068",lh:34});y+=34;});
  y+=P;
  c.width=W;c.height=Math.min(y,16000);
  x.fillStyle="#fffdf9";x.fillRect(0,0,W,c.height);x.textBaseline="top";
  for(const o of ops){
    if(o.type==="photo"){const ir=photo.width/photo.height,tr=W/o.h;let sw=photo.width,shh=photo.height,sx=0,sy=0;if(ir>tr){sw=photo.height*tr;sx=(photo.width-sw)/2;}else{shh=photo.width/tr;sy=(photo.height-shh)/2;}x.drawImage(photo,sx,sy,sw,shh,0,o.y,W,o.h);continue;}
    x.font=o.font;x.fillStyle=o.color;const ty=o.y+(o.lh-parseInt(o.font.match(/(\d+)px/)[1]))/2;
    if(o.x2!==undefined){x.fillStyle="#b5532f";x.fillText(o.t,P,ty);x.fillStyle=o.color;x.fillText(o.x2,P+36,ty);}
    else if(o.x3!==undefined){x.fillStyle="#b5532f";x.font=`700 30px ${sans}`;x.fillText(o.t,P,ty);x.font=o.font;x.fillStyle=o.color;x.fillText(o.x3,P+56,ty);}
    else x.fillText(o.t,P,ty);}
  return await new Promise(res=>c.toBlob(res,"image/jpeg",.88));
}

// ---------- shopping list ----------
function shopping(){const t=T();const ids=Object.keys(U.shop).filter(id=>R.find(r=>r.id===id));
  document.getElementById("app").innerHTML=`<div class="detail"><div class="dtop"><a class="back" href="#">${t.back}</a>${langSwitch()}</div><h1>${t.shopTitle}</h1>
    <p class="sub">${ids.length?t.shopHint:t.shopEmpty}</p>
    ${ids.map(id=>{const r=R.find(x=>x.id===id),v=V(r),f=U.shop[id];
      return `<div class="box"><div class="ztop"><h2><a href="#${id}" class="rl">${esc(v.title)}</a></h2><button class="x" data-id="${id}">✕</button></div>
      ${f!==1?`<div class="hint">×${+f.toFixed(2)}</div>`:""}
      ${v.ing.map((g,gi)=>`${g.h?`<h3>${esc(g.h)}</h3>`:""}<ul class="ing">${g.i.map((x,ii)=>{const k=id+"|"+gi+"|"+ii;return `<li data-k="${k}" class="${U.checked[k]?"done":""}">${esc(scaleLine(x,f))}</li>`;}).join("")}</ul>`).join("")}</div>`;}).join("")}
    ${ids.length?`<button class="copy" id="shcopy">${t.copyList}</button><button class="copy" id="shclear">${t.clearList}</button><div id="shout"></div>`:""}</div>`;
  document.querySelectorAll("li[data-k]").forEach(li=>li.onclick=()=>{const k=li.dataset.k;if(U.checked[k])delete U.checked[k];else U.checked[k]=1;saveU();li.classList.toggle("done");});
  document.querySelectorAll(".x").forEach(b=>b.onclick=()=>{const id=b.dataset.id;delete U.shop[id];Object.keys(U.checked).forEach(k=>{if(k.startsWith(id+"|"))delete U.checked[k];});saveU();shopping();});
  const cl=document.getElementById("shclear");if(cl)cl.onclick=()=>{U.shop={};U.checked={};saveU();shopping();};
  const cp=document.getElementById("shcopy");if(cp)cp.onclick=async()=>{const txt=ids.map(id=>{const r=R.find(x=>x.id===id),v=V(r),f=U.shop[id];return v.title+"\n"+v.ing.flatMap((g,gi)=>g.i.map((x,ii)=>U.checked[id+"|"+gi+"|"+ii]?null:"- "+scaleLine(x,f))).filter(Boolean).join("\n");}).join("\n\n");
    let ok=false;try{await navigator.clipboard.writeText(txt);ok=true;}catch(e){}document.getElementById("shout").innerHTML=ok?`<p class="cpmsg">${t.copiedList}</p>`:`<textarea class="cpbox" readonly>${esc(txt)}</textarea>`;};
  bindLang(shopping);window.scrollTo(0,0);}

// ---------- routing ----------
function route(){closeSheet();if(CK)closeCook();const id=location.hash.slice(1);document.documentElement.lang=UIL();
  if(id==="einkaufsliste")return shopping();const r=R.find(x=>x.id===id);r?detail(r):list();}
window.addEventListener("hashchange",route);
route();drawTimers();
if("serviceWorker" in navigator && location.protocol==="https:"){navigator.serviceWorker.register("sw.js").catch(()=>{});}
