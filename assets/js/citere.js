// loading page
window.addEventListener("load",function(){
    // console.log('cargue');
    document.getElementById("loader").classList.toggle("loader-end");
});

$(document).ready(function () {

	// services
	$("#asesoria_fiscal").click(function () {
		$('#asesoria_fiscal-description').slideDown();
		$('.identificador').slideDown();
		$('#auditorias_fiscales-description').slideUp();
		$('#doc_soporte-description').slideUp();
		$('#razon_negocios-description').slideUp();
		$('#financiera_pat-description').slideUp();
		$('#compliance-description').slideUp();
		$('#consultoria-description').slideUp();
		$('#servicios_admin-description').slideUp();
		$('#atencion_req-description').slideUp();
	});

	$("#auditorias_fiscales").click(function () {
		$('#asesoria_fiscal-description').slideUp();
		$('#auditorias_fiscales-description').slideDown();
		$('#doc_soporte-description').slideUp();
		$('#razon_negocios-description').slideUp();
		$('#financiera_pat-description').slideUp();
		$('#compliance-description').slideUp();
		$('#consultoria-description').slideUp();
		$('#servicios_admin-description').slideUp();
		$('#atencion_req-description').slideUp();
	});

	$("#doc_soporte").click(function () {
		$('#asesoria_fiscal-description').slideUp();
		$('#auditorias_fiscales-description').slideUp();
		$('#doc_soporte-description').slideDown();
		$('#razon_negocios-description').slideUp();
		$('#financiera_pat-description').slideUp();
		$('#compliance-description').slideUp();
		$('#consultoria-description').slideUp();
		$('#servicios_admin-description').slideUp();
		$('#atencion_req-description').slideUp();
	});

	$("#razon_negocios").click(function () {
		$('#asesoria_fiscal-description').slideUp();
		$('#auditorias_fiscales-description').slideUp();
		$('#doc_soporte-description').slideUp();
		$('#razon_negocios-description').slideDown();
		$('#financiera_pat-description').slideUp();
		$('#compliance-description').slideUp();
		$('#consultoria-description').slideUp();
		$('#servicios_admin-description').slideUp();
		$('#atencion_req-description').slideUp();
	});

	$("#financiera_pat").click(function () {
		$('#asesoria_fiscal-description').slideUp();
		$('#auditorias_fiscales-description').slideUp();
		$('#doc_soporte-description').slideUp();
		$('#razon_negocios-description').slideUp();
		$('#financiera_pat-description').slideDown();
		$('#compliance-description').slideUp();
		$('#consultoria-description').slideUp();
		$('#servicios_admin-description').slideUp();
		$('#atencion_req-description').slideUp();
	});

	$("#compliance").click(function () {
		$('#asesoria_fiscal-description').slideUp();
		$('#auditorias_fiscales-description').slideUp();
		$('#doc_soporte-description').slideUp();
		$('#razon_negocios-description').slideUp();
		$('#financiera_pat-description').slideUp();
		$('#compliance-description').slideDown();
		$('#consultoria-description').slideUp();
		$('#servicios_admin-description').slideUp();
		$('#atencion_req-description').slideUp();
	});

	$("#consultoria").click(function () {
		$('#asesoria_fiscal-description').slideUp();
		$('#auditorias_fiscales-description').slideUp();
		$('#doc_soporte-description').slideUp();
		$('#razon_negocios-description').slideUp();
		$('#financiera_pat-description').slideUp();
		$('#compliance-description').slideUp();
		$('#consultoria-description').slideDown();
		$('#servicios_admin-description').slideUp();
		$('#atencion_req-description').slideUp();
	});

	$("#servicios_admin").click(function () {
		$('#asesoria_fiscal-description').slideUp();
		$('#auditorias_fiscales-description').slideUp();
		$('#doc_soporte-description').slideUp();
		$('#razon_negocios-description').slideUp();
		$('#financiera_pat-description').slideUp();
		$('#compliance-description').slideUp();
		$('#consultoria-description').slideUp();
		$('#servicios_admin-description').slideDown();
		$('#atencion_req-description').slideUp();
	});

	$("#atencion_req").click(function () {
		$('#asesoria_fiscal-description').slideUp();
		$('#auditorias_fiscales-description').slideUp();
		$('#doc_soporte-description').slideUp();
		$('#razon_negocios-description').slideUp();
		$('#financiera_pat-description').slideUp();
		$('#compliance-description').slideUp();
		$('#consultoria-description').slideUp();
		$('#servicios_admin-description').slideUp();
		$('#atencion_req-description').slideDown();
	});

	// Materialidad

	$("#negocio").click(function () {
		alert("Holi!")
	});

	// Faq's
	$("#m_servicios").click(function () {
		$('#description').slideDown();
		$("#servicio1").slideUp();
		$("#servicio2").slideUp();
		$("#financiero").slideUp();
		$("#laboral").slideUp();
	});

	$("#m_fiscal").click(function () {
		$('#description').slideUp()
		$("#servicio1").slideDown();
		$("#servicio2").slideUp();
		$("#financiero").slideUp();
		$("#laboral").slideUp();
	});

	$("#m_materialidad").click(function () {
		$('#description').slideUp()
		$("#servicio1").slideUp();
		$("#servicio2").slideDown();
		$("#financiero").slideUp();
		$("#laboral").slideUp();
	});

	$("#m_financiero").click(function () {
		$('#description').slideUp()
		$("#servicio1").slideUp();
		$("#servicio2").slideUp();
		$("#financiero").slideDown();
		$("#laboral").slideUp();
	});

	$("#m_laboral").click(function () {
		$('#description').slideUp()
		$("#servicio1").slideUp();
		$("#servicio2").slideUp();
		$("#financiero").slideUp();
		$("#laboral").slideDown();
	});
});
