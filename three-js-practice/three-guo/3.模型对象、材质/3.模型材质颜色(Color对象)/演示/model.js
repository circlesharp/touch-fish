import * as THREE from 'three';


const geometry = new THREE.BoxGeometry(100, 100, 100);
const material = new THREE.MeshLambertMaterial({
    color: 0xffff00,
});
const mesh = new THREE.Mesh(geometry, material);


export default mesh;