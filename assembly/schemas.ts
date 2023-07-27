export type Number = u32;

export class Balance {
  address!: string;
  amount!: Number;
}

export class State {
  balances!: Array<Balance>;
  name!: string;
}

export class Input {
  function!: string;
  target!: string;
  qty!: Number;
}

export class Action {
  caller!: string;
  input!: Input;
}

export class Result {
  state!: State;
  result!: Balance;
}