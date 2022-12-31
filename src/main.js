// code for userInterace Logic 

// this file wasn't added to our js directory because its our entry point file and it should be in a place webpack can easily access it

import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import Triangle from "./../src/js/triangle.js";
import Rectangle from "./../src/js/rectangle.js";

// a function for clearing our input fields
const clearTriangleFields = ()=>{
    $("#length1").val("");
    $("#length2").val("");
    $("#length3").val("");
}

const clearRectangleFields = ()=>{
    $("#rect-length1").val("");
    $("#rect-length2").val("");
}


$(document).ready(function () {
    $('#triangle-checker-form').submit(function (event) {
        event.preventDefault();
        // calling the clear input fields function for rectangle
        clearTriangleFields();

        // using parseInt() in both triangle and rectanglar to avoid dealing with strings(wich will concatenate them) --here we want to deal with number not strings
        const length1 = parseInt($('#length1').val());        
        const length2 = parseInt($('#length2').val());
        const length3 = parseInt($('#length3').val());
        const triangle = new Triangle(length1, length2, length3)
        const response = triangle.checkType();
        // when we append, we've updted the strings to use Teplate Literals, This cleans up our code a bit more
        $('#response').prepend("<p>" + response + "</p>");
    });


    $('#rectangle-checker-form').submit(function (event) {
        event.preventDefault();
        // calling the clear input fields function for rectangle
        clearRectangleFields();
        // using parseInt() in both triangle and rectanglar to avoid dealing with strings(wich will concatenate them) --here we want to deal with number not strings
        const rectLength1 = parseInt($('#rect-length1').val());        
        const rectLength2 = parseInt($('#rect-length2').val());
        const rectangle = new Rectangle(rectLength1, rectLength2)
        console.log(rectangle)
        const rectResponse = rectangle.getArea();
        $('#response2').prepend("<p>" + rectResponse + "</p>");
    });
});