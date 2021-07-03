import"./style.css";import"./css/main.css";import*as THREE from"three";import{OrbitControls}from"three/examples/jsm/controls/OrbitControls.js";import*as dat from"dat.gui";import{loadImage}from"./image";import*as $ from"jquery";import{gsap}from"gsap";import enlight from"/static/images/enlight_1.jpg";import loeyb from"/static/images/loeyb_1.png";import mego from"/static/images/mego_pc.png";import luv from"/static/images/luv.JPG";import loeyb1 from"/static/images/loeyb_1.png";import loeyb2 from"/static/images/loeyb_2.png";import loeyb3 from"/static/images/loeyb_3.png";import diamond1 from"/static/texture/diamond1.jpeg";import profilePic from"/static/images/profile_pic.jpeg";$("img.loeyb, img.enlight").on("click",(function(){gsap.to(sphere.position,{duration:1.4,z:1.6,y:-.5}),gsap.to(sphere1.position,{duration:1.4,z:1.6,y:-.5})})),$(".about").on("click",(function(){gsap.to(sphere.position,{duration:1.4,z:1.6,y:.5}),gsap.to(sphere1.position,{duration:1.4,z:1.6,y:.5})}));const textureLoader=new THREE.TextureLoader,normalTexture=textureLoader.load(diamond1);loadImage("img.enlight",enlight),loadImage("img.loeyb",loeyb),loadImage("img.mego",mego),loadImage("img.luv",luv),loadImage("img.loeyb1",loeyb1),loadImage("img.loeyb2",loeyb2),loadImage("img.loeyb3",loeyb3),loadImage("img.profilePic",profilePic);const pink1=new THREE.Color(155e5),lightblue2=new THREE.Color(16055039),canvas=document.querySelector("canvas.webgl"),scene=new THREE.Scene,geometry=new THREE.SphereBufferGeometry(.32,32,32),geometry1=new THREE.SphereBufferGeometry(.8,28,20),particlesGeometry=new THREE.BufferGeometry,particlesCnt=3500,posArray=new Float32Array(10500);for(let e=0;e<10500;e++)posArray[e]=5*(Math.random()-.5);particlesGeometry.setAttribute("position",new THREE.BufferAttribute(posArray,3));const material=new THREE.MeshStandardMaterial;material.metalness=-.05,material.roughness=.4,material.normalMap=normalTexture,material.color=lightblue2;const material1=new THREE.PointsMaterial;material1.size=.005,material1.color=lightblue2,material1.transparent=!0,material1.opacity=.8;const sphere=new THREE.Mesh(geometry,material),sphere1=new THREE.Points(geometry1,material1),particlesMesh=new THREE.Points(particlesGeometry,material1);sphere.position.y=.2,sphere1.position.y=.2,scene.add(sphere,particlesMesh,sphere1);const pointLight=new THREE.PointLight(16777215,.1);pointLight.position.x=2,pointLight.position.y=3,pointLight.position.z=4,scene.add(pointLight);const pointLight2=new THREE.PointLight(12485358,2);pointLight2.position.set(-1,0,1),pointLight2.intensity=1,scene.add(pointLight2);const pointLight3=new THREE.PointLight(6326772,2);pointLight3.position.set(1,1,1),pointLight3.intensity=1,scene.add(pointLight3);const pointLight4=new THREE.PointLight(10938872,2);pointLight4.position.set(1,-1,0),pointLight4.intensity=1,scene.add(pointLight4);const sizes={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(()=>{sizes.width=window.innerWidth,sizes.height=window.innerHeight,camera.aspect=sizes.width/sizes.height,camera.updateProjectionMatrix(),renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2))}));const camera=new THREE.PerspectiveCamera(75,sizes.width/sizes.height,.1,100);camera.position.x=0,camera.position.y=0,camera.position.z=2,scene.add(camera);const renderer=new THREE.WebGLRenderer({canvas,alpha:!0});renderer.setSize(sizes.width,sizes.height),renderer.setPixelRatio(Math.min(window.devicePixelRatio,2));const clock=new THREE.Clock,tick=()=>{const e=clock.getElapsedTime();sphere.rotation.y=.05*e,sphere1.rotation.y=.05*e,particlesMesh.rotation.y=.005*e,particlesMesh.rotation.x=.005*e,renderer.render(scene,camera),window.requestAnimationFrame(tick)};tick();