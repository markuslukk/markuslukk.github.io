(function() {
  const toggle = document.getElementById('theme-toggle');
  const html = document.documentElement;
  
  // Check for saved theme or default to dark
  const savedTheme = localStorage.getItem('theme') || 'dark';
  html.setAttribute('data-theme', savedTheme);
  updateToggleIcons(savedTheme);
  
  toggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleIcons(newTheme);
  });
  
  function updateToggleIcons(theme) {
    const sunIcon = document.querySelector('.toggle-icon.sun');
    const moonIcon = document.querySelector('.toggle-icon.moon');
    
    if (theme === 'dark') {
      moonIcon.classList.add('active');
      sunIcon.classList.remove('active');
    } else {
      sunIcon.classList.add('active');
      moonIcon.classList.remove('active');
    }
  }
})();
