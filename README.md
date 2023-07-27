# SmartWeave as AssemblyScript Example

In this example we do a very simple implementation of a SmartWeave Token

This contract supports 
- balance
- transfer

methods and has a balances object.

## Development

```sh
yarn 
yarn asbuild
node test.mjs
```

NOTES:

The one note is that I had to change how balances where represented:

```js
const state = {
  name: 'U Coin',
  balances: [
    { address: 'tom', amount: 100 },
    { address: 'dmac', amount: 200 },
    { address: 'sam', amount: 300 }
  ]
}
```

This is because AssemblyScript can't type dynamic Object Literals (that I found)
I do think this may end up working better, because, the balance array is typed.