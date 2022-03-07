import { mainB1 } from './file_b_1';
import { mainB2 } from './file_b_2';
// import { noUse } from './file_no_use_b';

export function moduleB() {
  return mainB1() + mainB2();
}

export function noUseModuleA() {
  return 'No Use';
}
