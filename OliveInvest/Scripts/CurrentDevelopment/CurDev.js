﻿$(document).on('click', '#descriptionBtn', function () {
    if ($('#cont1').is(':visible')) {
        $('#cont1').fadeOut();
    } else {
        $('#cont2').hide();
        $('#cont1').fadeIn();
    }

});
$(document).on('click', '#floorplansBtn', function () {
    if ($('#cont2').is(':visible')) {
        $('#cont2').fadeOut();
    } else {
        $('#cont1').hide();
        $('#cont2').fadeIn();
    }
});
$(document).on('click', '.planLink', function (e) {
    e.preventDefault();
    var htmlCode = "";
    var selected = $(this).attr('id');

    switch (selected) {
        case 'garage':
            htmlCode = '<img src="/Images/Floor%20Plans/Garage%20Floorplans.png" />';

            break;
        case 'groundFloor':
            htmlCode = '<img src="/Images/Floor%20Plans/Ground%20Floor.png" />';
            break;
        case 'firstFloor':
            htmlCode = '<img src="/Images/Floor%20Plans/First%20Floor.png" />';
            break;
        case 'secondFloor':
            htmlCode = '<img src="/Images/Floor%20Plans/Second%20Floor.png" />';
            break;
        case 'roof':
            htmlCode = '<img src="/Images/Floor%20Plans/Roof.png" />';
            break;
        default:
            htmlCode = '<img src="~/Images/Floor%20Plans/Garage%20Floorplans.png" />';
    }
    $('#plans').html(htmlCode);
});

var listaSlika = [
    { url: '/Images/Backgrounds/Olive%20invest-second%20slidet.jpg', text: '' },
    { url: '/Images/Backgrounds/Olive%20invest-Third%20slidet.jpg', text: '' },
    { url: '/Images/Backgrounds/Olive%20invest-first%20slidet.jpg', text: '' }
];

$(document).ready(function () {
    setPicture(listaSlika[listaSlika.length - 1]);
    renderButtons(listaSlika);
    atilaSlider(listaSlika, sliderTimeout);
});