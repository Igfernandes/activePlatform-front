export function helperRemoveDuplicatesInArrayOfObjects<
  Data extends Record<string, unknown>
>(array: Array<Data>, key: string): Array<Data> {
  return array.filter(
    (filteringItem, index, self) =>
      index === self.findIndex((item) => item[key] === filteringItem[key])
  );
}
export function convertToBooleanArray(values: Array<number>) {
  const max = Math.max(...values);
  const result = new Array(max).fill(false);

  values.forEach((val) => {
    result[val - 1] = val;
  });

  return result;
}
