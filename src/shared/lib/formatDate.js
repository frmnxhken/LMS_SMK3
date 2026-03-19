export function formatDateDMY(str) {
  if (!str) return "";

  const date = new Date(str);

  const options = { year: "numeric", month: "short", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
}
