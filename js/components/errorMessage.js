export function errorMessage(
  error,
  message = "Uh oh...someone didn't have their coffee this morning"
) {
  return `<div class="error-handling">${message}: ${error}</div>`;
}
