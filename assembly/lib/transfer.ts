import { State, Action, Result, Balance } from '../schemas'

export function transfer(state: State, action: Action): Result {
  let account: Balance;
  for (var i = 0; i < state.balances.length; i++) {
    if (action.caller === state.balances[i].address) {
      state.balances[i].amount = state.balances[i].amount - action.input.qty;
      account = state.balances[i];
    }
    if (action.input.target === state.balances[i].address) {
      state.balances[i].amount = state.balances[i].amount + action.input.qty;
    }
  }
  return {
    state,
    result: {
      address: 'tom',
      amount: 100
    }
  }
}