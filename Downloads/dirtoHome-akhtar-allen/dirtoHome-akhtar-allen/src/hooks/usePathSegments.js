import { useLocation } from "react-router-dom";

export default function usePathSegments() {
  const location = useLocation();
  const currentPath = location.pathname;
  const cleanPath = currentPath.replace(/^\//, "");
  const pathSegments = cleanPath.split("/");

  return [pathSegments, cleanPath];
}
