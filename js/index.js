var sobre = $("#sobre").click(scrollSobre);

function scrollSobre(){ 

    var posicao = $(".sobre-conteudo").offset().top;

    $("html, body").animate({scrollTop: posicao + "px"}, 1000);

}

var palestrante = $("#conhecimentos").click(scrollPalestrante);

function scrollPalestrante(){

    var posicao = $(".conhecimento").offset().top;

    $("html, body").animate({scrollTop: posicao + "px"}, 1000);

}

var inscreva = $("#contatos").click(scrollInscreva);

function scrollInscreva(){

    var posicao = $(".contatos").offset().top;

    $("html, body").animate({scrollTop: posicao + "px"}, 1500);

} 
