var appHeight = "400";
var screenHeight = screen.height;
var htmlValue = "";
var cssValue = "";
var javascriptValue = "";

if(screenHeight > appHeight)
{
    appHeight = screenHeight - 208;
}

$(".interface").height(appHeight);

$("#briigo-cicp-htmlInput").keyup(function(){
    htmlValue = $(this).val();

    $("#briigo-cicp-output").html(htmlValue);
    
});
    