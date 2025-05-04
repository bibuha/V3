export default async function handler(req, res) {
  if (req.method === 'POST') {
    const event = req.body;

    const userId = event.user_id;
    const reward = 5;

    console.log(`User ${userId} mendapat Rp${reward} dari klik iklan`);

    const token = process.env.V3_TOKEN;
    const chatId = process.env.V3_ID;
    const message = `Klik iklan!\nUser ID: ${userId}\nZone: ${event.zone}\nWaktu: ${event.timestamp}\n+Rp${reward}`;

    await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: chatId, text: message })
    });

    return res.status(200).json({ success: true });
  } else {
    return res.status(405).json({ error: 'Hanya menerima POST request' });
  }
}
