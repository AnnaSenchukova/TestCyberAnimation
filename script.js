/*Скрипт печатной машинки*/
var htmlStringCyber = document.querySelector('.promo__title--cyber');
var htmlStringDay = document.querySelector('.promo__title--decoration');
htmlStringDay.style.visibility = 'hidden';
htmlStringCyber.style.visibility = 'hidden';

/*
TypeWriter.prototype = {
    element: null,
    type: function () {

    }

}{

}

var TypeWriter = function (element) {


}
*/

function typewriter(sourceElement, callback) {

    var isTyped = false;

    var cloneHtmlString = sourceElement.cloneNode(true);
    console.log(cloneHtmlString);
    sourceElement.innerHTML = '';
    sourceElement.style.visibility = 'visible';

    var textString = cloneHtmlString.innerText.trim();//находим нужную строку в клоне и вытаскиваем из неё текст
    console.log(textString);
    var arrayLetters = textString.slice(); //делим текст из клона на по-буквенный массив

    var i = 0;
    (function writter() {
        if (i < arrayLetters.length) {
            sourceElement.innerHTML += arrayLetters[i];
            i++;
            setTimeout(arguments.callee, 400);
        } else {
            if (callback) {
                callback();
            }
        }
    })();

    /*Скрипт мерцающего курсора
    function blinkCursor() {
        setInterval(
            function blinkOn() {
                blinkerSourceElement.style.borderRightColor = '#4b6ecd';
            },
            200
        );

        setInterval(
            function blinkOff() {
                blinkerSourceElement.style.borderRightColor = 'transparent';

            }, 400);
    }

    setTimeout(blinkCursor, 600);

*/

}



function typeMonday() {
    typewriter(htmlStringDay);
    htmlStringDay.style.width = 'auto';
    htmlStringDay.classList.add('blinking-cursor-class');
    htmlStringCyber.classList.remove('blinking-cursor-class');
}


typewriter(
    htmlStringCyber,
    typeMonday
);


/*setTimeout(typewriter, 12200, htmlStringDay);*/


/* Скрипт появления/изчезновения текста */

var htmlNote = document.querySelector('.promo__note');

function visiability(hiddenObject) {
    var cloneHtml = hiddenObject.cloneNode(true);
    var hiddenText = cloneHtml.innerText;
    hiddenObject.innerHTML = '';

    setTimeout(function () {
        hiddenObject.innerHTML = hiddenText;
    }, 23000);
}

visiability(htmlNote);

/* Скрипт заполнения строки */

var htmlPreload = document.querySelector('.preload__wrapper');
htmlPreload.style.visibility = 'hidden';

function progress() {
    htmlPreload.style.visibility = 'visible';
    document.querySelector('.preload__value--decades').remove();
    document.querySelector('.preload__value--units').remove();

    var counterProgress = 0;
    var counterPercentages = 0;
    var timer = setInterval(preloadProgress, 100);

    function preloadProgress() {
        var htmlPreloadLine = document.querySelector('.preload__progress');

        counterProgress++;
        htmlPreloadLine.value = counterProgress;

        if (counterProgress === 80) {
            clearInterval(timer);
        }


        function percentagesProgress() {
            var htmlPercentage = document.querySelector('.preload__percentage');

            counterPercentages = counterProgress;
            htmlPercentage.innerHTML = counterPercentages + '%';
        }

        percentagesProgress();
    }

}

setTimeout(progress, 15000);