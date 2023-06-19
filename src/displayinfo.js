
function displayInfo(info) {
  const container = document.getElementById('container');
 

  function getInfo(object){
    for (const data in object){
      let element = document.createElement('sub-weather');
      element.className = 'data';

      element.textContent = `${data}: ${object[data]}`;
      container.appendChild(element);
    }
  }

  getInfo(info);

}

export default displayInfo