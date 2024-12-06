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
    require_once __DIR__."/./page/defis.php";
?>

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

<img id="imageLyreco" style="height:100px;" src="assets/images/poissons/fishlyreco.png" alt="Image">';

<script src="assets/script/poisson.js"></script>
<script src="assets/script/meteo.js"></script>
</body>
</html>
