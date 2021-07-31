import './style.css'
import './css/main.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'dat.gui'
import { loadImage } from './image'
import * as $ from 'jquery'
import { gsap } from 'gsap'

import enlight from '/static/images/enlight_1.jpg'
import enlight2 from '/static/images/enlight_2.png'
import loeyb from '/static/images/loeyb_1.png'
import mego from '/static/images/mego_pc.png'
import luv from '/static/images/luv.png'
import loeyb2 from '/static/images/loeyb_2.png'
import loeyb3 from '/static/images/loeyb_3.png'
import luv1 from '/static/images/luv_1.png'
import storyfund from '/static/images/Storyfund.png'
import AImeetup from '/static/images/AIMeetup_poster.png'
import ilhwa from '/static/images/ilhwa_1.png'
import plity from '/static/images/plity.png'

import diamond1 from '/static/texture/diamond1.jpeg'

import profilePic from '/static/images/profile_pic.jpeg'

$('img.loeyb, #loeyb .projectBoxText, img.luv, #luv .projectBoxText, img.mego, #mego .projectBoxText, img.storyfund, #storyfund .projectBoxText, img.enlight, #enlight .projectBoxText, img.plity, #plity .projectBoxText, img.ilhwa, #ilhwa .projectBoxText').on('click', function () {
    gsap.to(sphere.position, {
        duration: 1.4,
        z: 1.6,
        y: 0
    });
    gsap.to(sphere1.position, {
        duration: 1.6,
        z: 1.6,
        y: 0
    });
    gsap.to(material1, {
        opacity: 0.01
    });
    
})

$('.about').on('click', function () {
    gsap.to(sphere.position, {
        duration: 1.4,
        z: 1.6,
        y: 0.45
    });
    gsap.to(sphere1.position, {
        duration: 1.4,
        z: 1.6,
        y: 0.45
    });
    gsap.to(material1, {
        opacity: 0.01
    });
})

//loading
const textureLoader = new THREE.TextureLoader()
// const texture1 = textureLoader.load('/images/grad_8.png')
const normalTexture = textureLoader.load(diamond1)
loadImage('img.enlight', enlight)
loadImage('img.enlight2', enlight2)
loadImage('img.loeyb', loeyb)
loadImage('img.mego', mego)
loadImage('img.luv', luv)
loadImage('img.plity', plity)
loadImage('img.plity1', plity)
loadImage('img.loeyb2', loeyb2)
loadImage('img.loeyb3', loeyb3)
loadImage('img.luv1', luv1)
loadImage('img.AImeetup', AImeetup)
loadImage('img.storyfund', storyfund)
loadImage('img.ilhwa', ilhwa)

loadImage('img.profilePic', profilePic)

//color
const pink1 = new THREE.Color(0xEC82E0)
const lightblue2 = new THREE.Color(0xF4FAFF);

// Debug
// const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Objects

const geometry = new THREE.SphereBufferGeometry(0.32, 32, 32)
const geometry1 = new THREE.SphereBufferGeometry(0.8, 28, 20)

const particlesGeometry = new THREE.BufferGeometry;
const particlesCnt = 4000;

const posArray = new Float32Array(particlesCnt * 3)

for (let i = 0; i < particlesCnt * 3; i++) {
    // posArray[i] =Math.random()
    posArray[i] = (Math.random() - 0.5) * 5
}

particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3))


// Materials

const material = new THREE.MeshStandardMaterial()
material.metalness = -0.05
material.roughness = 0.4
material.normalMap = normalTexture
material.color = lightblue2

const material1 = new THREE.PointsMaterial()
material1.size = 0.005
material1.color = lightblue2
material1.transparent = true
material1.opacity = .68

// material.emissiveMap = texture1



// Mesh
const sphere = new THREE.Mesh(geometry, material)
const sphere1 = new THREE.Points(geometry1, material1)
const particlesMesh = new THREE.Points(particlesGeometry, material1)
sphere.position.y = 0.2
sphere1.position.y = 0.2
scene.add(sphere, particlesMesh, sphere1)


// Lights

const pointLight = new THREE.PointLight(0xffffff, 0.1)
pointLight.position.x = 2
pointLight.position.y = 3
pointLight.position.z = 4
scene.add(pointLight)

const pointLight2 = new THREE.PointLight(0xBE82EE, 2)
pointLight2.position.set(-1, 0, 1)
pointLight2.intensity = 1
scene.add(pointLight2)

const pointLight3 = new THREE.PointLight(0x6089F4, 2)
pointLight3.position.set(1, 1, 1)
pointLight3.intensity = 1
scene.add(pointLight3)

const pointLight4 = new THREE.PointLight(0xA6E9F8, 2)
pointLight4.position.set(1, -1, 0)
pointLight4.intensity = 1
scene.add(pointLight4)


// gui.add(pointLight2.position, 'x').min(-3).max(3).step(0.01)
// gui.add(pointLight2.position, 'y').min(-3).max(3).step(0.01)
// gui.add(pointLight2.position, 'z').min(-3).max(3).step(0.01)
// // gui.add(pointLight2, 'intensity').max(0).min(10).step(0.1)

// gui.add(material, 'metalness').min(-1).max(3).step(0.01)
// gui.add(material, 'roughness').min(-1).max(3).step(0.01)

/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () => {
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.x = 0
camera.position.y = 0
camera.position.z = 2
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */


// mouse
document.addEventListener('mousemove', onDocumentMouseMove)

let mouseX=1
let mouseY=1

let targetX=0
let targetY=0

const windowHalfX= window.innerWidth/2;
const windowHalfY = window.innerHeight/2;

function onDocumentMouseMove(event) {
    mouseX=event.clientX*.01
    mouseY=event.clientY*.01
}
const clock = new THREE.Clock()

const tick = () => {

    const elapsedTime = clock.getElapsedTime()
    targetX= mouseX*0.001
    targetY=mouseY*0.001
    // Update objects
    sphere.rotation.y = elapsedTime* (windowHalfX*0.0001+targetX)
    sphere1.rotation.y = elapsedTime * (windowHalfX*0.0001+targetX)
    particlesMesh.rotation.y = 0.005 * elapsedTime
    particlesMesh.rotation.x = 0.005 * elapsedTime

    // Update Orbital Controls
    controls.update()
    sphere.rotation.y+= .5*(targetX-sphere.rotation.y)
    
    // controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()

var media = $('video').not("[autoplay='autoplay']");

//for media, you could give your scroll play videos a class if you need to make it more specific. This would play ALL html5 video tags when scrolled too. 
var tolerancePixel = 80;

function checkMedia(){
    // Get current browser top and bottom
    var scrollTop = $(window).scrollTop() + tolerancePixel;
    var scrollBottom = $(window).scrollTop() + $(window).height() - tolerancePixel;

    media.each(function(index, el) {
        var yTopMedia = $(this).offset().top;
        var yBottomMedia = $(this).height() + yTopMedia;

        if(scrollTop < yBottomMedia && scrollBottom > yTopMedia){ //view explaination in `In brief` section above
            $(this).get(0).play();
        } else {
            $(this).get(0).pause();
            // $(this).get(0).currentTime = 0;
        }
    });
}