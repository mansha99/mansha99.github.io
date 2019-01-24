$(document).ready(function () {
    //$("#profile-container").load("includes/profile-container.html");
    var elements = ["profile-container",
        "contact-container",
        "education-container",
        "languages-container",
        "interests-container",
        "summary-section",
        "showcase-section",
        "experiences-section",
        "projects-section",
        "skills-section"

    ];
    for (i = 0; i < elements.length; i++) {
        var el = elements[i];
        ms_load("#" + el, "includes/" + el + ".html");
    }


});
/********************************************************************************/
function ms_load(ele, url) {
    $.ajax({
        url: url,
        success: function (data, textStatus, jqXHR) {
            $(ele).html(data);
        }
    });
}