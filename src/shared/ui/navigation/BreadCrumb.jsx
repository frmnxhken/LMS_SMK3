import React from "react";
import { Link, useLocation } from "react-router";
import { generateBreadCrumb } from "@/shared/lib/generateBreadCrumb";

const BreadCrumb = () => {
  const { pathname } = useLocation();
  const breadcrumbs = generateBreadCrumb(pathname);

  return (
    <nav className="hidden sm:flex items-center text-sm">
      {breadcrumbs.map((crumb, index) => (
        <div key={crumb.url}>
          <span className="mx-2 text-text-muted">/</span>
          <Link
            to={crumb.url}
            className={`${index === breadcrumbs.length - 1 ? "text-slate-900 font-semibold" : "hover:text-slate-900"}`}
          >
            {crumb.label}
          </Link>
        </div>
      ))}
    </nav>
  );
};

export default BreadCrumb;
