import React, { useEffect, useState } from 'react';

import * as THREE from 'three';

import * as POSTPROCESSING from 'postprocessing';

import smoke from '../../images/smoke.png';
import stars from '../../images/stars.png';

const Home = () => {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });

  useEffect(() => {
    const scene: THREE.Scene = new THREE.Scene();
    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(
      60,
      dimensions.width / dimensions.height,
      1,
      2000
    );

    let cloudParticles: Array<
      THREE.Mesh<THREE.PlaneGeometry, THREE.MeshLambertMaterial>
    > = [];

    camera.position.z = 1;
    camera.rotation.x = 1.16;
    camera.rotation.y = -0.12;
    camera.rotation.z = 0.27;

    let ambient: THREE.AmbientLight = new THREE.AmbientLight(0x555555);
    ambient.castShadow = true;
    scene.add(ambient);

    let directionalLight: THREE.DirectionalLight = new THREE.DirectionalLight(
      0xbf40bf
    );
    directionalLight.position.set(0, 0, 1);
    scene.add(directionalLight);

    let orangeLight = new THREE.PointLight(0xcc6600, 50, 450, 1.7);
    orangeLight.position.set(200, 300, 100);
    scene.add(orangeLight);

    let redLight: THREE.PointLight = new THREE.PointLight(
      0xd8547e,
      50,
      450,
      1.7
    );
    redLight.position.set(100, 300, 100);
    scene.add(redLight);

    let blueLight: THREE.PointLight = new THREE.PointLight(
      0x3677ac,
      50,
      450,
      1.7
    );
    blueLight.position.set(300, 300, 200);
    scene.add(blueLight);

    let purpleLight: THREE.PointLight = new THREE.PointLight(
      0x800080,
      50,
      450,
      1.7
    );
    purpleLight.position.set(400, 300, 300);
    scene.add(purpleLight);

    let renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: true,
      stencil: false,
      depth: false,
    });
    renderer.setSize(dimensions.width, dimensions.height);
    scene.fog =
      localStorage.getItem('lightMode') === 'true'
        ? new THREE.FogExp2(0x51414f, 0.0001)
        : new THREE.FogExp2(0xe0b0ff, 0.0001);
    renderer.setClearColor(scene.fog.color);
    document.getElementById('canvas')!.appendChild(renderer.domElement);

    let loader = new THREE.TextureLoader();

    loader.load(smoke, (texture: THREE.Texture) => {
      let cloudGeometry = new THREE.PlaneGeometry(500, 500);
      let cloudMaterial = new THREE.MeshLambertMaterial({
        map: texture,
        transparent: true,
      });
      for (let p = 0; p < 50; p++) {
        let cloud = new THREE.Mesh(cloudGeometry, cloudMaterial);

        cloud.position.set(
          Math.random() * 800 - 400,
          500,
          Math.random() * 500 - 500
        );

        cloud.rotation.x = 1.16;
        cloud.rotation.y = 0.12;
        cloud.rotation.z = Math.random() * 2 * Math.PI;
        cloud.material.opacity = 0.55;

        cloudParticles.push(cloud);
        scene.add(cloud);
      }
    });

    let textureEffect: POSTPROCESSING.TextureEffect;

    loader.load(stars, (texture: THREE.Texture) => {
      textureEffect = new POSTPROCESSING.TextureEffect({
        blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
        texture,
      });
      textureEffect.blendMode.opacity.value = 0.02;
    });

    const bloomEffect = new POSTPROCESSING.BloomEffect({
      blendFunction: POSTPROCESSING.BlendFunction.COLOR_DODGE,
      kernelSize: POSTPROCESSING.KernelSize.SMALL,
      // useLuminanceFilter: true,
      luminanceThreshold: 0.3,
      luminanceSmoothing: 0.75,
    });
    bloomEffect.blendMode.opacity.value = 1.5;

    const composer = new POSTPROCESSING.EffectComposer(renderer);
    composer.addPass(new POSTPROCESSING.RenderPass(scene, camera));

    const animate = () => {
      cloudParticles.forEach((particle) => {
        particle.rotation.z -= 0.002;
      });

      renderer.render(scene, camera);
      composer.render(0.1);
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      setDimensions({ height: window.innerHeight, width: window.innerWidth });
      window.location.reload();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [dimensions.height, dimensions.width]);

  return (
    <div
      id="canvas"
      style={{
        height: dimensions.height,
        width: dimensions.width,
        zIndex: -100,
      }}
    >
      <div
        style={{
          zIndex: -20,
        }}
      >
        <div
          className="centered"
          style={{
            backgroundColor: 'transparent',
            color: 'indigo',
            left: '50%',
            margin: 'auto',
            paddingTop: '50px',
            position: 'absolute',
            top: dimensions.height / 1.7,
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
        >
          <h2>
            <big>
              <b>All I Know Is, IYKYK: Quiz Website</b>
            </big>
          </h2>
          <p>
            Welcome to <b>All I Know Is, IYKYK</b>!
          </p>

          <p>
            <small>
              We have a variety of quizzes spanning multiple categories. Here
              you will find a collection of multiple choice quizzes to choose
              from.
            </small>
          </p>

          <h6>
            <small>Our Quiz Categories</small>
          </h6>

          <div id="section">
            <div id="section-1">Anime</div>
            <div id="section-2">Cartoons</div>
            <div id="section-1">Comics</div>
          </div>
          <div id="section">
            <div id="section-2">Computers</div>
            <div id="section-1">Mathematics</div>
            <div id="section-2">Music</div>
          </div>
          <div id="section">
            <div id="section-1"></div>
            <div id="section-2">Vehicles</div>
            <div id="section-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
