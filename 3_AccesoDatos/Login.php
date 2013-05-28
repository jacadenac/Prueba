<?
if(isset($SESSION)){
	header("location:../1_InterfazGrafica/html/Inicio.php"); /*va a user.php */
} else {
header("location: ../index.php"); /* va aindex.php*/

} 
?>