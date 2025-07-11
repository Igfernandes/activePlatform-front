export function useStrings() {
  const getClampString = (word: string, max: number = 22) => {
    const wordLength = word.length;
    const updateString = word.substring(0, max);

    return wordLength > max ? `${updateString}...` : word;
  };

  return {
    getClampString,
  };
}
