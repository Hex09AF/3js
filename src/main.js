/**
Day 2: https://discoverthreejs.com/book/first-steps/world-app/

Initial Setup
Create the scene
Create a camera
Create the cube and add it to the scene
Create the renderer
Render the scene

Note:

*/
import { World } from "./World/World.js";

// create the main function
function main() {
  // Get a reference to the container element
  const container = document.querySelector("#scene-container");

  // 1. Create an instance of the World app
  const world = new World(container);

  // 2. Render the scene
  world.render();
}

// call main to start the app
main();
