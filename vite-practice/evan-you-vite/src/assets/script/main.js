import { appendDom } from './tool';

const ele = document.createElement('p');
ele.innerText = 'dom created by script';

appendDom(ele);
