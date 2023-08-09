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
  // document.getElementById('form').addEventListener('submit', (e) => {
  //   e.preventDefault();
  //   const formData = Object.fromEntries(new FormData(e.target));

  //   // const subject = formData.subject;
  //   const society = formData?.society ? ` (${ formData?.society })` : '';
  //   // const message = `
  //   //   Nouvelle demande de contact de la part de ${ formData.name } ${ society } \n
  //   //   Email : ${ formData.email } \n
  //   //   Objet de la demande : ${ subject } \n
  //   //   Message : \n
  //   //   ${ formData.message }
  //   // `;


  //   // TODO: implement mail sending
  //   // https://www.emailjs.com/docs/rest-api/send/
  //   const data = {
  //     service_id: 'service_y15exl9',
  //     template_id: 'template_d1t7nmu',
  //     user_id: 'GcO3YN83rCIefi_d4',
  //     template_params: {
  //         'name': formData.name,
  //         society,
  //         'message': formData.message,
  //         'subject': formData.subject,
  //         'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
  //     }
  //   };

  //   console.log(data);
  // });


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

    fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(response => {
      alert('Mail envoyé avec succès.');
    })
    .catch(error => {
      alert('Echec de l\'envoi du mail. Vous pouvez réessayer ou bien nous contacter directement depuis notre adresse mail.');
    });
  }
});