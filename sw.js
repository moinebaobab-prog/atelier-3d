// Service Worker — Atelier 3D
// Placez ce fichier à la racine de votre dépôt GitHub Pages

self.addEventListener('push', e => {
  const d = e.data ? e.data.json() : { title: 'Atelier 3D', body: 'Nouvelle notification' };
  e.waitUntil(
    self.registration.showNotification(d.title, {
      body: d.body,
      icon: '/favicon.ico',
      badge: '/favicon.ico'
    })
  );
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});

self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
