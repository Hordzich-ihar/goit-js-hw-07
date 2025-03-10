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

// Функция для удобного применения стилей
const applyStyles = (element, styles) => Object.assign(element.style, styles);
applyStyles(document.documentElement, { overflowY: "auto" });
applyStyles(document.body, {
  fontFamily: "Montserrat, sans-serif",
  backgroundColor: "#f8f8fc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

});


// Стилизация контейнера списка
applyStyles(document.querySelector(".wrapper"), {
  width: "100%",
  maxWidth: "500px",
  marginTop: "20px",
});

// Стилизация списка категорий
applyStyles(document.querySelector("#categories"), {
  listStyle: "none",
  padding: "0",
  margin: "0",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
});

// Стилизация всех категорий
document.querySelectorAll(".item").forEach((item) =>
  applyStyles(item, {
    backgroundColor: "#f7f6ff",
    borderRadius: "4px",
    padding: "20px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  })
);


// Стилизация заголовков категорий
document.querySelectorAll(".item h2").forEach((title) =>
    applyStyles(title, {
    fontWeight:600,
    fontSize: "24px",
    color: "#2e2f42",
    marginBottom: "15px",
  })
);

// Стилизация вложенных списков
document.querySelectorAll(".item ul").forEach((list) =>
  applyStyles(list, {
    listStyle: "none",
    padding: "0",
    margin: "0",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  })
);

// Стилизация элементов списка
document.querySelectorAll(".item ul li").forEach((listItem) => {
  applyStyles(listItem, {
    backgroundColor: "white",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #808080",
    textAlign: "center",
    fontSize: "16px",
    color: "#2e2f42",
 
  });

  // Добавляем эффект при наведении
  listItem.addEventListener("mouseover", () =>
    applyStyles(listItem, { backgroundColor: "#e2e2ff", cursor: "pointer" })
  );
  listItem.addEventListener("mouseout", () =>
    applyStyles(listItem, { backgroundColor: "white" })
  );
});


