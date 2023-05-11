import * as THREE from 'three';


// const geometry = new THREE.BoxGeometry(100, 100, 100);//长方体
// const geometry = new THREE.PlaneGeometry(100,100,2,2);//矩形平面

const geometry = new THREE.SphereGeometry(50,32,16);

console.log('.postion',geometry.attributes.position);
console.log('.index',geometry.index);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff, 
    wireframe:true,
});
const mesh = new THREE.Mesh(geometry, material); 

export default mesh;