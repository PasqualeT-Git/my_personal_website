export const toggleBurger = () => {
  const burger = document.querySelector('#burger_button');

  burger.addEventListener('click', () => {
    burger.classList.toggle('open')
  })
}

