// Function to copy text to the clipboard
function copyText(identifier) {
    const textElement = document.getElementById(identifier);
    const textToCopy = textElement.textContent.trim();
  
    const textarea = document.createElement('textarea');
    textarea.value = textToCopy;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  
    showCopiedToast(identifier);
  }
  
  // Function to show the toast message
  function showCopiedToast(identifier) {
    const toastMessage = document.getElementById('toast-message');
    const text = identifier === 'email' ? 'Email' : 'Phone';
    toastMessage.textContent = `${text} copied to clipboard!`;
    toastMessage.style.display = 'block';
  
    setTimeout(() => {
      toastMessage.style.display = 'none';
    }, 2000);
  }
  