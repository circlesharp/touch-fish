import * as THREE from 'three';


const geometry = new THREE.BoxGeometry(100, 100, 100);
// const geometry = new THREE.PlaneGeometry(100, 60);
const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
    // transparent:true,
    // opacity:0.5,
});
const mesh = new THREE.Mesh(geometry, material);


export default mesh;