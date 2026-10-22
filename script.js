// Edit this object to update the whole page.
// Replace "#" with your real links.
const DATA={
jobs:[
 {role:"IoT Intern",org:"Emertxe",when:"Aug 2026 – Sep 2026",points:[
  "Completed an IoT internship (NSDC / ESSCI-affiliated) and built an Edge AI-based Smart EV Charging Station Optimizer as the capstone project.",
  "Developed ESP32 firmware in embedded C/C++ using PlatformIO and VS Code, and simulated circuits in Wokwi.",
  "Worked with MQTT and ThingsBoard for device telemetry, shared attributes and remote RPC control."]},
 {role:"Solar PV Installer (Suryamitra) Intern",org:"Datapro Computers Pvt. Ltd.",when:"Jun 2026 – Aug 2026",points:[
  "Trained with the National Institute of Solar Energy (NISE) under the Suryamitra programme; assisted in solar PV installation and panel mounting.",
  "Performed wiring, inverter and battery basics, testing and maintenance while following electrical safety standards."]},
 {role:"Cloud Computing with AWS Intern",org:"Beeskilled",when:"May 2026 – Jun 2026",points:[
  "Configured and managed AWS resources including EC2, S3, IAM, VPC, Lambda, API Gateway and RDS.",
  "Worked on cloud deployment, networking, security and resource provisioning through practical projects."]}
],
// link: put a project link (for example a Wokwi share link). Keep "#" to hide the button.
projects:[
 {name:"Edge AI-Based Smart EV Charging Station Optimizer",link:"#",
  about:"Capstone project from my IoT internship at Emertxe. A simulated multi-bay EV charging station where every bay is an ESP32. Live data goes to ThingsBoard over MQTT, and on-device Edge AI decides whether each bay should allow, throttle or defer charging during peak demand.",
  tags:"ESP32, MQTT, ThingsBoard, Wokwi, PlatformIO",points:[
  "Each ESP32 bay senses voltage, current and temperature (DHT22), detects plug-in and plug-out events, and shows status on LEDs.",
  "Publishes bay telemetry as JSON to ThingsBoard over MQTT and receives station limits (max load, overload current, peak-tariff window) through shared attributes.",
  "RPC commands (setRelayState, setThrottle) let operators manually override a bay from the dashboard.",
  "On-device Edge AI demand prediction with ALLOW / THROTTLE / DEFER logic manages station load during peak demand."]},
 {name:"IoT-Based Smart Medicine Dispenser",link:"#",
  about:"An automated dispenser that releases medicine at scheduled times and detects missed doses. A web dashboard shows live status and manages alarms.",
  tags:"IoT, Sensors, Web dashboard, Real-time monitoring",points:[
  "Schedules and dispenses medicine automatically.",
  "Sensors and alerts detect missed doses.",
  "Web dashboard for real-time monitoring and alarm management."]},
 {name:"IoT-Based Drunk and Drive Detection Notification System",link:"#",
  about:"A road-safety project that measures alcohol level with an MQ-3 sensor, raises local alerts and sends a notification to Telegram over Wi-Fi.",
  tags:"MQ-3 sensor, Wi-Fi, Telegram, LCD",points:[
  "Detects alcohol levels with an MQ-3 sensor.",
  "Triggers LCD, buzzer and LED alerts.",
  "Sends real-time Telegram notifications over Wi-Fi to support road safety."]},
 {name:"AWS Infrastructure Automation Project",link:"#",
  about:"Infrastructure-as-code project that provisions AWS resources with CloudFormation and deploys them through a CodePipeline CI/CD workflow, so every deployment is consistent and repeatable.",
  tags:"CloudFormation, CodePipeline, EC2, VPC, IAM, S3, Lambda, RDS",points:[
  "Automated AWS provisioning with CloudFormation.",
  "Built CI/CD workflows with CodePipeline for consistent deployments.",
  "Configured EC2, VPC, IAM, S3, Lambda, API Gateway and RDS to build secure, scalable cloud environments."]}
],
skills:[
 {g:"IoT & Embedded",items:["ESP32","Arduino","Embedded C/C++","Sensor interfacing (DHT22, MQ-3, analog inputs)","MQTT","ThingsBoard","Edge AI concepts","Wireless communication","Digital & analog electronics"]},
 {g:"Cloud & DevOps",items:["AWS: EC2, S3, IAM, VPC, Lambda, API Gateway, RDS","CloudFormation","CodePipeline","CI/CD"]},
 {g:"Tools",items:["PlatformIO","VS Code","Wokwi","Tinkercad","Postman","GitHub","AWS Management Console","Microsoft Office"]},
 {g:"Solar PV",items:["Solar PV installation","Panel mounting","Inverter basics","System inspection & maintenance"]},
 {g:"Core subjects",items:["C programming","Microprocessors & control systems","Digital electronics","Circuit theory","Data communication & networks","Basic electronics","Instrumentation"]}
],
certs:[
 {n:"Internet of Things (IoT) – Emertxe",u:"#",img:"images/certs/iot-emertxe.jpg"},
 {n:"Cloud Computing with AWS – Beeskilled",u:"#",img:"images/certs/aws-beeskilled.jpg"},
 {n:"Solar PV Installer – Datapro Computers Pvt. Ltd.",u:"#",img:"images/certs/solar-pv-datapro.jpg"}
],
edu:[
 {n:"B.Tech, Electronics and Communication Engineering",s:"Sree Chaitanya College of Engineering",d:"Jul 2024 – 2027 (expected) · CGPA 7.6/10"},
 {n:"Diploma, Electronics and Communication Engineering",s:"Jyothishmathi Institute of Technology and Science",d:"Sep 2021 – Mar 2024 · CGPA 8.6/10"}
]};

