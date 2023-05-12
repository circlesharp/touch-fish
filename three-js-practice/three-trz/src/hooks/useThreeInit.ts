import * as THREE from 'three';
import { ref, onMounted } from 'vue';

export function useThreeInit(
  renderer: THREE.WebGLRenderer,
  animate: () => void
) {
  const targetRef = ref();

  onMounted(() => {
    targetRef.value.appendChild(renderer.domElement);
    animate();
  });

  return {
    targetRef,
  };
}
