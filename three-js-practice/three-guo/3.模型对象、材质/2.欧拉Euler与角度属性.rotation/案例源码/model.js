import * as THREE from 'three';


const geometry = new THREE.BoxGeometry(50, 50, 50);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
});
const mesh = new THREE.Mesh(geometry, material);

// 角度属性.rotation使用threejs欧拉对象Euler表示的
console.log('模型角度属性.rotation的值', mesh.rotation);

// 创建一个欧拉对象，表示绕着x、y、z轴分别旋转45度，0度，90度
// const Euler = new THREE.Euler( Math.PI/4,0, Math.PI/2);
const Euler = new THREE.Euler();
// 通过xyz分量属性定义和参数一样
Euler.x = Math.PI/4;
Euler.y = 0;
Euler.z = Math.PI/2;

//绕y轴的角度设置为60度
mesh.rotation.y += Math.PI/3;
//绕y轴的角度增加60度
mesh.rotation.y += Math.PI/3;
//绕y轴的角度减去60度
mesh.rotation.y -= Math.PI/3;

// 通过模型的旋转方法，也可以改变角度属性.rotation
mesh.rotateY(Math.PI / 2);// 绕着Y轴旋转90度
//控制台查看：旋转方法，改变了rotation属性
console.log('mesh.rotation',mesh.rotation);

export default mesh;