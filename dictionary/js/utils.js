export function showModal(message, style) {
  const modal = document.getElementById('modal')
  const closeModal = document.getElementById('close-modal')
  const text = document.createElement('div');
  text.className = `${style}`;
  modal.append(text);
  text.innerHTML = `
<div>
${message}
</div> 
`
  modal.classList.remove('hide')
  closeModal.addEventListener('click', () => {
    text.innerHTML = ''
    modal.classList.add('hide')
  })
}