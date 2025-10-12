export const getBackgroundStyles = (bgColors?: string | string[]) => {
  let background = "#dadfe7";

  if(bgColors) {
    background = Array.isArray(bgColors)
                ? `linear-gradient(135deg, #${bgColors[0]}, #${bgColors[1]})`
                : `#${bgColors}`
  }

  return {background};
}