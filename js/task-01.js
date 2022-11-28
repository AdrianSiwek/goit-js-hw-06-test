const categories = document.querySelector('#categories');
const numberOfCategories = categories.querySelectorAll('li.item');
console.log(`Number of categories: ${numberOfCategories.length}`);

const arrayCategories = numberOfCategories.forEach((item) => {
    console.log("");
    console.log(`Category: ${item.querySelector('h2').textContent}`);
    console.log(`Elements: ${item.querySelectorAll("li").length}`);
});