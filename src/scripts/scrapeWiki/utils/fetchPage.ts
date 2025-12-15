export function fetchPage(url: string) {
  return fetch(url).then(res => res.text());
}
