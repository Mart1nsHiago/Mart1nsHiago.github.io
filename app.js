const cases = {
  katana: {
    index: '001',
    category: 'WEB EXPERIMENT / VISÃO COMPUTACIONAL',
    title: 'Katana Motion',
    intro: 'Um jogo no navegador que utiliza movimentos das mãos como controle para realizar cortes em tempo real.',
    challenge: 'Traduzir o movimento captado pela webcam em gestos de jogo responsivos, contemplando as duas mãos ao mesmo tempo.',
    approach: 'Interface construída com React e TypeScript. MediaPipe faz a detecção e rastreamento das mãos; o Canvas exibe os cortes e efeitos visuais. O foco foi integrar câmera, tracking e ciclo de renderização de forma coesa.',
    result: 'Projeto implementado e documentado em repositório GitHub. O reconhecimento e os cortes por ambas as mãos fazem parte da experiência.',
    tech: ['React', 'TypeScript', 'Vite', 'MediaPipe', 'Canvas API', 'Webcam'],
    links: [{label:'Abrir repositório no GitHub ↗',href:'https://github.com/Mart1nsHiago/katana-motion'}]
  },
  epi: {
    index: '002',
    category: 'INTELIGÊNCIA COMPUTACIONAL / PYTHON',
    title: 'EPI Detect',
    intro: 'Uma solução em desenvolvimento para análise de imagens de câmeras e identificação de equipamentos de proteção individual e uniformes.',
    challenge: 'Processar fluxos de vídeo com condições variáveis e disponibilizar informações úteis para a verificação de uso de EPIs.',
    approach: 'Pipeline com modelos YOLO/Ultralytics e OpenCV, integração de câmeras UniFi Protect por RTSP/MJPEG e visualização em Flask. Os testes incluem detecção de EPIs/uniformes, inferência por quadros e estabilização temporal.',
    result: 'Em desenvolvimento; sem métricas finais de precisão ou implantação de produção declaradas.',
    tech: ['Python', 'YOLO / Ultralytics', 'OpenCV', 'Flask', 'RTSP / MJPEG', 'UniFi Protect'],
    links: []
  },
  elite: {
    index: '003',
    category: 'PLATAFORMA WEB / TESTES DE CONCORRÊNCIA',
    title: 'Elite Leilões',
    intro: 'Uma experiência de leilão digital com disputas entre perfis de usuários e verificação dos registros de lance.',
    challenge: 'Simular lances simultâneos de diferentes participantes e validar o comportamento e a trilha de auditoria.',
    approach: 'Implementação e testes do fluxo usando JavaScript, com cenários simultâneos entre contas distintas e conferência dos eventos registrados.',
    result: 'Os cenários executados durante o desafio técnico foram validados, incluindo disputas simultâneas e auditoria.',
    tech: ['JavaScript', 'Web', 'Concorrência', 'Testes', 'Auditoria'],
    links: []
  },
  barber: {
    index: '004',
    category: 'APLICAÇÃO WEB / FULL STACK',
    title: 'Sistema Barber',
    intro: 'Sistema web para barbearia que conecta a experiência do cliente a uma camada de serviços e pagamentos.',
    challenge: 'Organizar interface, lógica de negócio e integrações de um fluxo de atendimento em uma aplicação única.',
    approach: 'Frontend com JavaScript, HTML e CSS, backend Node.js e comunicação através de rotas de API REST, com foco na separação das responsabilidades e integração de pagamentos.',
    result: 'Projeto Full Stack documentado no currículo, com gateway de pagamentos como parte da solução.',
    tech: ['JavaScript', 'Node.js', 'HTML5', 'CSS3', 'REST API'],
    links: []
  },
  tono: {
    index: '005',
    category: 'PRODUTO DIGITAL / FOTOGRAFIA',
    title: 'TonoFlash',
    intro: 'Plataforma voltada a uma experiência mais fluida de descoberta de fotografias de eventos e participação de fotógrafos.',
    challenge: 'Construir uma navegação moderna para busca de imagens e um fluxo de cadastro que considere os equipamentos de quem fotografa.',
    approach: 'Planejamento de experiência, hierarquia de conteúdo, páginas públicas e jornada “Seja fotógrafo”, incluindo informações do equipamento utilizado.',
    result: 'Projeto em evolução. O desenvolvimento da plataforma segue em ajustes de interface e funcionalidades.',
    tech: ['Frontend', 'UX/UI', 'Plataforma Web', 'Produto Digital'],
    links: []
  },
  audit: {
    index: '006',
    category: 'AUTOMAÇÃO / SEGURANÇA',
    title: 'Auditoria & Hardening',
    intro: 'Automação de verificações de segurança para ajudar a identificar pontos de atenção em sistemas Linux e Windows.',
    challenge: 'Reduzir a repetição de verificações operacionais e consolidar resultados de auditoria em relatórios de fácil leitura.',
    approach: 'Scripts Python para inspecionar serviços, portas expostas, permissões, contas privilegiadas e atualizações, com geração de relatórios técnicos.',
    result: 'Ferramentas de automação descritas no currículo, aplicando conhecimento de operações e segurança.',
    tech: ['Python', 'Linux', 'Windows', 'Shell', 'Cybersecurity'],
    links: []
  },
  taurus: {
    index: '007',
    category: 'WEBSITE / PRESENÇA DIGITAL',
    title: 'Taurus Barbearia',
    intro: 'Website para uma barbearia, trabalhando identidade, apresentação de serviços e comunicação visual em uma experiência web.',
    challenge: 'Criar uma presença digital alinhada à identidade do estabelecimento e com navegação clara para visitantes.',
    approach: 'Estruturação de layout, hierarquia visual e páginas voltadas à apresentação da marca e dos serviços. A ilustração no card é conceitual, não uma captura do site real.',
    result: 'Website com endereço público, que pode ser acessado pelo link abaixo.',
    tech: ['Web', 'UI/UX', 'Responsividade', 'Presença digital'],
    links: [{label:'Visitar Taurus Barbearia ↗',href:'https://taurusbarbearia.com/'}]
  },
  backup: {
    index: '008',
    category: 'LINUX / AUTOMAÇÃO DE BACKUP',
    title: 'Sincronização com Rclone + Nextcloud',
    intro: 'Automação de rotinas de sincronização e backup em nuvem usando serviços e scripts Linux.',
    challenge: 'Executar cópias recorrentes com rastreabilidade, redundância e menos intervenção manual.',
    approach: 'Integração entre Rclone e Nextcloud, rotinas Shell Script, registros de auditoria e criptografia no processo de sincronização.',
    result: 'Implementação técnica documentada no currículo, sem métricas de volume ou disponibilidade publicadas.',
    tech: ['Linux', 'Shell Script', 'Rclone', 'Nextcloud', 'Backup'],
    links: []
  },
  android: {
    index: '009',
    category: 'PROXMOX / VIRTUALIZAÇÃO',
    title: 'Android Multi-Instância',
    intro: 'Ambiente de máquinas virtuais Android-x86 em Proxmox para executar múltiplas instâncias com administração centralizada.',
    challenge: 'Isolar ambientes Android e controlar rede, armazenamento e recursos em um host virtualizado.',
    approach: 'Criação de VMs com KVM/Proxmox, configuração de recursos, rede virtualizada e snapshots para apoiar testes e automação.',
    result: 'Implementação de laboratório documentada no currículo. A quantidade de dispositivos na ilustração é exemplificativa.',
    tech: ['Proxmox', 'KVM', 'Android-x86', 'Snapshots', 'Virtualização'],
    links: []
  }
};

