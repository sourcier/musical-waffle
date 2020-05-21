export const required = (msg = 'Field is required') => (value) => !value && msg

export const email = (msg = 'Email address is invalid') => (value) =>
  /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value) !== true && msg
