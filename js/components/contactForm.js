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

function validateContactForm(event) {
  event.preventDefault();

  if (checkLength(contactName.value, 4) === true) {
    contactNameFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-success"></i>`;
  } else {
    contactNameFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Your name must be at least 5 characters long `;
  }

  if (validateEmail(contactEmail.value)) {
    contactEmailFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-checkmark"></i>`;
  } else {
    contactEmailFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> PLease enter a valid email address `;
  }

  if (checkLength(contactSubject.value, 14) === true) {
    contactSubjectFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-checkmark"></i>`;
  } else {
    contactSubjectFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Your message must be at least 15 characters long `;
  }

  if (checkLength(contactMessage.value, 24) === true) {
    contactMessageFeedback.innerHTML = `<i class="fa-regular fa-circle-check form-checkmark"></i>`;
  } else {
    contactMessageFeedback.innerHTML = `<i class="fa-solid fa-triangle-exclamation"></i> Your message must be at least 25 characters long `;
  }
}

contactForm.addEventListener("submit", validateContactForm);
