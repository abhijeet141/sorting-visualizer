function getPivotIndex(
  array: number[],
  low: number,
  high: number,
  animations: any[]
) {
  function swap(array: number[], i: number, j: number) {
    let tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  }
  let pivot = array[high];
  let i = low - 1;
  for (let j = low; j <= high - 1; j++) {
    if (array[j] < pivot) {
      // SWap
      i++;
      animations.push([i, j, null, null]);
      animations.push([i, j, array[j], array[i]]);
      swap(array, i, j);
    }
  }
  animations.push([i + 1, high, null, null]);
  animations.push([i + 1, high, array[high], array[i + 1]]);
  swap(array, i + 1, high);
  return i + 1;
}

function quickSortHelper(
  array: number[],
  low: number,
  high: number,
  animations: any[]
) {
  if (low > high) return;
  const pivotIndex = getPivotIndex(array, low, high, animations);
  quickSortHelper(array, low, pivotIndex - 1, animations);
  quickSortHelper(array, pivotIndex + 1, high, animations);
}

export function QuickSort(array: number[]) {
  // Write your code here.
  const animations: any[] = [];
  let low = 0,
    high = array.length - 1;
  quickSortHelper(array, low, high, animations);
  console.log(animations);

  return animations;
}

export function MergeSort(array: number[]): Array<Array<number>> {
  const animations: Array<Array<number>> = [];
  if (array.length <= 1) return [array];
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray: number[],
  startIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: Array<Array<number>>
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray: number[],
  startIdx: number,
  middleIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: Array<Array<number>>
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function BubbleSort(array: number[]) {
  const len = array.length;
  const animations: any[] = [];
  for (let i = 0; i < len - 1; i++) {
    let isSorted = true;
    for (let j = 1; j <= len - i + 1; j++) {
      if (array[j] < array[j - 1]) {
        animations.push([j - 1, j, null, null]);
        animations.push([j - 1, j, array[j], array[j - 1]]);
        let tmp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = tmp;
        isSorted = false;
      }
    }
    if (isSorted) return animations;
  }
  return animations;
}

export function InsertionSort(array: number[]) {
  const animations: any[] = [];
  for (let i = 1; i < array.length; i++) {
    let j = i;
    while (j > 0 && array[j] < array[j - 1]) {
      animations.push([j - 1, j, null, null]);
      animations.push([j - 1, j, array[j], array[j - 1]]);
      const temp = array[j];
      array[j] = array[j - 1];
      array[j - 1] = temp;
      j -= 1;
    }
  }
  return animations;
}

export function SelectionSort(array: number[]): any[] {
  const animations: any[] = [];

  for (let i = 0; i < array.length; i++) {
    let swappedIdx = i;
    let minIdx = i;
    animations.push([swappedIdx, minIdx, null, null]);
    let minVal = array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (minVal > array[j]) {
        minVal = array[j];
        minIdx = j;
      }
    }
    animations.push([swappedIdx, minIdx, array[minIdx], array[swappedIdx]]);
    let tmp = array[swappedIdx];
    array[swappedIdx] = array[minIdx];
    array[minIdx] = tmp;
  }
  return animations;
}
