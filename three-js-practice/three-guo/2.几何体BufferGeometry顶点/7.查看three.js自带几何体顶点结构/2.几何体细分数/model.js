import * as THREE from 'three';


 //矩形几何体PlaneGeometry的参数3,4表示细分数，默认是1,1
// const geometry = new THREE.PlaneGeometry(100,50,1,1);//两个三角形
const geometry = new THREE.PlaneGeometry(100,50,2,1);//矩形一分为二,四个三角形
// const geometry = new THREE.PlaneGeometry(100,50,2,2);//8个三角形

// 球体，参数2、3分别代表宽高度两个方向上的细分数，默认32,16
// 细分数，越大，表面越光滑，但是三角形和顶点数量却越多
// const geometry = new THREE.SphereGeometry( 50, 32, 16 );
// 球体细分数比较低，表面就不会那么光滑
// const geometry = new THREE.SphereGeometry( 15, 8, 8 );


console.log('几何体',geometry);
console.log('顶点位置数据',geometry.attributes.position);
console.log('顶点索引数据',geometry.index);

const material = new THREE.MeshLambertMaterial({
    color: 0x00ffff, 
    wireframe:true,//线条模式渲染mesh对应的三角形数据
});
const mesh = new THREE.Mesh(geometry, material); 

export default mesh;