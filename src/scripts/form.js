const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setError(field, message) {
  if (!field) return;
  field.classList.add('field--error');
  const err = field.querySelector('.field__error');
  if (err) err.textContent = message;
}
function clearError(field) {
  if (!field) return;
  field.classList.remove('field--error');
}

export function initForm() {
  const form = document.querySelector('[data-signup-form]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = form.querySelector('[name="name"]');
    const emailInput = form.querySelector('[name="email"]');
    const nameField = nameInput?.closest('.field');
    const emailField = emailInput?.closest('.field');

    let valid = true;

    if (nameInput) {
      const v = nameInput.value.trim();
      if (!v) { setError(nameField, 'Name cannot be empty'); valid = false; }
      else clearError(nameField);
    }

    if (emailInput) {
      const v = emailInput.value.trim();
      if (!v) { setError(emailField, 'Email Address cannot be empty'); valid = false; }
      else if (!EMAIL_RE.test(v)) { setError(emailField, 'Please use a valid email address'); valid = false; }
      else clearError(emailField);
    }

    if (valid) {
      form.querySelector('[data-success]')?.removeAttribute('hidden');
      form.reset();
    }
  });

  form.querySelectorAll('.field__input').forEach((input) => {
    input.addEventListener('input', () => clearError(input.closest('.field')));
  });
}
