export function alterKeysObject(
  data: Record<string, unknown>,
  newKeys: Array<string>
) {
  const keys = Object.keys(data);
  const newObject = {} as Record<string, unknown>;

  newKeys.forEach((key, index) => {
    newObject[key] = data[keys[index]];
  });

  return newObject;
}
