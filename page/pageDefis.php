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
    // require_once __DIR__."/./../utils/start.php";

    require_once __DIR__."/./../utils/getDefis.php";
    $lesDefis = getDefis(__DIR__."/./../assets/data/defis.json");

    if(isset($_POST["defis"]) && isset($_POST["validation"]) && $_POST["validation"]=='true'){
        $defis = $lesDefis[$_GET["defis"]];
        if($_SESSION["user"]["score"] >= $defis["scoreNecessaire"]){
            incrementScore($defis);
            // Defis
            header("Location: ./../");
            
            exit;
        }
    }



    if(isset($_GET["defis"])){
        $defis = $lesDefis[$_GET["defis"]];
        if($_SESSION["user"]["score"] >= $defis["scoreNecessaire"]){
            echo '
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link rel="stylesheet" href="../assets\style\style.css">
                <script src="https://cdn.jsdelivr.net/npm/phaser@3.11.0/dist/phaser.js"></script>
                <title>Nuit de l\'info</title>
            </head>
            ';
            ob_start(); // Active un buffer de sortie pour éviter l'envoi involontaire d'en-têtes
            pageDefis($defis);
            ob_end_flush(); // Vide le buffer et envoie la sortie
        }
    }
    else{
        header("Location: ./../");
        exit;
    }
?>


<?php
    function pageDefis(array $defis){
        echo "<body>";
        echo "<a id='retourHome' href='./../'>Retour</a>";
        echo "<div id='pageDefis'>";
        echo "<h1>Sauvez $defis[corps]</h1>";
        // echo "<video controls autoplay>";
        // // echo "<source src="."./..".$defis["defi"]["video"]." type='video/mp4'></source>";
        // echo "<source src=".$defis["defi"]["video"]." type='video/mp4'></source>";
        // echo "</video>";

        echo '<iframe 
            width="560" 
            height="315" 
            src="'.$defis["defi"]["video"].'" 
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>';

        echo "<div id='lesTextes'>";
        foreach($defis["defi"]["texte"] as $texte){
            echo "<p>$texte</p>";
        }
        echo "</div>";

        echo "<form action='' method='POST'>";
        echo "<input type='hidden' name='defis' value=$_GET[defis]>";
        echo "<input type='hidden' name='validation' value='true'>";
        echo "<div id='divBoutons'></div>";
        echo "<input id='boutonValider' type='submit' value='Valider le défi' disabled>";
        echo "</form>";
        echo "</div>";
        echo "</body>";
        echo "<script src="."./..".$defis["defi"]["script"]."></script>";
    }
?>