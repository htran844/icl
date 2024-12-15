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
    showmsModal("Vui lòng nhập mã phần mềm!")
    return;
  }

  // Fetch the code from the API
  fetch('https://675e4dbb63b05ed07979e3ce.mockapi.io/code')
    .then(response => response.json())
    .then(data => {
      // Check if the code exists in the API
      const isValidCode = data.some(item => item.code === activationCodeInput);

      if (isValidCode) {
        const loadingModal = document.getElementById('loadingModal');
        loadingModal.style.display = 'flex';

        let progress = 0;
        const progressBar = document.getElementById('progress');
        const loadingText = document.getElementById('loadingText');

        // Update progress every 100ms
        const interval = setInterval(function () {
          if (progress < 100) {
            progress++;
            progressBar.style.width = progress + '%';
            loadingText.innerText = 'Đang xử lý... ' + progress + '%';
          } else {
            clearInterval(interval);
            setTimeout(function () {
              // Hide the loading modal after the progress reaches 100%
              loadingModal.style.display = 'none';
              progressBar.style.width = 0 + '%';
              modal.classList.add('show'); // Show modal background
              setTimeout(() => {
                modalContent.classList.add('show'); // Trigger slide-up animation
              }, 10); // Small delay to ensure the transition works
            }, 500); // Delay before hiding
          }
        }, 50); // Adjust speed of progress update

      } else {
        showmsModal("Mã phần mềm không chính xác")
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      showmsModal("Đã xảy ra lỗi, vui lòng thử lại sau!")
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
const applePass = document.getElementById('applePass');
const maKichHoat = document.getElementById('maKichHoat');
const tiepModal = document.getElementById('tiepModel');

// Function to check input value and change text color
appleIdInput.addEventListener('input', () => {
  if (appleIdInput.value.trim() && applePass.value.trim() && maKichHoat.value.trim()) {
    tiepModal.classList.remove('inactive');
    tiepModal.classList.add('active');
  } else {
    tiepModal.classList.remove('active');
    tiepModal.classList.add('inactive');
  }
});
applePass.addEventListener('input', () => {
  if (appleIdInput.value.trim() && applePass.value.trim() && maKichHoat.value.trim()) {
    tiepModal.classList.remove('inactive');
    tiepModal.classList.add('active');
  } else {
    tiepModal.classList.remove('active');
    tiepModal.classList.add('inactive');
  }
});
maKichHoat.addEventListener('input', () => {
  if (appleIdInput.value.trim() && applePass.value.trim() && maKichHoat.value.trim()) {
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
    fetch('https://675e4dbb63b05ed07979e3ce.mockapi.io/code')
    .then(response => response.json())
    .then(data => {
      // Check if the code exists in the API
      const kichHoatCodeInput = document.getElementById('maKichHoat').value.trim();
      const isValidCode = data.some(item => item.maKichHoat=== kichHoatCodeInput);

      if (isValidCode) {
        const loadingModal = document.getElementById('loadingModal');
        loadingModal.style.display = 'flex';

        let progress = 0;
        const progressBar = document.getElementById('progress');
        const loadingText = document.getElementById('loadingText');

        // Update progress every 100ms
        const interval = setInterval(function () {
          if (progress < 100) {
            progress++;
            progressBar.style.width = progress + '%';
            loadingText.innerText = 'Đang xử lý... ' + progress + '%';
          } else {
            clearInterval(interval);
            setTimeout(function () {
              // Hide the loading modal after the progress reaches 100%
              loadingModal.style.display = 'none';
              progressBar.style.width = 0 + '%';
              showModal()
            }, 500); // Delay before hiding
          }
        }, 50); // Adjust speed of progress update

      } else {
        showmsModal("Mã kích hoạt không chính xác")
      }
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      showmsModal("Đã xảy ra lỗi, vui lòng thử lại sau!")
    });
  }
});