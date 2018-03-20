/* global console , alert */
var classes = ["header"];
var interval = setInterval(window.onload = function () {
    'use strict';
    var classes = ["header", "header2"],
        slide = (Math.floor(Math.random() * classes.length));
    
    document.body.setAttribute('header', classes[slide]);
    }, 1009);