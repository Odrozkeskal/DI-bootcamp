
const buttonElement = document.getElementById('myButton');

if (buttonElement) {
    const button = buttonElement as HTMLButtonElement;

    button.addEventListener('click', () => {
        const confirmed = confirm('Are you sure you want to proceed?');

        if (confirmed) {
            alert('You confirmed the action!');
        } else {
            alert('You cancelled the action.');
        }
    });
}
