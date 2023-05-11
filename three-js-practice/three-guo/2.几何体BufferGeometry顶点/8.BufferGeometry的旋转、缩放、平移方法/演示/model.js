import * as THREE from 'three';

const geometry = new THREE.PlaneGeometry(100, 100); //矩形平面几何体




const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
    // wireframe: true, //线条模式渲染mesh对应的三角形数据
    side: THREE.DoubleSide, //两面可见
});
const mesh = new THREE.Mesh(geometry, material);

export default mesh;