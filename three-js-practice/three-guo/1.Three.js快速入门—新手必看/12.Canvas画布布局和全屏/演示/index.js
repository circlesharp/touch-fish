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

/**
 * 创建网格模型
 */
//创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(100, 100, 100);
// 漫反射网格材质；MeshLambertMaterial
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff, //设置材质颜色
    transparent: true, //开启透明
    opacity: 0.5, //设置透明度
});
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
scene.add(mesh); //网格模型添加到场景中

// AxesHelper：辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(100);
scene.add(axesHelper);

/**
 * 光源设置
 */
// 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
scene.add(directionalLight);
//环境光
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambient);


// width和height用来设置Three.js输出的Canvas画布尺寸(像素px)
const width = 800; //宽度
const height = 500; //高度
/**
 * 透视投影相机设置
 */
// 30:视场角度, width / height:Canvas画布宽高比, 1:近裁截面, 3000：远裁截面
const camera = new THREE.PerspectiveCamera(30, width / height, 1, 3000);
camera.position.set(292, 223, 185); //相机在Three.js三维坐标系中的位置
camera.lookAt(0, 0, 0); //相机观察目标指向Three.js坐标系原点

/**
 * 创建渲染器对象
 */
const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height); //设置three.js渲染区域的尺寸(像素px)
//three.js执行渲染命令会输出一个canvas画布，也就是一个HTML元素，你可以插入到web页面中
document.body.appendChild(renderer.domElement);

// 渲染循环
function render() {
    renderer.render(scene, camera); //执行渲染操作
    mesh.rotateY(0.01); //每次绕y轴旋转0.01弧度
    requestAnimationFrame(render); //请求再次执行渲染函数render，渲染下一帧
}
render();

// 设置相机控件轨道控制器OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);

