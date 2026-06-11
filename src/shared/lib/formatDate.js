export function formatDateDMY(str) {
  if (!str) return "";

  const date = new Date(str);

  const options = { year: "numeric", month: "short", day: "2-digit" };
  return date.toLocaleDateString("en-US", options);
}

export const isExpired = (timestamp) => {
  const deadline = new Date(timestamp);
  if (isNaN(deadline.getTime())) return false;

  deadline.setHours(23, 59, 59, 999);

  return Date.now() > deadline.getTime();
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
