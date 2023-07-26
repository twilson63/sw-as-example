import { handle } from './build/release.js'

const state = {
  balances: [
    { address: 'tom', amount: 100 },
    { address: 'dmac', amount: 200 },
    { address: 'sam', amount: 300 }
  ]
}

const action = {
  input: {
    function: 'balance',
    target: 'tom'
  }
}

console.log(JSON.stringify(
  handle(state, action), null, 2
))
