export type Number = u32;

export class Balance {
  address!: string;
  amount!: Number;
}

export class State {
  //balances!: Array<Array<string>>
  balances!: Array<Balance>
}

export class Input {
  function!: string;
  target!: string;
}

export class Action {
  input!: Input
}

export class Result {
  state!: State;
  result!: Balance;
}