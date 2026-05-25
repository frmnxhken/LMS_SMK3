export function formatDateDMY(str) {
  if (!str) return "";

  const date = new Date(str);

  const options = { year: "numeric", month: "short", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
}

export const isExpired = (timestamp) => {
  if (!timestamp) return false;
  const deadline = new Date(timestamp.replace(/-/g, "/"));
  const now = new Date();
  return now < deadline;
};

export const formatTimeStamp = (timestamp) => {
  if (!timestamp) return "-";
  const date = new Date(timestamp.replace(/-/g, "/"));

  return date.toLocaleString("id-ID", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
};
