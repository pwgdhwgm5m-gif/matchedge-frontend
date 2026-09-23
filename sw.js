self.addEventListener('push', event => {
  let d = {}; try { d = event.data ? event.data.json() : {}; } catch (_) {}
  const tr = (d.lang === 'tr');
  const title = d.title || (tr ? '⚽ Maç bildirimi' : '⚽ Match alert');
  const body = d.body || [d.homeTeam, d.homeScore != null ? d.homeScore + ' – ' + d.awayScore : '', d.awayTeam].filter(Boolean).join(' ');
  const notification = self.registration.showNotification(title, {
    body,
    tag: d.tag || ('match-' + (d.fixtureId || d.eventId || '')),
    renotify: true,
    data: { url: d.url || '/kuponum.html' },
    vibrate: d.vibrate || [180, 80, 180]
  });
  const broadcast = self.clients.matchAll({ type:'window', includeUncontrolled:true }).then(list => {
    list.forEach(client => client.postMessage({ type:'socceredge-push', payload:d }));
  });
  event.waitUntil(Promise.all([notification, broadcast]));
});
self.addEventListener('notificationclick', event => {
  event.notification.close();
  const url = new URL(event.notification.data?.url || '/kuponum.html', self.location.origin).href;
  event.waitUntil(clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) if ('focus' in c) { c.navigate(url); return c.focus(); }
    return clients.openWindow(url);
  }));
});
