/* S33 - Board: funziona anche offline. Dopo ogni aggiornamento cambia VERSIONE. */
const VERSIONE = "s33-board-1.7.0";
const FILES = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon.svg", "./icons/icon-192.png", "./icons/icon-512.png",
  "./icons/icon-maskable-512.png", "./icons/apple-touch-icon.png", "./icons/favicon-32.png"];
self.addEventListener("install", e=>{ e.waitUntil(caches.open(VERSIONE).then(c=>c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e=>{ e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x !== VERSIONE).map(x=>caches.delete(x))))); self.clients.claim(); });
/* dalla cache subito, e intanto si aggiorna in background */
self.addEventListener("fetch", e=>{
  if(e.request.method !== "GET") return;
  e.respondWith(caches.open(VERSIONE).then(c=>c.match(e.request).then(hit=>{
    const net = fetch(e.request).then(r=>{ if(r && r.ok) c.put(e.request, r.clone()); return r; }).catch(()=>hit);
    return hit || net;
  })));
});
