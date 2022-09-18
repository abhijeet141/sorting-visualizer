const PRIMARY_COLOR = "white";
const SECONDARY_COLOR = "red";
const ANIMATION_SPEED_MS = 2;

const sc = "Space Complexity";
const tc = "Time Complexity";

export function common(fn: Function, array: number[]) {
  const animations = fn(array);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = Array.from(
      document.getElementsByClassName("bars") as HTMLCollectionOf<HTMLElement>
    );
    const [barOneIdx, barTwoIdx, barOneHeight, barTwoHeight] = animations[i];
    const barOneStyle = arrayBars[barOneIdx].style;
    const barTwoStyle = arrayBars[barTwoIdx].style;
    let isColorChange = i % 2 === 0;
    if (isColorChange) {
      setTimeout(() => {
        // Start
        i === 0 &&
          document.querySelectorAll("button").forEach((button) => {
            button.disabled = true;
          });
        barOneStyle.backgroundColor = SECONDARY_COLOR;
        barTwoStyle.backgroundColor = SECONDARY_COLOR;
        i === animations.length - 1 &&
          document.querySelectorAll("button").forEach((button) => {
            button.disabled = false;
          });
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        i === 0 &&
          document.querySelectorAll("button").forEach((button) => {
            button.disabled = true;
          });
        barOneStyle.backgroundColor = PRIMARY_COLOR;
        barTwoStyle.backgroundColor = PRIMARY_COLOR;
        barOneStyle.height = `${barOneHeight}px`;
        barTwoStyle.height = `${barTwoHeight}px`;
        i === animations.length - 1 &&
          document.querySelectorAll("button").forEach((button) => {
            button.disabled = false;
          });
      }, i * ANIMATION_SPEED_MS);
    }
  }
}
