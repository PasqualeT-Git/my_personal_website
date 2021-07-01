export const filterMenu = () => {
  const chevron = document.querySelector('#projects_chevron');
  const menu = document.querySelector('.filter_bar');
  const tooltip = document.querySelector("#projects_tooltip");

  chevron.addEventListener('click', function () {
    if (menu.style.display === 'none' || menu.style.display === '') {
      tooltip.classList.remove('appear')
      return menu.style.display = 'flex'
    }
    
    menu.style.display = 'none'
  })
  
  document.addEventListener('click', function (e) {
    if (e.target.parentElement !== menu && e.target.parentElement !== chevron) {
      menu.style.display = 'none'
    }
  })
}