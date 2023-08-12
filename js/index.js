document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const imgs = Array.from(document.querySelectorAll('.img'));
  let clickedImgIndex = null;


  // Modal Image Gallery
  onClick = (element) => {
    setImage(element);
    modal.style.display = 'block';
  }

  closeModal = (element) => {
    modal.style.display='none'
  }

  nextImg = () => {
    if (clickedImgIndex === 7) setImage(imgs[0]);
    else setImage(imgs[clickedImgIndex + 1]);
  }

  prevImg = () => {
    if (clickedImgIndex === 0) setImage(imgs[7]);
    else setImage(imgs[clickedImgIndex - 1]);
  }

  setImage = (img) => {
    clickedImgIndex = imgs.indexOf(img);
    document.getElementById('img').src = img.src;
    document.getElementById('caption').innerHTML = img.alt;
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

  onSubmit = (token) => {
    const formData = Object.fromEntries(new FormData(document.getElementById('form')));
    const society = formData?.society ? `(${ formData?.society })` : '';

    const data = {
      service_id: 'service_y15exl9',
      template_id: 'template_d1t7nmu',
      user_id: 'GcO3YN83rCIefi_d4',
      template_params: {
        'name': formData.name,
        society,
        'message': formData.message,
        'subject': formData.object,
        'g-recaptcha-response': token,
      }
    };

    // fetch('https://api.emailjs.com/api/v1.0/email/send', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(data)
    // })
    // .then(response => {
    //   alert('Mail envoyé avec succès.');
    // })
    // .catch(error => {
    //   alert('Echec de l\'envoi du mail. Vous pouvez réessayer ou bien nous contacter directement depuis à partir de notre adresse mail.');
    // });
  }
});