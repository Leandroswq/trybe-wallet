// Esse reducer será responsável por tratar as informações da pessoa usuária
import * as userActions from '../actions/userActions';

const INITIAL_STATE = {
  email: '',
  login: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case userActions.EMAIL:
    return { ...state, email: action.email, login: true };
  default:
    return state;
  }
}
