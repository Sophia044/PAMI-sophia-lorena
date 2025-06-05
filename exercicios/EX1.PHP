 <?php
    if($_SERVER["REQUEST_METHOD"] == "POST") {
        
        $distancia = floatval($_POST["distancia"]);
        $gasolina = floatval($_POST["gasolina"]);

        if ($gasolina <= 0) {
            echo "<p style='color: red;'>Erro: a quantidade de combustível deve ser maior que zero.</p>";
        } else {
            $consumo_medio = $distancia / $gasolina;
            echo "<h3>Resultado:</h3>";
            echo "<p>O consumo médio é de <strong>" . number_format($consumo_medio, 2) . " km/l</strong>.</p>";
        
    }
    }
    ?>
    