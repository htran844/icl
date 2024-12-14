// Get elements
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

// Open modal
openModalBtn.addEventListener('click', () => {
  modal.classList.add('show'); // Show modal background
  setTimeout(() => {
    modalContent.classList.add('show'); // Trigger slide-up animation
  }, 10); // Small delay to ensure the transition works
});

// Close modal
closeModalBtn.addEventListener('click', closeModal);

// Close modal when clicking outside the content
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

function closeModal() {
  modalContent.classList.remove('show'); // Trigger slide-down animation
  modalContent.classList.add('hide');
  setTimeout(() => {
    modal.classList.remove('show'); // Hide modal background
    modalContent.classList.remove('hide'); // Reset modal content state
  }, 400); // Match the transition duration (0.4s)
}
