export function bubble(array: number[]) {
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[i]) {
        const temp: number = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
}

export function bubble2(array: number[]) {}
