<?php
   error_reporting(0);

   $tabla = $_COOKIE["preguntaTipo"];
   $usuario = $_GET["usuarioEnviar"];
   $aciertos = $_GET["puntaje"];
   $desaciertos = $_GET["desaciertos"];
   $puntajeEnviar = $_GET["puntajeEnviar"];
   $nivelEnviar = $_GET["nivelEnviar"];
   $tiempoEnviar = $_GET["tiempoEnviar"];
   $sesion_login = true;


   function Conectarse()
   {
      if (!($link=mysql_connect('mysql11.000webhost.com', 'a8564413_root', 'abc123')))
//       if(!($link=mysql_connect("localhost", "root", "")))
      {
         echo "Error conectando a la base de datos.";
         exit();
      }
      if (!mysql_select_db("a8564413_tutorbd",$link))
      {
         echo "Error seleccionando la base de datos.";
         exit();
      }
         return $link;
   }


   
   $con = Conectarse();

   if($tabla == "1"){
       $tabla = "enteros";
   }
   if($tabla == "2"){
       $tabla = "fraccionarios";
   }
   if($tabla == "3"){
       $tabla = "decimales";
   }
   
   $query = "UPDATE ".$tabla." SET nivel = '".$nivelEnviar."' WHERE idusuario = '".$usuario."';";

   
   mysql_query($query, $con) or die ("problema con query");
   header("location:../1_InterfazGrafica/html/Inicio.php");

?>

