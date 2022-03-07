import { mainA1 } from './file_a_1';
import { mainA2 } from './file_a_2';

export function moduleA(a, b) {
  return a + mainA1() - (b + mainA2());
}

export function noUseModuleA() {
  return 'No Use';
}
