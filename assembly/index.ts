import { State, Action, Result } from './schemas'
import { balance } from './lib/balance'

export function handle(state: State, action: Action): Result {
  if (action.input.function === 'balance') {
    return balance(state, action)
  }
  throw new Error('Function not found')
}