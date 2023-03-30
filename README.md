# Приложение для просмотра информации о звездных войнах

view - https://star-wars-9dcac.web.app

### Общие сведения

Используя [Star Wars API](https://swapi.dev/documentation) необходимо создать небольшое приложение с информационными карточками персонажей.

Приложение содержит 3 страницы:

- Главная: страница содержит приветствие пользователя, навигационное меню, кнопку перехода к странице с карточками персонажей.
- Страница с карточками о персонажах.
- Страница с ошибкой 404.

### Сраница с карточками о персонажах

Навигационное меню доступно как на главной странице, так и на странице с карточками.

Заголовок страницы содержать общее количество персонажей.

**Фильтр по персонажам:**

- Выпадающий список значений из карточки о персонаже. Список значений должен содержать дополнительное значение all для выбора всех персонажей. При выборе значения all должен отображаться весь ранее полученный набор данных на странице.
- Фильтрация по выбранному из списка значения. Фильтрация осуществляться локально (на фронте) среди ранее полученного от АПИ набора данных.

**Пагинация:**
Бесконечная подгрузка карточек на страницу.

**Карточки персонажей:**

- Карточка содержит имя и общую информацию о персонаже.
- Карточка кликабельна. При клике на карточку открываться модальное окно с подробной информацией о персонаже.
- На карточке персонажа присутствуют цветные тэги. Голубой с датой рождения. Желтый, зеленый и фиолетовый с гендерным признаком. При отсутствии какой-либо информации тэг в карточке отображаться не должен.
- В модальном окне с подробной информацией выводиться иконка в соответствии с полем gender выбранного персонажа.

- Реализованна кнопка перевода на язык wookiee и обратно.
- При нажатии на кнопку переводить страницу на язык wookiee и обратно на английский.