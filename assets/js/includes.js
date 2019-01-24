$(document).ready(function () {    
    //$("#profile-container").load("includes/profile-container.html");
    ms_load("#profile-container","includes/profile-container.html");
});
function ms_load(ele,url){
    $.ajax({
        url:url,
        success: function (data, textStatus, jqXHR) {
            //alert(data);
            $(ele).html(data);
        }
    });
}