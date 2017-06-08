(function () {
    'use strict';

    $(document).ready(function () {
        $("#searchbox").keypress(function (event) {
            if (event.keyCode == 13) {
                alert($("#searchbox").val());
            }
        });
    });
})();