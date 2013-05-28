<?php
ini_set('display_errors', 'Off');
ini_set('display_startup_errors', 'Off');
error_reporting(0);
$sesion_login = true;

$p1=$_GET["p1"];
$p2=$_GET["p2"];


if($p1==$p2){

echo "";

}else{


echo "Las contraseñas no coinciden";

}



?>