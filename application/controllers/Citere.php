<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Citere extends CI_Controller {

	public function index()
	{
		$data = '';
		$content = $this->load->view('citere_v',$data,TRUE);
		$datos_vista = array('content' => $content);
		$this->load->view('template',$datos_vista);
	}

	public function nosotros()
	{
		$data = '';
		$content = $this->load->view('nosotros_v',$data,TRUE);
		$datos_vista = array('content' => $content);
		$this->load->view('template',$datos_vista);
	}

	public function services()
	{
		$data = '';
		$content = $this->load->view('services_v',$data,TRUE);
		$datos_vista = array('content' => $content);
		$this->load->view('template',$datos_vista);
	}

	public function Materialidad()
	{
		$data = '';
		$content = $this->load->view('materialidad_v',$data,TRUE);
		$datos_vista = array('content' => $content);
		$this->load->view('template',$datos_vista);
	}

	public function Faqs()
	{
		$data = '';
		$content = $this->load->view('faqs_v',$data,TRUE);
		$datos_vista = array('content' => $content);
		$this->load->view('template',$datos_vista);
	}

	public function Publicaciones()
	{
		$data = '';
		$content = $this->load->view('publicaciones_v1',$data,TRUE);
		$datos_vista = array('content' => $content);
		$this->load->view('template',$datos_vista);
	}

	public function politicas_privacidad()
	{
		$data = '';
		$content = $this->load->view('politicas_pv',$data,TRUE);
		$datos_vista = array('content' => $content);
		$this->load->view('template',$datos_vista);
	}

}
