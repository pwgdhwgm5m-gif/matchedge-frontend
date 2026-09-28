self.addEventListener('install', event => event.waitUntil(self.skipWaiting()));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('push', event => {
  let d = {}; try { d = event.data ? event.data.json() : {}; } catch (_) {}
  const tr = (d.lang === 'tr');
  const title = d.title || (tr ? '⚽ Maç bildirimi' : '⚽ Match alert');
  const hasScore = d.homeScore !== null && d.homeScore !== undefined && d.awayScore !== null && d.awayScore !== undefined;
  const score = hasScore ? d.homeScore + ' – ' + d.awayScore : '';
  const body = d.body || [d.homeTeam, score, d.awayTeam].filter(Boolean).join(' ');
  // Keep the background push path minimal. On iOS the notification promise is
  // the only work that must block the push event; client enumeration can make
  // a suspended PWA wake path unnecessarily longer.
  event.waitUntil(self.registration.showNotification(title, {
    body,
    tag: d.tag || ('match-' + (d.fixtureId || d.eventId || '')),
    renotify: true,
    data: { url: d.url || '/kuponum.html', sentAt: d.sentAt || null },
    vibrate: d.vibrate || [180, 80, 180]
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = new URL(event.notification.data?.url || '/kuponum.html', self.location.origin).href;
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) if ('focus' in c) { c.navigate(url); return c.focus(); }
    return clients.openWindow(url);
  }));
});
