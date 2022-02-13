import { world } from './world';
import 'style-loader!css-loader!./style.css';

function hello(sth) {
  console.log(`Hello, ${sth}.`);
}

hello(world);
