<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$tanggal = trim($data['tanggal']);
$judul = trim($data['judul']);
$isi = trim($data['isi']);

if ($tanggal != '') {
	if($judul != ''){
		if($isi != ''){
			$query = mysqli_query($con,"insert into logtask(tanggal,judul,isi) values('$tanggal','$judul','$isi')");
		}
	}
}else{
	$query = mysqli_query($con,"delete from task where no='$id'");
}


echo json_encode($pesan);
echo mysqli_error($con);

?>