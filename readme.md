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

# Day 4: https://discoverthreejs.com/book/first-steps/transformations/

1. Translate: Vector class
2. Scale: Vector class
3. Representing Rotations: the Euler class
4. The Local/World Matrix

Note;

- The top-level scene defines world space, and every other object defines its own local space.

- When we move the child object around, it will move relative to the parent object’s coordinate system

- Positions are stored in the `Vector3` Class

- Values less than zero and greater than −1 will mirror and squash the object

- Cameras and Lights Cannot be Scaled

- By default, three.js will perform rotations around the X-axis, then around the Y-axis, and finally around the Z-axis, in an object’s local space. We can change this using the Euler.order property. The default order is called ‘XYZ’, but ‘YZX’, ‘ZXY’, ‘XZY’, ‘YXZ’ and ‘ZYX’ are also possible.

- Angles in three.js are specified using radians, not degrees. The only exception is the PerspectiveCamera.fov property which uses degrees to match real-world photography conventions.

- Not all objects can be rotated. For example, the DirectionalLight we introduced in the last chapter cannot be rotated.

# Day 5: https://discoverthreejs.com/book/first-steps/responsive-design/

1. Anti-Aliasing
2. Seamlessly Handling Browser Window Size Changes

Note: 

- Don’t do heavy calculations in the resize function.

- If you find this function growing in size, you might consider using a throttling function such as `lodash’s _.throttle` to prevent it from being called too often

- `devicePixelRatio` values other than 1 render the scene at a higher or low resolution and then scale it to fit in the canvas. A DPR of 2 will render the scene at double resolution and scale down, while a DPR of 0.5 will render at half resolution and scale up. As you can imagine, high DPR values are very expensive to render!