<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $comprimento = floatval($_POST["Comprimento"]);
        $largura = floatval($_POST["Largura"]);
        $altura = floatval($_POST["Altura"]);
    
    if ($Comprimento == 0 || $Largura == 0 || $Altura ==0) {
            echo "<p style='color: red;'>Erro: os valores inseridos são invalidos.</p>";
    }else{
        $volume = $Comprimento * $Largura * $Altura;
        echo "<h3>Resultado</h3>";
        echo "<p>o volume da caixa é de". number_format($Volume,2);
    }
    }


?>