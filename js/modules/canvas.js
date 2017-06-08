'use strict';

var tiles = require('./tiles');

var canvas = document.getElementById("CanMap"),
    context = canvas.getContext("2d");

var img = new Image();
img.src = tiles;
img.onload = function () {

    context.drawImage(img, 0, 0);
};