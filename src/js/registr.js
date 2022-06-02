(() => {
  const modalRefs = {
    registrationOpen: document.querySelector('.registration-form__button'),
    formName: document.querySelector('#form-name'),
    formPhone: document.querySelector('#form-phone'),
    formEmail: document.querySelector('#form-email'),
    registrationClose: document.querySelector('.modal__img'),
  };

  modalRefs.registrationOpen.addEventListener('click', openModal);
  modalRefs.registrationClose.addEventListener('click', clearFilds);

  function openModal() {
    document.body.classList.toggle('modal-is-open');
  }

  function clearFilds() {
    modalRefs.formName.value = '';
    modalRefs.formPhone.value = '';
    modalRefs.formEmail.value = '';
    document.body.classList.toggle('modal-is-open');
  }
})();