const motionToggle = document.getElementById('motionToggle');
const preferReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let motionOff = preferReduced;
let roleTimer;
const roles = ['DESENVOLVEDOR FULL STACK','CYBERSECURITY & DEVSECOPS','PYTHON & VISÃO COMPUTACIONAL'];
let roleIndex = 0;
let charIndex = roles[0].length;
let deleting = false;
const roleElement = document.getElementById('roleType');

function typeRole() {
  if (motionOff) {
    roleElement.textContent = roles[0];
    roleElement.setAttribute('aria-label', roles[0]);
    return;
  }
  const word = roles[roleIndex];
  if (deleting) charIndex -= 1;
  else charIndex += 1;
  roleElement.textContent = word.substring(0, charIndex);
  roleElement.setAttribute('aria-label', word);
  let delay = deleting ? 38 : 80;
  if (!deleting && charIndex >= word.length) {
    deleting = true;
    delay = 2800;
  } else if (deleting && charIndex <= 0) {
    deleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 390;
  }
  roleTimer = window.setTimeout(typeRole, delay);
}
function updateMotion() {
  document.body.classList.toggle('no-motion',motionOff);
  motionToggle.setAttribute('aria-pressed',String(motionOff));
  motionToggle.setAttribute('aria-label',motionOff ? 'Ativar animações' : 'Reduzir animações');
  motionToggle.title = motionOff ? 'Ativar animações' : 'Reduzir animações';
  window.clearTimeout(roleTimer);
  if (motionOff) {
    roleElement.textContent = roles[0];
    roleElement.setAttribute('aria-label',roles[0]);
  } else {
    roleIndex = 0;
    charIndex = roles[0].length;
    deleting = false;
    roleTimer = window.setTimeout(typeRole,2600);
  }
}
motionToggle.addEventListener('click',()=>{motionOff=!motionOff;updateMotion()});
updateMotion();

