// ======== Load page ============
window.addEventListener("load", function () {
	document.getElementById("loader").classList.toggle("loader-end");
});

$(document).ready(function () {
	const baseurl = $("#baseurl").val();

	// ========== Us ==========
	var imgMostrada_1 = `${baseurl}assets/img/nosotros/c-1.png`;
	var imgMostrada_2 = `${baseurl}assets/img/nosotros/c-2.png`;
	var imgMostrada_3 = `${baseurl}assets/img/nosotros/c-3.png`;
	var imgMostrada_4 = `${baseurl}assets/img/nosotros/c-4.png`;

	var imagen_1 = document.getElementById("c1");
	var imagen_2 = document.getElementById("c2");
	var imagen_3 = document.getElementById("c3");
	var imagen_4 = document.getElementById("c4");

	$("#c1").click(function () {
		if (imgMostrada_1 == `${baseurl}assets/img/nosotros/c-1.png`) {
			imagen_1.src = `${baseurl}assets/img/nosotros/cc-1.png`;
			imgMostrada_1 = `${baseurl}assets/img/nosotros/cc-1.png`;
			$('#f1').slideDown();
			$('#description_1').slideDown();

			imagen_2.src = `${baseurl}assets/img/nosotros/c-2.png`;
			imgMostrada_2 = `${baseurl}assets/img/nosotros/c-2.png`;
			$('#f2').slideUp();
			$('#description_2').slideUp();

			imagen_3.src = `${baseurl}assets/img/nosotros/c-3.png`;
			imgMostrada_3 = `${baseurl}assets/img/nosotros/c-3.png`;
			$('#f3').slideUp();
			$('#description_3').slideUp();

			imagen_4.src = `${baseurl}assets/img/nosotros/c-4.png`;
			imgMostrada_4 = `${baseurl}assets/img/nosotros/c-4.png`;
			$('#f4').slideUp();
			$('#description_4').slideUp();

		} else {
			imagen_1.src = `${baseurl}assets/img/nosotros/c-1.png`;
			imgMostrada_1 = `${baseurl}assets/img/nosotros/c-1.png`;
			$('#f1').slideUp();
			$('#description_1').slideUp();
		}
	});

	$("#c2").click(function () {
		if (imgMostrada_2 == `${baseurl}assets/img/nosotros/c-2.png`) {
			imagen_2.src = `${baseurl}assets/img/nosotros/cc-2.png`;
			imgMostrada_2 = `${baseurl}assets/img/nosotros/cc-2.png`;
			$('#f2').slideDown();
			$('#description_2').slideDown();

			imagen_1.src = `${baseurl}assets/img/nosotros/c-1.png`;
			imgMostrada_1 = `${baseurl}assets/img/nosotros/c-1.png`;
			$('#f1').slideUp();
			$('#description_1').slideUp();

			imagen_3.src = `${baseurl}assets/img/nosotros/c-3.png`;
			imgMostrada_3 = `${baseurl}assets/img/nosotros/c-3.png`;
			$('#f3').slideUp();
			$('#description_3').slideUp();

			imagen_4.src = `${baseurl}assets/img/nosotros/c-4.png`;
			imgMostrada_4 = `${baseurl}assets/img/nosotros/c-4.png`;
			$('#f4').slideUp();
			$('#description_4').slideUp();

		} else {
			imagen_2.src = `${baseurl}assets/img/nosotros/c-2.png`;
			imgMostrada_2 = `${baseurl}assets/img/nosotros/c-2.png`;
			$('#f2').slideUp();
			$('#description_2').slideUp();
		}
	});

	$("#c3").click(function () {
		if (imgMostrada_3 == `${baseurl}assets/img/nosotros/c-3.png`) {
			imagen_3.src = `${baseurl}assets/img/nosotros/cc-3.png`;
			imgMostrada_3 = `${baseurl}assets/img/nosotros/cc-3.png`;
			$('#f3').slideDown();
			$('#description_3').slideDown();

			imagen_1.src = `${baseurl}assets/img/nosotros/c-1.png`;
			imgMostrada_1 = `${baseurl}assets/img/nosotros/c-1.png`;
			$('#f1').slideUp();
			$('#description_1').slideUp();

			imagen_2.src = `${baseurl}assets/img/nosotros/c-2.png`;
			imgMostrada_2 = `${baseurl}assets/img/nosotros/c-2.png`;
			$('#f2').slideUp();
			$('#description_2').slideUp();

			imagen_4.src = `${baseurl}assets/img/nosotros/c-4.png`;
			imgMostrada_4 = `${baseurl}assets/img/nosotros/c-4.png`;
			$('#f4').slideUp();
			$('#description_4').slideUp();

		} else {
			imagen_3.src = `${baseurl}assets/img/nosotros/c-3.png`;
			imgMostrada_3 = `${baseurl}assets/img/nosotros/c-3.png`;
			$('#f3').slideUp();
			$('#description_3').slideUp();
		}
	});

	$("#c4").click(function () {
		if (imgMostrada_4 == `${baseurl}assets/img/nosotros/c-4.png`) {
			imagen_4.src = `${baseurl}assets/img/nosotros/cc-4.png`;
			imgMostrada_4 = `${baseurl}assets/img/nosotros/cc-4.png`;
			$('#f4').slideDown();
			$('#description_4').slideDown();

			imagen_1.src = `${baseurl}assets/img/nosotros/c-1.png`;
			imgMostrada_1 = `${baseurl}assets/img/nosotros/c-1.png`;
			$('#f1').slideUp();
			$('#description_1').slideUp();

			imagen_2.src = `${baseurl}assets/img/nosotros/c-2.png`;
			imgMostrada_2 = `${baseurl}assets/img/nosotros/c-2.png`;
			$('#f2').slideUp();
			$('#description_2').slideUp();

			imagen_3.src = `${baseurl}assets/img/nosotros/c-3.png`;
			imgMostrada_3 = `${baseurl}assets/img/nosotros/c-3.png`;
			$('#f3').slideUp();
			$('#description_3').slideUp();

		} else {
			imagen_4.src = `${baseurl}assets/img/nosotros/c-4.png`;
			imgMostrada_4 = `${baseurl}assets/img/nosotros/c-4.png`;
			$('#f4').slideUp();
			$('#description_4').slideUp();
		}
	});

	// ================ Services ====================
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

	// ============== Materiality =================

	$("#operatividad").click(function () {
		$('#desc-operatividad').show('swing');
		$('#desc-seguridad').hide('swing');
		$('#desc-validacionF').hide('swing');
		$('#desc-defensaT').hide('swing');
		$('#desc-prevencion').hide('swing');
	});

	$("#seguridad").click(function () {
		$('#desc-operatividad').hide('swing');
		$('#desc-seguridad').show('swing');
		$('#desc-validacionF').hide('swing');
		$('#desc-defensaT').hide('swing');
		$('#desc-prevencion').hide('swing');
	});

	$("#validacionF").click(function () {
		$('#desc-operatividad').hide('swing');
		$('#desc-seguridad').hide('swing');
		$('#desc-validacionF').show('swing');
		$('#desc-defensaT').hide('swing');
		$('#desc-prevencion').hide('swing');
	});

	$("#defensaT").click(function () {
		$('#desc-operatividad').hide('swing');
		$('#desc-seguridad').hide('swing');
		$('#desc-validacionF').hide('swing');
		$('#desc-defensaT').show('swing');
		$('#desc-prevencion').hide('swing');
	});

	$("#prevencion").click(function () {
		$('#desc-operatividad').hide('swing');
		$('#desc-seguridad').hide('swing');
		$('#desc-validacionF').hide('swing');
		$('#desc-defensaT').hide('swing');
		$('#desc-prevencion').show('swing');
	});

	// $('#desc-operatividad').hide('swing');
	// $('#desc-seguridad').hide('swing');
	// $('#desc-validacionF').hide('swing');
	// $('#desc-defensaT').hide('swing');
	// $('#desc-prevencion').hide('swing');

	// seguridad
	// validacionF
	// defensaT
	// prevencion
	// desc-seguridad
	// desc-validacionF
	// desc-defensaT
	// desc-prevencion

	// =============== Faq's =======================
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
