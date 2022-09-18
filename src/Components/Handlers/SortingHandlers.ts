import {
  BubbleSort,
  InsertionSort,
  MergeSort,
  QuickSort,
  SelectionSort,
} from "../../Algorithms/Algoritms";
import { common } from "./CommonSortingHandlers";
const PRIMARY_COLOR = "white";
// This is the color of array bars that are being compared throughout the animation.
const SECONDARY_COLOR = "red";
const ANIMATION_SPEED_MS = 1; // TODO: 2
export function HandleMergeSort(array: number[]) {
  const animations = MergeSort(array);
  for (let i = 0; i < animations.length; i++) {
    const arrayBars = Array.from(
      document.getElementsByClassName("bars") as HTMLCollectionOf<HTMLElement>
    );
    const isColorChange = i % 3 !== 2;
    if (isColorChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        // Start
        i === 0 &&
          document.querySelectorAll("button").forEach((button) => {
            button.disabled = true;
          });
        barOneStyle.backgroundColor = color;
        barTwoStyle.backgroundColor = color;
        // END
        i === animations.length - 1 &&
          document.querySelectorAll("button").forEach((button) => {
            button.disabled = false;
          });
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        // Start
        i === 0 &&
          document.querySelectorAll("button").forEach((button) => {
            button.disabled = true;
          });
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
        // END
        i === animations.length - 1 &&
          document.querySelectorAll("button").forEach((button) => {
            button.disabled = false;
          });
      }, i * ANIMATION_SPEED_MS);
    }
  }
}

export function HandleBubbleSort(array: number[]) {
  common(BubbleSort, array);
}

export function HandleSelectionSort(array: number[]) {
  common(SelectionSort, array);
}

export function HandleInsertionSort(array: number[]) {
  common(InsertionSort, array);
}

export function HandleQuickSort(array: number[]) {
  common(QuickSort, array);
}
