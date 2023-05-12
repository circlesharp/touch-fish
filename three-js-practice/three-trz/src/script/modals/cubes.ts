import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import cube from './assets/overview.gltf';

const loader = new GLTFLoader();

const geometry = new THREE.BoxGeometry(20, 20, 20);
const material = new THREE.MeshLambertMaterial({ color: 0x00ffff });

const mesh1 = new THREE.Mesh(geometry, material);
const mesh2 = mesh1.clone();
mesh2.translateX(50);

export const group = new THREE.Group();
// group.add(mesh1, mesh2);

loader.load(cube, function (gltf) {
  console.log('控制台查看加载gltf文件返回的对象结构', gltf);
  console.log('gltf对象场景属性', gltf.scene);
  group.add(gltf.scene);
});
