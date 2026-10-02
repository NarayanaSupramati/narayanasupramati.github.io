// Task10: set actual HTTPS URLs here. Empty means pending, never a broken link.
const MMIS_LINKS = Object.freeze({
  APK_URL: 'https://github.com/NarayanaSupramati/mmis/releases/download/v0.3.4-security/mmis-0.3.4-security.apk',
  DEMO_URL: 'https://github.com/NarayanaSupramati/mmis/releases/download/v0.3.3-demo/mmis_demo.mp4',
  DECK_URL: 'https://narayanasupramati.github.io/mmis-hackathon-deck.pdf'
});
for (const [name, selector] of [['APK_URL','apk'], ['DEMO_URL','demo'], ['DECK_URL','deck']]) {
  const url = MMIS_LINKS[name];
  if (!url || !url.startsWith('https://')) continue;
  const link = document.querySelector(`[data-${selector}]`);
  link.href = url; link.hidden = false;
  if (selector === 'apk') document.querySelector('[data-apk-pending]').hidden = true;
  if (selector === 'demo') document.querySelectorAll('[data-demo-status]').forEach(el => { el.textContent = 'Available below'; });
}
