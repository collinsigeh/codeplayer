var appHeight = "400";
var screenHeight = screen.height;
var htmlValue = "";
var cssValue = "";
var javascriptValue = "";

function updateOutput(){
    htmlValue = $("#briigo-cicp-htmlInput").val();
    cssValue = $("#briigo-cicp-cssInput").val();
    javascriptValue = $("#briigo-cicp-javascriptInput").val();

    $("#briigo-cicp-output").contents().find('html').html("<html><head><style>"
    + cssValue + "</style></head><body>"
    + htmlValue + "</body></html>");

    document.getElementById("briigo-cicp-output")
        .contentWindow
        .eval(javascriptValue);
}

if(screenHeight > appHeight)
{
    appHeight = screenHeight - 208;
}

$(".interface").height(appHeight);

$(document).ready(function(){
    updateOutput();
});

$(".code-input").on("change keyup paste", function(){
    updateOutput();
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
    