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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./assets/script/defis.js"></script>

</head>

<body id="bodyBase">
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


<?php
  for ($i = 0; $i < 5; $i++) {
        echo '<img id="imagetortue' . $i . '" class="movingImage" src="assets/images/poissons/tortue-de-mer.gif" alt="Image">';
        echo '<img id="imagepoisson3' . $i . '" class="movingImage" src="assets/images/poissons/poisson3.gif" alt="Image">';
        echo '<img id="imagepoisson2' . $i . '" class="movingImage" src="assets/images/poissons/poisson2.gif" alt="Image">';
        echo '<img id="imagepoisson' . $i . '" class="movingImage" src="assets/images/poissons/poisson.gif" alt="Image">';
        echo '<img id="imagepoisson-clown' . $i . '" class="movingImage" src="assets/images/poissons/poisson-clown.gif" alt="Image">';
        echo '<img id="imagehippocampe' . $i . '" class="movingImage" src="assets/images/poissons/hippocampe.gif" alt="Image">';
  }
  ?>
<script src="assets/script/poisson.js"></script>
<script src="assets/script/meteo.js"></script>

</body>
</html>
