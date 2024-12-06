<?php
    require_once __DIR__."/./utils/start.php";
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nuit de l'info</title>
    <link rel="stylesheet" href="assets/style/meteo.css">
    <link rel="stylesheet" href="assets/style/hauteurRegle.css">
    <link rel="stylesheet" href="assets/style/style.css">

</head>

<body style="overflow-x:hidden;">
    <div  class="ciel weather-box ensoleille" id="weatherDiv">
    <!-- meteo -->
        <div id="searchContainer" class="search-container">
            <input type="text" id="cityInput" placeholder="Entrez une ville..." class="hidden">
            <img id="loupe" src="assets/images/loupe.png" alt="recherche-ville">
        </div>
        <p>Chargement de la météo...</p>
        <img id="weatherImage" src="assets/images/ensoleille.gif" alt="Ensoleillé">

        <script src="assets/script/meteo.js"></script>
    
    
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

<div id="rule">
<input type="hidden" id="Score" value="<?php echo $_SESSION["user"]["score"]; ?>">
    <div class="distance-item active">
        <p class="distance">+1.5m</p>
        <div class="triangle"></div>
    </div>
    <div class="distance-item">
        <p class="distance">+1.2m</p>
        <div class="triangle"></div>
    </div>
    <div class="distance-item">
        <p class="distance">+0.9m</p>
        <div class="triangle"></div>
    </div>
    <div class="distance-item">
        <p class="distance">+0.6m</p>
        <div class="triangle"></div>
    </div>
    <div class="distance-item">
        <p class="distance">+0.3m</p>
        <div class="triangle"></div>
    </div>
    <div class="distance-item">
        <p class="distance">0m</p>
        <div class="triangle"></div>
    </div>
</div>


<?php
    require_once __DIR__."/./page/defis.php";
?>
<script src="assets/script/hauteurRegle.js"></script>
</body>
</html>
