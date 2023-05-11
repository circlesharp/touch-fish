// 引入three.js
import * as THREE from 'three';
/**
 * 创建3D场景对象Scene
 */
const scene = new THREE.Scene();
/**
 * 创建网格模型
 */
//创建一个长方体几何对象Geometry
const geometry = new THREE.BoxGeometry(50, 50, 50);
//材质对象Material
const material = new THREE.MeshBasicMaterial({
    color: 0x0000ff, //设置材质颜色
});
const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
//设置网格模型在三维空间中的位置坐标，默认是坐标原点
mesh.position.set(0,10,0);
scene.add(mesh); //网格模型添加到场景中 

// console.log('三维场景',scene);