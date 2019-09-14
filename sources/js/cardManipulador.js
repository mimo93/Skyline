/**
* Jquery criado para a manipulação/criação dos 
* cartões dentro dos slides do
* carrosel do site 
* 
* Created By Diego Teixeira dos Santos
*/
var index = 2;
index = SlideCreator(index,"div#firstCardSlide1","div#firstSlide");
index = SlideCreator(index,"div#firstCardSlide2","div#secondSlide");
index = SlideCreator(index,"div#firstCardSlide3","div#tirdSlide");
function SlideCreator (index, baseElement, appendElement) {
    var stop = index + 5;
    for(index ; index < stop; index++){
        elementoClonado = $(baseElement).clone();
        console.log($(elementoClonado)[0].setAttribute("id",index));
        imagen = $(elementoClonado)[0].getElementsByTagName("img");
        imagen[0].setAttribute("src","./resources/imagens/cartoes/"+index+".png");
        $(elementoClonado).appendTo(appendElement);
    }
    return stop+1;
}
