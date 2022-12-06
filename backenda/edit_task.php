<?php 
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$pesan = [];
$id = $data['id'];
$tanggal = $data['tanggal'];
$judul = $data['judul'];
$isi = $data['isi'];

$query = mysqli_query($con,"update task set tanggal='$tanggal',judul='$judul',isi='$isi' where id='$id'");

echo json_encode($pesan);
echo mysqli_error($con);


?>