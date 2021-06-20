const personGenerator = {
    surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра",
            "id_2": "Наталья",
            "id_3": "Елена",
            "id_4": "Любовь",
            "id_5": "Вера",
            "id_6": "Юлия",
            "id_7": "Светлана",
            "id_8": "Надежда",
            "id_9": "Ирина",
            "id_10": "Татьяна"
        }
    }`,
    middleNameJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александров",
            "id_2": "Максимов",
            "id_3": "Иванов",
            "id_4": "Артемов",
            "id_5": "Дмитриев",
            "id_6": "Семенов",
            "id_7": "Михаилов",
            "id_8": "Даниилов",
            "id_9": "Егоров",
            "id_10": "Андреев"
        }
    }`,
    professionMan: `{
        "count": 5,
        "list": {     
            "id_1": "Программист",
            "id_2": "Водитель",
            "id_3": "Летчик",
            "id_4": "Инженер",
            "id_5": "Архитектор"
        }
    }`,

    professionWoman: `{
        "count": 5,
        "list": {     
            "id_1": "Певица",
            "id_2": "Стюардесса",
            "id_3": "Актриса",
            "id_4": "Переводчица",
            "id_5": "Проводница"
        }
    }`,

    month: `{
        "count": 12,
        "list": {     
            "id_1": "Января",
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"
        }
    }`,

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
    //Функция для получения случайного числа
    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),
    //Функция для получения случайного значения из объекта JSON
    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
        return obj.list[prop];
    },
    //Функция получения имени
    randomFirstName: function () {
        if (gender == 1) {
            return this.randomValue(this.firstNameMaleJson);
        } else {
            return this.randomValue(this.firstNameFemaleJson);
        }

    },

    //Функция для получения фамилии
    randomSurname: function () {
        if (gender == 1) {
            return this.randomValue(this.surnameJson);
        } else {
            return this.randomValue(this.surnameJson) + 'a';
        }
    },
    //Функция для получения отчества
    randomMiddleName: function () {
        if (gender == 1) {
            return this.randomValue(this.middleNameJson) + 'ич';
        } else {
            return this.randomValue(this.middleNameJson) + 'на';
        }
    },
    //Функция определния пола
    randomGender: function () {
        return result = (gender == 1) ? this.GENDER_MALE : this.GENDER_FEMALE;
    },
    //Функция получения даты рождения
    randomData: function () {
        var day, month;
        month = this.randomIntNumber(12, 1);
        if (month == 2) {
            day = this.randomIntNumber(28, 1);
        }
        if ((month == 4) || (month == 6) || (month == 9) || (month == 11)) {
            day = this.randomIntNumber(30, 1);
        } else {
            day = this.randomIntNumber(31, 1);
        }
        const obj = JSON.parse(this.month);
        month = `id_${month}`;
        month = obj.list[month];
        const data = `Дата рождения: ${day}  ${month}  ${this.randomIntNumber(2000, 1950)} г.\n`
        return data;
    },
    //Функция получения профессии
    randomProfession: function () {
        if (gender == 1) {
            return result = 'Профессия: ' + this.randomValue(this.professionMan);
        } else {
            return result = 'Профессия: ' + this.randomValue(this.professionWoman);
        }
    },
    //Функция сбора данных
    getPerson: function () {
        this.person = {};
        this.person.gender = `${this.randomGender()} \n`;
        this.person.firstName = this.randomFirstName();
        this.person.surName = this.randomSurname();
        this.person.data = this.randomData();
        this.person.middleName = this.randomMiddleName();
        this.person.profession = this.randomProfession();
        gender = personGenerator.randomIntNumber();
        return this.person;
    }
};
//Глобальная переменная для определения пола
var gender = personGenerator.randomIntNumber();


