export class Kata {
  static validatePin(pin: string): boolean {
    if (pin.length !== 4 && pin.length !== 6) return false;
    let sortPin = pin.split('').filter(item => item >= '0' && item <= '9');
    return sortPin.length === pin.length;
  }
}