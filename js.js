//- Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let nonText = document.getElementById('text');
// nonText.onclick = () => {
//     nonText.innerText = '';
// }




// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
// let but = document.form.butt;
//
// but.onclick = () => {
//    but.style.display = 'none';
//
//    }




// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
// let but = document.forms.form22.butAge;
// but.onclick = () => {
//     let val = document.forms.form22.ages.value;
//
//     if (val > 17 ) {
//         alert('Wellcome!!');
//     }
//     else {
//         alert('Leave!');
//     }
// }




// - Создайте меню, которое раскрывается/сворачивается при клике
//
// let men = document.getElementById('menuu');
// let ull = document.getElementById('menu');
// let check = false;
//
// console.log(ull);
// men.onclick = () => {
// if (check) {
//     ull.style.display = 'block';
//     check = false;
// }
// else {
//     ull.style.display = 'none';
//     check = true;
// }
// }



// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// Вывести список комментариев в документ, каждый в своем блоке.
//  Добавьте каждому комментарию по кнопке для сворачивания его body.
// let com = document.getElementById('comment');
//
// let a = [
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'},
//     {title : 'lorem', body:'lorem ipsum dolo sit ameti'}
// ];
//
// a.forEach(value => {
//     let div = document.createElement('div');
//     let b = document.createElement('b');
//     let p = document.createElement('p');
//     let but = document.createElement('button');
//     but.innerText = 'CLICK';
//     p.innerText = value.body;
//     b.innerText = value.title;
//     div.appendChild(b);
//     div.appendChild(p);
//     div.appendChild(but);
//     com.appendChild(div);
//     let check = false;
//     but.onclick = () => {
//         if (check) {
//             p.style.display = 'none';
//             b.style.display = 'none';
//         check = false;
//         }
//         else {
//             p.style.display = 'block';
//             b.style.display = 'block';
//             check = true;
//         }
//     }
// })




// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
// Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
// let f1 = document.forms.f1.txt1;
// let f2 = document.forms.f1.txt2;
// let f3 = document.forms.f2.txt3;
// let f4 = document.forms.f2.txt4;
//
// let b = document.getElementById('content');
//
// b.onclick = () => {
//     console.log(f1.value);
//     console.log(f2.value);
//     console.log(f3.value);
//     console.log(f4.value);
//
// }



// - Створити функцію, яка генерує таблицю.
// Перший аргумент визначає кількість строк.
// Другий параметр визначає кліькіть ячеєк в кожній строці.
// Третій параметр визначає елемент в який потрібно таблицю додати.
//
// function tab(col, row, el) {
//     let table = document.createElement('table');
//     for (let i = 0; i <= col; i++) {
//       let tr = document.createElement('tr');
//
//         for (let a = 0; a <= row; a++) {
//             let td = document.createElement('td');
//             td.innerText = el;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     document.body.appendChild(table);
// }
//
// tab(3, 5, 'elll');



// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
// При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// let btn = document.getElementById('btnTb');
//
// let t1 = document.forms.tabl.row;
// let t2 = document.forms.tabl.col;
// let t3 = document.forms.tabl.res;
//
//
//     btn.onclick = () => {
//         if (t1.value > 0 && t2.value > 0) {
//         let table = document.createElement('table');
//
//         for (let i = 0; i <= t1.value; i++) {
//             let tr = document.createElement('tr');
//
//             for (let j = 0; j < t2.value; j++) {
//                 let td = document.createElement('td');
//                 td.innerText = t3.value;
//                 tr.appendChild(td);
//             }
//
//           table.appendChild(tr);
//         }
//         document.body.appendChild(table);
//     }
//         else {
//             alert('You enter not correct number');
//         }
// }




// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
// let imgList = [
//     {
//         id: 1,
//         imgUrl: 'https://auto.24tv.ua/resources/photos/news/930x523_DIR/201802/232343cf7a9a-6a57-412c-b49d-2bdd9c31a5e5.jpg?1517912936000'
//     },
//     {
//         id: 2,
//         imgUrl: 'https://glavcom.ua/img/article/5589/48_main.png'
//     },
//     {
//         id: 3,
//         imgUrl: 'https://www.decorprint.com.ua/wp-content/uploads/2017/06/w-176-1.jpg'
//     },
//     {
//         id: 4,
//         imgUrl: 'https://1.bp.blogspot.com/-_0JXDpvIF1U/WaxcVIT7HxI/AAAAAAAAAnM/gSfCaKXo79ACEHN2LiERWPUV4nSGyYcsACLcBGAs/s1600/4_fraktal3608ab310dc594c738706a02f4962899f.jpg'
//     }
// ];
//
// let photo = document.getElementById('photo');
// let img = document.createElement('img');
// let btnL = document.createElement('button');
// let btnR = document.createElement('button');
//
// btnL.innerText = 'LEFT';
// btnR.innerText = 'RIGHT';
//
// let i = 0;
//
// img.src = imgList[i].imgUrl;
//
// photo.appendChild(btnL);
// photo.appendChild(img);
// photo.appendChild(btnR);
//
// btnL.onclick = () => {
//     if ( i - 1 < 0) {
//         i = imgList.length - 1;
//     }
//     else {
//         i = i - 1;
//     }
//     img.src = imgList[i].imgUrl;
// }
//
// btnR.onclick = () => {
//     if ( i + 1 > imgList.length - 1) {
//         i = 0 ;
//     }
//     else {
//         i = i + 1;
//     }
//     img.src = imgList[i].imgUrl;
// }



// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
// Перевірку робити при натисканні на кнопку
// let mat = [
//     'сука','блять','курва','хуй','пізда'
// ];
//
// let text = document.forms.tsen.mat;
// let btnMat = document.forms.tsen.btnMat;
//
// btnMat.onclick = () => {
//     for (let i = 0; i < mat.length; i++) {
//         if (mat[i] === text.value) {
//             alert('Danger!!!');
//         }
//     }
// }



// - Сворити масив не цензцрних слів.
// Сворити інпут текстового типу.
// Потрібно перевіряти чи не містить ціле речення в собі погані слова.
// Кинути алерт з попередженням у випадку якщо містить.
// Перевірку робити при натисканні на кнопку
//
// let matt = [
//     'fuck','beach','whore','beef','cursing'
// ];
//
// let text = document.forms.tsen.mat;
// let btnMat = document.forms.tsen.btnMat;
//
// btnMat.onclick = () => {
//     for (let i = 0; i < matt.length; i++) {
//         let a = text.value;
//         if (a.includes(matt[i])) {
//             alert('Danger!!!');
//         }
//     }
// }






// -- создать скрипт, который берет считывает на странице (rules.html) текст и делает сбоку меню-оглавление по всем заголовкам которые есть в тексте.
// При клике на пункт оглавления вы должны отправляться к этому пункту в тексте



// -- взять массив пользователей
// let usersWithAddress = [
//                 {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
//                 {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
//                 {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
//                 {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
//                 {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
//                 {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
//                 {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
//                 {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
//                 {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
//                 {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
//             ];
// Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
// let id = document.getElementById('out');
//
// let a = document.forms.filtCh.check1;
// let b = document.forms.filtCh.check2;
// let c = document.forms.filtCh.check3;
//
// let bt = document.getElementById('btnF');
//
// for (let i = 0; i < usersWithAddress.length; i++) {
//     let p = document.createElement('p');
//     p.innerText = JSON.stringify(usersWithAddress[i]);
//     id.appendChild(p);
// }
//
// bt.onclick = () => {
//   let   p1 = JSON.parse(p.innerText);
//     for (let j = 0; j < usersWithAddress.length; j++) {
//         if (a.checked) {
//                  let mass1 = usersWithAddress.filter(value => !value.status);
//             p2.innerText = '';
//             p2.appendChild(mass1);
//         }
//         if (b.checked) {
//            let mass2  = usersWithAddress.filter(value => value.age >= 29);
//             p2.innerText = '';
//             p2.appendChild(mass2);
//         }
//         if (c.checked) {
//             let mass3 = usersWithAddress.filter(value => value.address.city === 'Kyiv');
//             p2.innerText = '';
//             p2.appendChild(mass3);
//         }
//
//     }
//
// }





// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
// Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне



// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
//
// let p = document.getElementById('copy');
//
// p.oncopy = () => {
//    p.style.background = 'red';
// }