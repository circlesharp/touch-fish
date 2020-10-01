/* first case */
function printLabel(labeledObj: { label: string }) {
  console.log(labeledObj.label);
}
const myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

/* second case interface */
interface LabeledValue {
  label: string;
}
function printLabel02(labelObj: LabeledValue) {
  console.log(labelObj.label);
}
printLabel02(myObj);

/* Optional Properties */
interface SquareConfig {
  color?: string;
  width?: number;
}
interface SquareResult {
  color: string;
  area: number;
}
function createSquare(config: SquareConfig): SquareResult {
  let newSquare = { color: 'white', area: 100 };
  if (config.color) newSquare.color = config.color;
  if (config.width) newSquare.area = config.width ** 2;
  return newSquare;
}

