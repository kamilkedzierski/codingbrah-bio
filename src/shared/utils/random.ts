/*
  Used for Sparkles component.
  https://www.joshwcomeau.com/snippets/javascript/random/
*/

export const random = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min)) + min
