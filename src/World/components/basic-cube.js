import {
  BoxBufferGeometry,
  Mesh,
  MeshBasicMaterial,
} from "https://cdn.skypack.dev/three";

function createBasicCube() {
  // create a geometry
  const geometry = new BoxBufferGeometry(1, 1, 1);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial();

  // create a Mesh containing the geometry and material
  const cube = new Mesh(geometry, material);

  return cube;
}

export { createBasicCube };
