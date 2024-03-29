import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { currenciesAction } from '../redux/actions/walletActions';
import Header from '../Components/Header';
import { fetchApiFiltered } from '../services/economiaAPI';
import ExpensyForm from '../Components/ExpenseForm';
import ExpenseTable from '../Components/ExpenseTable';

export default function Wallet() {
  const dispatch = useDispatch();
  const dispatchCurrencies = async () => {
    const response = await fetchApiFiltered('USDT');
    const keys = Object.keys(response);
    dispatch(currenciesAction(keys));
  };

  useEffect(() => {
    dispatchCurrencies();
  });
  return (
    <div className="container-flex background-color-prymary">
      <Header />
      <ExpensyForm />
      <ExpenseTable />
    </div>);
}
