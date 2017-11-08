export class Engine {
  fuelType = [
    'PB',
    'DIESEL',
    'LPG',
    'ELECTRIC'
  ];

  driveType = [
    'FWD',
    'RWD',
    'AWD'
  ];
  fuel : string;
  power: number;
  drive: string;

  constructor(
    fuel : string,
  power: number,
  drive: string,

  ) {
    this.fuel = fuel;
    this.power = power;
    this.drive = drive;
  }

}
