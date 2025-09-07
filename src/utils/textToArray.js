export default function extractArraysFromText(str) {
  // Remove newlines and spaces
  const cleanedStr = str.replace(/[\n\s]/g, "");

  // Match array-like [ ... ] or object-like { ... }
  const regex = /[\[\{](.*?)[\]\}]/;
  const match = cleanedStr.match(regex);

  if (match) {
    // Split the string into elements by comma
    const elements = match[1].split(",");

    // Clean up each element by removing quotes and extra whitespace
    const cleanedElements = elements.map((element) =>
      element.trim().replace(/['"]/g, "")
    );

    return cleanedElements;
  } else {
    return []; // Return an empty array if no match is found
  }
}
