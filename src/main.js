/**
Day 1: https://discoverthreejs.com/book/first-steps/first-scene/

Initial Setup
Create the Scene
Create the Camera
Create a Visible Object
Create the Renderer
Render the Scene

Note:
- You (Usually) Need a Light to See
-  The scene is a holder for everything we can see.
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
 */

import {
  BoxGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from "https://cdn.skypack.dev/three";

// Get a reference to the container element that will hold our scene
const container = document.querySelector("#scene-container");

// create a Scene
const scene = new Scene();

// Set the background color
scene.background = new Color("skyblue");

// Create a camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// create a geometry
const geometry = new BoxGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new MeshBasicMaterial();

// create a Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create the renderer
const renderer = new WebGLRenderer();

// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);
