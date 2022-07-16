import { KitchenRange } from './KitchenRange.js';

const form = document.querySelector('form');
const rangeInput = document.getElementById('range');
const resetBtn = document.querySelector('[data-reset-btn]');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!rangeInput.value || +rangeInput.value < 1) return;

  const kitchen = new KitchenRange(rangeInput.value);

  rangeInput.value = '';
  resetBtn.addEventListener('click', kitchen.resetHandler);
});