const $=s=>document.querySelector(s);
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const list=a=>`<ul>${a.map(x=>`<li>${esc(x)}</li>`).join("")}</ul>`;

// ---------- Render sections ----------
$("#jobs").innerHTML=DATA.jobs.map(j=>`<div class="job"><div class="when">${esc(j.when)}</div><div><h3>${esc(j.role)}</h3><div>${esc(j.org)}</div>${list(j.points)}</div></div>`).join("");

$("#projs").innerHTML=DATA.projects.map((p,i)=>`<div class="tl-item"><span class="tl-dot"></span><article class="proj"><button type="button" aria-expanded="false" aria-controls="p${i}"><span class="tl-date">Project ${String(i+1).padStart(2,"0")}</span><h3>${esc(p.name)}</h3><span class="summary">${esc(p.about)}</span><span class="tags">${p.tags.split(",").map(t=>`<span>${esc(t.trim())}</span>`).join("")}</span><span class="more">View details</span></button><div class="body" id="p${i}"><h4>Key features</h4>${list(p.points)}${p.link&&p.link!=="#"?`<a class="plink" href="${p.link}" target="_blank" rel="noopener">View project</a>`:""}</div></article></div>`).join("");
document.querySelectorAll(".proj>button").forEach(b=>b.addEventListener("click",()=>{
  const open=b.parentElement.classList.toggle("open");
  b.setAttribute("aria-expanded",open);
}));

$("#skillGrid").innerHTML=`<div class="skills-panel">${DATA.skills.map(s=>`<div class="skill-group"><h3>${esc(s.g)}</h3><div class="pills">${s.items.map(x=>`<span>${esc(x)}</span>`).join("")}</div></div>`).join("")}</div>`;

$("#certList").innerHTML=DATA.certs.map((c,i)=>`<li><button type="button" class="thumb" data-i="${i}" aria-label="View ${esc(c.n)} certificate"><img src="${c.img}" alt="${esc(c.n)} certificate" loading="lazy"></button><div class="cap">${esc(c.n)}</div></li>`).join("");

$("#edu").innerHTML=`<div class="timeline">`+DATA.edu.map(e=>{
  const [date,cgpa]=e.d.split(" · ");
  return `<div class="tl-item"><span class="tl-dot"></span><div class="tl-card"><span class="tl-date">${esc(date)}</span><h3>${esc(e.n)}</h3><p>${esc(e.s)}</p>${cgpa?`<span class="tl-chip">${esc(cgpa)}</span>`:""}</div></div>`;
}).join("")+`</div>`;

