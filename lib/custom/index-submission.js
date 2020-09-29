$('#mainForm').on('submit', function() {
    var name = $('#nameInput').val();
    var id = $('#idInput').val();
    var isGuest = $('#isGuestSelect option:selected').val();
    var frame = $('#frameSelect option:selected').val();

    Cookies.set('name', name);
    Cookies.set('id', id);
    Cookies.set('isGuest', isGuest);
    Cookies.set('frame', frame);
});
