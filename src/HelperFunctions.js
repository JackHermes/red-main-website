let isInViewport = (element) => {

  let boundingBox = element.getBoundingClientRect();

  return (
    boundingBox.top >= 0 &&
    boundingBox.left >= 0 &&
    boundingBox.bottom <= (window.innerHeight || documentElement.clientHeight) &&
    boundingBox.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// debounce, from Underscore.js:  https://davidwalsh.name/function-debounce
// https://underscorejs.org/#debounce
let debounce = (func, wait, immediate) => {
  let timeout;
  return function() {
    let context = this, args = arguments;
    let later = function() {
      timeout = null;
      if(!immediate) func.apply(context, args);
    };
    let callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow) func.apply(context, args);
  };
}

export { isInViewport, debounce };
