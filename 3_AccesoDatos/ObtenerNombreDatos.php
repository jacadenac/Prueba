<?php
  session_start();
  if(!isset($_SESSION))
  {
    header("location:../../3_AccesoDatos/Login.php");
  }
  else
  {
    if(is_null($_SESSION["p1"]))
    {
       header("location:../../3_AccesoDatos/Login.php");
    }
    else
    {
     
        error_reporting(0);
        $p1=$_SESSION["p1"];
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
        $query =   "SELECT * from usuarios where USUARIOS='".$p1."'";
        $sql = "SELECT * from enteros where idusuario='".$p1."' limit 0,30";
        $sql2 = "SELECT * from fraccionarios where idusuario='".$p1."' limit 0,30";
        $sql3 = "SELECT * from decimales where idusuario='".$p1."' limit 0,30";
        $q = mysql_query($query,$con);
   
         try
         {
            if(mysql_result($q,0))
            {  
               $result = mysql_result($q, 0);
               $resultados = mysql_query($sql,$con);
               $resultados2 = mysql_query($sql2,$con);
               $resultados3 = mysql_query($sql3,$con);

               $row = mysql_fetch_array($resultados);
               $row2 = mysql_fetch_array($resultados2);
               $row3 = mysql_fetch_array($resultados3);

               $variableLocal = $_SESSION["p1"];
               
               echo "<div id='usuarioTai'>$variableLocal</div>";
               echo"<div id='nivelEnteros'>".$row["nivel"]."</div>";
               echo"<div id='nivelFraccionarios'>".$row2["nivel"]."</div>";
               echo"<div id='nivelDecimal'>".$row3["nivel"]."</div>";
                
            }
            else
            {

               echo "Usuario No Logeado";
            }
           
         }
         catch(Exception $error)
         {

         }
         mysql_close($con);
    }

  }
?>