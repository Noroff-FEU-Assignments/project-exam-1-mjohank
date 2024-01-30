//IMPORTS
import { validateEmail } from "../utility-scripts/formValidations.js";
import { checkLength } from "../utility-scripts/formValidations.js";

const contactForm = document.querySelector(".contact-form");
const contactName = document.querySelector("#contact-name");
const contactNameFeedback = document.querySelector(".contact-name-feedback");
const contactEmail = document.querySelector("#contact-email");
const contactEmailFeedback = document.querySelector(".contact-email-feedback");
const contactSubject = document.querySelector("#contact-subject");
const contactSubjectFeedback = document.querySelector(
  ".contact-subject-feedback"
);
const contactMessage = document.querySelector("#contact-textarea");
const contactMessageFeedback = document.querySelector(
  ".contact-message-feedback"
);
const contactFormFeedback = document.querySelector(".contact-form-feedback");

//

function validateContactForm(event) {
  event.preventDefault();

  //CHECKING NAME LENGTH
  if (checkLength(contactName.value, 4) === true) {
    contactNameFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-success"></i>`;
  } else {
    contactNameFeedback.classList.add("form-error");
    contactNameFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation form-error error-triangle"></i> Your name must be at least 5 characters long `;

    contactFormFeedback.classList.add("form-error");
    contactFormFeedback.innerHTML = `Oops..something went wrong. Please check the input fields above <i class="fa-regular fa-hand-point-up"></i>`;
  }

  //CHECKING EMAIL FORMAT
  if (validateEmail(contactEmail.value)) {
    contactEmailFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-success"></i>`;
  } else {
    contactEmailFeedback.classList.add("form-error");
    contactEmailFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation form-error error-triangle"></i> Please enter a valid email address `;

    contactFormFeedback.classList.add("form-error");
    contactFormFeedback.innerHTML = `Oops..something went wrong. Please check the input fields above <i class="fa-regular fa-hand-point-up"></i>`;
  }

  //CHECKING SUBJECT LENGTH
  if (checkLength(contactSubject.value, 14) === true) {
    contactSubjectFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-success"></i>`;
  } else {
    contactSubjectFeedback.classList.add("form-error");
    contactSubjectFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation form-error error-triangle"></i> Subject must be at least 15 characters long `;

    contactFormFeedback.classList.add("form-error");
    contactFormFeedback.innerHTML = `Oops..something went wrong. Please check the input fields above <i class="fa-regular fa-hand-point-up"></i>`;
  }

  //CHECKING MESSAGE LENGTH
  if (checkLength(contactMessage.value, 24) === true) {
    contactMessageFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-success"></i>`;
  } else {
    contactMessageFeedback.classList.add("form-error");
    contactMessageFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation form-error error-triangle"></i> Your message must be at least 25 characters long `;

    contactFormFeedback.classList.add("form-error");
    contactFormFeedback.innerHTML = `Oops..something went wrong. Please check the input fields above <i class="fa-regular fa-hand-point-up contact-finger-up"></i>`;
  }

  if (
    checkLength(contactName.value, 4) &&
    validateEmail(contactEmail.value) &&
    checkLength(contactSubject.value, 14) &&
    checkLength(contactMessage.value, 24)
  ) {
    contactFormFeedback.innerHTML = `
    <p>Perfect! The form has been sent! Thank you for reaching out!</p>
    <p><i class="fa-regular fa-thumbs-up"></i></p>
    `;
    contactFormFeedback.classList.add("form-success");
    contactFormFeedback.classList.remove("form-error");
  }
}

contactForm.addEventListener("submit", validateContactForm);
