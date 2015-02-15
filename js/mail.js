jQuery(function($)
{
    $("#contact_form").submit(function()
    {
        var name = $("#name").val(); // get name field value
        var email = $("#email").val(); // get email field value
        var msg = $("#msg").val(); // get message field value

        $.ajax(
            {
                type: "POST",
                url: "https://mandrillapp.com/api/1.0/messages/send.json",
                data: {
                    'key': 'IcbMCG2q9Ghqm7j--5i9HQ',
                    'message': {
                        'from_email': email,
                        'from_name': name,
                        'headers': {
                            'Reply-To': email
                        },
                        'subject': "Contacto " + email,
                        "html": "<h1>Nombre: "+name +"<br/>Correo: "+email+"<br/><br/>Mensaje: "+msg+"</p>",
                        'to': [
                            {
                                'email': 'info@cnasistemas.com',
                                'name': 'Info Cna Sistemas',
                                'type': 'to'
                            }]
                    }
                }
            })
            .done(function(response) {
                alert('Su mensaje ha sido enviado. Gracias!!'); // show success message
                $("#name").val(''); // reset field after successful submission
                $("#email").val(''); // reset field after successful submission
                $("#msg").val(''); // reset field after successful submission
            })
            .fail(function(response) {
                alert('Error enviando el correo. Por favor intente mas tarde.');
            });
        return false; // prevent page refresh
    });
});