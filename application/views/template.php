<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Citere</title>

	<!-- Favicon -->
	<link rel="shortcut icon" href="<?php echo base_url();?>assets/icons/citere.svg">

	<!-- CSS Files -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/main.css">
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/fontawesome.css">

	<!-- Icons -->
	<link rel="stylesheet" href="<?php echo base_url();?>node_modules/boxicons/css/boxicons.css">

	<!-- Fonts -->
	<link rel="preconnect" href="https://fonts.googleapis.com">
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
	<link
		href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600&display=swap"
		rel="stylesheet">

</head>

<body>
	<input type="text" id="baseurl" hidden="true" value="<?php echo base_url();?>">
	<!-- ========= Loading page =========== -->
	<!-- <div class="lds-ellipsis loader" id="loader"><div></div><div></div><div></div><div></div></div> -->
	<!-- <div class="loader" id="loader">
		<img src="<?php echo base_url();?>assets/img/Citere.gif" alt="">
	</div> -->

	<!-- ======= Header ======= -->
	<header>
		<nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
			<div class="container">
				<a class="navbar-brand" href="<?php echo base_url();?>">
					<img class="logo" src="<?php echo base_url();?>assets/icons/citere.svg" alt="">
				</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<div class="mx-auto"></div>
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link text-white"
								href="<?php echo base_url();?>index.php/Citere/nosotros">Nosotros</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white"
								href="<?php echo base_url();?>index.php/Citere/services">Servicios</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="#asesoria_fiscal">Asesoria Fiscal Contable</a></li>
								<li><a class="dropdown-item" href="#auditorias_fiscales">Auditorías Fiscales y
										Dictámenes</a></li>
								<li><a class="dropdown-item" href="#doc_soporte">Documentación Soporte</a></li>
								<li><a class="dropdown-item" href="#razon_negocios">Razón de Negocios</a></li>
								<li><a class="dropdown-item" href="#financiera_pat">Financiera Patrimonial</a></li>
								<li><a class="dropdown-item" href="#compliance">Compliance</a></li>
								<li><a class="dropdown-item" href="#consultoria">Consultoría</a></li>
								<li><a class="dropdown-item" href="#servicios_admin">Servicios Administrativos</a></li>
								<li><a class="dropdown-item" href="#atencion_req">Atención a requerimientos</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white"
								href="<?php echo base_url();?>index.php/Citere/Materialidad">Materialidad</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white"
								href="<?php echo base_url();?>index.php/Citere/Faqs">FAQ'S</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white"
								href="<?php echo base_url();?>index.php/Citere/Publicaciones">Publicaciones</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

		<!-- ======= Social media ======== -->
		<div class="hero-social-media">
			<ul>
				<li>
					<a class="icon-facebook" href="http://" target="_blank">
						<i class='bx bxl-facebook'></i>
					</a>
				</li>
				<li>
					<a class="icon-instagram" href="http://" target="_blank">
						<i class='bx bxl-instagram'></i>
					</a>
				</li>
				<li>
					<a class="icon-linkedin" href="http://" target="_blank">
						<i class='bx bxl-linkedin'></i>
					</a>
				</li>
				<li>
					<a class="icon-twitter" href="http://" target="_blank">
						<i class='bx bxl-twitter'></i>
					</a>
				</li>
				<li>
					<a class="siguenos" href="http://" target="_blank"> Siguenos en </a>
				</li>
			</ul>
		</div>
		<!-- End Social media -->

		<!-- ======= Contact ========= -->
		<img class="contact" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#Modal_Contact"
			src="<?php echo base_url();?>assets/icons/contacto.svg" alt="">
		<div class="modal fade" id="Modal_Contact" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog modal-lg modal-dialog-centered">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<form>
							<div class="mb-3 row">
								<label for="name" class="col-sm-2 col-form-label">Nombre:</label>
								<div class="col-sm-10">
									<input type="text" class="form-control" id="name">
								</div>
							</div>
							<div class="mb-3 row">
								<label for="email" class="col-sm-4 col-form-label">Dirección de e-mail:</label>
								<div class="col-sm-8">
									<input type="email" class="form-control" id="email">
								</div>
							</div>
							<div class="mb-3">
								<label for="message" class="col-sm-2 col-form-label">Mensaje:</label>
							</div>
							<div class="mb-3">
								<textarea name="message" class="form-control" id="message" cols="30"
									rows="5"></textarea>
							</div>
							<div class="mb-3">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="privacy">
									<label class="form-check-label" for="privacy">
										He leído y acepto la <a
											href="<?php echo base_url();?>index.php/Citere/politicas_privacidad"
											target="_blank">política de privacidad</a>.
									</label>
								</div>
							</div>
						</form>
					</div>
					<div class="modal-footer">
						<button type="button" class="btn btn-message">Enviar</button>
					</div>
				</div>
			</div>
		</div>
		<!-- End Contact -->
	</header>
	<!-- End Header -->
	
	<!-- ======= Content ======= -->
	<?php echo $content;?>
	
	<!-- End Content -->

	<script src="<?php echo base_url();?>assets/js/bootstrap.bundle.min.js"></script>
	<script src="<?php echo base_url();?>assets/js/jquery-3.6.0.min.js"></script>
	<script src="<?php echo base_url();?>assets/js/citere.js"></script>
	<!-- <script src="https://www.gstatic.com/charts/loader.js"></script>
	<script src="<?php echo base_url();?>assets/js/charts.js"></script> -->
</body>

</html>
