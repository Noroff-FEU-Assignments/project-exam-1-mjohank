//
//
export function errorMessage(
  error,
  message = "Uh oh...someone didn't have their coffee this morning"
) {
  return `<div class="error-handling">${message}: ${error}</div>`;
}
//
//
export function contactFormInputErrorFeedback() {
  return `<p class="form-error">Oops..something went wrong. Please check the input fields above <i class="fa-regular fa-hand-point-up contact-finger-up "></i></p>`;
}
