<?php
    require_once __DIR__."/./utils/start.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuit de l'info</title>
    <link rel="stylesheet" type="text/css" href="assets/style/meteo.css" />
    <link rel="stylesheet" href="assets/style/style.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./assets/script/defis.js"></script>

</head>

<body id="bodyBase">
    <div  class="ciel weather-box ensoleille" id="weatherDiv">
    <!-- meteo -->
        <p>Météo ensoleillée par défaut...</p>
        <img id="weatherImage" src="assets/images/ensoleille.gif" alt="Ensoleillé">
    
    
        <div class="container">
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
    </div>
    
    <div class="container">
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
    </div>

        
    <div class="container">
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
    </div>

    <div class="container">
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
        <div class="wave-middle"></div>
    </div>
    
</div>

<?php
    if($_SESSION["user"]["firstCo"]){
        echo "<div id='menuMessage'>
            <h1>La mer vous appelle</h1>
            <p>Depuis des millénaires, j'ai nourri, protégé et inspiré le monde. Mes vagues dansent, mes profondeurs murmurent des secrets, et mon souffle porte la vie. Mais aujourd'hui, je suis fatiguée. Mes eaux sont troublées, mes habitants souffrent, et mon équilibre vacille.</p>
            <p>J'ai besoin de vous, explorateurs, rêveurs, protecteurs. Rejoignez-moi. Plongez dans mes courants, réparez mes récifs, sauvez mes créatures. Chaque geste, chaque décision peut m’aider à guérir. Ensemble, nous pouvons redonner à mes vagues leur éclat et à mes chants leur puissance.</p>
            <p>Serez-vous mes alliés dans cette quête ? Entendez mon appel et venez me retrouver.</p>
            <p style='color:blue;'>Clickez pour m'aider</p>
        </div>";

        $_SESSION["user"]["firstCo"] = false;
    }
    else{
        echo "<div id='menuMessage' style='display:none;'>
            <h1>La mer vous appelle</h1>
            <p>Depuis des millénaires, j'ai nourri, protégé et inspiré le monde. Mes vagues dansent, mes profondeurs murmurent des secrets, et mon souffle porte la vie. Mais aujourd'hui, je suis fatiguée. Mes eaux sont troublées, mes habitants souffrent, et mon équilibre vacille.</p>
            <p>J'ai besoin de vous, explorateurs, rêveurs, protecteurs. Rejoignez-moi. Plongez dans mes courants, réparez mes récifs, sauvez mes créatures. Chaque geste, chaque décision peut m’aider à guérir. Ensemble, nous pouvons redonner à mes vagues leur éclat et à mes chants leur puissance.</p>
            <p>Serez-vous mes alliés dans cette quête ? Entendez mon appel et venez me retrouver.</p>
            <p style='color:blue;'>Clickez pour m'aider</p>
        </div>";
    }

    require_once __DIR__."/./page/defis.php";
?>
<script src="assets/script/meteo.js"></script>
</body>
</html>
