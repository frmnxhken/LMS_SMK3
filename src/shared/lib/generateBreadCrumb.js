export const generateBreadCrumb = (pathname) => {
  const paths = pathname.split("/").filter(Boolean);

  const breadcrumbItems = paths.filter((path) => isNaN(path));

  return breadcrumbItems.map((item) => {
    const indexInOriginal = paths.indexOf(item);
    const url = `/${paths.slice(0, indexInOriginal + 1).join("/")}`;

    const label = item
      .replace(/-/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());

    return { label, url };
  });
};
