// 引入three.js
import * as THREE from 'three';

// 创建一个层级模型对象

// 批量创建多个长方体表示高层楼
const group1 = new THREE.Group(); //所有高层楼的父对象
for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(20, 60, 10);
    const material = new THREE.MeshLambertMaterial({
        color: 0x00ffff
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = i * 30; // 网格模型mesh沿着x轴方向阵列
    group1.add(mesh); //添加到组对象group1
}
// 平移父对象group1，所有子对象跟着平移
group1.position.y = 30;
// 旋转父对象group1，所有子对象跟着旋转
// group1.rotateY(Math.PI/2);


const group2 = new THREE.Group();
// 批量创建多个长方体表示洋房
for (let i = 0; i < 5; i++) {
    const geometry = new THREE.BoxGeometry(20, 30, 10);
    const material = new THREE.MeshLambertMaterial({
        color: 0x00ffff
    });
    const mesh = new THREE.Mesh(geometry, material);
    mesh.position.x = i * 30;
    group2.add(mesh); //添加到组对象group2
}
group2.position.z = 50;
group2.position.y = 15;

const model = new THREE.Group();
model.add(group1, group2);
// 整体平移model里面的所有模型对象
model.position.set(-50,0,-25);


export default model;
