const scriptURL = 'https://script.google.com/macros/s/AKfycbxHj0HNFnSyvdwLADsQIWZ338MD2EXcRzMK1hkUqwdX5L8hfIDMYIcyz3pCq4-gITxT/exec';
  const form = document.forms['submit-to-google-sheet'];
  const message = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        message.innerHTML = 'Thanks for suscribing!';
        setTimeout(function(){
            message.innerHTML = ""
        }, 5000)
        form.reset()
      })
      .catch(error => {
        message.innerHTML = "Error suscribing, please try again";
        message.classList.add('errorMessage');
        setTimeout(function(){
            message.innerHTML= "";
        }, 5000);
      })    
  });
    