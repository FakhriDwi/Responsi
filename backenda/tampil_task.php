<?php 
require 'koneksi.php';
$data = [];
$tgl    =date("Y-m-d");
$query = mysqli_query($con,"select * from task where tanggal='$tgl'");
while ($row = mysqli_fetch_object($query)) {
	$data[] = $row;
}
//tampilkan data dalam bentuk json
echo json_encode($data);
echo mysqli_error($con);

?>