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
    setTimeout(typewriter, 1500, htmlStringDay);



/* Скрипт появления/изчезновения текста */

var htmlNote = document.querySelector('.promo__note');

function visiability(hiddenObject) {
    var cloneHtml = hiddenObject.cloneNode(true);
    var hiddenText = cloneHtml.innerText;
    hiddenObject.innerHTML = '';

    setTimeout( function () {hiddenObject.innerHTML = hiddenText;}, 15000);
}

visiability(htmlNote);

/* Скрипт заполнения строки */



function progress() {
    document.querySelector('.preload__value--decades').remove();
    document.querySelector('.preload__value--units').remove();

    var counterProgress = 0;
    var counterPercentages = 0;
    var timer = setInterval( preloadProgress, 100 );
    
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

progress();