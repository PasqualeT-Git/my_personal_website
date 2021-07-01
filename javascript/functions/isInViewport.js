export const isInViewport = (elem) => {
  const bounding = elem.getBoundingClientRect();
  
  return (
    Math.round(bounding.top) >= 0 && 
    Math.round(bounding.bottom) <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

