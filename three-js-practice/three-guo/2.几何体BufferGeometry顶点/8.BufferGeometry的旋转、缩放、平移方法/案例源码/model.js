import * as THREE from 'three';

const geometry = new THREE.PlaneGeometry(100, 100); //矩形平面几何体

// 几何体xyz三个方向都放大2倍
geometry.scale(2, 2, 2);
// 几何体沿着x轴平移50
geometry.translate(50, 0, 0);
// 几何体绕着x轴旋转45度
geometry.rotateX(Math.PI / 4);
// 居中：偏移的几何体居中，你可以看到几何体重新与坐标原点重合
// geometry.center();

// 几何体旋转、缩放或平移之后，查看几何体顶点位置坐标的变化
// BufferGeometry的旋转、缩放、平移等方法本质上就是改变顶点的位置坐标
console.log('顶点位置数据', geometry.attributes.position);


const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff,
    // wireframe: true, //线条模式渲染mesh对应的三角形数据
    side: THREE.DoubleSide, //两面可见
});
const mesh = new THREE.Mesh(geometry, material);

export default mesh;