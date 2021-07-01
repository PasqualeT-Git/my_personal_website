function disappearAfterScroll() {
  const mouse = document.getElementById('mouse_icon');
  const scroll = document.getElementById('scroll_icon');

  document.addEventListener('scroll', () => {
    
    if (window.scrollY >= 250) {
      mouse.style.animation = "disappear 1s forwards"
      scroll.style.animation = "disappear 1s forwards"
    } else {
      mouse.style.animation = "blink 2s linear infinite";
      scroll.style.animation = "blink 2s linear infinite";
    }
  })

  const wrapper = document.querySelector('.wrapper');
  const logo = document.querySelector('#logo');

  wrapper.addEventListener('scroll', () => {
    if (wrapper.scrollTop > 50) {
      logo.classList.remove('appear_logo')
      return logo.classList.add('disappear_logo')
    } else {
      logo.classList.remove('disappear_logo')
      return logo.classList.add('appear_logo')
    }
  })
}

export { disappearAfterScroll }