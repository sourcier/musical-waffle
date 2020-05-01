export const required = (value) => !value

export const email = (value) =>
  /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) !== true
