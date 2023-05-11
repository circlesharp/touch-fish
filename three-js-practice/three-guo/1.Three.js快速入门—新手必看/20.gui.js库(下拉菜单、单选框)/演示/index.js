import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
// 从threejs扩展库引入gui.js
import {
    GUI
} from 'three/addons/libs/lil-gui.module.min.js';
const gui = new GUI(); //创建GUI对象 
gui.domElement.style.right = '0px';
gui.domElement.style.width = '300px';

//场景
const scene = new THREE.Scene();


// 一个网格模型
const geometry = new THREE.BoxGeometry(30, 30, 30);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff
});
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//创建一个对象，对象属性的值可以被GUI库创建的交互界面改变
const obj = {
    x: 30,
    scale: 0,
    bool: false,
};

// 1. 参数3、参数4数据类型：数字(拖动条)
gui.add(obj, 'x', 0, 180).onChange(function (value) {
    mesh.position.x = value;
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
    // mesh.rotateY(0.01);
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