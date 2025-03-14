$(document).ready(function(){

    // MOSTRANDO Y OCULTANDO MENU
    $('#button-menu').click(function(){
        if($('.navegacion .menu').css('left') == '-320px' ){ // Verifica si el menú está oculto

            $('.navegacion').css({'width':'100%', 'background':'rgba(0,0,0,.5)'}); // Mostramos el fondo transparente
            $('.navegacion .menu').css({'left':'0px'}); // Mostramos el menu

        } else{

            $('.navegacion').css({'width':'0%', 'background':'rgba(0,0,0,.0)'}); // Ocultamos el fondo transparente
            $('.navegacion .submenu').css({'left':'-320px'}); // Ocultamos los submenus
            $('.navegacion .menu').css({'left':'-320px'}); // Ocultamos el Menu

        }
    });

    // MOSTRANDO SUBMENU
    $('.navegacion .menu > .item-submenu a').click(function(){

        var positionMenu = $(this).parent().attr('menu'); // Buscamos el valor del atributo menu y lo guardamos en una variable
        console.log(positionMenu);

        $('.item-submenu[menu='+positionMenu+'] .submenu').css({'left':'0px'}); // Mostramos El submenu correspondiente

    });

    // OCULTANDO SUBMENU
    $('.navegacion .submenu li.go-back').click(function(){

        $(this).parent().css({'left':'-320px'}); // Ocultamos el submenu

    });

});