// ---------- Certificate popup ----------
const lb=$("#lightbox");
$("#certList").addEventListener("click",e=>{
  const b=e.target.closest(".thumb"); if(!b) return;
  const c=DATA.certs[b.dataset.i];
  $("#lbImg").src=c.img; $("#lbImg").alt=c.n+" certificate";
  lb.showModal();
});
$("#closeLb").addEventListener("click",()=>lb.close());
lb.addEventListener("click",e=>{ if(e.target===lb) lb.close(); });

// ---------- "Ask the portfolio" search ----------
const CHUNKS=[
 ...DATA.jobs.map(j=>({title:j.role+" at "+j.org,text:j.points.join(" "),href:"#experience"})),
 ...DATA.projects.map(p=>({title:p.name,text:p.about+" "+p.points.join(" ")+" "+p.tags,href:"#projects"})),
 ...DATA.skills.map(s=>({title:s.g,text:s.items.join(", "),href:"#skills"})),
 {title:"Certificates",text:DATA.certs.map(c=>c.n).join("; "),href:"#certs"},
 {title:"Education",text:DATA.edu.map(e=>e.n+" "+e.s+" "+e.d).join("; "),href:"#education"}
];
const STOP=new Set("a an the of to in on for and or with what have you your i is are do did how me my about which use used built".split(" "));
const stem=w=>w.replace(/(ing|ed|es|s)$/,"");
const toks=s=>(s.toLowerCase().match(/[a-z0-9+#$]+/g)||[]).filter(w=>!STOP.has(w)).map(stem).filter(w=>w.length>1);

function search(q){
  const qt=[...new Set(toks(q))];
  if(!qt.length){$("#results").innerHTML="<small>Try a topic such as ESP32, MQTT, AWS or solar.</small>";return}
  const scored=CHUNKS.map(c=>{
    const ct=toks(c.title+" "+c.text);
    const hits=qt.filter(t=>ct.some(w=>w===t||w.startsWith(t)||(t.startsWith(w)&&w.length>3)));
    return{c,hits,score:hits.length/qt.length};
  }).filter(r=>r.score>0).sort((a,b)=>b.score-a.score).slice(0,3);
  if(!scored.length){$("#results").innerHTML="<small>Nothing matched. Try a tool, sensor or project name.</small>";return}
  $("#results").innerHTML=scored.map(r=>{
    let t=esc(r.c.text);
    r.hits.forEach(h=>{t=t.replace(new RegExp("("+h.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")+"\\w*)","gi"),"<mark>$1</mark>")});
    if(t.length>260)t=t.slice(0,260).replace(/[^>]*$/,"")+"…";
    const pct=Math.round(r.score*100);
    return`<div class="hit"><h3><a href="${r.c.href}">${esc(r.c.title)}</a></h3><p>${t}</p><small>Match ${pct}%</small><div class="bar"><i style="width:${pct}%"></i></div></div>`;
  }).join("");
}
$("#askForm").addEventListener("submit",e=>{e.preventDefault();search($("#q").value)});
["ESP32","MQTT","AWS","solar","sensors","certificates"].forEach(s=>{
  const b=document.createElement("button");
  b.type="button";b.textContent=s;
  b.addEventListener("click",()=>{$("#q").value=s;search(s)});
  $("#chips").appendChild(b);
});

// ---------- Mobile menu ----------
const menuBtn=$("#menuBtn"),mainNav=$("#mainNav");
function setMenu(open){
  mainNav.classList.toggle("open",open);
  menuBtn.setAttribute("aria-expanded",open);
  menuBtn.textContent=open?"Close":"Menu";
}
menuBtn.addEventListener("click",()=>setMenu(!mainNav.classList.contains("open")));
mainNav.addEventListener("click",e=>{ if(e.target.tagName==="A") setMenu(false); });

// ---------- Theme toggle ----------
$("#theme").addEventListener("click",()=>{
  const r=document.documentElement;
  const dark=matchMedia("(prefers-color-scheme: dark)").matches;
  const cur=r.dataset.theme||(dark?"dark":"light");
  r.dataset.theme=cur==="dark"?"light":"dark";
});

// ---------- Contact form (opens your email app with the message filled in) ----------
const cForm=$("#contactForm");
if(cForm){
  cForm.addEventListener("submit",e=>{
    e.preventDefault();
    const name=$("#cName").value.trim();
    const email=$("#cEmail").value.trim();
    const subject=$("#cSubject").value.trim()||"Portfolio enquiry";
    const msg=$("#cMsg").value.trim();
    const body=`Hi Tejaswi,\n\n${msg}\n\nFrom: ${name}\nEmail: ${email}`;
    location.href=`mailto:tejaswi83661@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    $("#cNote").textContent="Your email app should open with the message ready to send.";
  });
}

// ---------- Scroll progress bar ----------
const bar=$("#progress");
if(bar){
  addEventListener("scroll",()=>{
    const h=document.documentElement;
    bar.style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";
  });
}

// ---------- Scroll reveal for sections ----------
const io=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add("show");io.unobserve(e.target);}
}),{threshold:.05});
document.querySelectorAll("main section").forEach(s=>{s.classList.add("reveal");io.observe(s);});

// ---------- Timeline animation ----------
const tio=new IntersectionObserver(es=>es.forEach(e=>{
  if(e.isIntersecting){e.target.classList.add("show");tio.unobserve(e.target);}
}),{threshold:.15});
document.querySelectorAll(".timeline,.tl-item").forEach(el=>tio.observe(el));

// ---------- Typing effect ----------
const typed=$("#typed");
if(typed){
  const words=["IoT systems with ESP32","Edge AI solutions","cloud projects on AWS","smart embedded devices"];
  let w=0,c=0,del=false;
  const type=()=>{
    const word=words[w];
    typed.textContent=word.slice(0,c);
    if(!del&&c<word.length){c++;setTimeout(type,80);}
    else if(!del){del=true;setTimeout(type,1500);}
    else if(c>0){c--;setTimeout(type,40);}
    else{del=false;w=(w+1)%words.length;setTimeout(type,300);}
  };
  if(matchMedia("(prefers-reduced-motion: reduce)").matches)typed.textContent=words[0];else type();
}

// ---------- Subtle IoT network background ----------
const cv=$("#bg");
if(cv){
  const ctx=cv.getContext("2d");
  let W,H,pts=[];
  const sizeBg=()=>{
    W=cv.width=innerWidth;H=cv.height=innerHeight;
    const n=Math.min(40,Math.floor(W*H/30000));
    pts=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.25,vy:(Math.random()-.5)*.25}));
  };
  const drawBg=()=>{
    ctx.clearRect(0,0,W,H);
    const col=getComputedStyle(document.documentElement).getPropertyValue("--accent").trim();
    ctx.fillStyle=col;ctx.strokeStyle=col;ctx.lineWidth=.6;
    for(const p of pts){
      p.x+=p.vx;p.y+=p.vy;
      if(p.x<0||p.x>W)p.vx*=-1;
      if(p.y<0||p.y>H)p.vy*=-1;
      ctx.globalAlpha=.22;ctx.beginPath();ctx.arc(p.x,p.y,1.4,0,6.28);ctx.fill();
    }
    for(let i=0;i<pts.length;i++)for(let j=i+1;j<pts.length;j++){
      const d=Math.hypot(pts[i].x-pts[j].x,pts[i].y-pts[j].y);
      if(d<110){ctx.globalAlpha=.1*(1-d/110);ctx.beginPath();ctx.moveTo(pts[i].x,pts[i].y);ctx.lineTo(pts[j].x,pts[j].y);ctx.stroke();}
    }
    requestAnimationFrame(drawBg);
  };
  sizeBg();addEventListener("resize",sizeBg);
  if(!matchMedia("(prefers-reduced-motion: reduce)").matches)drawBg();
}