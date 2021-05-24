$(document).ready(function () {
    let $submit = $('#add'),
        $input = $('#todo-item'),
        $error = $('#error'),
        $showList = $('#display-list ul'),
        $showNoList = $('#display-list');

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

    $.post('http://localhost:3000/api/postItems', {description: $input.val()},
        function (data) {
            $showList.fadeIn(data);
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

    function getItems() {
        
    }
});