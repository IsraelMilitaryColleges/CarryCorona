$("#frameSelect").hide();
$("#isGuestSelect").on("change", function(){
    if ($('#isGuestSelect option:selected').val() == "אורח"){
        $("#frameSelect").hide();
        $("#frameSelect").val('');
    }
    else{
        $("#frameSelect").show();
    }
});
