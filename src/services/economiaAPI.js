export default async function fetchApi() {
  const url = 'https://economia.awesomeapi.com.br/json/all';
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

export async function fetchApiFiltered(currency = 'USDT') {
  const response = await fetchApi();
  const keys = Object.keys(response);
  const result = keys
    .filter((item) => item !== currency)
    .reduce((acc, item) => ({ ...acc, [item]: response[item] }), {});
  return result;
}
