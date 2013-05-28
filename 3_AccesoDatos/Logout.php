<? session_start();
if(!isset($_SESSION)){
header('Location:../1_InterfazGrafica/html/Inicio.php');
} else {

$_SESSION["username"] = 0;
session_unset();
session_destroy();
header("location: ../index.php");

}
?>
