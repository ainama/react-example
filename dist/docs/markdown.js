export function parseMarkdown(markdown) {
  let headerRegExp = /---[\r\n]([\s\S]*)[\r\n]---/;
  let mdString = markdown;
  return mdString.replace(headerRegExp, '').split(/^\{{|}}$/gm);
}
