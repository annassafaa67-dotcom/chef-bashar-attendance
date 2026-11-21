const V='org-v1795243455';const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(V).then(c=>c.addAll(CORE)))});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x.startsWith('org-')&&x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const q=e.request;if(q.method!=='GET'||new URL(q.url).origin!==location.origin)return;
 if(q.mode==='navigate'){e.respondWith(fetch(q).then(r=>{const c=r.clone();caches.open(V).then(x=>x.put('./index.html',c));return r}).catch(()=>caches.match('./index.html')));return}
 e.respondWith(caches.match(q,{ignoreSearch:true}).then(r=>r||fetch(q)))});
