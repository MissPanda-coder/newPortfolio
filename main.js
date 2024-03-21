// ===== HAMBURGER BUTTON ===== //
document.addEventListener('DOMContentLoaded', function() {
  let navButton = document.querySelector('.nav-button');
  let navBar = document.getElementById('myNavbar'); 
  navButton.addEventListener('click', function() {
    navButton.classList.toggle('change');
    
   
  });
});

const noise = () => {
  let canvas, ctx;

  let wWidth, wHeight;

  let noiseData = [];
  let frame = 0;

  let loopTimeout;


  // Create Noise
  const createNoise = () => {
      const idata = ctx.createImageData(wWidth, wHeight);
      const buffer32 = new Uint32Array(idata.data.buffer);
      const len = buffer32.length;

      for (let i = 0; i < len; i++) {
          if (Math.random() < 0.5) {
              buffer32[i] = 0xff000000;
          }
      }

      noiseData.push(idata);
  };


  // Play Noise
  const paintNoise = () => {
      if (frame === 9) {
          frame = 0;
      } else {
          frame++;
      }

      ctx.putImageData(noiseData[frame], 0, 0);
  };


  // Loop
  const loop = () => {
      paintNoise(frame);

      loopTimeout = window.setTimeout(() => {
          window.requestAnimationFrame(loop);
      }, (1000 / 25));
  };


  // Setup
  const setup = () => {
      wWidth = window.innerWidth;
      wHeight = document.documentElement.scrollHeight;

      canvas.width = wWidth;
      canvas.height = wHeight;

      for (let i = 0; i < 10; i++) {
          createNoise();
      }

      loop();
  };


  // Reset
  let resizeThrottle;
  const reset = () => {
      window.addEventListener('resize', () => {
          window.clearTimeout(resizeThrottle);

          resizeThrottle = window.setTimeout(() => {
              window.clearTimeout(loopTimeout);
              setup();
          }, 200);
      }, false);
  };


  // Init
  const init = (() => {
      canvas = document.getElementById('noise');
      ctx = canvas.getContext('2d');

      setup();
  })();
};

noise();

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


document.querySelector('#contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.elements.name.value = '';
  e.target.elements.email.value = '';
  e.target.elements.message.value = '';
});