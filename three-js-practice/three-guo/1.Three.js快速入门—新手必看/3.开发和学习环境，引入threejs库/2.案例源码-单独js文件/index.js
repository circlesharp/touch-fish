// 引入three.js库：借助<script type="importmap">，和nodejs开发环境中写法一样
import * as THREE from 'three';
// 浏览器控制台测试，是否引入成功
console.log(THREE.Scene);


// 引入扩展库OrbitControls.js
import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';
// 引入扩展库GLTFLoader.js
import {
    GLTFLoader
} from 'three/addons/loaders/GLTFLoader.js';

console.log(OrbitControls);
console.log(GLTFLoader);