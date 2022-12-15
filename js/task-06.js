const input = document.getElementById("validation-input");
const valueLength = input.dataset.length;

const validationClass = (add, remove) => {
    input.classList.add(add);
    input.classList.remove(remove);
};

input.addEventListener("blur", (event) => {
    const lengthEvery = event.currentTarget.value.length;
    if (lengthEvery == valueLength) {
        return validationClass("valid", "invalid")
    }
    else {
        return validationClass("invalid", "valid")
    }
})