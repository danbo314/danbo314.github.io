$(function () {

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100) {
            $("#navbar").addClass("small");
        }
        else {
            $("#navbar").removeClass("small");
        }
    });

    $("#submitContactForm").click(function() {
        var email = $("#form_email").text(),
            name = $("#form_name").text(),
            message = $("#form_message").text();

        sendMail(email, name, message);
    });

});

function sendMail(from_email, name, message) {
    $.ajax({
        type: 'POST',
        url: 'https://mandrillapp.com/api/1.0/messages/send.json',
        data: {
            key: 'YJw5lv4rpDWIWJx3v-XIKw',
            message: {
                from_email: from_email,
                from_name: name,
                to: [{
                    email: 'inquiry@danbolivar.me'
                }],
                auto_text: 'true',
                subject: "Inquiry from danbolivar.me",
                html: message
            }
        },
        success: function (response, message, jqXHR) {
            console.log(message);
            console.log(response);
        },
        error: function (jqXHR, message, error) {
            console.log(message);
            console.log(error);
        }
    });
}
