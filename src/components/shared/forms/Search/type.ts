export type SearchProps = {
  dataTestId: string;
  label?: string;
  id?: string;
  placeholder?: string;
  name?: string;
  className?: string;
  handleSearch: (words: string) => void;
};
