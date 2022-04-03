import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editingExpenseStateAction,
  removeExpensesAction } from '../redux/actions/walletActions';

export default function ExpenseTable() {
  const { expenses } = useSelector((state) => state.wallet);
  const dispatch = useDispatch();
  return (
    <table>
      <thead>
        <tr>
          <th> Descrição </th>
          <th> Tag </th>
          <th> Método de pagamento </th>
          <th> Valor </th>
          <th> Moeda </th>
          <th> Câmbio utilizado </th>
          <th> Valor convertido </th>
          <th> Moeda de conversão </th>
          <th> Editar/Excluir </th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((item) => (
          <tr key={ item.id }>
            <td>{item.description}</td>
            <td>{item.tag}</td>
            <td>{item.method}</td>
            <td>{Number(item.value).toFixed(2)}</td>
            <td>
              {item.exchangeRates[item.currency].name
                .split('/')[0]}
            </td>
            <td>
              {Number(
                item.exchangeRates[item.currency].ask,
              ).toFixed(2)}

            </td>
            <td>
              {(Number(item.exchangeRates[item.currency].ask) * Number(item.value))
                .toFixed(2)}
            </td>
            <td>
              Real
            </td>
            <td>
              <button
                type="button"
                data-testid="edit-btn"
                onClick={ () => dispatch(editingExpenseStateAction(item.id)) }
              >
                Editar
              </button>
              <button
                type="button"
                data-testid="delete-btn"
                onClick={ () => dispatch(removeExpensesAction(item.id)) }
              >
                Excluir
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>);
}
