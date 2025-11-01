import { getWhoisData } from './whois.service.js';

async function analyze(req, res) {
  const { domain } = req.params;

  try {
    const data = await getWhoisData(domain);
    res.json({ status: 'success', domain, data });
  } catch (err) {
    res.status(500).json({ status: 'error', message: err.message });
  }
}

export default { analyze };
