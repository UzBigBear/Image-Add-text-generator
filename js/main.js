"use strict"

const circle_canvas = document.querySelector("#canvas"),
    context = circle_canvas.getContext("2d");

const btnform = document.querySelector('[data-form="submit"]'),
    bomdot = document.querySelector('.bomdot'),
    quyosh = document.querySelector('.quyosh'),
    peshin = document.querySelector('.peshin'),
    asr = document.querySelector('.asr'),
    shom = document.querySelector('.shom'),
    xufton = document.querySelector('.xufton');

btnform.addEventListener('click', e => {
    e.preventDefault();
    addtext();
} )

function addtext(e) {
    // Draw Image function
    var img = new Image();
    img.src = '/img/nmz-time.jpg';
    img.onload = function () {
        context.drawImage(img, 0, 0);
        context.lineWidth = 1;
        context.fillStyle = "#5b83e8";
        context.lineStyle = "#ffff00";
        context.font = "257.15px 'Poppins', sans-serif";
        context.fillText(bomdot.value, 4000, 2150);
        context.fillText(quyosh.value, 4000, 2820);
        context.fillText(peshin.value, 4000, 3450);
        context.fillText(asr.value, 5600, 2150);
        context.fillText(shom.value, 5600, 2820);
        context.fillText(xufton.value, 5600, 3450);
    }
}