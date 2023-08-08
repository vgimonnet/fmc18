document.addEventListener('DOMContentLoaded', () => {
  // Modal Image Gallery
  onClick = (element) => {
    document.getElementById('img').src = element.src;
    document.getElementById('modal').style.display = 'block';
    document.getElementById('caption').innerHTML = element.alt;
  }


// Toggle between showing and hiding the sidebar when clicking the menu icon
  const navbar = document.getElementById('navbar');

  open = () => {
    navbar.style.display = navbar.style.display === 'block' ? 'none' : 'block';
  }

  // Close the sidebar with the close button
  close = () => {
    mySidebar.style.display = 'none';
  }
});