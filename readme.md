# Day 1: https://discoverthreejs.com/book/first-steps/first-scene/

1. Initial Setup
2. Create the Scene
3. Create the Camera
4. Create a Visible Object
5. Create the Renderer
6. Render the Scene

Note:

- You (Usually) Need a Light to See
- The scene is a holder for everything we can see.
  You can think of it as a “tiny universe” in which all your 3D objects live.
  The three.js class we use to create a scene is simply called Scene.
  The constructor takes no parameters.

- The geometry defines the shape of the mesh.

- To view the scene using perspective projection, we use the PerspectiveCamera.

- The material defines how the surface of the mesh looks.

- Meshes are the most common kind of visible object used in 3D computer graphics
  and are used to display all kinds of 3D objects -
  cats and dogs and humans and trees and buildings and flowers and mountains can all be represented using a mesh.

- If the scene is a tiny universe,
  and the camera is a telescope pointed at that universe,
  then the renderer is an artist who looks through the telescope and draws what they see

- We also need to tell the renderer what the pixel ratio of the device’s screen is.
  This is required to prevent blurring on HiDPI displays (also known as retina displays).

# Day 2: https://discoverthreejs.com/book/first-steps/world-app/

1. Initial Setup
2. Create the scene
3. Create a camera
4. Create the cube and add it to the scene
5. Create the renderer
6. Render the scene

Note:

- Components are anything that can be placed into the scene, like the cube, the camera, and the scene itself

- Systems are things that operate on components or other systems

- The `Resizer` gets a capital `R` because it will be a class

# Day 3: https://discoverthreejs.com/book/first-steps/physically-based-rendering/

1. Lighting
2. MeshStandardMaterial

Note:

- The most important three.js PBR (physically based rendering) material, the `MeshStandardMaterial`

- Physically correct lighting means calculating how light fades with distance from a light source (attenuation) using real-world physics equations ( `renderer.physicallyCorrectLights = true;`)

- Using meters is a convention rather than a rule ( `1 unit=1 meter`).

- `DirectionalLight` => Sunlight

- `PointLight` => Light Bulbs

- `RectAreaLight` => Strip lighting or bright windows

- `SpotLight` => Spotlights

- Shadows are Disabled By Default