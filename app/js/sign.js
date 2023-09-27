document.addEventListener("DOMContentLoaded", function() {
  const phoneInputWrapper = document.getElementById("phone-input-wrapper");
  const codeInputWrapper = document.getElementById("code-input-wrapper");
  const signInButton = document.getElementById("sign-in-button");
  const phoneinput = document.getElementById("phone-input");
  const overlay = document.getElementById('customAlertOverlay');
  const title = document.getElementById('customAlertTitle');
  const message = document.getElementById('customAlertMessage');
  const button = document.getElementById('customAlertButton');
  const phonenumbertext = document.getElementById("phone-number-text")
  const goBackSpan = document.createElement('span');
  
  goBackSpan.id = 'goBack';
  goBackSpan.textContent = ' Go back?';
  goBackSpan.style.cursor = 'pointer';
  goBackSpan.style.color = '#F04444';
  goBackSpan.style.userSelect = "none"

  signInButton.addEventListener("click", function(e) {
    e.preventDefault();
    if (phoneinput.value === "") return showAlert('Input error!', 'Fill in the input field');;
    phoneInputWrapper.style.opacity = "0";
    setTimeout(() => {
      phoneInputWrapper.style.display = "none";
      codeInputWrapper.style.display = "block";
      codeInputWrapper.style.opacity = "0";
      void codeInputWrapper.offsetWidth;
      codeInputWrapper.style.opacity = "1";
      phonenumbertext.textContent = `Entered number: ${phoneinput.value}`
      phonenumbertext.style.opacity = "0";
      void phonenumbertext.offsetWidth;
      phonenumbertext.style.opacity = "1";
      phonenumbertext.appendChild(goBackSpan);
    }, 1000);
  });

  goBackSpan.addEventListener('click', function(e) {
    e.preventDefault();
    codeInputWrapper.style.opacity = "0";
    phonenumbertext.style.opacity = "0";
    setTimeout(() => {
      codeInputWrapper.style.display = "none";
      phoneInputWrapper.style.display = "block";
      phoneInputWrapper.style.opacity = "0";
      void phoneInputWrapper.offsetWidth;
      phoneInputWrapper.style.opacity = "1";
      phonenumbertext.textContent = "ㅤ"
      phonenumbertext.removeChild(goBackSpan)

    }, 1000);
  });

  button.addEventListener('click', () => {
    overlay.classList.remove('show');
    overlay.classList.add('hidden');
    setTimeout(() => {
      overlay.style.display = "none";
    }, 500);
  });

  function showAlert(customTitle, customMessage) {
    title.textContent = customTitle;
    message.textContent = customMessage;
    overlay.style.display = "flex";
    overlay.classList.add('hidden');

    setTimeout(() => {
        overlay.classList.remove('hidden');
        overlay.classList.add('show');
    }, 1);
  }
});