function updateClock() {
  document.getElementById('brasilTime').textContent =
    new Intl.DateTimeFormat('pt-BR',{timeZone:'America/Sao_Paulo',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date()) + ' (UTC−3)';
}
updateClock();
window.setInterval(updateClock,60000);

const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
menuToggle.addEventListener('click',()=>{
  const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded',String(!isOpen));
  mobileNav.hidden = isOpen;
});
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
  mobileNav.hidden=true;
  menuToggle.setAttribute('aria-expanded','false');
}));
window.addEventListener('resize',()=>{
  if(window.innerWidth>720){mobileNav.hidden=true;menuToggle.setAttribute('aria-expanded','false')}
});

const filters = [...document.querySelectorAll('[data-filter]')];
const projectCards = [...document.querySelectorAll('.project-card')];
const countLabel = document.getElementById('projectCount');
filters.forEach(button=>button.addEventListener('click',()=>{
  const category = button.dataset.filter;
  filters.forEach(b=>{const active=b===button;b.classList.toggle('active',active);b.setAttribute('aria-pressed',String(active))});
  let count=0;
  for(const card of projectCards){
    const visible=category==='todos' || card.dataset.category.split(' ').includes(category);
    card.hidden=!visible;
    if(visible) count++;
  }
  countLabel.textContent=count+' registro'+(count===1?'':'s');
}));

const dialog=document.getElementById('caseDialog');
const closeButton=document.getElementById('caseClose');
function openCase(key){
  const data=cases[key];
  if(!data) return;
  const ids={caseIndex:data.index,caseCategory:data.category,caseTitle:data.title,caseIntro:data.intro,caseChallenge:data.challenge,caseApproach:data.approach,caseResult:data.result};
  for(const [id,value] of Object.entries(ids)) document.getElementById(id).textContent=value;
  const tags=document.getElementById('caseTech');
  tags.replaceChildren();
  data.tech.forEach(t=>{const el=document.createElement('span');el.textContent=t;tags.appendChild(el)});
  const actions=document.getElementById('caseActions');
  actions.replaceChildren();
  data.links.forEach(l=>{
    const a=document.createElement('a');
    a.href=l.href;a.textContent=l.label;a.target='_blank';a.rel='noopener noreferrer';actions.appendChild(a);
  });
  dialog.showModal();
  closeButton.focus();
}
document.querySelectorAll('[data-open-project]').forEach(button=>button.addEventListener('click',()=>openCase(button.dataset.openProject)));
closeButton.addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});

