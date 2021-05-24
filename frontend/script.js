$(document).ready(function () {
    let $submit = $('#add'),
        $input = $('#todo-item'),
        $error = $('#error'),
        $showList = $('#display-list ul'),
        $showNoList = $('#display-list');

    var userAge = 18;

    $.get('http://localhost:3000/api/getItems',
        function (data) {
            $.each(data, function (id, val) { 
                $showList.append('<li>' + val.description + '</li>');
            });
        },
    )
        .fail(function(data) {
            $showNoList.text('Aucun item enregistré');
        });

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