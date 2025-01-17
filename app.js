import * as THREE from 'https://cdn.skypack.dev/three@0.129.0/build/three.module.js';
import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';
// import { gsap } from 'https://cdn.skypack.dev/gsap';

const camera = new THREE.PerspectiveCamera(
    10,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
camera.position.z = 13;

const scene = new THREE.Scene();
let piano;
const loader = new GLTFLoader();
loader.load('./piano.glb',
    function (gltf) {
        piano = gltf.scene;
        piano.position.x = 0
        piano.position.y = -0.5
        piano.position.z = -25
        piano.rotation.x = 0.2
        piano.rotation.y = 1.55
        piano.rotation.z = 0.1
        scene.add(piano);

        // mixer = new THREE.AnimationMixer(piano);
        // modelMove();
    },
    function (xhr) {},
    function (error) {}
);

const renderer = new THREE.WebGLRenderer({alpha: true, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container3D').appendChild(renderer.domElement);

// light
const ambientLight = new THREE.AmbientLight(0xffffff, 1.3);
scene.add(ambientLight);

const topLight = new THREE.DirectionalLight(0xffffff, 1);
topLight.position.set(500, 500, 500);
scene.add(topLight);

let mouseX = window.innerWidth / 2
let mouseY = window.innerHeight / 2

const reRender3D = () => {
    requestAnimationFrame(reRender3D);
    
    piano.rotation.y = mouseX / window.innerWidth * 3
    piano.rotation.x = -0.4 + mouseY / window.innerHeight
    renderer.render(scene, camera);
};

document.onmousemove = (e) => {
    mouseX = e.clientX
    mouseY = e.clientY
}

reRender3D();

// let arrPositionModel = [
//     // {
//     //     id: 'banner',
//     //     position: {x: 2.9, y: -0.05, z: 1},
//     //     rotation: {x: 1.5, y: 0, z: 0}
//     //     // id: 'banner',
//     //     // position: {x: 0, y: -3, z: 0},
//     //     // rotation: {x: 0, y: 1.5, z: 0}
//     // },
//     // {
//     //     id: "intro",
//     //     position: { x: 2.3, y: -0.7, z: -6 },
//     //     rotation: { x: 0.5, y: 0.5, z: 0 },
//     // },
//     // {
//     //     id: "description",
//     //     position: { x: -1.8, y: -0.8, z: -6 },
//     //     rotation: { x: 0.6, y: 2.5, z: 0 },
//     // },
//     // {
//     //     id: "launch",
//     //     position: { x: 0, y: -0.1, z: 10 },
//     //     rotation: { x: 1.5, y: 1.55, z: 0 },
//     // },

//     // // {
//     // //     id: "footer",
//     // //     position: { x: 0, y: 0, z: 0 },
//     // //     rotation: { x: 0, y: 0, z: 0 },
//     // // },
// ];

// const modelMove = () => {
//     const sections = document.querySelectorAll('.section');
//     let currentSection;
//     sections.forEach((section) => {
//         const rect = section.getBoundingClientRect();
//         if (rect.top <= window.innerHeight / 2) {
//             currentSection = section.id;
//         }
//     });
//     let position_active = arrPositionModel.findIndex(
//         (val) => val.id == currentSection
//     );
//     if (position_active >= 0) {
//         let new_coordinates = arrPositionModel[position_active];
//         gsap.to(piano.position, {
//             x: new_coordinates.position.x,
//             y: new_coordinates.position.y,
//             z: new_coordinates.position.z,
//             duration: 1,
//             ease: "power1.out"
//         });
//         gsap.to(piano.rotation, {
//             x: new_coordinates.rotation.x,
//             y: new_coordinates.rotation.y,
//             z: new_coordinates.rotation.z,
//             duration: 3,
//             ease: "power1.out"
//         })
//     }
// }
// window.addEventListener('scroll', () => {
//     if (piano) {
//         modelMove();
//     }
// })
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
})