// A small scroll indication without hijacking the user's native navigation.
const header=document.querySelector('.site-header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>12),{passive:true});

// Ambient spreadsheet glyphs, each occupying a 26px cell and dropping
// downward over time. This is intentionally decorative, not live data.
const rainCanvas=document.getElementById('dataRain');
const rainHero=document.querySelector('.hero');
const rainContext=rainCanvas.getContext('2d');
const rainGlyphs=['0','1','A','B','=','/','+','#','$','{','}','>','%','×'];
let rainParticles=[];
let rainFrame=0;
let rainLastFrame=0;
let rainWidth=0;
let rainHeight=0;
let rainProtectedRects=[];

// Fade the data glyphs before they touch readable content. The grid itself
// stays visible; only the moving decorative layer is softened.
function updateRainProtectedRects(){
  const heroRect=rainHero.getBoundingClientRect();
  const selectors=['.hero-copy .eyebrow','.hero-copy h1','.hero-copy .role-line','.hero-copy .hero-intro','.hero-copy .hero-cta','.hero-copy .hero-highlights','.hero-copy .hero-local','.hero-copy .terminal-mini','.gesture-lab .gesture-topline','.gesture-lab .gesture-visual','.gesture-lab .gesture-data','.gesture-lab .gesture-toggle'];
  rainProtectedRects=selectors.flatMap(selector=>[...rainHero.querySelectorAll(selector)].map(node=>{
    const rect=node.getBoundingClientRect();
    return {left:rect.left-heroRect.left,top:rect.top-heroRect.top,right:rect.right-heroRect.left,bottom:rect.bottom-heroRect.top};
  }));
}
function rainReadability(x,y){
  let factor=1;
  for(const rect of rainProtectedRects){
    const dx=Math.max(rect.left-x,0,x-rect.right);
    const dy=Math.max(rect.top-y,0,y-rect.bottom);
    if(dx>62||dy>62)continue;
    const distance=Math.hypot(dx,dy);
    factor=Math.min(factor,Math.max(0,(distance-5)/57));
    if(factor===0)break;
  }
  return factor;
}

function resizeRain(){
  if(!rainContext) return;
  rainWidth=rainHero.clientWidth;
  rainHeight=rainHero.offsetHeight;
  const ratio=Math.min(window.devicePixelRatio || 1,2);
  rainCanvas.width=Math.max(1,Math.round(rainWidth*ratio));
  rainCanvas.height=Math.max(1,Math.round(rainHeight*ratio));
  rainContext.setTransform(ratio,0,0,ratio,0,0);
  const columns=Math.ceil(rainWidth/26);
  // Keep the ambient glyphs sparse so the portfolio remains easy to read.
  const count=Math.min(88,Math.max(26,Math.round((rainWidth*rainHeight)/19000)));
  rainParticles=Array.from({length:count},()=>({
    col:Math.floor(Math.random()*columns),
    y:Math.random()*rainHeight,
    speed:.67+Math.random()*.94,
    opacity:.085+Math.random()*.235,
    glyph:rainGlyphs[Math.floor(Math.random()*rainGlyphs.length)],
    filled:Math.random()>.57,
    trail:Math.random()>.53,
    row:-1,
    trailGlyphs:Array.from({length:3},()=>rainGlyphs[Math.floor(Math.random()*rainGlyphs.length)])
  }));
  updateRainProtectedRects();
  updateSheetAxes();
  rainLastFrame=0;
}

function drawRain(time){
  if(motionOff || document.hidden || !rainContext) return;
  if(!rainLastFrame || time-rainLastFrame>=30){
    const delta=rainLastFrame ? Math.min(time-rainLastFrame,100) : 30;
    rainLastFrame=time;
    rainContext.clearRect(0,0,rainWidth,rainHeight);
    rainContext.font='11px "DM Mono", monospace';
    rainContext.textBaseline='middle';
    for(const particle of rainParticles){
      particle.y+=particle.speed*delta*.08;
      if(particle.y>rainHeight+28){
        particle.y=-26-Math.random()*85;
        particle.col=Math.floor(Math.random()*Math.ceil(rainWidth/26));
        particle.glyph=rainGlyphs[Math.floor(Math.random()*rainGlyphs.length)];
        particle.row=-1;
        particle.trailGlyphs=Array.from({length:3},()=>rainGlyphs[Math.floor(Math.random()*rainGlyphs.length)]);
      }
      const x=particle.col*26;
      const y=Math.round(particle.y/26)*26;
      if(particle.row!==y){
        particle.row=y;
        if(Math.random()<.38)particle.glyph=rainGlyphs[Math.floor(Math.random()*rainGlyphs.length)];
        if(Math.random()<.35)particle.filled=!particle.filled;
      }
      // A few isolated cells, not a solid vertical streak: the sparse column
      // traces in the reference rise gently out of the spreadsheet grid.
      if(particle.trail){
        const offsets=[5,3,1];
        for(let step=0;step<offsets.length;step++){
          const tailY=y-offsets[step]*26;
          if(tailY<-26)continue;
          const fade=.21+step*.27;
          const shadowOpacity=particle.opacity*fade*rainReadability(x+13,tailY+13);
          rainContext.fillStyle='rgba(35,38,37,'+(shadowOpacity*.76)+')';
          rainContext.fillRect(x+1,tailY+1,24,24);
          rainContext.fillStyle='rgba(20,24,23,'+(shadowOpacity*.92)+')';
          rainContext.fillText(particle.trailGlyphs[step],x+8,tailY+14);
        }
      }
      const leadingOpacity=particle.opacity*rainReadability(x+13,y+13);
      if(particle.filled){
        rainContext.fillStyle='rgba(27,30,28,'+(leadingOpacity*.43)+')';
        rainContext.fillRect(x+1,y+1,24,24);
      }
      rainContext.fillStyle='rgba(24,26,26,'+leadingOpacity+')';
      rainContext.fillText(particle.glyph,x+8,y+14);
      if(leadingOpacity>.28){
        rainContext.fillStyle='rgba(24,26,26,'+(leadingOpacity*.12)+')';
        rainContext.fillText('·',x+9,y-12);
      }
    }
  }
  rainFrame=window.requestAnimationFrame(drawRain);
}
function updateRain(){
  window.cancelAnimationFrame(rainFrame);
  rainLastFrame=0;
  if(!rainContext) return;
  rainContext.clearRect(0,0,rainWidth,rainHeight);
  if(!motionOff && !document.hidden)rainFrame=window.requestAnimationFrame(drawRain);
}
if(rainContext){
  resizeRain();
  updateRain();
  if('ResizeObserver' in window)new ResizeObserver(()=>{resizeRain();updateRain()}).observe(rainHero);
  else window.addEventListener('resize',()=>{resizeRain();updateRain()});
  motionToggle.addEventListener('click',updateRain);
  document.addEventListener('visibilitychange',updateRain);
}

// Custom spreadsheet selector for precise mouse pointers only.
const cursorElement=document.getElementById('gridCursor');
const cursorCell=document.getElementById('cursorCell');
const finePointer=window.matchMedia('(hover: hover) and (pointer: fine)');
function columnName(number){
  let n=number, letters='';
  while(n>0){n--;letters=String.fromCharCode(65+n%26)+letters;n=Math.floor(n/26)}
  return letters;
}
function updateSheetAxes(){
  const columnCount=Math.max(70,Math.ceil(rainWidth/26)+2);
  const rowCount=Math.max(55,Math.ceil((rainHeight-28)/26)+1);
  const letters=document.getElementById('sheetLetters');
  const rows=document.getElementById('rowGutter');
  letters.replaceChildren(...Array.from({length:columnCount},(_,index)=>{
    const item=document.createElement('span');item.textContent=columnName(index+1);return item;
  }));
  rows.replaceChildren(...Array.from({length:rowCount},(_,index)=>{
    const item=document.createElement('span');item.textContent=String(index+1).padStart(2,'0');return item;
  }));
}
function moveGridCursor(event){
  if(event.pointerType && event.pointerType!=='mouse')return;
  const target=event.target instanceof Element ? event.target : null;
  if(target?.closest('dialog') || dialog.open){
    cursorElement.style.opacity='0';
    return;
  }
  cursorElement.style.opacity='1';
  cursorElement.style.transform='translate3d('+(event.clientX-12)+'px,'+(event.clientY-12)+'px,0)';
  const grid=target?.closest('.grid-paper');
  const rect=(grid || document.body).getBoundingClientRect();
  const col=Math.max(1,Math.floor((event.clientX-rect.left)/26)+1);
  const row=Math.max(1,Math.floor((event.clientY-rect.top)/26)+1);
  cursorCell.textContent=columnName(col)+String(row).padStart(2,'0');
  document.getElementById('cursorCoords').textContent='X '+String(Math.round(event.pageX)).padStart(4,'0')+' Y '+String(Math.round(event.pageY)).padStart(4,'0');
  cursorElement.classList.toggle('over-action',!!target?.closest('a,button,[role="button"]'));
}
function updatePointerMode(){
  document.body.classList.toggle('custom-pointer',finePointer.matches);
  cursorElement.style.opacity='0';
}
updatePointerMode();
finePointer.addEventListener?.('change',updatePointerMode);
document.addEventListener('pointermove',moveGridCursor,{passive:true});
document.addEventListener('pointerleave',()=>cursorElement.style.opacity='0');

// MediaPipe-style 21-landmark hand: a lightweight synthetic demonstration,
// intentionally not a webcam tracker and never requesting camera permission.
const handCanvas=document.getElementById('handPose');
const handContext=handCanvas.getContext('2d');
const handVisual=document.querySelector('.gesture-visual');
const gestureToggle=document.getElementById('gestureToggle');
const gestureRows=document.getElementById('gestureRows');
const handBase=[[218,298],[147,228],[124,194],[106,159],[90,129],[177,178],[163,134],[151,91],[143,49],[213,167],[213,118],[211,68],[211,32],[249,174],[261,128],[268,87],[274,53],[280,197],[307,168],[328,140],[338,111]];
const handGestures=[
  {name:'MÃO ABERTA',curls:[0,0,0,0,0]},
  {name:'PUNHO',curls:[1,1,1,1,1]},
  {name:'APONTAR',curls:[1,0,1,1,1]},
  {name:'PAZ / V',curls:[1,0,0,1,1]},
  {name:'JOINHA',curls:[0,1,1,1,1]},
  {name:'TRÊS DEDOS',curls:[1,0,0,0,1]}
];
const fingerInfo=[{name:'POLEGAR',tip:4},{name:'INDICADOR',tip:8},{name:'MÉDIO',tip:12},{name:'ANELAR',tip:16},{name:'MÍNIMO',tip:20}];
const handChains=[[0,1,2,3,4],[0,5,6,7,8],[0,9,10,11,12],[0,13,14,15,16],[0,17,18,19,20]];
const handTableCells=fingerInfo.map(({name,tip})=>{
  const row=document.createElement('div');row.className='gesture-table-row';row.setAttribute('role','row');
  const cells=[`${String(tip).padStart(2,'0')} ${name}`,'A01','0,000','0,000','ESTENDIDO'].map(content=>{
    const cell=document.createElement('span');cell.textContent=content;row.appendChild(cell);return cell;
  });
  gestureRows.appendChild(row);return cells;
});
let handPaused=false,handFrameId=0,handElapsed=0,handLastTime=0,handLastTable=0,handSequence=0;
const handTarget={x:0,y:0};
const handEased={x:0,y:0};
function handGestureAt(time){
  const duration=3200;
  const step=Math.floor(time/duration)%handGestures.length;
  const next=(step+1)%handGestures.length;
  const progress=(time%duration)/duration;
  const blendStart=.7;
  const t=Math.max(0,Math.min(1,(progress-blendStart)/(1-blendStart)));
  const smooth=t*t*(3-2*t);
  return {name:progress>.88?handGestures[next].name:handGestures[step].name,
    curls:handGestures[step].curls.map((value,index)=>value+(handGestures[next].curls[index]-value)*smooth)};
}
function closedFingerJoint(finger,joint){
  if(finger===0)return [[147,228],[171,206],[197,203],[221,213]][joint];
  const root=handBase[5+(finger-1)*4];
  const spread=root[0]-213;
  return [[root[0],root[1]],
    [root[0]+spread*.08,root[1]-10],
    [root[0]+spread*.16+7,root[1]+8],
    [root[0]+spread*.2-2,root[1]+22]][joint];
}
function handPosePoints(time){
  const gesture=handGestureAt(time);
  const wave=Math.sin(time*.00085)*.052;
  const angle=wave+handEased.x*.13;
  const sine=Math.sin(angle),cosine=Math.cos(angle);
  const points=handBase.map(([x,y],index)=>{
    let px=x,py=y;
    if(index>0){
      const finger=Math.floor((index-1)/4),joint=(index-1)%4;
      // Distinct joint targets create true fist, pointing and V poses instead
      // of merely moving all fingertips up and down together.
      const closed=closedFingerJoint(finger,joint);
      const curl=Math.max(0,Math.min(1,gesture.curls[finger]+Math.sin(time*.002+finger)*.018));
      px+=(closed[0]-px)*curl;
      py+=(closed[1]-py)*curl;
      px+=Math.sin(time*.0013+finger*1.4)*(joint+1)*.85;
      py+=Math.cos(time*.001+finger*.9)*(joint+1)*.65;
    }
    const ox=px-218,oy=py-298;
    return {x:218+ox*cosine-oy*sine+handEased.x*18+Math.sin(time*.0006)*6,
      y:298+ox*sine+oy*cosine+handEased.y*16+Math.sin(time*.0009)*4};
  });
  return {points,gesture};
}
function renderHand(time){
  const {points,gesture}=handPosePoints(time);
  handContext.clearRect(0,0,450,345);
  handContext.lineWidth=1.25;handContext.strokeStyle='#1b1b1b';
  for(const chain of handChains){
    handContext.beginPath();
    chain.forEach((id,index)=>index?handContext.lineTo(points[id].x,points[id].y):handContext.moveTo(points[id].x,points[id].y));
    handContext.stroke();
  }
  handContext.beginPath();
  [5,9,13,17].forEach((id,index)=>index?handContext.lineTo(points[id].x,points[id].y):handContext.moveTo(points[id].x,points[id].y));
  handContext.stroke();
  handContext.setLineDash([3,4]);handContext.strokeStyle='#8d908b';
  handContext.beginPath();handContext.moveTo(points[4].x,points[4].y);handContext.lineTo(points[8].x,points[8].y);handContext.stroke();
  handContext.setLineDash([]);
  handContext.font='11px "DM Mono", monospace';
  for(let id=0;id<points.length;id++){
    const point=points[id];
    const tip=id!==0&&id%4===0;
    if(tip){handContext.fillStyle='rgba(36,40,39,.14)';handContext.fillRect(point.x-11,point.y-11,22,22);}
    handContext.fillStyle='#1b1b1b';handContext.fillRect(point.x-(tip?4:2.3),point.y-(tip?4:2.3),tip?8:4.6,tip?8:4.6);
    if(tip){handContext.fillStyle='#6d706f';handContext.fillText(String(id),point.x+8,point.y-10);}
  }
  handContext.strokeStyle='#232323';handContext.lineWidth=.9;
  handContext.strokeRect(points[0].x-6,points[0].y-6,12,12);
  if(time-handLastTable>90||handSequence===0){
    handSequence++;
    fingerInfo.forEach(({tip},index)=>{
      const [label,cell,x,y,state]=handTableCells[index];
      const point=points[tip];
      cell.textContent=columnName(Math.max(1,Math.floor(point.x/26)+1))+String(Math.max(1,Math.floor(point.y/26)+1)).padStart(2,'0');
      x.textContent=(point.x/450).toFixed(3).replace('.',',');
      y.textContent=(point.y/345).toFixed(3).replace('.',',');
      const flexed=gesture.curls[index]>.55;
      state.textContent=flexed?'FLEXIONADO':'ESTENDIDO';
    });
    document.getElementById('gestureLabel').textContent=gesture.name;
    document.getElementById('gestureFrame').textContent='QUADRO '+String(handSequence).padStart(5,'0')+' / 16,7 MS POR QUADRO';
    handLastTable=time;
  }
}
function animateHand(now){
  const active=!handPaused&&!motionOff&&!document.hidden;
  if(active){
    handElapsed+=handLastTime?Math.min(50,now-handLastTime):16.7;
    handLastTime=now;
    handEased.x+=(handTarget.x-handEased.x)*.07;
    handEased.y+=(handTarget.y-handEased.y)*.07;
  }else handLastTime=0;
  renderHand(handElapsed);
  handFrameId=active?window.requestAnimationFrame(animateHand):0;
}
function refreshHandAnimation(){
  window.cancelAnimationFrame(handFrameId);handLastTime=0;
  handFrameId=window.requestAnimationFrame(animateHand);
}
function setHandAim(event){
  if(event.pointerType&&event.pointerType!=='mouse'&&event.pointerType!=='pen')return;
  const rect=handVisual.getBoundingClientRect();
  handTarget.x=Math.max(-1,Math.min(1,(event.clientX-rect.left)/rect.width*2-1));
  handTarget.y=Math.max(-1,Math.min(1,(event.clientY-rect.top)/rect.height*2-1));
}
const gestureLab=document.getElementById('gesto');
gestureLab.addEventListener('pointermove',setHandAim,{passive:true});
gestureLab.addEventListener('pointerleave',()=>{handTarget.x=0;handTarget.y=0});
gestureToggle.addEventListener('click',()=>{
  handPaused=!handPaused;
  gestureToggle.setAttribute('aria-pressed',String(handPaused));
  gestureToggle.textContent=handPaused?'RETOMAR ANIMAÇÃO':'PAUSAR ANIMAÇÃO';
  refreshHandAnimation();
});
motionToggle.addEventListener('click',refreshHandAnimation);
document.addEventListener('visibilitychange',refreshHandAnimation);
const handRatio=Math.min(window.devicePixelRatio||1,2);
handCanvas.width=450*handRatio;handCanvas.height=345*handRatio;
handContext.setTransform(handRatio,0,0,handRatio,0,0);
refreshHandAnimation();
