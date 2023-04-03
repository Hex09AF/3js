import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createScene } from "./components/scene.js";
import { createTorusKnot } from "./components/torusknot.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";

// These variables are module-scoped: we cannot access them
// from outside the module

class World {
  #camera;
  #renderer;
  #scene;

  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#renderer = createRenderer();
    container.append(this.#renderer.domElement);

    const cube = createCube();
    const torusKnot = createTorusKnot();

    this.#scene.add(torusKnot);
    torusKnot.position.set(1, 1, 1);
    this.#scene.add(cube);

    const resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  render() {
    // draw a single frame
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export { World };
