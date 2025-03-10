const listItems = document.querySelectorAll('li.item');
console.log(`Number of categories: ${listItems.length}`);

listItems.forEach(item => {
  const categoryName = item.querySelector('h2').textContent;
  const elementsNumbers = item.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${elementsNumbers}`);
});




// Number of categories: 3
// task-1.js:7 Category: Animals
// task-1.js:8 Elements: 4
// task-1.js:7 Category: Products
// task-1.js:8 Elements: 3
// task-1.js:7 Category: Technologies
// task-1.js:8 Elements: 5