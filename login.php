<?php
header("content-type:text/html;charset=utf8");

$link = mysqli_connect('localhost','root','','wanbiao');
mysqli_set_charset($link,'utf8');

// 获取手机号码
$t = $_GET['tell'];

$sql = "select * from regist where phone='$t'";
$row = mysqli_query($link,$sql);  //执行sql语句

if(mysqli_fetch_assoc($row)){
	header('location:index.html');
	setcookie('g',$t);    //g代表以注册登录
}else{
	header('location:login.html');
	setcookie('l',$t);    //l代表未注册
}
?>