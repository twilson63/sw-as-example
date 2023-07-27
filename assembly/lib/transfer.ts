import { State, Action, Result, Balance } from '../schemas'

export function transfer(state: State, action: Action): Result {
  let account: Balance = { address: 'unknown', amount: 0 }
  // this is a naive implementation, needs checks
  for (var i = 0; i < state.balances.length; i++) {
    // debit caller
    if (action.caller === state.balances[i].address) {
      state.balances[i].amount = state.balances[i].amount - action.input.qty;
      account = state.balances[i];
    }
    // credit target
    if (action.input.target === state.balances[i].address) {
      state.balances[i].amount = state.balances[i].amount + action.input.qty;
    }
  }
  return {
    state,
    result: account
  }
}