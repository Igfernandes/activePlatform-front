export const REGEXES = {
  HAS_LETTER_LOWERCASE: /[a-z]/,
  HAS_LETTER_UPPERCASE: /[A-Z]/,
  HAS_NUMBER: /[0-9]/,
  HAS_SPECIAL_CHARACTER: /[!@#$%*()_+^&{}}:;?.]/,
  HAS_HTML_ELEMENT: /<\/?[a-z][\s\S]*>/i,
  DATE_BR: /^\d{2}\/\d{2}\/\d{4}$/,
  EMAIL: /\S+@\S+\.\S+/,
};
