//btn_mais_series
function more_series(){
    load_page("home_series.html");
}

//btn_mais_filmes
function more_filmes(){
    load_page("home_filmes.html");
}

//Hover Info
function info(nome, idade, desc, idioma, ano, capa, genero){         
    $("#nome").text(nome);
    $("#desc").text(desc);
    $("#idioma").text(idioma);                 
    $("#ano").text(ano);
    $("#capa").attr("src", capa).fadeIn();
    $("#bg_img_filme").attr("src", capa).fadeIn();;
    $("#genero").text(genero);

    var classIdade = $("#idade").text(idade);
    if(idade == "L"){
        classIdade.attr("src", "assets/images/parental/class-L.png");
    }else if(idade == 10){
        classIdade.attr("src", "assets/images/parental/class-10.png");
    }else if(idade == 12){ 
        classIdade.attr("src", "assets/images/parental/class-12.png");
    }else if(idade == 14){
        classIdade.attr("src", "assets/images/parental/class-14.png");
    }else if(idade == 16){
        classIdade.attr("src", "assets/images/parental/class-16.png");
    }else{
        classIdade.attr("src", "assets/images/parental/class-18.png");
    }
}

//Modal Sobre
function sobre(){
    $('.sobre').modal('show');
}

//Load/sem refresh do conteudo
function load_video(src, nome){   
    $("#name_video").val(nome); 
    $('.modal_video').modal('show');
    $("#video_src").attr("src",src);     
};

//Load/ troca de páginas sem refresh
function load_page(arquivo){
    $(".conteudos").load(arquivo).fadeIn(); 
}

function load_serie(arquivo){
    var idi_ano = $("#ano").text();

    $(".conteudos").load(arquivo+`ano=${idi_ano}`).fadeIn();
};

//Fechar vídeo
function fechar_video(){
    $("#video_src").attr("src", "");    
}

//Init Carousel
//$('#carousel').carousel();