/**
* Jquery criado para a manipulação/criação dos 
* cartões dentro dos slides do
* carrosel do site 
* 
* Created By Diego Teixeira dos Santos
*/
fistSlideCreator();
function fistSlideCreator(){
    var index;
    //Manipulação do primeiro slide do carrosel
    //Indicar tag.classe do carrosel Ex:div.classeTal
    var tagDoCarrosel = "div.view";
    //Ex:div h1 header etc...
    var elementoHtmlCard = document.getElementById("cardsFirstSlide");
    var elementoAAdicionar = elementoHtmlCard;
    //Classes do elemento a ser adicionado Ex "classe1 classe2"
    var classesNovoElemento = "card videoList" 
    //Quantidade de elementos no carrocel (int)
    var qtdElementos = 6;
    for( index=1;index<qtdElementos+1;index++){
        var imageTags = elementoAAdicionar.getElementsByTagName("img");
        imageTags[0].setAttribute("src","./resources/imagens/cartoes/000"+index+".png")
        console.log(imageTags);
        $(tagDoCarrosel)
        .append($(elementoAAdicionar).addClass(classesNovoElemento));
    }
    //End(Manipulação do primeiro slide do carrosel)<div>
    secondSlideCreator(index);
}
function secondSlideCreator(index){
    //Manipulação do primeiro slide do carrosel
    //Indicar tag.classe do carrosel Ex:div.classeTal
    var tagDoCarrosel = "div.view";
    //Ex:div h1 header etc...
    var elementoHtmlCard = document.getElementById("cardsFirstSlide");
    var elementoAAdicionar = elementoHtmlCard;
    //Classes do elemento a ser adicionado Ex "classe1 classe2"
    var classesNovoElemento = "card videoList" 
    //Quantidade de elementos no carrocel (int)
    var qtdElementos = 6;
    for( index;index<qtdElementos+1;index++){
        var imageTags = elementoAAdicionar.getElementsByTagName("img");
        imageTags[0].setAttribute("src","./resources/imagens/cartoes/firstSlide/000"+index+".png")
        console.log(imageTags);
        $("#firstSlide")
        .append($(elementoAAdicionar).addClass(classesNovoElemento));
    }
    //End(Manipulação do primeiro slide do carrosel)<div>
}