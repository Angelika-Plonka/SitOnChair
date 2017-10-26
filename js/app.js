document.addEventListener("DOMContentLoaded", function() {

    //chowanie paska na obrazkach
    var visiblePicture1 = document.querySelector('.picture1');
    var visiblePicture2 = document.querySelector('.picture2');

    var hiddenText1 = document.querySelector('.picture1 .strip');
    var hiddenText2 = document.querySelector('.picture2 .strip');

    visiblePicture1.addEventListener('mouseover', function () {
        hiddenText1.style.display='none';
    })
    visiblePicture1.addEventListener('mouseout', function () {
        hiddenText1.style.display='block';
    })

    visiblePicture2.addEventListener('mouseover', function () {
        hiddenText2.style.display='none';
    })
    visiblePicture2.addEventListener('mouseout', function () {
        hiddenText2.style.display='block';
    })



    //dropped menu

    var menu= document.querySelector('nav ul').firstElementChild;
    var elMenu= document.querySelector('nav ul>li>ol');
    menu.addEventListener('mouseover', function () {
        elMenu.style.display='block';
    })
    menu.addEventListener('mouseout', function () {
        elMenu.style.display='none';
    })

    //slider:
    var prevButton= document.querySelector('baner .col.col1:first-child');
    var pointerPrevButton = prevButton.querySelector('span');
    pointerPrevButton.style.cursor='pointer';
    var nextButton= document.querySelector('baner .col.col1:last-child');
    var pointerNextButton = nextButton.querySelector('span');
    pointerNextButton.style.cursor='pointer';
    var listElements= document.querySelectorAll('baner li');
    var current = 0;

    var pictureIndex = [];
    for (var i=0; i<listElements.length; i++) {
        pictureIndex.push(listElements[i]);
    }

    listElements[current].classList.add("visible");

    pointerNextButton.addEventListener('click', function(){
        listElements[current].classList.remove("visible");

        if (current < listElements.length-1) {
            current++;
        } else {
            current = 0;
        }

        listElements[current].classList.add("visible");

    })

    pointerPrevButton.addEventListener('click', function(){
        listElements[current].classList.remove("visible");

        if (current > 0) {
            current--;
        } else {
            current = listElements.length-1;
        }

        listElements[current].classList.add("visible");

    })



    // Calculator
    var dropdownLists = [...document.querySelectorAll('.drop_down_list')];

    var listPanelLi = [...document.querySelectorAll('.list_panel > li')];
    var transportInput = document.querySelector('.checkbox input');

    // Summary Panel
    var chairTitle = document.querySelector('.panel_left .title');
    var chairColor = document.querySelector('.panel_left .color');
    var chairPattern = document.querySelector('.panel_left .pattern');
    var chairTransport = document.querySelector('.panel_left .transport');
    var chairTitleValue = document.querySelector('.panel_right .title.value');
    var chairColorValue = document.querySelector('.panel_right .color.value');
    var chairPatternValue = document.querySelector('.panel_right .pattern.value');
    var chairTransportValue = document.querySelector('.panel_right .transport.value');
    var sumCounter = 0;
    var sumBox = document.querySelector('.sum');



    dropdownLists.forEach(function (el) {
        el.addEventListener('click', function () {
            if (this.children) {
                this.lastElementChild.classList.toggle("block");
            }
        });
    });

    listPanelLi.forEach(function (el) {
            function calc(itemTitle, itemValue) {
                itemTitle.innerText = el.innerText;
                itemValue.innerText = el.dataset.price + "zł";
                //sumCounter = 0;
                sumCounter += parseInt(el.dataset.price);
                sumBox.innerText = sumCounter + "zł";

            };
        el.addEventListener('click', function () {
            var label = this.parentElement.parentElement.firstElementChild;
            label.innerText = el.innerText;
            label.style.color = "black";
            if (this.parentElement.parentElement === dropdownLists[0]) {
                calc(chairTitle, chairTitleValue);
            } else if (this.parentElement.parentElement === dropdownLists[1]) {
                calc(chairColor,chairColorValue);
            } else if (this.parentElement.parentElement === dropdownLists[2]) {
                calc(chairPattern, chairPatternValue);
            }
        });
    });

    transportInput.addEventListener("click", function () {
        if (transportInput.checked === true) {
                    chairTransport.innerText = "Transport";
                    chairTransportValue.innerText = transportInput.dataset.transportPrice + "zł";
                    sumCounter += parseInt(transportInput.dataset.transportPrice);
        }
        else {
            chairTransport.innerText = "";
                    chairTransportValue.innerText = "";
                    sumCounter -= parseInt(transportInput.dataset.transportPrice);
        }
        sumBox.innerText = sumCounter + "zł";
    });
});
