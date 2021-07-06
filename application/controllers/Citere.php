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

	public function nosotros(){
		$data = '';
		$content = $this->load->view('nosotros_v',$data,TRUE);
		$datos_vista = array('content' => $content);
		$this->load->view('template',$datos_vista);
	}

}
