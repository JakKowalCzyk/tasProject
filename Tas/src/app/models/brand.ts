export class Brand {
  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  constructor(id: number, name: string) {
    this._id = id;
    this._name = name;
  }
  _id: number;
  _name: string;
}

