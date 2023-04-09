# day 8: https://discoverthreejs.com/book/first-steps/camera-controls/

1. Importing Plugins (Orbit control)

2. Working With the Camera While Using OrbitControls

Note:

- However, for damping to work, we must call `controls.update` every frame in the animation loop. If we’re rendering frames on demand instead of using the loop, we cannot use damping.

- As soon as we rotate the camera using our fancy new orbit controls, we’ll see a glaring problem. The camera rotates, but the light is fixed and shines only from one direction. The rear faces of the cube receive no light at all!
