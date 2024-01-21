$(document).ready(function() {
    $("#question").on("click", function() {
        $("#modal").show();
    });

    $(window).click(function(event) {
        if (event.target === $("#modal")[0]) {
            $("#modal").hide();
        }
    });
});