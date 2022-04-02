import React from 'react';
import { useSelector } from 'react-redux';

export default function Header() {
  const reduxState = useSelector((state) => state);
  const { email } = reduxState.user;
  const { expenses } = reduxState.wallet;
  const totalExpenses = expenses.reduce((acc, item) => {
    const { value, currency, exchangeRates } = item;
    const total = value * exchangeRates[currency].ask;
    acc += total;
    return acc;
  }, 0).toFixed(2);
  const currency = 'BRL';
  return (
    <header>
      Header
      <p data-testid="email-field">{email}</p>
      <div>
        <span>Despesa Total R$</span>
        <span data-testid="total-field">
          {totalExpenses}
        </span>
        <span data-testid="header-currency-field">{currency}</span>

      </div>
    </header>);
}
