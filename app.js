
const grid=document.querySelector("#grid"),search=document.querySelector("#search"),category=document.querySelector("#category"),stats=document.querySelector("#stats");let apps=[];
function esc(s){return String(s).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[m]))}
function render(){const q=search.value.trim().toLowerCase(),c=category.value;const filtered=apps.filter(a=>(!c||a.category===c)&&(!q||(a.name+" "+a.desc+" "+a.category).toLowerCase().includes(q)));stats.textContent=`${filtered.length} سرویس از ${apps.length} سرویس`;grid.innerHTML=filtered.length?filtered.map(a=>`<article class="card"><span class="badge">${esc(a.category)}</span><h2>${esc(a.name)}</h2><p>${esc(a.desc)}</p><a class="open" href="${esc(a.url)}" target="_blank" rel="noopener noreferrer">باز کردن درگاه رسمی</a></article>`).join(""):`<div class="empty">سرویسی پیدا نشد.</div>`}
fetch("./apps.json").then(r=>r.json()).then(data=>{apps=data;[...new Set(apps.map(a=>a.category))].sort().forEach(c=>category.insertAdjacentHTML("beforeend",`<option>${esc(c)}</option>`));render()});
search.addEventListener("input",render);category.addEventListener("change",render);
