// 30-day countdown — target persisted per-visitor in localStorage
const KEY = 'officelite:launch';

function getTarget() {
  const stored = localStorage.getItem(KEY);
  if (stored) {
    const t = parseInt(stored, 10);
    if (!Number.isNaN(t) && t > Date.now()) return t;
  }
  const t = Date.now() + 30 * 24 * 60 * 60 * 1000;
  localStorage.setItem(KEY, String(t));
  return t;
}

function pad(n) { return String(n).padStart(2, '0'); }

function render(root, target) {
  const diff = Math.max(0, target - Date.now());
  const s = Math.floor(diff / 1000);
  const parts = {
    days: Math.floor(s / 86400),
    hours: Math.floor((s % 86400) / 3600),
    min: Math.floor((s % 3600) / 60),
    sec: s % 60,
  };
  root.querySelectorAll('[data-countdown]').forEach((el) => {
    const k = el.dataset.countdown;
    if (k in parts) el.textContent = pad(parts[k]);
  });

  const dateEl = root.querySelector('[data-launch-date]');
  if (dateEl) {
    const d = new Date(target);
    dateEl.textContent = d.toLocaleDateString('en-GB', {
      day: 'numeric', month: 'short', year: 'numeric',
    });
  }
}

/**
 * Starts the live countdown. Returns a cleanup function that stops the timer.
 * @param {ParentNode} root
 * @returns {() => void} cleanup — call to clearInterval
 */
export function initCountdown(root = document) {
  if (!root.querySelector('[data-countdown]')) return () => {};
  const target = getTarget();
  render(root, target);
  const intervalId = setInterval(() => render(root, target), 1000);
  return () => clearInterval(intervalId);
}
