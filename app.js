// Лидген landing - form submit + scroll reveals

// ---- Scroll reveal ----
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('seen'); io.unobserve(e.target); }
  });
}, { threshold: 0.14 });

document.querySelectorAll('.step, .card, .shift-col, .section-head, .why-inner, .how-note, .chat-card, .proof-note')
  .forEach((el) => { el.classList.add('in-view'); io.observe(el); });

// ---- Form ----
const form = document.getElementById('leadForm');
const done = document.getElementById('leadDone');
const btn = document.getElementById('submitBtn');
const errEl = document.getElementById('formError');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  errEl.textContent = '';

  // honeypot: bots fill hidden field -> silently "succeed"
  if (form.company_url.value) { swapToDone(); return; }

  const data = {
    name: form.name.value.trim(),
    offer: form.offer.value,
    channel: form.channel.value,
    contact: form.contact.value.trim(),
    niche: form.niche.value.trim(),
    note: form.note.value.trim(),
    page: location.href,
  };

  if (!data.name || !data.contact || !data.niche) {
    errEl.textContent = 'Заполни имя, контакт и нишу';
    return;
  }

  btn.classList.add('is-loading');
  btn.disabled = true;

  try {
    const res = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error('bad status ' + res.status);
    swapToDone();
  } catch (err) {
    btn.classList.remove('is-loading');
    btn.disabled = false;
    errEl.textContent = 'Не отправилось. Напиши напрямую в Telegram - так точно дойдёт.';
  }
});

function swapToDone() {
  form.hidden = true;
  done.hidden = false;
  done.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
