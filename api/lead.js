// Vercel serverless function: принимает заявку с лендинга и шлёт уведомление в Telegram.
//
// Нужны переменные окружения (Vercel → Project Settings → Environment Variables):
//   TELEGRAM_BOT_TOKEN  - токен бота от @BotFather
//   TELEGRAM_CHAT_ID    - твой chat_id (узнать: напиши боту, открой
//                         https://api.telegram.org/bot<TOKEN>/getUpdates, возьми chat.id)

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'method_not_allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const name = String(body.name || '').slice(0, 200).trim();
  const type = String(body.type || '').slice(0, 80).trim();
  const channel = String(body.channel || '').slice(0, 40).trim();
  const contact = String(body.contact || '').slice(0, 200).trim();
  const niche = String(body.niche || '').slice(0, 300).trim();
  const geo = String(body.geo || '').slice(0, 200).trim();
  const target = String(body.target || '').slice(0, 1000).trim();
  const hook = String(body.hook || '').slice(0, 120).trim();
  const page = String(body.page || '').slice(0, 300).trim();

  if (!name || !contact || !niche || !geo || !target) {
    return res.status(400).json({ ok: false, error: 'missing_fields' });
  }

  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  if (!token || !chatId) {
    // Не валим UX, но честно логируем в серверные логи Vercel
    console.error('Lead received but TELEGRAM env not set:', { name, channel, contact, niche });
    return res.status(200).json({ ok: true, warning: 'no_telegram_configured' });
  }

  const esc = (s) => String(s).replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));
  const text =
    `🟠 <b>Новая заявка на лидген</b>\n\n` +
    `<b>Имя:</b> ${esc(name)}\n` +
    (type ? `<b>Тип:</b> ${esc(type)}\n` : '') +
    `<b>Чем занимается:</b> ${esc(niche)}\n` +
    `<b>Кого ищем:</b> ${esc(target)}\n` +
    `<b>Гео:</b> ${esc(geo)}\n` +
    `<b>Канал:</b> ${esc(channel)}\n` +
    `<b>Контакт:</b> ${esc(contact)}\n` +
    (hook ? `<b>Зацепило в видео:</b> ${esc(hook)}\n` : '') +
    (page ? `\n<i>${esc(page)}</i>` : '');

  try {
    const tg = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: chatId,
        text,
        parse_mode: 'HTML',
        disable_web_page_preview: true,
      }),
    });
    if (!tg.ok) {
      const detail = await tg.text();
      console.error('Telegram API error:', detail);
      return res.status(502).json({ ok: false, error: 'telegram_failed' });
    }
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Send failed:', err);
    return res.status(500).json({ ok: false, error: 'send_failed' });
  }
};
