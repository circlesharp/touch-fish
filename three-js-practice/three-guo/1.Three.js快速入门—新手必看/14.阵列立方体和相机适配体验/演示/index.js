import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


// 三维场景
const scene = new THREE.Scene();

// 创建网格模型对象
const geometry = new THREE.BoxGeometry(100, 100, 100);
// 漫反射网格材质；MeshLambertMaterial
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff, //设置材质颜色
    transparent: true, //开启透明
    opacity: 0.5, //设置透明度
});
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
scene.add(mesh); //网格模型添加到场景中

//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);


//光源设置
const pointLight = new THREE.PointLight(0xffffff, 1.0);
pointLight.position.set(400, 200, 300); 
scene.add(pointLight); 
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

