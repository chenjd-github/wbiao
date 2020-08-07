<?php
header("content-type:text/html;charset=utf8");
$i=$_GET['id'];

$link = mysqli_connect('localhost','root','','wanbiao');
mysqli_set_charset($link,'utf8');

$sql="select * from wanbiao where $i";
$result=mysqli_query($link,$sql);

if($row = mysqli_fetch_assoc($result)){
	echo json_encode($row);
}else{
	echo '该数据不存在';
}
?>