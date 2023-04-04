import { createCamera } from "./components/camera.js";
import { createCube } from "./components/cube.js";
import { createBasicCube } from "./components/basic-cube.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";

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
    const basicCube = createBasicCube();
    basicCube.position.set(2, 0, 0);
    basicCube.rotation.set(-0.5, -0.1, 0.8);
    cube.rotation.set(-0.5, -0.1, 0.8);

    const light = createLights();

    this.#scene.add(basicCube, cube, light);

    const resizer = new Resizer(container, this.#camera, this.#renderer);
  }

  render() {
    // draw a single frame
    this.#renderer.render(this.#scene, this.#camera);
  }
}

export { World };
