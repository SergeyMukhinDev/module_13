window.onload = view();
document.getElementById('generate').onclick = function () {
    view();
};

document.getElementById('clear').onclick = function () {
    clear();
};

function view() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.data;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('profession').innerText = initPerson.profession;
};

function clear() {
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = `Пол: \n`;
    document.getElementById('birthYearOutput').innerText = `Дата рождения:\n`;
    document.getElementById('middleNameOutput').innerText = '';
    document.getElementById('profession').innerText = `Профессия:\n`;
};
