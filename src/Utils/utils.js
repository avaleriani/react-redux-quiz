//disregard security concerns please.
export const cleanHtmlText = (text) => {
  const div = document.createElement("div");
  div.innerHTML = text;
  return div.textContent || div.innerText || "";
};

export const calculateScore = (base) => (
  Math.pow(2, base)
);