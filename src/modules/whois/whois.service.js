import whois from 'whois-json';

export async function getWhoisData(domain) {
  try {
    const data = await whois(domain);
    return data;
  } catch (error) {
    throw new Error('Erro ao buscar dados WHOIS');
  }
}
