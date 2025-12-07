// Minimal form handler for `form.html`.
// Attaches client-side validation and clear behavior when server endpoint is not present.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('myform');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const first = form.querySelector('#first-name');
    if (first && !first.value.trim()) {
      e.preventDefault();
      alert('Please enter your first name.');
      first.focus();
      return;
    }

    // If the form posts to a server-side PHP endpoint, allow native submit so server can handle it.
    if (form.action && form.action.endsWith('.php')) {
      // No-op: let browser submit the form to server
      return;
    }

    // Otherwise, prevent default and simulate a client-side submission (log to console).
    e.preventDefault();
    const data = new FormData(form);
    console.log('Simulated form submission. FormData entries:', Array.from(data.entries()));
    alert('Form submitted (simulated). Check console for form data.');
  });
});
