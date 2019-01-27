/*Скрипт печатной машинки*/
    var htmlStringCyber = document.querySelector('.promo__title--cyber');
    var htmlStringDay = document.querySelector('.promo__title--decoration');


function typewriter(source) {
    var cloneHtmlString = source.cloneNode(true);
    console.log(cloneHtmlString);
    source.innerHTML = '';

    var textString = cloneHtmlString.innerText;//находим нужную строку в клоне и вытаскиваем из неё текст
    console.log(textString);
    var arrayLetters = textString.slice(); //делим текст из клона на по-буквенный массив

    var i = 0;
    (function() {
        if (i < arrayLetters.length) {
            source.innerHTML += arrayLetters[i];
            i++;
            setTimeout(arguments.callee, 200);
        }
    })();
}

typewriter(htmlStringCyber);
typewriter(htmlStringDay);


