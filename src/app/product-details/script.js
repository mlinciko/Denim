//создаем событие и вызываем функцию обработчика события
document.querySelector('.slider__photos').addEventListener('click', e => handler(e.target));

//сохраняем все картинки в массив
let images = [...document.querySelectorAll('.slider__image')];

//создаем событие для стрелки вправо и влево
document.querySelectorAll('.slider__arrow').forEach(function (button) { button.addEventListener('click', e => handlerArrow(e.target)); });

function handlerArrow(button) {
  let right;

  //тернарный оператор
  button.classList.contains('slider__arrow__right') === true ? right = true : right = false;

  let prev_elem, next_elem;

  //находим индекс элемента, который содержит .big
  let i = images.findIndex(item => item.classList.contains('big'));
  //определяем значения предыдущего и следующего элемента
  prev_elem = images[i];
  prev_elem.classList.remove('big');

  if (right) next_elem = findRightElem(i);
  else next_elem = findLeftElem(i);

  //вызываем функцию, меняющую местами элементы
  changeOrder(prev_elem, next_elem);
}


//условия для нового элемента (листаем влево - левый элемент следующий, листавем вправо - правый элемент следующий)
function findRightElem(i) {
  if (i !== images.length - 1)
    return images[i + 1];
  else return images[0];
}
function findLeftElem(i) {
  if (i !== 0)
    return images[i - 1];
  else return images[images.length - 1];
}



//обрабатывает событие при нажатии на превью 
function handler(next_elem) {
  //находим ссылку на большую картинку
  let prev_elem = document.querySelector('.big');
  prev_elem.classList.remove('big');

  //вызываем функцию, меняющую местами элементы
  changeOrder(prev_elem, next_elem);
}

//функция меняет местами картинки(+добавляет .big)
function changeOrder(prev_elem, next_elem) {
  //убираем класс .big
  prev_elem.classList.remove('big');

  //меняем значение order, чтобы поменять элементы местами
  order = window.getComputedStyle(next_elem).order;
  prev_elem.style.order = order;

  //добавляем для текущего элемента .big
  next_elem.classList.add('big');
}
