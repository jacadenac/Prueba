<?php
ini_set('display_errors', 'Off');
ini_set('display_startup_errors', 'Off');
error_reporting(0);
$sesion_login = true;

$q=$_GET["q"];


$con = mysql_connect('mysql11.000webhost.com', 'a8564413_root', 'abc123');
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }

mysql_select_db("a8564413_tutorbd", $con);

$sqlquery="SELECT * FROM usuarios WHERE USUARIOS = '".$q."'";
$q1 = mysql_query($sqlquery,$con);
$posicion = strrpos($q, ' ');

try{
    if(mysql_result($q1,0))
    {
        $result = mysql_result($q1, 0);
        echo "Ya existe un nombre de usuario por favor elija otro";
    }
    else
    {
        
      if(strlen($q)<5)
      {
         echo "Usuario tiene que ser mayor a 5 caracteres";
         
      }
      else
       {

          if ($posicion == true) 
         {
              echo "Usuario no puede tener espacios";
         }
          else
         {
              echo "Usuario Disponible";
         }
        
       }

        
    }
    }catch(Exception $error){}
    mysql_close($con);
?>