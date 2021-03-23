/*
:::Class Type:::
Interfaces describe the public side of the class.
Only the instance side of the class is checked. (Not the static side.)

note:
注意区分实例和静态
实例的关键词是 implements
静态是对类的 关键词是 :
*/

interface ClockConstructor {
  new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
  currentTime: Date;
  setTime(d: Date): void;
  tick(): void;
}

class Clock implements ClockInterface {
  constructor(h: number, m: number) {}
  currentTime: Date = new Date();
  setTime(d: Date) { this.currentTime = d }
  tick() { console.log('Tick Tock') }
}

/* method 1 */
function createClock(
  ctor: ClockConstructor,
  hour: number,
  minute: number,
): ClockInterface {
  return new ctor(hour, minute);
}
let digital = createClock(Clock, 12, 17);

/* method 2 */
const Clock2: ClockConstructor = Clock;
let digital2: ClockInterface = new Clock2(12, 17);
