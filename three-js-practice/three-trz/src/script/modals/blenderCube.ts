import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import cube from './assets/cube.gltf';
const loader = new GLTFLoader();

loader.load(cube, function (gltf) {
  console.log('控制台查看加载gltf文件返回的对象结构', gltf);
  console.log('gltf对象场景属性', gltf.scene);
});
