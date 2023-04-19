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

# day 11: [first-steps/built-in-geometries](https://discoverthreejs.com/book/first-steps/built-in-geometries/)

1. The `Material.flatShading` Property
2. Working With Rotations
3. A Simple Toy Train Model

Note:

- Take a deeper look at using transformations, in particular rotation, which is the trickiest of the three transformations to use

# day 12: [first-steps/load-models](https://discoverthreejs.com/book/first-steps/load-models/)

1. Load 3D Models in glTF Format
2. The `GLTFLoader` Plugin
3. Create the birds.js Module
4. Extract the Mesh from the Loaded Data

Note:

- Originally released in 2017, glTF is now the best format for exchanging 3D assets on the web, and in many other fields

- `gltfData.animations` is an array of animation clips. Here, there’s a flying animation. We’ll make use of this in the next chapter.
- `gltfData.assets` contains metadata showing this glTF file was created using the Blender exporter.
- `gltfData.cameras` is an array of cameras. This file doesn’t contain any cameras, so the array is empty.
- `gltfData.parser` contains technical details about the GLTFLoader.
- `gltfData.scene` is a Group containing any meshes from the file. This is where we’ll find the parrot model.
- `gltfData.scenes` The glTF format supports storing multiple scenes in a single file. In practice, this feature is rarely used.
- `gltfData.userData` may contain additional non-standard data.

- Usually, all you need is `.animations`, `.cameras`, and `.scene` (not `.scenes`!) and you can safely ignore everything else.

# day 13: [first-steps/animation-system](https://discoverthreejs.com/book/first-steps/animation-system/)

1. The Animation System: Creating Animations

2. Play the Animation Clips from Parrot.glb, Flamingo.glb, and Stork.glb

Note:

- There are three elements involved in creating animations: `keyframes`, `KeyframeTrack`, and `AnimationClip`.

- the `AnimationMixer` allows us to turn a static object into an animated object, and finally, the `AnimationAction` connects a clip to the object and allows us to control it using actions such as play, pause, loop, reset, and so on

- Note that, although we called `.play`, the animation will not start yet. We still need to update the mixer in the animation loop, which we’ll do in a moment.

- Another thing you need to consider is what happens when the character stops walking and starts running. If you move instantly from one animation to another, it won’t look very good. Fortunately, the AnimationAction contains controls that allow you to blend two clips, gradually slow a clip to a stop, loop a clip, play in reverse, or at a different speed, and lots more
