// 引入Three.js
import * as THREE from 'three';
// 引入gltf模型加载库GLTFLoader.js
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';


const loader = new GLTFLoader(); //创建一个GLTF加载器

const model = new THREE.Group(); //声明一个组对象，用来添加加载成功的三维场景

// 单独.gltf文件
// loader.load("../../工厂.gltf", function (gltf) { 
//     model.add(gltf.scene);
// })
// 单独.glb文件
// loader.load("../../工厂.glb", function (gltf) { 
//     model.add(gltf.scene);
// })
// .gltf + .bin + 贴图文件
loader.load("../../工厂/工厂.gltf", function (gltf) { 
    model.add(gltf.scene);
})
export default model;
