// EMAIL VALIDATION

export function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
