import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
//引入性能监视器stats.js,显示帧率
import Stats from 'three/addons/libs/stats.module.js';
//创建stats对象
const stats = new Stats();
//Stats.domElement:web页面上输出计算结果,一个div元素
document.body.appendChild(stats.domElement);

// 三维场景
const scene = new THREE.Scene();

// 随机创建大量的模型,测试渲染性能
const num = 1000; //控制长方体模型数量，你可以一直增加或减少看看帧率变化，电脑性能不同结果不同
for (let i = 0; i < num; i++) {
    const geometry = new THREE.BoxGeometry(5, 5, 5);
    const material = new THREE.MeshLambertMaterial({
        color: 0x00ffff
    });
    const mesh = new THREE.Mesh(geometry, material);
    // 随机生成长方体xyz坐标
    const x = (Math.random() - 0.5) * 200
    const y = (Math.random() - 0.5) * 200
    const z = (Math.random() - 0.5) * 200
    mesh.position.set(x, y, z)
    scene.add(mesh); // 模型对象插入场景中
}

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
    stats.update(); //渲染循环中执行stats.update()来刷新时间
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