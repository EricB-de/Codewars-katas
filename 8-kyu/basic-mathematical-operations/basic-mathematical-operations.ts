export function basicOp(operation: string, value1: number, value2: number): number {
  switch(operation){
      case '+':
        return value1+value2;
        break;
      case '-':
        return value1-value2;
        break;
      case '*':
        return value1*value2;
        break;
      case '/':
        return value1/value2;
        break;
      default:
        return 0;
  }
}