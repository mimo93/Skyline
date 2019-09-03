/***
 * 
 * Interações 
 * **Busca no Site 
 * ***Peganddo a tecla enter 
 * 
 * 
 * 
*/
//Adicionada função ao botão busca 
console.log("Busca realizada com a chave" + $("#parametroBusca").val())
function onSearchClick () {
    //$("#linkParaBusca").attr("href","busca?b="+$("#parametroBusca").val());
    window.location.href = window.location.href +"busca?b=" + $("#parametroBusca").val() ;
};
//Captura o enter do teclado 
function enterCacth(e){
    if(e.keyCode  == 13){
        onSearchClick();
    }
}