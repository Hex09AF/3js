import {
  BoxGeometry,
  Mesh,
  MeshStandardMaterial,
} from "https://cdn.skypack.dev/three";

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

  return cube;
}

export { createCube };
