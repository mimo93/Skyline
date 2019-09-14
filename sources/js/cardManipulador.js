/**
* Jquery criado para a manipulação/criação dos 
* cartões dentro dos slides do
* carrosel do site 
* 
* Created By Diego Teixeira dos Santos
*/
fistSlideCreatorV2();
function fistSlideCreator(){
    var index;
    //Manipulação do primeiro slide do carrosel
    //Indicar tag.classe do carrosel Ex:div.classeTal
    var tagDoCarrosel = "div.s1 ";
    //Ex:div h1 header etc...
    var elementoHtmlCard = ("cardsFirstSlide");
    var elementoAAdicionar = elementoHtmlCard;
    //Classes do elemento a ser adicionado Ex "classe1 classe2"
    var classesNovoElemento = "card videoList" 
    //Quantidade de elementos no carrocel (int)
    var qtdElementos = 6;
    for( index=1;index<qtdElementos+1;index++){
        var imageTags = (elementoAAdicionar).getElementsByTagName("img");
        var videoTags = (elementoAAdicionar).getElementsByTagName("video");
        imageTags[0].setAttribute("src","./resources/imagens/cartoes/000"+index+".png");
        videoTags[0].setAttribute("src","./resources/imagens/cartoes/000"+index+".mp4");
        elemento.setAttribute("id","card"+index);
        console.log(document.getElementById("firstSlide"))
        $(tagDoCarrosel).append(elemento);
    }
    //End(Manipulação do primeiro slide do carrosel)<div>
}
function fistSlideCreatorV2 (elements) {
    fatherElement = document.getElementById("firstSlide");
    sonElement = document.createElement("div");
    sonElement.setAttribute("class","card videoList");
    //fatherElement.append(sonElement);
}