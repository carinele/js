
// 1.	Написать функцию, которая принимает два числа и возвращает результат их умножения (использовать prompt и alert)
let num1 = prompt('Введите первое число:')
let num2 = prompt('Введите второе число:')
let sum = num1 * num2;
alert(sum)

// 2.	Написать функцию, которой передаем, имя, фамилия и возраст, и получаем строку "Привет Иван Петров с возрастом 17 лет" (использовать prompt и alert)
let name = prompt('Введите имя:')
let surname = prompt('Введите фамилию:')
let age = prompt('Введите возраст:')
let message = 'Привет ' + name + ' ' + surname + ' с возрастом' + age + ' лет'
alert(message);

// 3.	Написать функцию, которая принимает пол человека ('M','F') в виде строки, результат функции возвращает строку "Ваш пол мужской" (или женский) или же "Ваш пол не определен"
let gender = prompt('Введите свой пол:')
if(gender == 'M'){
    alert('Ваш пол мужской!')
} else if(gender == 'F'){
    alert('Ваш пол женский!')
} else{
    alert('Ваш пол неопределен!')    
}

// 4.	Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке. (использовать switch)
let num = prompt('Введите число дня недели')
switch(num){
    case '1': alert('Понедельник'); 
    break;
    case '2': alert('Вторник');
    break;
    case '3': alert('Среда');
    break;
    case '4': alert('Четверг');
    break;
    case '5': alert('Пятница');
    break;
    case '6': alert('Суббота');
    break;
    case '7': alert('Воскресенье');
    break;
}

// 5.	Вывести числа от 1 до 100 в столбец. К каждой цифре подписать состояние возраста (1-17 ребенок, 18-30 - молодой, 30-55 - зрелый, от 55 - старый). Например. 33 – зрелый (использовать for, для вывода использовать document.write)
for (let i = 1; i <= 100; i++) {
    let ageGroup;

    if (i >= 1 && i <= 17) {
        ageGroup = "ребенок";
    } else if (i >= 18 && i <= 30) {
        ageGroup = "молодой";
    } else if (i > 30 && i <= 55) {
        ageGroup = "зрелый";
    } else {
        ageGroup = "старый";
    }

    document.write(i + " – " + ageGroup + "<br>");
}

// 6.	 Создай новую функцию, в которую передаешь имя и возраст человека и получаешь сообщение (Иван имеет возраст 44 и он зрелый). А также вызвать внутри своей функции, функцию из прошлого задания
let name6 = prompt('Введите имя')
let age6 = prompt('Введите возраст')
let ageGroup

if (age6 < 18) {
    ageGroup = 'ребенок'
} else if (age6 >= 18 && age6 <= 30) {
    ageGroup = 'молодой'
} else if (age6 > 30 && age6 <= 55) {
    ageGroup = 'зрелый'
} else {
    ageGroup = 'старый'
}
alert(name + ' имеет возраст ' + age + ' и он ' + ageGroup)

// 7.	Вывести кнопку с текстом "Привет", при нажатии на неё выводим alert c текстом "Привет Мир!"

document.getElementById('button').onclick = function (){
    alert('Привет, мир!')
}

// 8.	Выводим кнопку с текстом "Заполнить" и незаполненный инпут, при клике на кнопку, заполняем инпут текстом test@email.ru
document.getElementById("button").onclick = function () {
    document.getElementById("input").value = "test@email.ru";
};

// 9.	Выводим кнопку и инпут, в инпуте можно ввести любой и текст и при нажатии на кнопку, выводится алерт с текстом "Вы ввели 'текст инпута'" или "Вы ничего не ввели в поле".

document.getElementById('button').onclick = () =>{
    let inputText = document.getElementById('input').value
    if(inputText == ''){
        alert('Вы ничего не ввели в поле')
    } else{
        alert('Вы ввели: ' + inputText)
    }
}

// 10.	Выводим две кнопки "заблокировать" и "разблокировать" и инпут. Одна из них блокирует инпут с помощью атрибута disabled, а другая разблокирует
let input = document.getElementById('input')
document.getElementById("buttonBlock").onclick = function() {
    input.setAttribute('disabled', true) 
};
document.getElementById("buttonUnBlock").onclick = function() {
    input.setAttribute('disabled', false) 
};

// 11.	Вывести любой квадрат и кнопку "скрыть квадрат". Когда мы нажимаем на скрыть, квадрат исчезает и текст кнопки меняется на "показать квадрат" и так можно кликать сколько угодно раз.
function toggleSquare() {
    const square = document.getElementById('square');
    const button = document.getElementById('toggleButton');
    if (square.style.display === 'none' || square.style.display === '') {
        square.style.display = 'block';  
        button.textContent = 'Скрыть квадрат';  
    } else {
        square.style.display = 'none';  
        button.textContent = 'Показать квадрат';  
    }
}

// 12.	Выводим красный квадрат, при наведении на него он становиться зеленым, а когда уводим курсор от него, обратно красным.
const square = document.getElementById('square');
// Добавляем событие при наведении курсора
square.addEventListener('mouseover', function() {
    square.style.backgroundColor = 'green';  // Меняем цвет на зеленый
});

// Добавляем событие при уводе курсора
square.addEventListener('mouseout', function() {
    square.style.backgroundColor = 'red';  // Возвращаем цвет на красный
});