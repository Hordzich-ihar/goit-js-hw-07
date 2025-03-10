document
  .getElementById('name-input')
  .addEventListener('input', function (event) {
    let name = event.target.value.trim();
    document.getElementById('name-output').textContent = name || 'Anonymous';
  });














