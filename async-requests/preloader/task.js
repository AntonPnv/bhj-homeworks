document.addEventListener("DOMContentLoaded", () => {
  const items = document.getElementById("items");
  const loader = document.getElementById("loader");

  // Функция для выполнения GET-запроса
  function fetchData() {
    // Показ анимации загрузки
    loader.classList.add("loader_active");

    // Объект для выполнения GET-запроса
    const xhr = new XMLHttpRequest();
    
    // Метод и URL для запроса
    xhr.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses", true);

    // Обработчик события, который выполнится при успешном завершении запроса
    xhr.onload = function () {
      if (xhr.status === 200) {
        // Парсим полученные данные из JSON
        const data = JSON.parse(xhr.responseText);
        // Удаление содержимого элемента items
        items.innerHTML = "";

        for (const key in data.response.Valute) {
          const valute = data.response.Valute[key];
          // Создаем элементы для отображения данных о валюте
          const itemDiv = document.createElement("div");
          itemDiv.classList.add("item");

          const codeDiv = document.createElement("div");
          codeDiv.classList.add("item__code");
          codeDiv.textContent = valute.CharCode;
          
          const valueDiv = document.createElement("div");
          valueDiv.classList.add("item__value");
          valueDiv.textContent = valute.Value;
          
          const currency = document.createElement("div");
          currency.classList.add("item__currency");
          currency.textContent = "руб.";

          // Добавляем созданные элементы в items
          itemDiv.appendChild(codeDiv);
          itemDiv.appendChild(valueDiv);
          itemDiv.appendChild(currency);
          items.appendChild(itemDiv);
        }

        // Скрыть анимацию загрузки
        loader.classList.remove("loader_active");
      }
    }
    // Отправляем GET-запрос
    xhr.send();
  }
  // Вызываем функцию выполнения GET-запроса
  fetchData();
});
