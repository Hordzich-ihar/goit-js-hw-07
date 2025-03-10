document
  .getElementById('name-input')
  .addEventListener('input', function (event) {
    let name = event.target.value.trim();
    document.getElementById('name-output').textContent = name || 'Anonymous';
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

// Найдём элементы на странице
const input = document.querySelector("#name-input");
const heading = document.querySelector("h1");

// Создаём контейнер для формы
const container = document.createElement("div");
applyStyles(container, {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
  width: "100%",
  maxWidth: "400px",
  display: "flex",
  flexDirection: "column",
  gap: "10px", 
});

// Стили для input
applyStyles(input, {
    width: "360px",
    height: "40px",
  padding: "8px",
  border: "1px solid #808080",
  borderRadius: "4px",
  fontSize: "16px",

});

// Стили при фокусе (изменение границы)
input.addEventListener("focus", () => {
  input.style.borderColor = "#808080";
});
input.addEventListener("blur", () => {
  input.style.borderColor = "#808080";
});

// Стили для заголовка (Hello, Anonymous!)
applyStyles(heading, {
    fontWeight: "600px",
  fontSize: "24px",
  color: "#2e2f42",
  margin: "0",
    textAlign: "left",
    letterSpacing: "0.04em",
  lineHeight: "1.3333",
});

container.appendChild(input);
container.appendChild(heading);


document.body.appendChild(container);
