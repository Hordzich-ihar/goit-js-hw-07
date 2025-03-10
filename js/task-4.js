
document.querySelector(".login-form").addEventListener("submit", function (event) {
  event.preventDefault(); // Предотвращаем перезагрузку страницы

  const form = event.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (!email || !password) {
    alert("All form fields must be filled in");
    return;
  }

  const formData = {
    email,
    password,
  };

  console.log(formData); 
  form.reset(); 
});
    


// Функция для удобного применения стилей через JavaScript
const applyStyles = (element, styles) => {
  Object.assign(element.style, styles);
};

// Стили для body (центрирование контента)
applyStyles(document.body, {
    fontFamily: "Montserrat, sans-serif",
    FontWeight: "500" ,
  backgroundColor: "#f8f8fc",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  margin: "0",
  padding: "16px",
  flexDirection: "column",
});

// Найдём форму на странице
const form = document.querySelector(".login-form");

// Создаём контейнер для формы
const container = document.createElement("div");
applyStyles(container, {
  backgroundColor: "white",
  padding: "20px",
  borderRadius: "12px",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  textAlign: "left",
  width: "100%",
  maxWidth: "350px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

// Стили для формы (размещает элементы вертикально)
applyStyles(form, {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
});

// Стили для полей ввода
document.querySelectorAll(".login-form input").forEach((input) => {
  applyStyles(input, {
    width: "100%",
    padding: "10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    fontSize: "16px",
    outline: "none",
  });

  // Стили при фокусе
  input.addEventListener("focus", () => {
    input.style.borderColor = "#4e75ff";
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "#ddd";
  });
});

// Стили для кнопки
const button = form.querySelector("button");
applyStyles(button, {
  backgroundColor: "#4e75ff",
  color: "white",
  border: "none",
  padding: "8px 16px",
  fontSize: "16px",
  borderRadius: "8px",
  cursor: "pointer",
  width: "100px",
});

// Стили при наведении на кнопку
button.addEventListener("mouseover", () => {
  button.style.backgroundColor = "#6c8cff";
});
button.addEventListener("mouseout", () => {
  button.style.backgroundColor = "#4e75ff";
});

// Перемещаем форму внутрь контейнера
container.appendChild(form);

// Добавляем контейнер в body
document.body.appendChild(container);
