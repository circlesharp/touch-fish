import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { cubes } from './modals';

const width = 600;
const height = 400;

//场景
const scene = new THREE.Scene();
scene.add(cubes);
cubes.rotation.x = Math.PI / 4;

//辅助观察的坐标系
const axesHelper = new THREE.AxesHelper(10000);
scene.add(axesHelper);

//光源设置
const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
directionalLight.position.set(100, 60, 50);
const ambient = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(directionalLight, ambient);

//相机
export const camera = new THREE.PerspectiveCamera(
  75,
  width / height,
  0.1,
  9000
);
camera.position.set(292, 223, 185);
camera.lookAt(0, 0, 0);

// WebGL渲染器设置
export const renderer = new THREE.WebGLRenderer();
renderer.setSize(width, height);

// 轨道控制器
const orbitController = new OrbitControls(camera, renderer.domElement);

export function animate() {
  requestAnimationFrame(animate);

  orbitController.update();
  renderer.render(scene, camera);
}
