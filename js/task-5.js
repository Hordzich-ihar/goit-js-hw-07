function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


document.querySelector(".change-color").addEventListener("click", function () {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  document.querySelector(".color").textContent = newColor;
});









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

// Найдём контейнер виджета
const widget = document.querySelector(".widget");

// Стили для контейнера (карточки)
applyStyles(widget, {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "center",
  width: "100%",
  maxWidth: "300px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

// Стили для текста (Background color: -)
const colorText = document.querySelector(".widget p");
applyStyles(colorText, {
  fontSize: "16px",
  color: "#4a4a4a",
  margin: "0",
});

// Стили для кнопки "Change color"
const button = document.querySelector(".change-color");
applyStyles(button, {
  backgroundColor: "#4e75ff",
  color: "white",
  border: "none",
  padding: "8px 16px",
  fontSize: "16px",
  borderRadius: "8px",
  cursor: "pointer",
  width: "150px",
  alignSelf: "center",
});

// Эффект при наведении на кнопку
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#6c8cff";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#4e75ff";
});
