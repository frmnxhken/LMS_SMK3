import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    const el = document.getElementById("app-container");

    if (el) {
      el.scrollTo({ top: 0 });
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [pathname]);

  return null;
}
