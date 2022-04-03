import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addExpensesAction, updateExpenseAction } from '../redux/actions/walletActions';
import fetchApi from '../services/economiaAPI';
import './css/ExpenseForm.css';

export default function ExpensyForm() {
  const [value, setValue] = useState(0);
  const [currency, setCurrency] = useState('USD');
  const [method, setMethod] = useState('Dinheiro');
  const [category, setCategory] = useState('Alimentação');
  const [description, setDescription] = useState('');
  const [exchangeRates, setExchangeRates] = useState(null);
  const dispatch = useDispatch();
  const { isExpenseEditing, editExpenseId, expenses } = useSelector(
    (state) => state.wallet,
  );
  useEffect(() => {
    if (isExpenseEditing) {
      const index = expenses.findIndex((item) => item.id === editExpenseId);
      const expense = expenses[index];
      setValue(expense.value);
      setCurrency(expense.currency);
      setMethod(expense.method);
      setCategory(expense.tag);
      setDescription(expense.description);
      setExchangeRates(expense.exchangeRates);
    }
  }, [editExpenseId, isExpenseEditing, expenses]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const expense = {
      id: null,
      value,
      currency,
      method,
      tag: category,
      description,

    };
    if (!isExpenseEditing) {
      expense.exchangeRates = await fetchApi();
      dispatch(addExpensesAction(expense));
    } else {
      expense.exchangeRates = exchangeRates;
      dispatch(updateExpenseAction(expense));
    }
    setValue(0);
    setDescription('');
    setExchangeRates(null);
  };

  const currenciesProp = useSelector((state) => state.wallet.currencies);

  return (
    <form
      onSubmit={ handleSubmit }
      className="background-color-tertiary ExpensyForm"
    >
      <label htmlFor="expensy-form--value">
        {'Valor: '}
        <input
          className="expensy-form--value"
          data-testid="value-input"
          id="expensy-form--value"
          type="number"
          name="value"
          value={ value }
          onChange={ ({ target }) => setValue(target.value) }
        />
      </label>

      <label htmlFor="expensy-form--currency">
        {'Moeda: '}
        <select
          id="expensy-form--currency"
          data-testid="currency-input"
          value={ currency }
          name="currency"
          onChange={ ({ target }) => setCurrency(target.value) }
        >

          {currenciesProp.map((item) => (
            <option
              value={ item }
              key={ item }
            >
              {item}
            </option>))}
        </select>
      </label>

      <label htmlFor="expensy-form--payment-method">
        {'Método de pagamento: '}
        <select
          id="expensy-form--payment-method"
          value={ method }
          name="method"
          onChange={ ({ target }) => setMethod(target.value) }
          data-testid="method-input"
        >
          <option value="Dinheiro">Dinheiro</option>
          <option value="Cartão de crédito">Cartão de crédito</option>
          <option value="Cartão de débito">Cartão de débito</option>
        </select>
      </label>

      <label htmlFor="expensy-form--category">
        {'Categoria: '}
        <select
          id="expensy-form--category"
          value={ category }
          name="category"
          onChange={ ({ target }) => setCategory(target.value) }
          data-testid="tag-input"
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>

      <label htmlFor="expensy-form--description">
        {'Descrição: '}
        <input
          data-testid="description-input"
          id="expensy-form--description"
          name="description"
          value={ description }
          onChange={ ({ target }) => setDescription(target.value) }
        />
      </label>
      {isExpenseEditing
        ? <button type="submit">Editar despesa</button>
        : <button type="submit">Adicionar despesa</button>}

    </form>

  );
}
