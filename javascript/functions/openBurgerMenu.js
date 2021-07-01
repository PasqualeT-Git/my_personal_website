export function openBurgerMenu() {
  const burger =  document.querySelector('#burger_button');
  const navMenu = document.querySelector('nav');
  const buttons = document.querySelectorAll('.skill_button');

  burger.addEventListener('click', () => {
    if (navMenu.style.width === "") {
      buttons.forEach(button => button.style.opacity = "1")
      return navMenu.style.width = "60%"
    }

    navMenu.style.width = ""
    buttons.forEach(button => button.style.opacity = "0")
  })
}

