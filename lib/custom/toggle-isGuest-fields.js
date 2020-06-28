$("select").on("change", function(){
    $(this).removeClass("text-secondary");
});

$("#frameSelect").hide();
$("#isGuestSelect").on("change", function(){
    if ($('#isGuestSelect option:selected').val() == "אורח")
        $("#frameSelect").hide();
    else
        $("#frameSelect").show();
});

$("#innerSelect").hide();
$("#frameSelect").on("change", function(){
    if ($('#frameSelect option:selected').hasClass("course"))
        $("#innerSelect").show();
    else
        $("#innerSelect").hide();
});
