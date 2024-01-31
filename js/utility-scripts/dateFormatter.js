export function formatPostDate(rawDate) {
  const date = new Date(rawDate);
  return date.toLocaleDateString(undefined, {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
}
