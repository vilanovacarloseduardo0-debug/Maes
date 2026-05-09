const petalLayer = document.querySelector(".petal-layer");

function createPetals() {
  const total = window.innerWidth < 700 ? 14 : 40;
  petalLayer.innerHTML = "";

  for (let index = 0; index < total; index += 1) {
    const petal = document.createElement("span");
    const size = 9 + Math.random() * 18;
    const left = Math.random() * 100;
    const drift = -80 + Math.random() * 160;
    const duration = 8 + Math.random() * 10;
    const delay = Math.random() * -duration;
    const alpha = 0.45 + Math.random() * 0.45;

    petal.className = "petal";
    petal.style.left = `${left}vw`;
    petal.style.setProperty("--size", `${size}px`);
    petal.style.setProperty("--drift", `${drift}px`);
    petal.style.setProperty("--duration", `${duration}s`);
    petal.style.setProperty("--delay", `${delay}s`);
    petal.style.setProperty("--alpha", alpha.toFixed(2));
    petalLayer.appendChild(petal);
  }
}

createPetals();

let resizeTimer;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(createPetals, 250);
});
