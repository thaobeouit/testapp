document.getElementById('activate').addEventListener('click', function() {
    document.getElementById('panel').classList.add('show');
    document.getElementById('cover').classList.remove('opened');
    setTimeout(function() {
        document.getElementById('turn-off').classList.add('close');
    }, 9000);
});
