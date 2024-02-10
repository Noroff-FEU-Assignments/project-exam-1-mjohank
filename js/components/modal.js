//
//
// FUNCTION TO DISPLAY/CLOSE IMAGE MODAL WHEN CLICKING ON/OUTSIDE POST IMAGE
export function openModal(imageSrc) {
  const modal = document.createElement("div");
  modal.classList.add("modal");

  modal.innerHTML = `
    <span class="close-modal">&times;</span>
    <img class="modal-content" src="${imageSrc}" alt="Enlarged Image" />
  `;

  document.body.appendChild(modal);

  const closeModalBtn = modal.querySelector(".close-modal");

  // Event listener to close the modal when the close button is clicked
  closeModalBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  // Event listener to close the modal when clicking outside the image
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Display the modal
  modal.style.display = "block";
}
