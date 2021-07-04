"use strict";
const increment = () => {
  counterValue += 1;
  document.getElementById('value').textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  document.getElementById('value').textContent = counterValue;
};
wrap_button.sub.addEventListener('click', increment);
wrap_button.add.addEventListener('click', decrement);
