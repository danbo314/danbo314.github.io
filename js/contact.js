$(function () {

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $("#navbar").addClass("small");
        }
        else {
            $("#navbar").removeClass("small");
        }
    });

});

function sendMail(from_email, subject, message) {
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            'key': 'YJw5lv4rpDWIWJx3v-XIKw',
            'message': {
                'from_email': from_email,
                'to': [{
                    'email': 'danbo314@gmail.com',
                    'name': '',
                    'type': ''
                }],
                'autotext': 'true',
                'subject': subject,
                'html': message
            }
        }
    }).done(function(response) {
        console.log(response); // if you're into that sorta thing
    });
}
