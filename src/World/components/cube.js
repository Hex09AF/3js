import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
  MathUtils,
} from "https://cdn.skypack.dev/three";

const radiansPerSecond = MathUtils.degToRad(30);

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(1, 1, 1);

  // create a default (purple) Basic material
  const spec = {
    color: "purple",
  };

  const material = new MeshStandardMaterial(spec);

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  // monkey patch
  cube.tick = (delta) => {
    // increase the cube's rotation each frame
    cube.rotation.z += radiansPerSecond * delta;
    cube.rotation.x += radiansPerSecond * delta;
    cube.rotation.y += radiansPerSecond * delta;
  };

  return cube;
}

export { createCube };
