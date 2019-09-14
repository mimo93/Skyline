/**
* Jquery criado para a manipulação/criação dos 
* cartões dentro dos slides do
* carrosel do site 
* 
* Created By Diego Teixeira dos Santos
*/
var index = 2;
var backGroudCardStyleadd = [];

//estilos de cada cartão
backGroudCardStyleadd.push("#171941");
backGroudCardStyleadd.push("linear-gradient(180deg, #2285FF -38.42%, #1A64BF 100%)");
backGroudCardStyleadd.push("linear-gradient(139.09deg, #FF9F80 9.81%, #FF8D72 49.16%, #F27355 84.62%)");
backGroudCardStyleadd.push("#E14ECA");
backGroudCardStyleadd.push("#27AE60");
backGroudCardStyleadd.push("#EB5757");
backGroudCardStyleadd.push("linear-gradient(139.09deg, #FF6B9D 9.81%, #FD5D93 46.05%, #E65485 84.62%)");
backGroudCardStyleadd.push("linear-gradient(180deg, #2285FF -38.42%, #1A64BF 100%)");
backGroudCardStyleadd.push("linear-gradient(139.09deg, #FF9F80 9.81%, #FF8D72 49.16%, #F27355 84.62%)");
backGroudCardStyleadd.push("#E14ECA");
backGroudCardStyleadd.push("#27AE60");
backGroudCardStyleadd.push("#EB5757");
backGroudCardStyleadd.push("linear-gradient(139.09deg, #FF6B9D 9.81%, #FD5D93 46.05%, #E65485 84.62%)");
backGroudCardStyleadd.push("linear-gradient(180deg, #2285FF -38.42%, #1A64BF 100%)");
backGroudCardStyleadd.push("linear-gradient(139.09deg, #FF9F80 9.81%, #FF8D72 49.16%, #F27355 84.62%)");
backGroudCardStyleadd.push("#E14ECA");
backGroudCardStyleadd.push("#27AE60");
backGroudCardStyleadd.push("#EB5757");
backGroudCardStyleadd.push("linear-gradient(139.09deg, #FF6B9D 9.81%, #FD5D93 46.05%, #E65485 84.62%)");
backGroudCardStyleadd.push("#27AE60");
//-----
index = SlideCreator(index,"div#firstCardSlide1","div#firstSlide");
index = SlideCreator(index,"div#firstCardSlide2","div#secondSlide");
index = SlideCreator(index,"div#firstCardSlide3","div#tirdSlide");
index = SlideCreator(index-4,"div#firstCardSlide4","div#fourSlide");


function SlideCreator (index, baseElement, appendElement) {
    var stop = index + 5;
    for(index ; index < stop; index++){
        elementoClonado = $(baseElement).clone();
        console.log($(elementoClonado)[0].setAttribute("id",index));
        $(elementoClonado).css("background", backGroudCardStyleadd[index-1]);
        imagen = $(elementoClonado)[0].getElementsByTagName("img");
        imagen[0].setAttribute("src","./resources/imagens/cartoes/"+index+".png");
        $(elementoClonado).appendTo(appendElement);
    }
    return stop+1;
}

