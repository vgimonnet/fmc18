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


  // Form submit management - Send mail
  // const form = document.getElementById('form');
  document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = Object.fromEntries(new FormData(e.target));

    const subject = formData.subject;
    const society = formData?.society ? ` (${ formData?.society })` : '';
    const message = `
      Nouvelle demande de contact de la part de ${ formData.name } ${ society } \n
      Email : ${ formData.email } \n
      Objet de la demande : ${ subject } \n
      Message : \n
      ${ formData.message }
    `;

  });
});