/**
 * @type {string} text
 * @return {string}
 */
export const cleanHtmlText = (text) => {
//disregard security concerns, let's assume the api is safe.
  const div = document.createElement("div");
  div.innerHTML = text;
  return div.textContent || div.innerText || "";
};

/**
 * @type {number} base
 * @return {number}
 */
export const calculateScore = (base) => (
  Math.pow(2, base)
);