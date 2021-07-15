<!-- ========= Loading page =========== -->
	<!-- <div class="lds-ellipsis loader" id="loader"><div></div><div></div><div></div><div></div></div> -->
	<div class="loader" id="loader">
		<img src="<?php echo base_url();?>assets/img/Citere.gif" alt="">
	</div>
	
<div class="hero">
    <div class="hero-video">
        <video onloadedmetadata="this.muted=true" autoplay loop>
            <source src="<?php echo base_url();?>assets/video.mp4">
        </video>
    </div>

	<div class="hero-content">
		<img class="img-citere" src="<?php echo base_url();?>assets/icons/ccitere.svg" alt="">
        <p>2021 © | Citere es una marca registrada de Citere S.C. | Derechos Reservados | Aviso de
		privacidad</p>
	</div>

    <!-- <div class="hero-carousel"></div> -->
	<!-- carousell -->
	<div id="carouselExampleDark" class="hero-carousel carousel carousel-dark slide" data-bs-ride="carousel">
		<div class="carousel-indicators">
			<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
				aria-current="true" aria-label="Slide 1"></button>
			<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
				aria-label="Slide 2"></button>
			<button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
				aria-label="Slide 3"></button>
		</div>
		<div class="carousel-inner">
			<div class="carousel-item active" data-bs-interval="10000">
				<!-- <img src="<?php echo base_url();?>assets/icons/carousel-1.svg" class="d-block w-1" alt="..." width="100px"> -->
				<div class="carousel-caption d-none d-md-block">
					<h5>First slide label</h5>
					<p>Some representative placeholder content for the first slide.</p>
				</div>
			</div>
			<div class="carousel-item" data-bs-interval="2000">
				<!-- <img src="<?php echo base_url();?>assets/icons/carousel-2.svg" class="d-block w-10" alt="..." width="2px"> -->
				<div class="carousel-caption d-none d-md-block">
					<h5>Second slide label</h5>
					<p>Some representative placeholder content for the second slide.</p>
				</div>
			</div>
			<div class="carousel-item">
				<!-- <img src="<?php echo base_url();?>assets/img/twitter.svg" class="d-block w-1" alt="..." width="50px"> -->
				<div class="carousel-caption d-none d-md-block">
					<h5>Third slide label</h5>
					<p>Some representative placeholder content for the third slide.</p>
				</div>
			</div>
		</div>
	</div>	
</div>
