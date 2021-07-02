import"./style.css";import"./css/main.css";import*as THREE from"three";import{OrbitControls}from"three/examples/jsm/controls/OrbitControls.js";import*as dat from"dat.gui";import{loadImage}from"./image";import enlight from"/static/images/enlight_1.jpg";const textureLoader=new THREE.TextureLoader;loadImage("img.project1",enlight);const pink1=new THREE.Color(155e5),lightblue2=new THREE.Color(16055039),canvas=document.querySelector("canvas.webgl"),scene=new THREE.Scene,geometry=new THREE.SphereBufferGeometry(.24,32,32),geometry1=new THREE.SphereBufferGeometry(.52,28,20),particlesGeometry=new THREE.BufferGeometry,particlesCnt=3e3,posArray=new Float32Array(9e3);for(let e=0;e<9e3;e++)posArray[e]=5*(Math.random()-.5);particlesGeometry.setAttribute("position",new THREE.BufferAttribute(posArray,3));const material=new THREE.MeshStandardMaterial;material.metalness=.1,material.roughness=.8;const material1=new THREE.PointsMaterial;material1.size=.005,material1.color=lightblue2,material1.transparent=!0,material1.opacity=.8,material.emissive=new THREE.Color(10602731);const sphere=new THREE.Mesh(geometry,material),sphere1=new THREE.Points(geometry1,material1),particlesMesh=new THREE.Points(particlesGeometry,material1);sphere.position.y=.5,sphere1.position.y=.5,scene.add(sphere,particlesMesh,sphere1);const pointLight=new THREE.PointLight(16777215,.1);pointLight.position.x=2,pointLight.position.y=3,pointLight.position.z=4,scene.add(pointLight);const sizes={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(()=>{sizes.width=window.innerWidth,sizes.height=window.innerHeight,camera.aspect=sizes.width/sizes.height,camera.updateProjectionMatrix(),renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}));const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height,.1,100);camera.position.x=0,camera.position.y=0,camera.position.z=2,scene.add(camera);const renderer=new THREE.WebGLRenderer({canvas,alpha:!0});renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const clock=new THREE.Clock,tick=()=>{const e=clock.getElapsedTime();sphere.rotation.y=.5*e,sphere1.rotation.y=.05*e,particlesMesh.rotation.y=.005*e,particlesMesh.rotation.x=.005*e,renderer.render(scene,camera),window.requestAnimationFrame(tick)};tick();