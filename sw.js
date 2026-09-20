self.addEventListener('push', event => {
  let d = {}; try { d = event.data ? event.data.json() : {}; } catch (_) {}
  const tr = (d.lang === 'tr');
  const title = tr ? '⚽ GOL!' : (d.title || '⚽ GOAL!');
  const body = [d.homeTeam, d.homeScore + ' – ' + d.awayScore, d.awayTeam].filter(Boolean).join(' ');
  event.waitUntil(self.registration.showNotification(title, {
    body,
    tag: 'goal-' + (d.fixtureId || '') + '-' + d.homeScore + '-' + d.awayScore,
    renotify: true,
    data: { url: d.url || '/ana-sayfa.html' },
    vibrate: [180, 80, 180]
  }));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = new URL(event.notification.data?.url || '/ana-sayfa.html', self.location.origin).href;
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) if ('focus' in c) { c.navigate(url); return c.focus(); }
    return clients.openWindow(url);
  }));
});
