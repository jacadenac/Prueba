<?php
ini_set('display_errors', 'Off');
ini_set('display_startup_errors', 'Off');
error_reporting(0);

//$username = $_GET['usernameRegistro'];
//$password = $_GET['passRegistro'];
//$password1 = $_GET['pass2Registro'];

$username = $_GET['p1'];
$password = $_GET['p2'];
$password1 = $_GET['p3'];
$email = $_GET['p4'];

$preguntasTotales = 10;

$nivelFraccionarios  = 1;
$aciertoFraccionarios = 0;
$eficaciaFracc = 0;
$eficienciaFracc = 0;

$nivelDecimales = 1;
$aciertoDecimales = 0;
$eficaciaDecimales = 0;
$eficienciaDecimales = 0;

$nivelNaturales = 1;
$aciertoNaturales = 0;
$eficaciaNaturales = 0;
$eficienciaNaturales = 0;

$numeroVecesJugadas = 0;
$puntajeMaximo1 = 0;
$puntajeMaximo2 = 0;
$puntajeMaximo3 = 0;
$puntajeMaximo4 = 0;
$puntajeMaximo5 = 0;
$puntajeMaximo6 = 0;
$puntajeMaximo7 = 0;
$puntajeMaximo8 = 0;
$puntajeMaximo9 = 0;
$puntajeMaximo10 = 0;

$porcentajeJuego = 0;

//echo $username;
//echo $password;
//echo $password1;
$sesion_login = true;

function Conectarse()
{
   if (!($link=mysql_connect('mysql11.000webhost.com', 'a8564413_root', 'abc123')))
   {
      echo "Estamos en mantenimiento, por favor Intente mas tarde";
      exit();
   }
   if (!mysql_select_db("a8564413_tutorbd",$link))
   {
      echo "Estamos en mantenimiento, intente más tarde";
      exit();
   }
   return $link;
}

$con = Conectarse();

$sql = "INSERT INTO usuarios (usuarios, password, email)
VALUES ('".$username."','".$password."','".$email."')";

$sqlent = "INSERT INTO enteros (idusuario, nivel, tiempototal, tiempotarda, aciertos, preguntas)
    VALUES ('".$username."', 1, 0, 0, 0, 0)";

$sqlfra = "INSERT INTO fraccionarios (idusuario, nivel, tiempototal, tiempotarda, aciertos, preguntas)
    VALUES ('".$username."', 1, 0, 0, 0, 0)";

$sqldec = "INSERT INTO decimales (idusuario, nivel, tiempototal, tiempotarda, aciertos, preguntas)
    VALUES ('".$username."', 1, 0, 0, 0, 0)";

$sqlquery = "SELECT * FROM usuarios WHERE usuarios = '".$username."'";
$q = mysql_query($sqlquery,$con);

try{
if(mysql_result($q,0))
{$result = mysql_result($q, 0);
    echo "<div id='cerrar'>X</div>
          <center><img id='popImg' src='1_InterfazGrafica/imagenes/incorrecto.png' height='370' width='495' border='1'> 
         </center>"  ;
}
else{

  if($password==$password1)
    {
    echo "<div id='cerrar'>X</div>
          <center><img id='popImg' src='1_InterfazGrafica/imagenes/correcto.png' height='370' width='495' border='1'> 
         </center>"  ;

    $result = mysql_query($sql, $con);

    mysql_query($sqlent,$con);
    mysql_query($sqlfra,$con);
    mysql_query($sqldec,$con);
    }
    else
    {
    echo "Los campos de contraseña no coinciden";
    }
    
}
}catch(Exception $error){}
mysql_close($con);

?>