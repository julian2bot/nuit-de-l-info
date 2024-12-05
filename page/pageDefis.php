<?php
    require_once __DIR__."/./../utils/start.php";

    require_once __DIR__."/./../utils/getDefis.php";
    $lesDefis = getDefis(__DIR__."/./../assets/data/defis.json");

    print_r($_SESSION);
    print_r($_GET);

    if(isset($_GET["defis"])){
        $defis = $lesDefis[$_GET["defis"]];
        if($_SESSION["user"]["score"] >= $defis["scoreNecessaire"]){
            incrementScore($defis);

            // Defis

            header("Location: ../");
        }
    }
    else{
        echo "erreur";
    }
?>