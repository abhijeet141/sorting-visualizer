import { useState, useEffect } from "react";
import styled from "styled-components";

import ContextWrapper from "../Context/ContextWrapper";

import {
  HandleBubbleSort,
  HandleInsertionSort,
  HandleMergeSort,
  HandleQuickSort,
  HandleSelectionSort,
} from "./Handlers/SortingHandlers";

function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 200;

// This is the main color of the array bars.
const PRIMARY_COLOR = "white";

export default function SortingVisiulizer() {
  const [array, setArray] = useState<number[]>([] as number[]);
  const [isActive, setIsActive] = useState(false);
  function passValue(arr: number[]) {
    for (let i = 0; i <= NUMBER_OF_ARRAY_BARS; i++) {
      arr.push(randomIntFromInterval(5, 550));
    }
    return arr;
  }
  useEffect(() => {
    let arr: number[] = [];
    arr = passValue(arr);
    setArray(arr);
  }, []);

  function handleReset() {
    let arr: number[] = [];
    arr = passValue(arr);
    setArray(arr);
    document.getElementsByTagName("h2")[0].innerHTML = "Press Any Button";
    // document.querySelectorAll(".Space-Time-Complextiy")[0].innerHTML =
    //   "Time Complexity ‎ ‎ ‎ Space Complexity";
  }

  return (
    <ContextWrapper arraySize={NUMBER_OF_ARRAY_BARS}>
              <Button onClick={handleReset} disabled={isActive}>
          Reset The Array
        </Button>
        <Button onClick={() => HandleBubbleSort(array)} disabled={isActive}>
          Bubble Sort
        </Button>
        <Button onClick={() => HandleSelectionSort(array)} disabled={isActive}>
          Selection Sort
        </Button>
        <Button onClick={() => HandleInsertionSort(array)} disabled={isActive}>
          Insertion Sort
        </Button>
        <Button onClick={() => HandleQuickSort(array)} disabled={isActive}>
          Quick Sort
        </Button>
        <Button onClick={() => HandleMergeSort(array)} disabled={isActive}>
          Merge Sort
        </Button>
      {/* <Navbar /> */}
      <Wrapper style={{ height: "60vh", marginTop: "60px" }}>
        {array.map((item, idx) => (
          <div
            className="bars"
            key={idx}
            style={{ height: `${item}px`, backgroundColor: PRIMARY_COLOR }}
          ></div>
        ))}
      </Wrapper>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          height: "15vh",
          alignItems: "flex-end",
        }}
      >

      </div>
    </ContextWrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
  width: 100vw;
  margin-bottom: 20px;
  .bars {
    display: inline-block;
    width: 3px; // TODO: CHANGE IT LATTER
    background-color: #9370db;
    margin: 0 2px;
  }
`;
const Button = styled.button`
  background-color: orange;
  margin: 0 60px;
  &.not-allowed {
    background-color: #dddddd1f;
    color: #111111ac;
  }
  &.not-allowed:hover {
    cursor: not-allowed;
    background-color: #ffffff30;
  }
`;
