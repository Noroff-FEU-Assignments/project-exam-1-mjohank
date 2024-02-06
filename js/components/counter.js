//
//
//CONSTANTS
const contactTextarea = document.getElementById("contact-textarea");
const messageCharCount = document.querySelector(".msg-char-count");

const contactSubject = document.getElementById("contact-subject");
const subjectCharCount = document.querySelector(".sub-char-count");

//FUNCTION TO COUNT CHARACTERS IN CONTACT FORM TEXTAREA
contactTextarea.addEventListener(`input`, function () {
  const messageLength = contactTextarea.value.length;
  messageCharCount.textContent = `${messageLength}/25`;
});

// FUNCTION TO COUNT CHARACTERS IN CONTACT FORM SUBJECT INPUT
contactSubject.addEventListener("input", function () {
  const subjectLength = contactSubject.value.length;
  subjectCharCount.textContent = `${subjectLength}/15`;
});
