<?php
    if($_SERVER["REQUEST_METHOD"] == "POST"){

        $Valor_Produto = floatval($_POST["Valor_Produto"]);
        if($Valor_Produto <= 0){
          echo "<p style='color: red;'>Erro: valor invalido.</p>";

        }
        else{
            echo "<h3> RESULTADO</h3>";
            $Valor_Final = $Valor_Produto*1.16;
            $Valor_Parcela = $Valor_Final/10;
            echo "<p>O valor final a ser pago é igual a </p>". number_format($Valor_Final,2)."<br> <p>dividindo em 10 parcelas, ficara</p> ".number_format($Valor_Parcela,2)."<p> por mês</p>";
        }
    }






?>