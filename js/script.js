var appHeight = "400";
var screenHeight = screen.height;

if(screenHeight > appHeight)
{
    appHeight = screenHeight - 208;
}

$(".interface").height(appHeight);
    