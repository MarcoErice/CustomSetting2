﻿'use strict';

function getQueryStringParameter(urlParameterKey) {
    var params = document.URL.split('?')[1].split('&');
    var strParams = '';
    for (var i = 0; i < params.length; i = i + 1) {
        var singleParam = params[i].split('=');
        if (singleParam[0] == urlParameterKey)
            return decodeURIComponent(singleParam[1]);
    }
}

jQuery.noConflict();
(function ($) {

    // Create variables out of the param value
    var colorValue = getQueryStringParameter('MyEnum');
    var textValue = getQueryStringParameter('MyString');
    var pictureShow = getQueryStringParameter('MyBoolean');

    // Do something based on incoming param values
    $("#myString").text(textValue);

    if (colorValue == 1) {
        $("body").css("background-color", "red");
    };
    if (colorValue == 2) {
        $("body").css("background-color", "green");
    };
    if (colorValue == 3) {
        $("body").css("background-color", "blue");
    };


    
    if (pictureShow == "true") 
        $("#myBoolean").html('<img src="../Images/Angry.jpg" />');
    
    else  $("#myBoolean").html("display", "none");
    


})(jQuery);

