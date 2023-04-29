import { Clock } from "https://cdn.skypack.dev/three";

const clock = new Clock();

class Loop {
  #renderer;
  #scene;
  #camera;
  #updatables;

  constructor(camera, scene, renderer) {
    this.#camera = camera;
    this.#scene = scene;
    this.#renderer = renderer;
    this.#updatables = [];
  }
  addMesh(mesh) {
    this.#updatables.push(mesh);
  }
  start() {
    this.#renderer.setAnimationLoop(() => {
      // tell every animated object to tick forward one frame
      this.tick();

      // render a frame
      this.#renderer.render(this.#scene, this.#camera);
    });
  }
  stop() {
    this.#renderer.setAnimationLoop(null);
  }
  tick() {
    const delta = clock.getDelta();
    for (const object of this.#updatables) {
      object.tick(delta);
    }
  }
}

export { Loop };
