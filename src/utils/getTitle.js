export default function formatSearchQuery(query) {
  const param = query.replace("?search=", "");
  return param
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
