<?php
header("content-type:text/html;charset=utf8");

$link = mysqli_connect("localhost","root","","wanbiao");
mysqli_set_charset($link,'utf8');

$n = $_GET["phone"];
$p = $_GET["pwd"];
$c = $_GET["acptcha"];

$s = "insert into regist values($c,$n,$p)";
$w = "select * from regist where phone='$n' and pass='$p'";

$r = mysqli_query($link,$w);

if(mysqli_fetch_assoc($r)){
	setcookie('login',$c);
	header('location:Registered.html');
}else{
	$u = mysqli_query($link,$s);
	header('location:login.html');
}
?>
