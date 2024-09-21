  // Get the checkbox elements
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox2 = document.getElementById('checkbox2');

  // Function to sync checkboxes
  function syncClickCheckboxes() {
      checkbox1.checked = checkbox2.checked = this.checked;
  }

// Function to apply 'focused' class to both checkboxes
function addFocus() {
  //checkbox1.classList.add('focused');
  //checkbox2.classList.add('focused');
}

// Function to remove 'focused' class from both checkboxes
function removeFocus() {
  //checkbox1.classList.remove('focused');
  //checkbox2.classList.remove('focused');
}

// Add event listeners to both checkboxes
checkbox1.addEventListener('click', syncClickCheckboxes);
checkbox2.addEventListener('click', syncClickCheckboxes);

// Add focus and blur event listeners
//checkbox1.addEventListener('focus', addFocus);
//checkbox1.addEventListener('blur', removeFocus);

//checkbox2.addEventListener('focus', addFocus);
//checkbox2.addEventListener('blur', removeFocus);
