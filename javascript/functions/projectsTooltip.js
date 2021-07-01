import {isInViewport} from './isInViewport.js';

export function projectsTooltip() {
  const target = document.querySelector('.projects');
  const wrapper = document.querySelector('.wrapper');
  const tooltip = document.querySelector("#projects_tooltip");
  
  wrapper.addEventListener('scroll', function () {
    if (isInViewport(target)) {
      return tooltip.classList.add('appear')
    }
    tooltip.classList.remove('appear')
  });
}