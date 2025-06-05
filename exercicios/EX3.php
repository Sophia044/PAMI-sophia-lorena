<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $Base_Maior = floatval($_POST['Base_Maior']);
        $Base_Menor = floatval($_POST['Base_Menor']);
        $Altura = floatval($_POST['Altura']);

        if($Base_Maior == 0||$Base_Menor == 0 || $Altura ==0){
            echo "<p style='color: red;'>Erro: Os valores inseridos são invalidos.</p>";
        }else{
            $Area_Trapezio = ($Base_Maior+$Base_Menor)*$Altura/2;
            echo "<h3>Resultado</h3>";
            echo "<p>A area do trapezio é de ".number_format($Area_Trapezio,2);
        }


    }






?>