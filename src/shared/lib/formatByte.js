export const formatBytes = (bytes, decimals = 2) => {
  if (!bytes || isNaN(bytes)) return "0 Bytes";
  if (bytes < 0) bytes = Math.abs(bytes);

  const base = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB"];

  const i = Math.floor(Math.log(bytes) / Math.log(base));

  const formattedValue = parseFloat((bytes / Math.pow(base, i)).toFixed(dm));

  return `${formattedValue} ${sizes[i]}`;
};
