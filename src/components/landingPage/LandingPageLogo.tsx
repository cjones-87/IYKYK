import { useEffect } from 'react';
import * as THREE from 'three';
import useWindowDimensions from '../../customHooks/useWindowDimensions';
import IYKYK from '../../images/navbarLogo.svg';

const LandingPageLogo = () => {
  const { height, width } = useWindowDimensions();

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
      width / -10,
      width / 10,
      height / 10,
      height / -10,
      1,
      500
    );
    camera.position.z = 500;

    const canvas = document.getElementById('landingPageLogo');
    const landingPageLogoContainer = document.getElementById(
      'landingPageLogoContainer'
    );

    if (!canvas) {
      console.error('Missing logo');
      return;
    } else if (!landingPageLogoContainer) {
      console.error('Missing logo container');
      return;
    }

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      canvas,
      antialias: true,
    });
    renderer.setSize(width / 1.6, height / 1.6);
    landingPageLogoContainer.append(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    ambientLight.castShadow = true;
    scene.add(ambientLight);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.castShadow = true;
    spotLight.position.set(0, 64, 32);
    scene.add(spotLight);

    const sphereGeometry =
      width > 830
        ? new THREE.SphereGeometry(64, 64, 64)
        : width > 500
        ? new THREE.SphereGeometry(32, 64, 64)
        : new THREE.SphereGeometry(16, 64, 64);

    const texture = new THREE.TextureLoader().load(IYKYK);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 1);

    const sphereMaterial = new THREE.MeshBasicMaterial({ map: texture });

    const sphereMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphereMesh);

    sphereMesh.position.set(0, 0, 0);

    const rotationSpeed = 0.015;
    const bounceSpeed = 0.5;
    const bounceDistance = width < 870 ? 40 : 30;

    sphereMesh.userData.direction = 1;

    const animate = () => {
      sphereMesh.rotation.y += rotationSpeed;

      if (width >= 870) {
        if (sphereMesh.position.y <= -bounceDistance / 2) {
          sphereMesh.userData.direction = 1;
        } else if (sphereMesh.position.y >= bounceDistance / 2) {
          sphereMesh.userData.direction = -1;
        }
        sphereMesh.position.y += bounceSpeed * sphereMesh.userData.direction;
      } else {
        if (sphereMesh.position.x <= -bounceDistance / 2) {
          sphereMesh.userData.direction = 1;
        } else if (sphereMesh.position.x >= bounceDistance / 2) {
          sphereMesh.userData.direction = -1;
        }
        sphereMesh.position.x += bounceSpeed * sphereMesh.userData.direction;
      }

      renderer.render(scene, camera);
      window.requestAnimationFrame(animate);
    };

    animate();
  }, [height, width]);

  return (
    <div id="landingPageLogoContainer">
      <canvas id="landingPageLogo" />
    </div>
  );
};

export default LandingPageLogo;
