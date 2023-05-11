// 引入three.js
import * as THREE from 'three';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';


const geometry = new THREE.BoxGeometry(150, 150, 150);
const material = new THREE.MeshLambertMaterial({color: 0x00ffff});
const group = new THREE.Group();
const mesh = new THREE.Mesh(geometry, material);
group.add(mesh);


const width = window.innerWidth;
const height = window.innerHeight;
const camera2 = new THREE.PerspectiveCamera(30, width / height, 60, 3000);
camera2.position.set(-1000, 0, 0);
// camera2.position.set(200, 200, 200);
camera2.lookAt(0, 0, 0);

camera2.updateMatrixWorld(true);
// 相机可视化
const helper = new THREE.CameraHelper( camera2 );
group.add( helper );

// GUI界面控制改变的对象
const obj = {
     fov:30, 
     near:60, 
     far:3000,
    };
const gui = new GUI();//创建GUI对象 
gui.add(obj, 'fov', 0, 90).onChange(function(value){
    camera2.fov = value;
    // 相机参数变化，注意camera和CameraHelper更新
    camera2.updateProjectionMatrix();
    helper.update();
})
gui.add(obj, 'near', 1, 2000).onChange(function(value){
    camera2.near = value;
    // 相机参数变化，注意camera和CameraHelper更新
    camera2.updateProjectionMatrix();
    helper.update();
})
gui.add(obj, 'far', 50, 3000).onChange(function(value){
    camera2.far = value;
    // 相机参数变化，注意camera和CameraHelper更新
    camera2.updateProjectionMatrix();
    helper.update();
})

export default group;
