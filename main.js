// // / Créer une scène
// var scene = new THREE.Scene();

// // Créer une caméra
// var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// camera.position.z = 5;

// // Créer un renderer
// var renderer = new THREE.WebGLRenderer({ antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);
// document.body.appendChild(renderer.domElement);

// var gridSize = 5;
// var gridStep = 1;
// var gridColor = 0xffffff; // Couleur du quadrillage

// var gridGeometry = new THREE.BufferGeometry();
// var positions = [];

// for (var i = -gridSize; i <= gridSize; i += gridStep) {
//     positions.push(i, 0, -gridSize, i, 0, gridSize);
//     positions.push(-gridSize, 0, i, gridSize, 0, i);
// }

// gridGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));

// var gridMaterial = new THREE.LineBasicMaterial({ color: gridColor });
// var grid = new THREE.LineSegments(gridGeometry, gridMaterial);
// scene.add(grid);

// var raycaster = new THREE.Raycaster();
// var mouse = new THREE.Vector2();

// document.addEventListener('mousemove', onMouseMove, false);

// function onMouseMove(event) {
//     // Mettre à jour les coordonnées de la souris
//     mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
//     mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

//     // Lancer un rayon depuis la position de la souris
//     raycaster.setFromCamera(mouse, camera);

//     // Vérifier les intersections avec le quadrillage
//     var intersects = raycaster.intersectObjects([grid]);

//     // Rendre le quadrillage visible si la souris le survole
//     if (intersects.length > 0) {
//         gridMaterial.visible = true;
//     } else {
//         gridMaterial.visible = false;
//     }
// }

const buttons = document.querySelectorAll(".map button");
const slides = document.querySelector(".card-skills-img-layout");

let currentPosition = 0; 

buttons.forEach(button => {
  button.addEventListener("click", e => {
    if (!button.classList.contains("active")) {
      buttons.forEach(item => item.classList.remove("active"));
      button.classList.add("active");

      if (button.classList.contains("first")) {
        currentPosition = 0;
      } else if (button.classList.contains("second")) {
        currentPosition = -33;
      } else if (button.classList.contains("third")) {
        currentPosition = -66;
      }
      
      slides.style.transform = `translateX(${currentPosition}%)`; 
    }
  });
});