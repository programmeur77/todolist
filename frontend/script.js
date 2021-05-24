$(document).ready(function () {
    let $submit = $('#add'),
        $input = $('#todo-item'),
        $error = $('#error'),
        $showList = $('#display-list ul');

    var userAge = 18;

    $.get("/api/getItems",
        function (data) {
            $.each(data, function (id, val) { 
                $showList.append('<li>' + val.item + '</li>');
            });
        },
    );

    $submit.click(function (e) {
        e.preventDefault();
        if ($input.val() !== '' && $input.val() !== null) {
            $error.hide();
            console.log('OK');
        } else {
            $error.text('Merci de remplir ce champ').show();
        }
    });
});