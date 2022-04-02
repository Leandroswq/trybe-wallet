// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import * as walletActions from '../actions/walletActions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  expensesId: 0,
  isExpenseEditing: false,
  editExpenseId: null,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case walletActions.CURRENCIES:
    return { ...state, currencies: action.currencies };

  case walletActions.ADD_EXPENSE: {
    const { expense } = action;
    expense.id = state.expensesId;
    return { ...state,
      expenses: [...state.expenses, expense],
      expensesId: state.expensesId + 1 };
  }

  case walletActions.REMOVE_EXPENSES: {
    return { ...state,
      expenses: state.expenses
        .filter((item) => item.id !== action.id) };
  }

  case walletActions.IS_EDITING_EXPENSE:
    return { ...state,
      isExpenseEditing: true,
      editExpenseId: action.id };

  case walletActions.UPDATE_EXPENSE: {
    const { editExpenseId } = state;
    const expenses = [...state.expenses];
    const index = expenses.findIndex((item) => item.id === editExpenseId);
    expenses[index] = action.expense;
    expenses[index].id = state.editExpenseId;
    return { ...state, expenses, isExpenseEditing: false, editExpenseId: null };
  }

  default:
    return state;
  }
}
