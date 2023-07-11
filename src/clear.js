
function clearAll() {
  const main = document.querySelector('#container');
  const icon = document.querySelector('#icon');
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }

  icon.src='';
  
}

export default clearAll