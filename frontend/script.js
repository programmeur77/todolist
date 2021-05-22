$(document).ready(function () {
    let $submit = $('#add'),
        $input = $('#todo-item'),
        $error = $('#error'),
        $showList = $('#display-list ul');

    var userAge = 18;

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