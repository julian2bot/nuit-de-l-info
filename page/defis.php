<?php
    print_r($_SESSION);
    echo "<a href='./page/resetPoint.php'>Reset Point</a>";

    echo "<p id='leScore'>".$_SESSION["user"]["score"]."</p>";
    
?>

<div id="lesDefis">

    <?php
        require_once __DIR__."/./../utils/getDefis.php";
        $defis = getDefis(__DIR__."/./../assets/data/defis.json");

        foreach($defis as $clef => $defi){
            if($defi["scoreNecessaire"] <= $_SESSION["user"]["score"]){
                echo "<div class='unDefis close available'>";
            }
            else{
                echo "<div class='unDefis close'>";
            }
            echo "<img class='imageDefis' src=$defi[image] alt=$defi[titre]>";

            echo "<div class='unDefisInfoCourte'>";
            echo "<h2>$defi[titre]</h2>";
            echo "<h3>$defi[corps]</h3>";
            if($defi["scoreNecessaire"] > $_SESSION["user"]["score"]){
                echo "<p>Score nécessaire : $defi[scoreNecessaire]</p>";
            }
            echo "</div>";

            
            echo "<div class='unDefisInfo'>";
            echo "<h2>$defi[titre]</h2>";
            echo "<h3>$defi[corps]</h3>";
            echo "<p>$defi[description]</p>";
            echo "<a href=$defi[lien]>";
            echo "<input type='submit' value=$defi[texteBouton]>";
            echo "</a>";
            echo "</div>";
            echo "</div>";
        }

    ?>

</div>