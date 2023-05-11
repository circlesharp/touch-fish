import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// 从threejs扩展库引入gui.js
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
const gui = new GUI();//创建GUI对象 
gui.domElement.style.right = '0px';
gui.domElement.style.width = '300px';

//场景
const scene = new THREE.Scene();


// 一个网格模型
const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial({color: 0x00ffff});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const obj = {
    x: 30,
    color:0x00ffff,
};
// 当obj的x属性变化的时候，就把此时obj.x的值value赋值给mesh的x坐标
gui.add(obj, 'x', 0, 180).onChange(function(value){
    // console.log('obj.x',obj.x);
    mesh.position.x = value;
});

// .addColor()生成颜色值改变的交互界面
gui.addColor(obj, 'color').onChange(function(value){
    // console.log('obj.color',obj.color);
    mesh.material.color.set(value);
});

//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);


//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);

// 光照强度属性.intensity
console.log('ambient.intensity',ambient.intensity);
// 通过GUI改变mesh.position对象的xyz属性
gui.add(ambient, 'intensity', 0, 2.0).name('环境光强度');
gui.add(directionalLight, 'intensity', 0, 2.0).name('平行光强度');

//渲染器和相机
const width = window.innerWidth;
const height = window.innerHeight;
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);
document.body.appendChild(renderer.domElement);



// 渲染循环
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();


const controls = new OrbitControls(camera, renderer.domElement);

// 画布跟随窗口变化
window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};