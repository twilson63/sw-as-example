import { State, Action, Result, Balance } from '../schemas'

export function balance(state: State, action: Action): Result {
  let account: Balance = { address: '', amount: 0 }
  for (var i = 0; i < state.balances.length; i++) {
    if (state.balances[i].address === action.input.target) {
      account = state.balances[i]
      break;
    }
  }
  return {
    state,
    result: account
  }
}