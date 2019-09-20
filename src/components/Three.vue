<template>
  <canvas class="mb-4" id="threeJS-canvas"></canvas>
</template>

<script>
import * as THREE from "three";
import * as FBXLoader from "three-fbx-loader";
import * as OrbitControls from "three-orbitcontrols";
export default {
  mounted() {
    const canvas = document.querySelector("#threeJS-canvas");
    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
    function resizeRendererToDisplaySize(renderer) {
      //const canvas = renderer.domElement;
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      const needResize = width !== canvas.width || height !== canvas.height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return true;
    }

    main();

    function main() {
      // scene
      const scene = new THREE.Scene();

      // camera
      const fov = 40;
      const aspect = 2;
      const near = 0.1;
      const far = 100;
      const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
      const d = 30;
      camera.position.z = d;
      // camera.position.y = d;
      // camera.position.x = d;
      scene.add(camera);

      // camera controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.target.set(0, 0, 0);
      controls.update();
      controls.enableZoom = false;

      // set light
      const color = 0xffffff;
      const intensity = 1.0;
      const light = new THREE.AmbientLight(color, intensity);
      camera.add(light);

      const meshes = {};

      const url = require("@/assets/sceneBall.jpg");
      const texture = new THREE.TextureLoader().load(url);
      texture.wrapS = THREE.RepeatWrapping;
      texture.wrapT = THREE.MirroredRepeatWrapping;
      texture.repeat.set(1, 1);

      {
        // planet
        const geometry = new THREE.SphereGeometry(10, 64, 64);
        const material = new THREE.MeshBasicMaterial({
          map: texture
        });
        const mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
        meshes.planet = mesh;
      }

      render();

      function render(t) {
        t *= 0.001;

        meshes.planet.rotation.y = t / 2;
        meshes.planet.rotation.z = t / 2;

        // adjusting the camera according to canvas client size
        const needResize = resizeRendererToDisplaySize(renderer);
        if (needResize) {
          const canvas = renderer.domElement;
          camera.aspect = canvas.clientWidth / canvas.clientHeight;
          camera.updateProjectionMatrix();
        }

        renderer.render(scene, camera);

        window.requestAnimationFrame(render);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
canvas {
  width: 100%;
  height: 200px;
}
</style>