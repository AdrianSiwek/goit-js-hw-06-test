const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listIngredients = document.querySelector("#ingredients");
const createItem = ingredients.map(itemA => {
  const listItem = document.createElement("li");
  listItem.classList.add('item');
  listItem.textContent = itemA;

  return listItem;
})

listIngredients.append(...createItem);