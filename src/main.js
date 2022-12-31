// code for userInterace Logic 

// this file wasn't added to our js directory because its our entry point file and it should be in a place webpack can easily access it

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Triangle from "./../src/js/triangle.js";
import Rectangle from "./../src/js/rectangle.js";

$(document).ready(function () {
    $('#triangle-checker-form').submit(function (event) {
        event.preventDefault();
        // using parseInt() in both triangle and rectanglar to avoid dealing with strings(wich will concatenate them) --here we want to deal with number not strings
        const length1 = parseInt($('#length1').val());        
        const length2 = parseInt($('#length2').val());
        const length3 = parseInt($('#length3').val());
        const triangle = new Triangle(length1, length2, length3)
        const response = triangle.checkType();
        // when we append, we've updted the strings to use Teplate Literals, This cleans up our code a bit more
        $('#response').append("<p>" + response + "</p>");
    });


    $('#rectangle-checker-form').submit(function (event) {
        event.preventDefault();
        // using parseInt() in both triangle and rectanglar to avoid dealing with strings(wich will concatenate them) --here we want to deal with number not strings
        const length1 = parseInt($('#rect-length1').val());        
        const length2 = parseInt($('#rect-length2').val());
        const rectangle = new Rectangle(length1, length2)
        const response = rectangle.getArea();
        $('#response2').append("<p>" + response + "</p>");
    });
});