// 引入three.js
import * as THREE from 'three';

//长方体的几何中心默认与本地坐标原点重合
const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({color: 0x00ffff});
const mesh = new THREE.Mesh(geometry, material);





export default mesh;
