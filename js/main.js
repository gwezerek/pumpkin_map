/*jshint -W099 */
/*jslint browser: true, sub: true */
/*jshint -W099 */

'use strict';


/*jshint -W099 */
/*jslint browser: true, sub: true */



// SETUP VARIABLES
// =============================================

L.mapbox.accessToken = 'pk.eyJ1IjoiZ3dlemVyZWsiLCJhIjoicXJkMjV6WSJ9.Iw_1c5zREHqNSfdtkjlqbA';

// Init the map
var map = L.mapbox.map('map', 'examples.map-i86nkdio').setView([37.8, -96], 4);

// HANDLERS
// =============================================



// HELPERS
// =============================================



// SVG HELPERS
// =============================================

// d3.selection.prototype.moveToFront = function() {
//     return this.each(function() {
//         this.parentNode.appendChild(this);
//     });
// };

SVGElement.prototype.hasClass = function(className) {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(this.getAttribute("class"));
};

SVGElement.prototype.addClass = function(className) {
    if (!this.hasClass(className)) {
        this.setAttribute("class", this.getAttribute("class") + " " + className);
    }
};

SVGElement.prototype.removeClass = function(className) {
    var removedClass = this.getAttribute("class").replace(new RegExp("(\\s|^)" + className + "(\\s|$)", "g"), "$2");
    if (this.hasClass(className)) {
        this.setAttribute("class", removedClass);
    }
};
