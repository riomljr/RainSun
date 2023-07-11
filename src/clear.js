
function clearAll() {
  const main = document.querySelector('#container');
  const icon = document.querySelector('#icon');
  while (main.firstChild) {
    main.removeChild(main.lastChild);
  }
  const container = document.querySelector('.searchBox');

  while (container.lastChild.id !== 'subBox') {
    container.removeChild(container.lastChild);
  }
  
}

export default clearAll