/* global document */
/*jslint devel: true */
function modifyHTML(className, message) {
   document.getElementsByClassName(className)[0].innerHTML = message;
}

const getVolume = (radius) => (4 / 3) * 3.141 * Math.pow(radius,3);