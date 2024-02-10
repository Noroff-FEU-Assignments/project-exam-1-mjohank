//
//
//IMPORTS
import { validateEmail } from "../utility-scripts/formValidations.js";
import { checkLength } from "../utility-scripts/formValidations.js";
import { contactFormInputErrorFeedback } from "./errorMessage.js";
// import { contactFormURL } from "../utility-scripts/constants.js";

//CONSTANTS
const contactForm = document.querySelector(".contact-form");
const contactName = document.getElementById("your-name");
const contactNameFeedback = document.querySelector(".contact-name-feedback");
const contactEmail = document.getElementById("your-email");
const contactEmailFeedback = document.querySelector(".contact-email-feedback");
const contactSubject = document.getElementById("your-subject");
const contactSubjectFeedback = document.querySelector(
  ".contact-subject-feedback"
);
const contactMessage = document.getElementById("your-message");
const contactMessageFeedback = document.querySelector(
  ".contact-message-feedback"
);
const contactFormFeedback = document.querySelector(".contact-form-feedback");

// Attach event listener to the contact form
contactForm.addEventListener("submit", validateContactForm);

function validateContactForm(event) {
  event.preventDefault();

  //CHECKING NAME LENGTH
  if (checkLength(contactName.value, 4)) {
    contactNameFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-success"></i>`;
  } else {
    contactNameFeedback.classList.add("form-error");
    contactNameFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation form-error error-triangle"></i> Your name must be at least 5 characters long `;

    contactFormFeedback.innerHTML = contactFormInputErrorFeedback();
  }

  //CHECKING EMAIL FORMAT
  if (validateEmail(contactEmail.value)) {
    contactEmailFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-success"></i>`;
  } else {
    contactEmailFeedback.classList.add("form-error");
    contactEmailFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation form-error error-triangle"></i> Please enter a valid email address `;
    contactFormFeedback = contactFormInputErrorFeedback();
  }

  //CHECKING SUBJECT LENGTH
  if (checkLength(contactSubject.value, 14)) {
    contactSubjectFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-success"></i>`;
  } else {
    contactSubjectFeedback.classList.add("form-error");
    contactSubjectFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation form-error error-triangle"></i> Subject must be at least 15 characters long `;
    contactFormFeedback.innerHTML = contactFormInputErrorFeedback();
  }

  //CHECKING MESSAGE LENGTH
  if (checkLength(contactMessage.value, 24)) {
    contactMessageFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-success"></i>`;
  } else {
    contactMessageFeedback.classList.add("form-error");
    contactMessageFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation form-error error-triangle"></i> Your message must be at least 25 characters long `;
    contactFormFeedback.innerHTML = contactFormInputErrorFeedback();
  }

  //ENSURING ALL FIELDS ARE IN PLACE CORRECTLY
  if (
    checkLength(contactName.value, 4) &&
    validateEmail(contactEmail.value) &&
    checkLength(contactSubject.value, 14) &&
    checkLength(contactMessage.value, 24)
  ) {
    contactForm.reset();
    contactFormFeedback.innerHTML = `
    <p class="form-success">Perfect! The form has been sent! Thank you for reaching out!</p>
      <p class="form-success"><i class="fa-regular fa-thumbs-up"></i></p>`;
    // submitForm();
  }
}

//  BECAUSE OF UNIDENTIFIED 404 ERROR WHEN SUBMITTING FORM, THE FUNCTION BELOW WILL
//  ONLY RENDER THE ERROR FEEDBACK. TEMPORARILY COMMENTED OUT SO VIEWERS CAN TEST BOTH FORM SUCCESS AND ERROR.
// submitForm() WILL BE REINSTATED ONCE REASON FOR 404 IS IDENTIFIED

// function submitForm() {
//   const formData = new FormData(contactForm);

//   // Send data to Wordpress
//   fetch(contactFormURL, {
//     method: "POST",
//     body: formData,
//   })
//     .then((response) => {
//       if (response.ok) {
//         return response.json();
//       } else {
//         throw new Error("Form submission failed");
//       }
//     })
//     .then((data) => {
//       console.log("Form submission successful:", data);
//       contactForm.reset(); // Clearing the form after successful submission
//       contactFormFeedback.innerHTML = `
//       <p>Perfect! The form has been sent! Thank you for reaching out!</p>
//       <p><i class="fa-regular fa-thumbs-up"></i></p>
//     `;
//       contactFormFeedback.classList.add("form-success");
//       contactFormFeedback.classList.remove("form-error");
//     })
//     .catch((error) => {
//       console.error("Form submission error:", error);
//       contactFormFeedback.classList.add("form-error");
//       contactFormFeedback.innerHTML = `
//       Oops..something went wrong. Please try again later
//       <i class="fa-regular fa-hand-point-up"></i>
//     `;
//     });
// }
