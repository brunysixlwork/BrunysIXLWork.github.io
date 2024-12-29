function confirmBeforeUnload(e) {
    if (localStorage.getItem('confirmationEnabled') === 'true' && (e.clientY < 0 || e.clientY === undefined)) {
        const confirmationMessage = 'Are you sure you want to leave? You may lose your progress.';
        e.returnValue = confirmationMessage;
        return confirmationMessage;
    }
}

window.addEventListener('beforeunload', confirmBeforeUnload);

document.addEventListener('DOMContentLoaded', function() {
    const toggleConfirmation = document.getElementById('toggleConfirmation');

    if (localStorage.getItem('confirmationEnabled') === 'true') {
        toggleConfirmation.checked = true;
    }

    toggleConfirmation.addEventListener('change', function() {
        if (toggleConfirmation.checked) {
            localStorage.setItem('confirmationEnabled', 'true');
        } else {
            localStorage.setItem('confirmationEnabled', 'false');
        }
    });
});