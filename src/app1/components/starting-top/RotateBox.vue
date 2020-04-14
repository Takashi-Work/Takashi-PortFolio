<template>
  <canvas id="canvas" width="1400" height="700"></canvas>
</template>

<script>
import * as THREE from "three";

export default {
  name: "RotateBox",
  data() {
    const scene = new THREE.Scene();
    const renderer = null;
    const camera = new THREE.PerspectiveCamera(30, 960 / 540);
    const light = new THREE.DirectionalLight(0x00000);
    const geometry = new THREE.TorusGeometry(300, 100, 64, 100);
    const material = new THREE.MeshBasicMaterial({color: 0x6699FF});
    const torus = new THREE.Mesh(geometry, material);
    return { scene, renderer, camera, light, geometry, material, torus };
  },
  mounted() {
    const $canvas = document.getElementById("canvas");
    // canvasを後付けで設定する方法あったら教えてほしいー
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: $canvas
    });

    this.camera.position.set(0, 0, +1000);
    this.light.position.set(0, 0, 10);
    this.scene.add(this.torus);
    this.scene.add(this.light);

    this.animate();
  },
  methods: {
    animate() {
      requestAnimationFrame(this.animate);

      this.torus.rotation.x += 0.02;
      this.torus.rotation.y += 0.02;

      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>

<style></style>