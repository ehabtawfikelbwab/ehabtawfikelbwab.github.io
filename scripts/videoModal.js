function openVideoModal(videoUrl) {
  const modal = document.createElement("div");
  modal.id = "video-modal";
  modal.className = "modal";

  modal.innerHTML = `
    <div class="modal-content">
      <video src="${videoUrl}" controls autoplay></video>
      <button class="close-btn">✕</button>
    </div>
  `;

  const modalContent = modal.querySelector(".modal-content");

  // Close when clicking the close button
  modal.querySelector(".close-btn").onclick = () => modal.remove();

  // Close when clicking outside the modal content
  modal.addEventListener("click", () => modal.remove());

  // Prevent closing when clicking inside the modal content
  modalContent.addEventListener("click", (e) => e.stopPropagation());

  document.body.appendChild(modal);
}

window.openVideoModal = openVideoModal;
