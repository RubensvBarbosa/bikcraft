if(window.SimpleSlide){

    new SimpleSlide({
        slide: "quote",
        time: 5000
    });

    new SimpleSlide({
        slide: "portfolio",
        time: 5000,
        nav: true
    });
}

if(window.SimpleAnime){
    new SimpleAnime();
}
if(window.SimpleAnime){
    new SimpleForm ({
        form:".formphp", // seletor do formulário
        button: "#enviar", // seletor do botão
        erro: "<div id='form-erro'<h2>Ocorreu um erro,</h2> <p>tente para o email xxxxxxxx</p>",
        sucesso: "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2>"
    });  
}