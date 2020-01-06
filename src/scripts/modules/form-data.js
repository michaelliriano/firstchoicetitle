$('#contact-form').submit(function(e) {
    var name = document.getElementById('fname'),
        email = document.getElementById('email'),
        subject = document.getElementById('subject');
});

if (!name.value || !email.value || !message.value) {

} else {
    $.ajax({
        url: 'https://formspree.io/deejaygigz@gmail.com',
        method: 'POST',
        data: $(this).serialize(),
        datatype: 'json'
    });
    e.preventDefault()
    $(this).get(0).reset()
    alertify.success('Mesage sent')
}