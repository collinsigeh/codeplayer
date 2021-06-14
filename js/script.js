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

$(".toggleButton").click(function(){

    var panelId = $(this).attr("id") + "Panel";

    if($("#" + panelId).hasClass("hidden") == false)
    {
        if($('.hidden').length < 3)
        {
            $("#" + panelId).addClass("hidden");
        }
    }
    else
    {
        $("#" + panelId).removeClass("hidden");
    }

    var visibleInterfaces = 4 - $('.hidden').length;
    
    var panelWidth = 100 / visibleInterfaces;
    panelWidth = panelWidth - (4.8 / visibleInterfaces);

    alert (panelWidth);
    
    $(".interface").width(panelWidth + "%");
});
    