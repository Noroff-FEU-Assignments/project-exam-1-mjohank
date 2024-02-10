//
//
//IMPORT
import { validateEmail } from "../utility-scripts/formValidations.js";

const newsletterFeedback = document.querySelector(".newsletter-info");
const newsletterInput = document.querySelector(".newsletter-input");
const newsletterForm = document.querySelector(".newsletter-form");

//FUNCTION TO ENSURE CORRECT FORMAT OF EMAIL AND INFORM USER OF SUBMISSION SUCCESS

function validateNewsletterForm() {
  newsletterForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = newsletterInput.value;

    if (validateEmail(email)) {
      newsletterFeedback.textContent = "Success! Thank you for subscribing :)";
      newsletterFeedback.style.color = "green";
      newsletterInput.style.border = "2px solid green";
    } else {
      newsletterFeedback.textContent = "Please enter a valid email address";
      newsletterFeedback.style.color = "orangered";
      newsletterInput.style.border = "2px solid orangered";
    }
  });
}

validateNewsletterForm();
