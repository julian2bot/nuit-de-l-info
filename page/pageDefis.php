<?php
    require_once __DIR__."/./../utils/start.php";

    require_once __DIR__."/./../utils/getDefis.php";
    $lesDefis = getDefis(__DIR__."/./../assets/data/defis.json");

    if(isset($_POST["defis"]) && isset($_POST["validation"]) && $_POST["validation"]=='true'){
        $defis = $lesDefis[$_GET["defis"]];
        if($_SESSION["user"]["score"] >= $defis["scoreNecessaire"]){
            incrementScore($defis);
            header("Location:/");
        }
    }

    if(isset($_GET["defis"])){
        $defis = $lesDefis[$_GET["defis"]];
        if($_SESSION["user"]["score"] >= $defis["scoreNecessaire"]){
            pageDefis($defis);
        }
    }
    else{
        header("Location:/");
    }
?>

<?php
    function pageDefis(array $defis){
        echo "<a id='retourHome' href='./defis.php'>Retour</a>";
        echo "<div id='pageDefis'>";
        echo "<h1>Sauvez $defis[corps]</h1>";
        echo "<video controls autoplay>";
        echo "<source src="."./..".$defis["defi"]["video"]." type='video/mp4'></source>";
        echo "</video>";
        echo "<div id='lesTextes'>";
        foreach($defis["defi"]["texte"] as $texte){
            echo "<p>$texte</p>";
        }
        echo "<canvas id='gameCanva'></canvas>";
        echo "<form action='' method='POST'>";
        echo "<input type='hidden' name='defis' value=$_GET[defis]>";
        echo "<input type='hidden' name='validation' value='true'>";
        echo "<div id='divBoutons'></div>";
        echo "<input id='boutonValider' type='submit' value='Valider le défi'>";
        echo "</form>";
        echo "</div>";
    }
?>