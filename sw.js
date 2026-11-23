// Cache hors-ligne du portail Mes Jeux (Pendu des Ballons + Course du Calcul)
const CACHE = "jeux-v2";
const FILES = [
  "./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png",
  "./pendu/", "./pendu/index.html", "./pendu/dictee.json",
  "./course-du-calcul/", "./course-du-calcul/index.html", "./course-du-calcul/icone.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function saveCopy(req, res){
  const copy = res.clone();
  caches.open(CACHE).then(c => c.put(req, copy));
  return res;
}

self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  const url = new URL(e.request.url);
  const sameOrigin = url.origin === self.location.origin;
  const fresh = sameOrigin && (e.request.mode === "navigate" || url.pathname.endsWith(".html") || url.pathname.endsWith(".json") || url.pathname.endsWith("/"));

  // Pages et liste de dictée : réseau d'abord (pour recevoir les nouveaux mots), cache si hors-ligne.
  if (fresh) {
    e.respondWith(
      fetch(e.request).then(res => res.ok ? saveCopy(e.request, res) : res)
        .catch(() => caches.match(e.request, { ignoreSearch: true }).then(hit => hit || caches.match("./index.html")))
    );
    return;
  }
  // Le reste (icônes, police) : cache d'abord.
  e.respondWith(
    caches.match(e.request, { ignoreSearch: true }).then(hit => hit || fetch(e.request).then(res => {
      if (sameOrigin || url.host.includes("fonts.g")) saveCopy(e.request, res);
      return res;
    }))
  );
});
