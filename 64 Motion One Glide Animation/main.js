import { animate, glide } from "motion";

animate(
  "#carousel",
  { x: 0 },
  {
    easing: glide({
      velocity: -1200,
      min: -800,
      bounceStiffness: 500,
      bounceDamping: 20,
    }),
  }
)