<?php
   error_reporting(0);
   $p1=$_GET["p1"];
   $p2=$_GET["p2"];
   //$username = $_POST['username'];
   //$password = $_POST['password'];
   $sesion_login = true;
   function Conectarse()
   {
      if (!($link=mysql_connect('mysql11.000webhost.com', 'a8564413_root', 'abc123')))
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
   $query = "SELECT * FROM usuarios WHERE USUARIOS ='".$p1."' AND password = '".$p2."'";
   $q = mysql_query($query,$con);

   try
   {
      
      if(mysql_result($q,0))
      {  $result = mysql_result($q, 0);
     
        session_start();
        $_SESSION["p1"]=$p1;
       echo "<a href='../1_InterfazGrafica/html/Inicio.php'>Haz clic para iniciar</a>";

       }
      else
      {
         echo "<b>Usuario o Contraseña incorrectos.</b>";
      }
     
   }
   catch(Exception $error){}
   mysql_close($con);
?>

