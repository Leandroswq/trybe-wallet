// Esse reducer será responsável por tratar as informações da pessoa usuária
import * as userActions from '../actions/userActions';

const INITIAL_STATE = {
  email: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case userActions.EMAIL:
    return { ...state, email: action.email };
  default:
    return state;
  }
}
