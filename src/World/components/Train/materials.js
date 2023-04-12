import { MeshStandardMaterial } from "https://cdn.skypack.dev/three";

function createMaterials() {
  const body = new MeshStandardMaterial({
    color: "firebrick",
    flatShading: true,
  });

  const detail = new MeshStandardMaterial({
    color: "darkslategray",
    flatShading: true,
  });

  return { body, detail };
}

export { createMaterials };
