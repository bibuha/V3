export default async function handler(req, res) {
  if (req.method === 'POST') {
    const event = req.body;
    console.log('Data dari Tads Ads:', event);
    return res.status(200).json({ success: true });
  } else {
    return res.status(405).json({ error: 'Hanya menerima POST request' });
  }
}
