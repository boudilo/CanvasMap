'use strict';

var canvas = document.getElementById("CanMap"),
    context = canvas.getContext("2d");

var img = new Image();
img.src = "js/42.png";
img.onload = function () {

    context.drawImage(img, 0, 0);
};