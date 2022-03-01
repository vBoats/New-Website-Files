const button = document.querySelector('input');
const paragraph = document.querySelector('p');

button.addEventListener('click', updateButton);

function updateButton() {
  if (button.value === 'Submit') {
    button.value = 'Unsubmit';
    if(paragraph.id === 'recommendation') {
      paragrpah.textContent = 'This is the recommendation';
    }

  }
}
