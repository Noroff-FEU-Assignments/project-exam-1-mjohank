//

// EMAIL VALIDATION
export function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}

//

//CHECK INPUT LENGTH
export function checkLength(value, inputLength) {
  if (value.trim().length > inputLength) {
    return true;
  } else {
    return false;
  }
}
