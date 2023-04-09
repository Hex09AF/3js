import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createBasicCube } from "./components/basic-cube.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

import { createControls } from "./systems/controls.js";

// These variables are module-scoped: we cannot access them
// from outside the module

class World {
  #camera;
  #renderer;
  #scene;
  #loop;

  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    this.#loop = new Loop(this.#camera, this.#scene, this.#renderer);
    container.append(this.#renderer.domElement);

    const cube = createCube();

    // this.#loop.addMesh(cube);

    const light = createLights();

    this.#scene.add(cube, light);

    const controls = createControls(this.#camera, this.#renderer.domElement);

    this.#loop.addMesh(controls);

    const resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  render() {
    // draw a single frame
    this.#renderer.render(this.#scene, this.#camera);
  }

  start() {
    this.#loop.start();
  }

  stop() {
    this.#loop.stop();
  }
}

export { World };
