(() => {
    var registration = document.querySelector('.registration-form__button');
  
    const menuRefs = {
      registration: document.querySelector('.registration-form__button'),
      formName: document.querySelector('#form-name'),
      formPhone: document.querySelector('#form-phone'),
      formEmail: document.querySelector('#form-email'),
    };
  
    menuRefs.registration.addEventListener('click', clearFilds);
  
    function clearFilds() {
      menuRefs.formName.value = '';
      menuRefs.formPhone.value = '';
      menuRefs.formEmail.value = '';
      document.body.classList.toggle('modal-is-open');
    }

  })();