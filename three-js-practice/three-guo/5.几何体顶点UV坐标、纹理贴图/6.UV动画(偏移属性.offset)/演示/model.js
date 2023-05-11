import * as THREE from 'three';



const geometry = new THREE.PlaneGeometry(200, 20);
//纹理贴图加载器TextureLoader
const texLoader = new THREE.TextureLoader();
// .load()方法加载图像，返回一个纹理对象Texture
const texture = texLoader.load('./纹理1.jpg');

const material = new THREE.MeshLambertMaterial({
    map: texture,//map表示材质的颜色贴图属性
});
const mesh = new THREE.Mesh(geometry, material);
mesh.rotateX(-Math.PI/2);




export  {mesh,texture};