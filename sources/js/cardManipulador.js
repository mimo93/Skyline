/**
 * Jquery criado para a manipulação/criação dos 
 * cartões dentro dos slides do
 * carrosel do site 
 * 
 * Created By Diego Teixeira dos Santos
 */
//Manipulação do primeiro slide do carrosel
//Indicar tag.classe do carrosel Ex:div.classeTal
var tagDoCarrosel = "div.carroselSlide1";
//Ex:div h1 header etc...
var elementoAAdicionar = "div"
//Classes do elemento a ser adicionado Ex "classe1 classe2"
var classesNovoElemento = "card videoList" 
//Quantidade de elementos no carrocel (int)
var qtdElementos =   7

for(var i=0;i<qtdElementos;i++)
$(tagDoCarrosel)
    .append($(document.createElement(elementoAAdicionar)).addClass(classesNovoElemento));
//End(Manipulação do primeiro slide do carrosel)