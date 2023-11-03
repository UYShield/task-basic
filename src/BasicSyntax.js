export function romanToInteger(str) {
    let result = 0; //Сюда записываем итоги арабских чисел
    let countString = 0;
    let newNumb = 0;

    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.

| Символ | Значение |
| ------ | -------- |
| I      | 1        |
| V      | 5        |
| X      | 10       |
| L      | 50       |
| C      | 100      |
| D      | 500      |
| M      | 1000     |
     */
    //[i] - индексация символа

    //Принимать римское число разбивать его на отдельные символы, после прогонять эти символы через switch case что бы получить арабские (придумать как проводить операцию над числом, т.к.
    //римские числа по типу DMI будут равны 501)
    //В цикл добавить свитч кейс, прогонять индексацию числа римского и вводить в случаее удачного кейса число в переменную (I IV )

    //XXXVII(6) = X X V X I I

    for (let i = 0; i < str.length; i++) {
        countString = str[i];

        //Через if сравнивать входящий элемент для того что бы проверить что идущие после Большего будут только меньше, если нет вычесть

        switch (countString) {
            //Из-за по символьной переборки код пропускает эти части
            /*  case 'IV':
                result += 4;
            break;

            case 'IX':
                result += 9;
            break;

            case 'XL':
                result += 40;
            break;

            case 'XC':
                result += 90;
            break;

            case 'CD':
                result += 400;
            break;

            case 'CM':
                result += 900;
            break; */

            case 'I':
                result += 1;
                break;

            case 'V':
                if (i > 0 && str[i - 1] === 'I') {
                    result += 3;
                } else {
                    result += 5;
                }
                break;

            case 'X':
                if (i > 0 && str[i - 1] === 'I') {
                    result += 8;
                } else {
                    result += 10;
                }

                break;

            case 'L':
                if (i > 0 && str[i - 1] === 'X') {
                    result += 30;
                } else {
                    result += 50;
                }

                break;

            case 'C':
                if (i > 0 && str[i - 1] === 'X') {
                    result += 80;
                } else {
                    result += 100;
                }

                break;

            case 'D':
                if (i > 0 && str[i - 1] === 'C') {
                    result += 300;
                } else {
                    result += 500;
                }

                break;

            case 'M':
                if (i > 0 && str[i - 1] === 'C') {
                    result += 800;
                } else {
                    result += 1000;
                }

                break;
        }
    }

    return result;
}
