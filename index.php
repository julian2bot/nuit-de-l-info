<?php
    if(!session_id()){
        session_start();
        // session_destroy();
        session_regenerate_id(true);
    }
    if (! isset($_SESSION["user"])){
        $_SESSION["user"] = [];
        $_SESSION["user"]["score"] = 0;
    }
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

<script src="assets/script/meteo.js"></script>

</body>
</html>


<?php
    require_once __DIR__."/./page/defis.php";
?>
