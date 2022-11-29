let counterValue = 0;
const decrementeBtn = document.querySelector('button[data-action="decrement"]');
const incrementeBtn = document.querySelector('button[data-action="increment"]');
const value = document.getElementById('value');

const decrement = () => {
    counterValue -= 1
    value.textContent = counterValue;
};

const increment = () => {
    counterValue += 1;
    value.textContent = counterValue;
};

decrementeBtn.addEventListener('click', decrement);
incrementeBtn.addEventListener('click', increment);