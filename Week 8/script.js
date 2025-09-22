const App = (function(){
  function setYear(){
    const y = new Date().getFullYear();
    document.getElementById('year').textContent = y;
  }

  function navToggle(){
    const btn = document.getElementById('navToggle');
    const nav = document.querySelector('.main-nav');
    btn.addEventListener('click', ()=>{
      nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', nav.classList.contains('open'));
    });
  }

  function formHandler(){
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    form.addEventListener('submit', e=>{
      e.preventDefault();
      if(!form.checkValidity()){
        status.textContent = 'Please fill all required fields.';
        return;
      }
      status.textContent = 'Message sent! We will reply soon.';
      form.reset();
    });
  }

  function init(){
    setYear();
    navToggle();
    formHandler();
  }

  return { init };
})();
document.addEventListener('DOMContentLoaded', App.init);
