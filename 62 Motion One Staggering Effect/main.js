import { animate, stagger } from "motion";

animate(
  ".box",
  { x: 200 },
  {
    delay: stagger(0.1),
    duration: 1,
    easing: [0.3, 0.03, 0.26, 1],
  }
)