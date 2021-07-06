<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Citere</title>
    
    <!-- CSS Files -->
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/bootstrap.min.css">
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/main.css">
	<link rel="stylesheet" href="<?php echo base_url();?>assets/css/fontawesome.css">
</head>

<body>

    <!-- ======= Header ======= -->
	<header>
		<nav class="navbar fixed-top navbar-expand-lg navbar-dark p-md-3">
			<div class="container">
				<a class="navbar-brand" href="<?php echo base_url();?>">Logotipo</a>
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
					aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarNav">
					<div class="mx-auto"></div>
					<ul class="navbar-nav">
						<li class="nav-item">
							<a class="nav-link text-white" href="<?php echo base_url();?>index.php/Citere/nosotros">Nosotros</a>
						</li>
						<li class="nav-item dropdown">
							<a class="nav-link text-white dropdown-toggle" href="#" id="navbarDropdown" role="button"
								data-bs-toggle="dropdown" aria-expanded="false">
								Servicios
							</a>
							<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
								<li><a class="dropdown-item" href="#">Gastos medicos mayores</a></li>
								<li><a class="dropdown-item" href="#">Seguro de vida</a></li>
								<li><a class="dropdown-item" href="#">Seguro de auto</a></li>
								<li><a class="dropdown-item" href="#">Gastos medicos mayores empresariales</a></li>
								<li><a class="dropdown-item" href="#">Seguro de daños</a></li>
								<li><a class="dropdown-item" href="#">Seguro de autos empresariales</a></li>
								<li><a class="dropdown-item" href="#">Seguro de hogar</a></li>
								<li><a class="dropdown-item" href="#">Finanzas</a></li>
								<li><a class="dropdown-item" href="#">Seguro educativo</a></li>
								<li><a class="dropdown-item" href="#">Seguro para el retiro</a></li>
								<li><a class="dropdown-item" href="#">Seguro de ahorro</a></li>
								<li><a class="dropdown-item" href="#">Seguro de protección</a></li>
							</ul>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" href="#">Materialidad</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" href="#">FAQ'S</a>
						</li>
						<li class="nav-item">
							<a class="nav-link text-white" href="#">Noticias</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>

        <!-- ======= Social media ======== -->
		<div class="hero-social-media">
			<ul>
				<li><a class="icon-facebook" href="http://" target="_blank"><img class="icons-social"
							src="<?php echo base_url();?>assets/img/facebook.svg" /></a></li>
				<li><a class="icon-instagram" href="http://" target="_blank"><img class="icons-social"
							src="<?php echo base_url();?>assets/img/instagram.svg" /></a></li>
				<li><a class="icon-linkedin" href="http://" target="_blank"><img class="icons-social"
							src="<?php echo base_url();?>assets/img/linkedin.svg" /></a></li>
				<li><a class="icon-twitter" href="http://" target="_blank"><img class="icons-social"
							src="<?php echo base_url();?>assets/img/twitter.svg" /></a></li>
				<li><a class="siguenos" href="http://" target="_blank"><img class="icons-social"
							src="<?php echo base_url();?>assets/img/facebook.svg" /></a>
			</ul>
		</div>
        <!-- End Social media -->
		
        <!-- ======= Contact ========= -->
        <img class="contact" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"
			src="<?php echo base_url();?>assets/img/contacto.png" alt="">
		<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div class="modal-dialog">
				<div class="modal-content">
					<div class="modal-header">
						<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div class="modal-body">
						<form>
							<div class="mb-3">
								<label for="name" class="col-form-label">Nombre:</label>
								<input type="text" class="form-control" id="name">
							</div>
							<div class="mb-3">
								<label for="email" class="col-form-label">Dirección de e-mail:</label>
								<input type="text" class="form-control" id="email">
							</div>
							<div class="mb-3">
								<label for="message" class="col-form-label">Mensaje:</label>
								<textarea class="form-control" id="message"></textarea>
							</div>
							<div class="mb-3">
								<div class="form-check">
									<input class="form-check-input" type="checkbox" value="" id="privacy">
									<label class="form-check-label" for="privacy">
										He leído y acepto la política de privacidad.
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

    <!-- ======= content ======= -->
    <?php echo $content;?>
    <!-- End Content -->


	<script src="<?php echo base_url();?>assets/js/bootstrap.bundle.min.js"></script>
</body>

</html>
