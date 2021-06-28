function debounce(func, wait) {
    let timeout;
    var debounced = function() {
      var context = this;
      var args = arguments;
      function later() {
        func.apply(context, args);
      }
      if (timeout) {
        clearInterval(timeout);
      }
      timeout = setTimeout(later, wait);
    };
    return debounced;
}

module.exports = debounce;