<?php
    function getJson(string $file):array{
        $file = file_get_contents($file);
        return json_decode($file,true);
    }

    function getDefis(string $file):array{
        return getJson($file);
    }

    function incrementScore(array $defis){
        if($defis["scoreNecessaire"] == $_SESSION["user"]["score"]){
            $_SESSION["user"]["score"]++;
        }
    }

    function resetScore(){
        $_SESSION["user"]["score"]=0;
    }
?>