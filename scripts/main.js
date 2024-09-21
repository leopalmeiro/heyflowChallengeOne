// Get the checkbox elements
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

// Function to sync checkboxes
function syncClickCheckboxes() {
  checkbox1.checked = checkbox2.checked = this.checked;
}

// Add event listeners to both checkboxes
checkbox1.addEventListener('click', syncClickCheckboxes);
checkbox2.addEventListener('click', syncClickCheckboxes);