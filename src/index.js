import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import $ from 'jquery';
import CurrencyExchange from './js/currency';


function clearFields(){
  $('showErrors').text("");
  $('.showDollar').text("");
  $('#money').val("");
}
function getElements(response){
  if(response) {
    const description = (response.target_code);
    const convertedMonies = (response.conversion_result).toFixed(2);
    $('.showDollar').append(`Your amount of USD is $${convertedMonies} in ${description}. <br>`);  
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

async function makeApiCall(foreignCurrency, amount) {
  const response = await CurrencyExchange.exchangeCurrency(foreignCurrency, amount);
  getElements(response);
}

$(document).ready(function() {
  $('#displayCurrency').click(function() {
    let foreignCurrency = $('#currency').val();
    let amount = $('#money').val();
    clearFields();
    makeApiCall(foreignCurrency, amount);
  });
});