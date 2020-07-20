import "./css/style.less";


const ageOnPage = document.querySelector("#age")



//Дата рождения

let dob = new Date(1995, 12, 17);

let now = new Date(); //Текущя дата
let today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
let dobnow = new Date(today.getFullYear(), dob.getMonth(), dob.getDate()); //ДР в текущем году

let age = today.getFullYear() - dob.getFullYear();
//Если ДР в этом году ещё предстоит, то вычитаем из age один год
if (today < dobnow) {
  age = age-1;
}

ageOnPage.innerHTML = age