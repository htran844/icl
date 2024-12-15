// Get elements
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const openModalBtn = document.getElementById('openModal');
const closeModalBtn = document.getElementById('closeModal');

// Open modal
openModalBtn.addEventListener('click', () => {
  const activationCodeInput = document.getElementById('activationCode').value.trim();

  // Check if input is empty
  if (!activationCodeInput) {
    alert('Vui lòng nhập mã phần mềm!');
    return;
  }

  // Fetch the code from the API
  fetch('https://675e4dbb63b05ed07979e3ce.mockapi.io/code')
    .then(response => response.json())
    .then(data => {
      // Check if the code exists in the API
      const isValidCode = data.some(item => item.code === activationCodeInput);

      if (isValidCode) {
        modal.classList.add('show'); // Show modal background
        setTimeout(() => {
          modalContent.classList.add('show'); // Trigger slide-up animation
        }, 10); // Small delay to ensure the transition works
      } else {
        alert('Mã phần mềm không chính xác, vui lòng kiểm tra lại!');
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      alert('Đã xảy ra lỗi, vui lòng thử lại sau!');
    });
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
const appleIdInput = document.getElementById('appleId');
const tiepModal = document.getElementById('tiepModel');

// Function to check input value and change text color
appleIdInput.addEventListener('input', () => {
  if (appleIdInput.value.trim()) {
    tiepModal.classList.remove('inactive');
    tiepModal.classList.add('active');
  } else {
    tiepModal.classList.remove('active');
    tiepModal.classList.add('inactive');
  }
});
// Lắng nghe sự kiện click vào "Tiếp" khi nó có trạng thái active
tiepModal.addEventListener('click', () => {
  if (tiepModal.classList.contains('active')) {
    alert('Mở khóa thành công');
    // Sau khi hiển thị thông báo, chuyển hướng đến trang "/mo-khoa-icloud"
    window.location.href = '/mo-khoa-icloud';
  }
});