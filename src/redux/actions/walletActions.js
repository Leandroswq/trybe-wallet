export const CURRENCIES = 'currencies';
export const ADD_EXPENSE = 'expenses';
export const REMOVE_EXPENSES = 'removeExpense';
export const IS_EDITING_EXPENSE = 'isEditingExpense';
export const UPDATE_EXPENSE = 'updateExpense';

export const currenciesAction = (currencies) => ({ type: CURRENCIES, currencies });
export const addExpensesAction = (expense) => ({ type: ADD_EXPENSE, expense });
export const removeExpensesAction = (id) => ({ type: REMOVE_EXPENSES, id });
export const editingExpenseStateAction = (id) => (
  { type: IS_EDITING_EXPENSE, id });
export const updateExpenseAction = (expense) => ({ type: UPDATE_EXPENSE, expense });
