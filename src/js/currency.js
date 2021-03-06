export default class CurrencyExchange {
  static async exchangeCurrency(foreignCurrency, amount, foreignCurrencyTo) {
    try {
      const response = await fetch(`https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${foreignCurrencyTo}/${foreignCurrency}/${amount}`);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    } catch(error) {
      return error.message;
    }
  }
}