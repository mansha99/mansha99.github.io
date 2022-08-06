$(document).ready(function () {
    //$("#profile-container").load("includes/profile-container.html");
    var elements = [
        {"k": "profile-container", "f": function_empty},
        {"k": "contact-container", "f": function_empty},
        {"k": "education-container", "f": function_empty},
        {"k": "languages-container", "f": function_empty},
        {"k": "interests-container", "f": function_empty},
        {"k": "summary-section", "f": function_empty},
        {"k": "showcase-section", "f": function_empty},
        {"k": "experiences-section", "f": function_empty},
        {"k": "projects-section", "f": function_empty},
        {"k": "skills-section", "f": function_empty}

    ];
    for (i = 0; i < elements.length; i++) {
        var el = elements[i];
        ms_load("#" + el.k, "includes/" + el.k + ".html", el.f);
    }


});
/********************************************************************************/
function function_empty() {
    console.log("empty" + new Date().toDateString());
}
/********************************************************************************/
function ms_load(ele, url, fun) {
    $.ajax({
        url: url,
        success: function (data, textStatus, jqXHR) {
            $(ele).html(data);
            fun();

        }
    });
}