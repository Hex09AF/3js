import { loadBirds } from "./components/Birds/Birds.js";
import { createCamera } from "./components/camera.js";
import { createMeshGroup } from "./components/meshGroup.js";
import { createLights } from "./components/lights.js";
import { createScene } from "./components/scene.js";
import { Train } from "./components/Train/Train.js";

import { createRenderer } from "./systems/renderer.js";
import { Resizer } from "./systems/Resizer.js";
import { Loop } from "./systems/Loop.js";

import { createControls } from "./systems/controls.js";
import { createAxesHelper, createGridHelper } from "./components/helpers.js";

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

    const train = new Train();

    this.#loop.addMesh(train);

    const { ambientLight, mainLight } = createLights();

    this.#scene.add(ambientLight, mainLight, train);

    const controls = createControls(this.#camera, this.#renderer.domElement);

    this.#loop.addMesh(controls);

    const resizer = new Resizer(container, this.#camera, this.#renderer);

    this.#scene.add(createAxesHelper(), createGridHelper());
  }

  async init() {
    const { parrot, flamingo, stork } = await loadBirds();

    this.#scene.add(parrot, flamingo, stork);
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
