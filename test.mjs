import { handle } from './build/release.js'

const state = {
  balances: [
    { address: 'tom', amount: 100 },
    { address: 'dmac', amount: 200 },
    { address: 'sam', amount: 300 }
  ]
}

const balanceAction = {
  caller: 'tom',
  input: {
    function: 'balance',
    target: 'tom'
  }
}

console.log('toms balance:', handle(state, balanceAction).result.amount)

const transferAction = {
  caller: 'tom',
  input: {
    function: 'transfer',
    target: 'dmac',
    qty: 50
  }
}
console.log('transfer 50 U to dmac')
console.log('balances: ', handle(state, transferAction).state.balances)

