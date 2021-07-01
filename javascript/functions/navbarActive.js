function activeElement() {
  const buttons = document.getElementsByClassName('nav_buttons')[0].children;
  const filters = document.getElementsByClassName('nav_buttons')[1].children;
  let buttonsArray = [...buttons];
  let filtersArray = [...filters];

  document.addEventListener('scroll', () => {
    if (window.scrollY <= 300) {
      buttonsArray.forEach(element => {
        element.classList.remove('active')
      })
    }
  })

  function selectElemnts(array) {
    array.forEach(element => {
      element.addEventListener('click', () => {
        let sibilings = array.filter(button =>
          button.className === "active"
        );
        
        sibilings.forEach(sibiling => {
          sibiling.classList.remove('active')
        });
  
        element.classList.add('active');
      });
    });
  };

  selectElemnts(buttonsArray);
  selectElemnts(filtersArray);
}


export {activeElement}