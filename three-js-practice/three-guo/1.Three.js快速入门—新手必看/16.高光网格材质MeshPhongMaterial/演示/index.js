// 引入three.js
import * as THREE from 'three';
// 引入轨道控制器扩展库OrbitControls.js
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
/**
 * 创建3D场景对象Scene
 */
const scene = new THREE.Scene();

// 创建网格模型

//BoxGeometry：长方体
// const geometry = new THREE.BoxGeometry(100, 100, 100);
// SphereGeometry：球体
const geometry = new THREE.SphereGeometry(50);

// MeshBasicMaterial不受光照影响
// const material = new THREE.MeshBasicMaterial({
//     color: 0xff0000, 
// });

// 漫反射，没有镜面反射效果，不会产生局部高光效果
const material = new THREE.MeshLambertMaterial({
    color: 0xff0000, 
});


const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);


//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(400, 200, 300);
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


// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);


// 渲染循环
function render() {
    renderer.render(scene, camera);
    requestAnimationFrame(render);
}
render();


// 画布跟随窗口变化
window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};