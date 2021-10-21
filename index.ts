import postcss from "postcss";

function linariaPostCSS() {
  return function (selector: string, cssText: string) {
    const text = `
      ${selector} {
        ${cssText}
      }
    `;

    const result = postcss.parse(text).toResult();
    return result.css;
  };
}

export default linariaPostCSS;
