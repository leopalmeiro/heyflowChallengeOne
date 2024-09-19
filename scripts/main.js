  // Get the checkbox elements
  const checkbox1 = document.getElementById('checkbox1');
  const checkbox2 = document.getElementById('checkbox2');

  // Function to sync checkboxes
  function syncCheckboxes() {
      checkbox1.checked = checkbox2.checked = this.checked;
  }

// Add event listeners to both checkboxes
checkbox1.addEventListener('change', syncCheckboxes);
checkbox2.addEventListener('change', syncCheckboxes);