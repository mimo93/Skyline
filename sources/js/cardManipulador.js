/**
* Jquery criado para a manipulação/criação dos 
* cartões dentro dos slides do
* carrosel do site 
* 
* Created By Diego Teixeira dos Santos
*/
var cardText =[];
cardText.push("Vídeo Lançamento");
cardText.push("Vídeo Acompanhamento de Obra");
cardText.push("Vídeo Time Lapse");
cardText.push("Estande de Realidade Virtual"); 
cardText.push("Decorado Virtual");
cardText.push("Tour 360º");
cardText.push("Tour Decorado 360º"); 
cardText.push("Vídeo VT para TV");
cardText.push("Roteiro para  Vídeos");
cardText.push("Vídeo Empreendimento Pronto"); 
cardText.push("Vídeo Animado");
cardText.push("Maquete Eletrônica"); 
cardText.push("Foto Aérea");
cardText.push("Vídeo Subida de Andares"); 
cardText.push("Vídeo Institucional");
cardText.push("Vídeo Treinamento para Corretores"); 
cardText.push("Vídeo Cartelado");
cardText.push("Foto Arquitetônica");
cardText.push("Vídeo Institucional");
cardText.push("Vídeo Treinamento para Corretores");
cardText.push("Vídeo Cartelado");
cardText.push("Foto Arquitetônica");
cardText.push("Vídeo Depoimento");



var index = 2;
index = SlideCreator(index,"div#firstCardSlide1","div#firstSlide");
index = SlideCreator(index,"div#firstCardSlide2","div#secondSlide");
index = SlideCreator(index,"div#firstCardSlide3","div#tirdSlide");
index = SlideCreator(index-4,"div#firstCardSlide4","div#fourSlide");
var index2 = 2;
index2 = SlideCreator2(index2,"div#cardFourPart1","div#firstSlideFourPart");
index2 = SlideCreator2(index2,"div#cardFourPart2","div#secondSlideFourPart");
index2 = SlideCreator2(index2,"div#cardFourPart3","div#thirdSlideFourPart");

function SlideCreator (index, baseElement, appendElement) {
    var stop = index + 5;
    for(index ; index < stop; index++){
        elementoClonado = $(baseElement).clone();
        $(elementoClonado)[0].setAttribute("id",index);
        imagen = $(elementoClonado)[0].getElementsByTagName("img");
        textoTitulo = $(elementoClonado)[0].getElementsByTagName("h5");
        imagen[0].setAttribute("src","./resources/imagens/cartoes/"+index+".png");
        $(textoTitulo).text(cardText[index-1]);
        $(elementoClonado).appendTo(appendElement);
    }
    return stop+1;
}
function SlideCreator2 (index, baseElement, appendElement) {
    var stop = index + 9;
    for(index ; index < stop; index++){
        elementoClonado = $(baseElement).clone();
        $(elementoClonado)[0].setAttribute("id",index);
        imagen = $(elementoClonado)[0].getElementsByTagName("img");
        imagen[0].setAttribute("src","./resources/imagens/cartoes2/"+index+".png");
        $(elementoClonado).appendTo(appendElement);
    }
    return stop+1;
}