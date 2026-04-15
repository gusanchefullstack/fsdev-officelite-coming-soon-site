import '../styles/main.css';
import { initCountdown } from './countdown.js';
import { initForm } from './form.js';

const stopCountdown = initCountdown();
initForm();

// Stop the timer when the page is being unloaded to avoid orphaned intervals.
window.addEventListener('pagehide', stopCountdown, { once: true });
