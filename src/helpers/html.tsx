export function decodeHtml(html: string) {
  return new DOMParser().parseFromString(html, "text/html").documentElement
    .textContent;
}

export function decodeHtmlToWhatsApp(text: string) {
  return (
    text
      .replace(/<b>(.*?)<\/b>/gi, "*$1*")
      .replace(/<i>(.*?)<\/i>/gi, "_$1_")
      .replace(/<strike>(.*?)<\/strike>/gi, "~$1~")
      .replace(/<s>(.*?)<\/s>/gi, "~$1~")
      .replace(/<code>(.*?)<\/code>/gi, "`$1`") // remove <p> de abertura
      .replace(/<p>/gi, "")
      // substitui </p> por quebra de linha
      .replace(/<\/p>/gi, "\n")
      // remove espaços extras no fim
      .trim()
  );
}
