import { useCallback, useState } from "react";

export function useSearch() {
  const [search, setSearch] = useState<string>("");

  const handleSearch = useCallback((words: string) => {
    setSearch(words.toLowerCase());
  }, []);

  const filterObjects = <ObjectShape extends Record<string, unknown>>(
    object: ObjectShape,
  ) => {
    if (!search) return true;

    const objectValues = Object.values(object);
    const foundValues = objectValues.filter((value) => {
      if (!value) return false;

      const convertStringValue = (value as string).toString().toLowerCase();

      return convertStringValue.includes(search);
    });
    return foundValues.length > 0;
  };

  return {
    search,
    handleSearch,
    filterObjects
  };
}
