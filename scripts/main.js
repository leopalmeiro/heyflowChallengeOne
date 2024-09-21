// Get the elements
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');
const checkbox2Label = document.querySelector('.custom-checkbox');

// Function to sync checkboxes
function syncClickCheckboxes() {
  checkbox1.checked = checkbox2.checked = this.checked;
}

// Add event listeners to both checkboxes
if (checkbox1) {
  checkbox1.addEventListener('click', syncClickCheckboxes);
  checkbox2.addEventListener('click', syncClickCheckboxes);
} else {
  checkbox2Label.classList.add('no-checkbox1');
}



