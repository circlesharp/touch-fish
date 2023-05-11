
// 从threejs扩展库引入gui.js
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';


//创建一个GUI对象，你可以看到浏览器右上角多了一个交互界面，GUI本质上就是一个前端js库。
const gui = new GUI();
//改变交互界面style属性
gui.domElement.style.right = '0px';
gui.domElement.style.width = '300px';


//创建一个对象，对象属性的值可以被GUI库创建的交互界面改变
const obj = {
    x: 30,
    y: 60,
    z: 300,
};
// gui界面上增加交互界面，改变obj对应属性
gui.add(obj, 'x', 0, 100);
gui.add(obj, 'y', 0, 50);
gui.add(obj, 'z', 0, 60);

// 可以不停地打印obj的值，这样通过gui界面拖动改变obj对象属性的的时候，便于观察obj的变化
setInterval(function () {
    console.log('x', obj.x);
    // console.log('y',obj.y);
    // console.log('z',obj.z);
}, 10)



