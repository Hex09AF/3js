import {
  BoxGeometry,
  MathUtils,
  Mesh,
  MeshStandardMaterial,
  TextureLoader,
} from "https://cdn.skypack.dev/three";

const radiansPerSecond = MathUtils.degToRad(30);

function createMaterial() {
  // create a "standard" material

  // create a texture loader.
  const textureLoader = new TextureLoader();

  // load a texture
  const texture = textureLoader.load("/assets/textures/uv-test-bw.png");
  const texture2 = textureLoader.load("/assets/textures/uv-test-col.png");

  // create a "standard" material using
  // the texture we just loaded as a color map
  const material = new MeshStandardMaterial({
    map: texture,
    lightMap: texture2,
  });

  return material;
}

function createCube() {
  // create a geometry
  const geometry = new BoxGeometry(1.5, 1.5, 1.5);

  const material = createMaterial();

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
