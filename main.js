$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            gmail: {
                required: true,
                email: true
            },
            mensagem: {
                required: true
            }
        },
        messages: {
            nome: 'Insira o seu nome',
            gmail: 'Insira seu e-mail',
            mensagem: 'Insira uma mensagem'
        }
    })
})