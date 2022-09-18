// TEST
export function checkEqual(arr1: number[], arr2: number[]) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i += 1) {
    if (arr1[i] != arr2[i]) return false;
  }
  return true;
}
