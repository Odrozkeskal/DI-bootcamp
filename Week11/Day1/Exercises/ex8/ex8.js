var buttonElement = document.getElementById('myButton');
if (buttonElement) {
    var button = buttonElement;
    button.addEventListener('click', function () {
        var confirmed = confirm('Are you sure you want to proceed?');
        if (confirmed) {
            alert('You confirmed the action!');
        }
        else {
            alert('You cancelled the action.');
        }
    });
}
