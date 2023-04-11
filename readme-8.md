# day 8: https://discoverthreejs.com/book/first-steps/camera-controls/

1. Importing Plugins (Orbit control)

2. Working With the Camera While Using OrbitControls

Note:

- However, for damping to work, we must call `controls.update` every frame in the animation loop. If we’re rendering frames on demand instead of using the loop, we cannot use damping.

- As soon as we rotate the camera using our fancy new orbit controls, we’ll see a glaring problem. The camera rotates, but the light is fixed and shines only from one direction. The rear faces of the cube receive no light at all!

# day 9: https://discoverthreejs.com/book/first-steps/ambient-lighting/

1. Simulating Lighting in Real-Time
2. A Brief Overview of Lighting Techniques
3. Image-Based Lighting (Environment mapping is one of the most powerful lighting techniques available)
4. The Fast and Easy Solution: Ambient Lighting

Note:

- real-time graphics engines split lighting into two parts:

  - Direct lighting: light rays that come directly from a light source and hit an object.

  - Indirect lighting: light rays that have bounced off the walls and other objects in the room before hitting an object, changing color and losing intensity with each bounce.

- Lights are expensive, and we want to add as few lights as possible to our scenes

- Changing the position of the AmbientLight has no effect either.

- We’ll usually set the intensity of the AmbientLight to a lower value than the direct light it has been paired with

# day 10: https://discoverthreejs.com/book/first-steps/organizing-with-group/

1. Adding Many Objects to the Scene
2. The `Group` Object
3. Custom Properties like `.tick` are Not Cloned
4. Create the meshGroup.js Module

Note:

- When we move a group around, all of its children move too. Likewise, if we rotate or scale a group, all of its children will be rotated or scaled too. However, the children can also be translated, rotated, or scaled independently.
