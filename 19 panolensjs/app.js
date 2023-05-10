import "./styles.css";
const PANOLENS = require("panolens");

var app, panorama, viewer, infospot;

app = document.querySelector("#app");

viewer = new PANOLENS.Viewer({
  enableReticle: false,
  container: app,
  output: "console",
  viewIndicator: true,
  autoRotate: true,
  autoRotateSpeed: 2,
  autoRotateActivationDuration: 5000,
  dwellTime: 1000
});

panorama = new PANOLENS.ImagePanorama("https://pchen66.github.io/Panolens/examples/asset/textures/equirectangular/building.jpg");

infospot = new PANOLENS.Infospot(350, PANOLENS.DataImage.Info);
infospot.position.set(0, -2000, -5000);

panorama.add(infospot);

viewer.add(panorama);