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

$("#briigo-cicp-htmlInput").on("change keyup paste", function(){
    htmlValue = $(this).val();

    $("#briigo-cicp-output").contents().find('html').html(htmlValue);
});
    