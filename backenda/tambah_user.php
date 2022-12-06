<?php 
require 'koneksi.php';

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$pesan = [];
$username = trim($data['username']);
$password = trim($data['password']);

if ($username != '' and $password != '') {
	$query = mysqli_query($con,"insert into user(username,password) values('$username',MD5('$password'))");

}else{
	$query = mysqli_query($con,"delete from note where no='$id'");
}


echo json_encode($pesan);
echo mysqli_error($con);

?>