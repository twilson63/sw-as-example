import { State, Action, Result } from './schemas'
import { balance } from './lib/balance'
import { transfer } from './lib/transfer'

export function handle(state: State, action: Action): Result {
  if (action.input.function === 'balance') {
    return balance(state, action)
  }
  if (action.input.function === 'transfer') {
    return transfer(state, action)
  }
  throw new Error('Function not found')
}