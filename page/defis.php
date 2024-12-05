<div id="lesDefis">

    <?php
        require_once __DIR__."/./../utils/getDefis.php";
        $defis = getDefis(__DIR__."/./../assets/data/defis.json");

        foreach($defis as $clef => $defi){
            echo "<div class='unDefis close'>";
            echo "<img class='imageDefis' src=$defi[image] alt=$defi[titre]>";
            echo "<div class='unDefisInfo'>";
            echo "</div>";
            echo "</div>";
        }

    ?>

</div>