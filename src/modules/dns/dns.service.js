import dns from 'dns/promises';

export async function getDnsRecords(domain) {
  try {
    const [A, AAAA, MX, NS, TXT] = await Promise.all([
      dns.resolve4(domain).catch(() => []),
      dns.resolve6(domain).catch(() => []),
      dns.resolveMx(domain).catch(() => []),
      dns.resolveNs(domain).catch(() => []),
      dns.resolveTxt(domain).catch(() => [])
    ]);

    return { A, AAAA, MX, NS, TXT };
  } catch (error) {
    throw new Error('Erro ao buscar registros DNS');
  }
}
