export function helperRemoveDuplicatesInArrayOfObjects<
  Data extends Record<string, unknown>
>(array: Array<Data>, key: string): Array<Data> {
  return array.filter(
    (filteringItem, index, self) =>
      index === self.findIndex((item) => item[key] === filteringItem[key])
  );
}
