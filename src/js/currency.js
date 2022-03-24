export default class CurrencyExchange {
  static async exchangeCurrency(foreignCurrency) {
    try {
      const url = `https://v6.exchangerate-api.com/v6/39dcba4fa5ea9142fe439f2f/pair/USD/${foreignCurrency}`;
      const response = await fetch(url);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}