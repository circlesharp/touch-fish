import * as THREE from 'three';
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';


// 三维场景
const scene = new THREE.Scene();


const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
    transparent: true,
    opacity: 0.5,
});
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
        // 在XOZ平面上分布
        mesh.position.set(i * 200, 0, j * 200);
        scene.add(mesh); //网格模型添加到场景中
    }

}
//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(2000);
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
/**
 * 透视投影相机设置
 */
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 8000);
camera.position.set(292, 223, 185); //相机在Three.js三维坐标系中的位置
// 1. 相机位置拉远，可以看到更大的观察范围
camera.position.set(800, 800, 800);
// 2. 超出视锥体远裁界面的范围的会被剪裁掉，不渲染  可以调整far参数适配
camera.position.set(2000, 2000, 2000);
camera.lookAt(0, 0, 0); //相机观察目标指向Three.js坐标系原点
// 3. 改变相机观察目标点
// camera.lookAt(1000, 0, 1000);
// 4. 一个物体：体验透视投影相机远小近大的投影规律
// 5. 视野角度fov越大，观察范围越大

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
// 相机控件.target属性在OrbitControls.js内部表示相机目标观察点，默认0,0,0
console.log('controls.target', controls.target);
controls.target.set(1000, 0, 1000);
controls.update(); //update()函数内会执行camera.lookAt(controls.targe)

// 画布跟随窗口变化
window.onresize = function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
};