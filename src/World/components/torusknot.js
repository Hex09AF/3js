import {
  TorusKnotGeometry,
  Mesh,
  MeshBasicMaterial,
} from "https://cdn.skypack.dev/three";

function createTorusKnot() {
  // create a geometry
  const geometry = new TorusKnotGeometry(1, 0.1, 100, 16);

  // create a default (white) Basic material
  const material = new MeshBasicMaterial({ color: 0xffff00 });

  // create a Mesh containing the geometry and material
  const torusKnot = new Mesh(geometry, material);

  return torusKnot;
}

export { createTorusKnot };
