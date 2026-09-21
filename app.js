// PeacePulse — hackathon prototype
const KEY="peacepulse_incidents";
const load=()=>JSON.parse(localStorage.getItem(KEY)||"[]");
const save=x=>localStorage.setItem(KEY,JSON.stringify(x));
function triageText(text){
 const s=text.toLowerCase(), indicators=[];
 const rules=[["retaliation","Retaliation/revenge"],["revenge","Retaliation/revenge"],["threat","Threat/confrontation"],["blade","Weapon reference"],["knife","Weapon reference"],["weapon","Weapon reference"],["crowd","Crowd escalation"],["group","Group accusation"],["theft","Theft/property dispute"]];
 rules.forEach(([k,v])=>{if(s.includes(k)&&!indicators.includes(v))indicators.push(v)});
 const risk=indicators.length>=3?"High":indicators.length?"Medium":"Low";
 return {risk,indicators};
}
function submitIncident(){
 const text=document.querySelector("#incidentText").value.trim(); if(!text)return alert("Enter an incident description.");
 const t=triageText(text), id="PP-"+Date.now().toString(36).toUpperCase();
 const item={id,text,risk:t.risk,indicators:t.indicators,status:"Pending Verification",createdAt:new Date().toISOString(),anonymous:document.querySelector("#anonymous").checked};
 const data=load();data.unshift(item);save(data);render();
 document.querySelector("#result").innerHTML="<b>"+t.risk+" risk</b><br>Indicators: "+(t.indicators.join(", ")||"None detected")+"<br><small>AI triage is decision support, not a verdict.</small>";
}
function verify(id){const d=load();const x=d.find(i=>i.id===id);if(x){x.status="Verified";x.verifiedAt=new Date().toISOString();save(d);render()}}
function render(){
 const d=load(), total=d.length, high=d.filter(x=>x.risk==="High").length, verified=d.filter(x=>x.status==="Verified").length;
 document.querySelector("#stats").innerHTML="<b>"+total+"</b> Reports &nbsp; <b>"+high+"</b> High Risk &nbsp; <b>"+verified+"</b> Verified";
 document.querySelector("#incidents").innerHTML=d.map(x=>"<div class='item'><b>"+x.id+"</b> · "+x.risk+" · "+x.status+"<p>"+escapeHtml(x.text)+"</p>"+(x.status!=="Verified"?"<button onclick=\"verify('"+x.id+"')\">Human Verify</button>":"<span class='verified'>✓ Verified</span>")+"</div>").join("")||"<small>No incidents yet.</small>";
}
function escapeHtml(s){return s.replace(/[&<>'"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;","'":"&#39;","\"":"&quot;"}[c]))}
function resetData(){if(confirm("Clear local demo data?")){localStorage.removeItem(KEY);render()}}
document.addEventListener("DOMContentLoaded",render);
