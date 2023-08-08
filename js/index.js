document.addEventListener('DOMContentLoaded', () => {
  // Modal Image Gallery
  onClick = (element) => {
    document.getElementById('img').src = element.src;
    document.getElementById('modal').style.display = 'block';
    document.getElementById('caption').innerHTML = element.alt;
  }


// Toggle between showing and hiding the sidebar when clicking the menu icon
  const sidebar = document.getElementById('sidebar');

  openSidebar = () => {
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
  }

  // Close the sidebar with the close button
  closeSidebar = () => {
    sidebar.style.display = 'none';
  }
});