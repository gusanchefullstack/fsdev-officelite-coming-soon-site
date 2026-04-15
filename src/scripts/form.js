const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(field, message) {
  field.classList.add('field--error');
  const err = field.querySelector('.field__error');
  if (err) err.textContent = message;
}
function clearError(field) {
  field.classList.remove('field--error');
}

export function initForm() {
  const form = document.querySelector('[data-signup-form]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    const name = form.querySelector('[name="name"]').closest('.field');
    const email = form.querySelector('[name="email"]').closest('.field');
    const nameVal = form.querySelector('[name="name"]').value.trim();
    const emailVal = form.querySelector('[name="email"]').value.trim();

    if (!nameVal) { setError(name, 'Name cannot be empty'); valid = false; } else clearError(name);
    if (!emailVal) { setError(email, 'Email Address cannot be empty'); valid = false; }
    else if (!EMAIL_RE.test(emailVal)) { setError(email, 'Please use a valid email address'); valid = false; }
    else clearError(email);

    if (valid) {
      form.querySelector('[data-success]')?.removeAttribute('hidden');
      form.reset();
    }
  });

  form.querySelectorAll('.field__input').forEach((input) => {
    input.addEventListener('input', () => clearError(input.closest('.field')));
  });
}
