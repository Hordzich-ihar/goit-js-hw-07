// Функция для удобного применения стилей через JavaScript
const applyStyles = (element, styles) => {
  Object.assign(element.style, styles);
};

// Стили для body (центрирование контента)
applyStyles(document.body, {
  fontFamily: "Montserrat, sans-serif",
  backgroundColor: "#f8f8fc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  margin: "0",
  padding: "20px",
  flexDirection: "column",
});

// Найдём контейнер управления (`#controls`)
const controls = document.querySelector("#controls");
applyStyles(controls, {
  backgroundColor: "#f7f6ff",
  padding: "24px",
  borderRadius: "12px",
  display: "flex",
  gap: "16px",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "500px",
});

// Стили для поля ввода (`input`)
const input = document.querySelector("#controls input");
applyStyles(input, {
  padding: "10px",
  border: "1px solid #aaa",
  borderRadius: "6px",
  fontSize: "16px",
  width: "150px",
  textAlign: "center",
});

// Стили для кнопок
const createButton = document.querySelector("[data-create]");
const destroyButton = document.querySelector("[data-destroy]");

applyStyles(createButton, {
  backgroundColor: "#4e75ff",
  color: "white",
  border: "none",
  padding: "10px 16px",
  fontSize: "16px",
  borderRadius: "6px",
  cursor: "pointer",
});

applyStyles(destroyButton, {
  backgroundColor: "#ef4e4e",
  color: "white",
  border: "none",
  padding: "10px 16px",
  fontSize: "16px",
  borderRadius: "6px",
  cursor: "pointer",
});

// Эффекты при наведении на кнопки
createButton.addEventListener("mouseover", () => {
  createButton.style.backgroundColor = "#6c8cff";
});
createButton.addEventListener("mouseout", () => {
  createButton.style.backgroundColor = "#4e75ff";
});

destroyButton.addEventListener("mouseover", () => {
  destroyButton.style.backgroundColor = "#ff7070";
});
destroyButton.addEventListener("mouseout", () => {
  destroyButton.style.backgroundColor = "#ef4e4e";
});

// Стили для контейнера с квадратами (`#boxes`)
const boxes = document.querySelector("#boxes");
applyStyles(boxes, {
  backgroundColor: "#f7f6ff",
  padding: "20px",
  borderRadius: "12px",
  display: "flex",
  gap: "10px",
  marginTop: "20px",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "100%",
  maxWidth: "600px",
  minHeight: "100px",
});

// Функция генерации случайного цвета
const getRandomHexColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0")}`;

// Функция создания квадратов
const createBoxes = (amount) => {
  boxes.innerHTML = ""; // Очищаем перед добавлением новых
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    applyStyles(box, {
      width: `${size}px`,
      height: `${size}px`,
      backgroundColor: getRandomHexColor(),
      borderRadius: "4px",
    });
    boxes.appendChild(box);
    size += 10;
  }
};

// Функция очистки квадратов и сброса input
const destroyBoxes = () => {
  boxes.innerHTML = "";
  input.value = "";
}

// Обработчики событий
createButton.addEventListener("click", () => {
  const amount = Number(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
  }
});

destroyButton.addEventListener("click", destroyBoxes);
