﻿var d = new Date();

$.get('header.html?v=20211005', function (data) {
    document.getElementById("MasterPageHeader").insertAdjacentHTML('beforeend', data);

}, 'text');

$.get('footer.html?v=20211005', function (data) {
    document.getElementById("MasterPageFooter").insertAdjacentHTML('beforeend', data);

}, 'text');