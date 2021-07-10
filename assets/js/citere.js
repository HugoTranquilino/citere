$( document ).ready(function() {
    $("#m_servicios").click(function(){
        $('#description').slideDown();
        $("#servicio1").slideUp();
        $("#servicio2").slideUp();
        $("#financiero").slideUp();
        $("#laboral").slideUp();
    });
    
    $("#m_fiscal").click(function(){
        // $('#description').css('display','none');
        $('#description').slideUp()
        $("#servicio1").slideDown();
        $("#servicio2").slideUp();
        $("#financiero").slideUp();
        $("#laboral").slideUp();
    });

    $("#m_materialidad").click(function(){
        $('#description').slideUp()
        $("#servicio1").slideUp();
        $("#servicio2").slideDown();
        $("#financiero").slideUp();
        $("#laboral").slideUp();
    });

    $("#m_financiero").click(function(){
        $('#description').slideUp()
        $("#servicio1").slideUp();
        $("#servicio2").slideUp();
        $("#financiero").slideDown();
        $("#laboral").slideUp();
    });

    $("#m_laboral").click(function(){
        $('#description').slideUp()
        $("#servicio1").slideUp();
        $("#servicio2").slideUp();
        $("#financiero").slideUp();
        $("#laboral").slideDown();
    });
});