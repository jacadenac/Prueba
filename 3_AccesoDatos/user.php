<? session_start();
if(!isset($_SESSION)){
header("location:Login.php");
} else {
echo $_SESSION["username"];
}
?>